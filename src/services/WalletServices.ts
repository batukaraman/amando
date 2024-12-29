import Web3 from "web3";
import CryptoJS from "crypto-js";
import bip39 from "bip39";
import HDKey from "hdkey";
import bcrypt from "bcryptjs";
import axios from "axios";

declare global {
  interface Window {
    ethereum: any;
    BinanceChain: any;
  }
}

const ERC20_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
  },
];

interface TokenPrice {
  [address: string]: {
    usd: number;
  };
}

interface TokenAsset {
  tokenAddress: string;
  tokenSymbol: string;
  balance: string;
  price: number;
  totalValue: string;
}

interface WalletAssets {
  ethBalance: string;
  tokens: TokenAsset[];
}

export interface CreateWalletInput {
  recoveryPhrase: string;
  password: string;
}

export interface CreateWalletResult {
  success: boolean;
  walletInfo?: WalletInfo;
  error?: string;
}

export interface WalletInfo {
  address: string;
  privateKey: string;
  encryptedPrivateKey: string;
  encryptedRecoveryPhrase: string;
  hashedPassword: string;
}

interface AccessRecoveryPhraseResult {
  success: boolean;
  recoveryPhrase?: string;
  error?: string;
}

interface SimulateTransactionInput {
  from: string;
  to: string;
  value: string;
  gas?: number;
  maxPriorityFeePerGas?: string;
  maxFeePerGas?: string;
  privateKey: string;
}

interface SimulateTransactionResult {
  success: boolean;
  signedTransaction?: string;
  error?: string;
}

export interface ImportWalletResult {
  success: boolean;
  address?: string;
  error?: string;
}

const connectMetaMask = async (): Promise<string | null> => {
  try {
    const providers = await Web3.requestEIP6963Providers();
    for (const [key, value] of providers) {
      if (
        (value.provider as any).isMetaMask ||
        value.info.name === "MetaMask"
      ) {
        const web3 = new Web3(value.provider);
        const accounts = (await value.provider.request({
          method: "eth_requestAccounts",
        })) as string[];
        console.log("Connected with MetaMask");
        return accounts[0];
      }
    }
    throw new Error("MetaMask provider not found");
  } catch (err) {
    console.error(
      "Failed to connect MetaMask: ",
      err instanceof Error ? err.message : err
    );
    return null;
  }
};

const connectTrustWallet = async (): Promise<string | null> => {
  try {
    const providers = await Web3.requestEIP6963Providers();
    for (const [key, value] of providers) {
      if (
        (value.provider as any).isTrustWallet ||
        value.info.name === "Trust Wallet"
      ) {
        const web3 = new Web3(value.provider);
        const accounts = (await value.provider.request({
          method: "eth_requestAccounts",
        })) as string[];
        console.log("Connected with Trust Wallet");
        return accounts[0];
      }
    }
    throw new Error("Trust Wallet provider not found");
  } catch (err) {
    console.error(
      "Failed to connect Trust Wallet: ",
      err instanceof Error ? err.message : err
    );
    return null;
  }
};

const connectBinanceWallet = async (): Promise<string | null> => {
  if (window.BinanceChain && window.BinanceChain.isConnected) {
    try {
      const web3 = new Web3(window.BinanceChain);
      await window.BinanceChain.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      console.log("Connected with BNB Smart Chain");
      return accounts[0];
    } catch (err) {
      console.error(
        "Failed to connect Binance Wallet: ",
        err instanceof Error ? err.message : err
      );
      return null;
    }
  } else {
    console.error("Binance Wallet is not installed.");
    return null;
  }
};

const connectCoinbaseWallet = async (): Promise<string | null> => {
  try {
    const providers = await Web3.requestEIP6963Providers();
    for (const [key, value] of providers) {
      if (
        (value.provider as any).isCoinbaseWallet ||
        value.info.name === "Coinbase Wallet"
      ) {
        const web3 = new Web3(value.provider);
        const accounts = (await value.provider.request({
          method: "eth_requestAccounts",
        })) as string[];
        console.log("Connected with Coinbase Wallet");
        return accounts[0];
      }
    }
    throw new Error("Coinbase Wallet provider not found");
  } catch (err) {
    console.error(
      "Failed to connect Coinbase Wallet: ",
      err instanceof Error ? err.message : err
    );
    return null;
  }
};

export const connectWallet = {
  MetaMask: connectMetaMask,
  TrustWallet: connectTrustWallet,
  BinanceWallet: connectBinanceWallet,
  CoinbaseWallet: connectCoinbaseWallet,
};

export const createWallet = async (
  input: CreateWalletInput
): Promise<CreateWalletResult> => {
  const { recoveryPhrase, password } = input;

  try {
    const seed = bip39.mnemonicToSeedSync(recoveryPhrase);
    const hdwallet = HDKey.fromMasterSeed(seed);
    const key = hdwallet.derive("m/44'/60'/0'/0/0");

    const privateKey = key.privateKey;
    if (!privateKey) {
      throw new Error("Failed to derive private key.");
    }

    const privateKeyHex = privateKey.toString("hex");

    const web3 = new Web3();
    const account = web3.eth.accounts.privateKeyToAccount("0x" + privateKeyHex);

    const encryptedPrivateKey = CryptoJS.AES.encrypt(
      account.privateKey,
      password
    ).toString();

    const encryptedRecoveryPhrase = CryptoJS.AES.encrypt(
      recoveryPhrase,
      password
    ).toString();

    const hashedPassword = await bcrypt.hash(password, 10);

    return {
      success: true,
      walletInfo: {
        address: account.address,
        privateKey: account.privateKey,
        encryptedPrivateKey,
        encryptedRecoveryPhrase,
        hashedPassword,
      },
    };
  } catch (err) {
    console.error(
      "Failed to create wallet:",
      err instanceof Error ? err.message : err
    );
    return {
      success: false,
      error: err instanceof Error ? err.message : "An unknown error occurred.",
    };
  }
};

const importWalletWithPrivateKey = async (
  privateKey: string | null
): Promise<ImportWalletResult> => {
  try {
    if (!privateKey) {
      throw new Error("Private key is required.");
    }

    let formattedPrivateKey = privateKey.startsWith("0x")
      ? privateKey
      : "0x" + privateKey;

    const web3 = new Web3();
    const account = web3.eth.accounts.privateKeyToAccount(formattedPrivateKey);

    console.log("Imported Wallet Address with Private Key:", account.address);

    return {
      success: true,
      address: account.address,
    };
  } catch (err) {
    console.error(
      "Failed to import wallet:",
      err instanceof Error ? err.message : err
    );
    return {
      success: false,
      error: err instanceof Error ? err.message : "An unknown error occurred.",
    };
  }
};

const importWalletWithRecoveryPhrase = async (
  recoveryPhrase: string | null
): Promise<ImportWalletResult> => {
  try {
    if (!recoveryPhrase) {
      throw new Error("Recovery phrase is required.");
    }

    if (!bip39.validateMnemonic(recoveryPhrase)) {
      throw new Error("Invalid recovery phrase.");
    }

    const seed = bip39.mnemonicToSeedSync(recoveryPhrase);
    const hdwallet = HDKey.fromMasterSeed(seed);
    const key = hdwallet.derive("m/44'/60'/0'/0/0");
    const privateKey = key.privateKey;
    if (!privateKey) {
      throw new Error("Failed to derive private key.");
    }

    const privateKeyHex = privateKey.toString("hex");

    const web3 = new Web3();
    const account = web3.eth.accounts.privateKeyToAccount("0x" + privateKeyHex);

    console.log(
      "Imported Wallet Address with Recovery Phrase:",
      account.address
    );

    return {
      success: true,
      address: account.address,
    };
  } catch (err) {
    console.error(
      "Failed to import wallet:",
      err instanceof Error ? err.message : err
    );
    return {
      success: false,
      error: err instanceof Error ? err.message : "An unknown error occurred.",
    };
  }
};

const importWalletWithAddress = async (
  address: string | null
): Promise<ImportWalletResult> => {
  try {
    if (!address) {
      throw new Error("Address is required.");
    }

    if (!Web3.utils.isAddress(address)) {
      throw new Error("Invalid address.");
    }

    console.log("Imported Wallet Address:", address);

    return {
      success: true,
      address,
    };
  } catch (err) {
    console.error(
      "Failed to import wallet:",
      err instanceof Error ? err.message : err
    );
    return {
      success: false,
      error: err instanceof Error ? err.message : "An unknown error occurred.",
    };
  }
};

export const importWallet = {
  Address: importWalletWithAddress,
  RecoveryPhrase: importWalletWithRecoveryPhrase,
  PrivateKey: importWalletWithPrivateKey,
};

export const accessRecoveryPhrase = async (
  password: string
): Promise<AccessRecoveryPhraseResult> => {
  try {
    const storedHashedPassword = sessionStorage.getItem("hashedPassword");
    const encryptedRecoveryPhrase = sessionStorage.getItem(
      "encryptedRecoveryPhrase"
    );

    if (!storedHashedPassword || !encryptedRecoveryPhrase) {
      return { success: false, error: "Stored data is missing." };
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      storedHashedPassword
    );
    if (!isPasswordCorrect) {
      return { success: false, error: "Incorrect password!" };
    }

    const bytesRecoveryPhrase = CryptoJS.AES.decrypt(
      encryptedRecoveryPhrase,
      password
    );
    const decryptedRecoveryPhrase = bytesRecoveryPhrase.toString(
      CryptoJS.enc.Utf8
    );

    if (!decryptedRecoveryPhrase) {
      return { success: false, error: "Decryption failed." };
    }

    return { success: true, recoveryPhrase: decryptedRecoveryPhrase };
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
};

export const simulateTransaction = async (
  input: SimulateTransactionInput
): Promise<SimulateTransactionResult> => {
  try {
    const web3 = new Web3();

    const tx = {
      from: input.from,
      to: input.to,
      value: input.value,
      gas: input.gas || 21000,
      maxPriorityFeePerGas:
        input.maxPriorityFeePerGas || web3.utils.toWei("2", "gwei"),
      maxFeePerGas: input.maxFeePerGas || web3.utils.toWei("50", "gwei"),
    };

    const signedTx = await web3.eth.accounts.signTransaction(
      tx,
      input.privateKey
    );

    console.log("Simulated Signed Transaction:", signedTx?.rawTransaction);

    return {
      success: true,
      signedTransaction: signedTx?.rawTransaction || "",
    };
  } catch (error) {
    console.error(
      "Simulation failed:",
      error instanceof Error ? error.message : error
    );

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred.",
    };
  }
};

export const getWalletBalance = async (address: string): Promise<string> => {
  if (!Web3.utils.isAddress(address)) {
    throw new Error("Geçersiz adres.");
  }

  const web3 = new Web3(
    `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
  );

  try {
    const balanceWei = await web3.eth.getBalance(address);

    const balanceEther = web3.utils.fromWei(balanceWei, "ether");

    return balanceEther;
  } catch (error) {
    console.error("Hata oluştu:", error);
    throw new Error("Bakiyeyi sorgularken bir hata oluştu.");
  }
};

const getTokenPrices = async (
  tokenAddresses: string[]
): Promise<TokenPrice> => {
  const prices: TokenPrice = {};

  try {
    for (const address of tokenAddresses) {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${address.toLowerCase()}&vs_currencies=usd`
      );
      prices[address.toLowerCase()] = response.data[address.toLowerCase()];
    }
    return prices;
  } catch (error) {
    console.error("Fiyat verisi alınırken bir hata oluştu:", error);
    throw new Error("Fiyat verisi alınırken bir hata oluştu.");
  }
};

export const getWalletAssetsWithPrice = async (
  address: string,
  tokenAddresses: string[]
): Promise<WalletAssets> => {
  const web3 = new Web3(
    `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
  );
  const assets: WalletAssets = {
    ethBalance: "0",
    tokens: [],
  };

  try {
    const ethBalanceWei = await web3.eth.getBalance(address);
    assets.ethBalance = web3.utils.fromWei(ethBalanceWei, "ether");

    const tokenPrices = await getTokenPrices(tokenAddresses);

    for (const tokenAddress of tokenAddresses) {
      const tokenContract = new web3.eth.Contract(ERC20_ABI, tokenAddress);
      const tokenBalance = await tokenContract.methods
        .balanceOf(address)
        .call();

      const tokenSymbol = tokenContract.methods.symbol
        ? await tokenContract.methods.symbol().call()
        : "Unknown";

      const balanceInEther = web3.utils.fromWei(tokenBalance, "ether");

      const tokenPrice = tokenPrices[tokenAddress.toLowerCase()]?.usd || 0;

      assets.tokens.push({
        tokenAddress,
        tokenSymbol,
        balance: balanceInEther,
        price: tokenPrice,
        totalValue: (parseFloat(balanceInEther) * tokenPrice).toFixed(2),
      });
    }

    return assets;
  } catch (error) {
    console.error("Hata oluştu:", error);
    throw new Error("Varlıkları sorgularken bir hata oluştu.");
  }
};

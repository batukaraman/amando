import React, { useState } from "react";
import Modal from "./Modal";
import AM from "@/icons/coin/AM";
import Metamask from "@/icons/wallet/Metamask";
import Binance from "@/icons/wallet/Binance";
import Trust from "@/icons/wallet/Trust";
import Coinbase from "@/icons/wallet/Coinbase";
import { connectWallet } from "@/services/WalletServices";
import { useSelector, useDispatch } from "react-redux";
import { setWallet } from "@/store/walletSlice";
import { RootState } from "@/store";
import useToggle from "@/hooks/useToggle";

type ItemType = {
  name: string;
  connector: () => Promise<string | null>;
  Icon: React.FC<{ size?: number }>;
};

const Item: React.FC<ItemType> = ({ name, connector, Icon }) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { handleClose } = useToggle({
    id: "modal-connect-wallet",
  });

  const wallet = useSelector((state: RootState) => state.wallet);
  const dispatch = useDispatch();

  const handleConnectWallet = async () => {
    setError(null);
    setLoading(true);
    try {
      const connectedAccount = await connector();
      if (connectedAccount) {
        dispatch(setWallet({ name, address: connectedAccount }));
        handleClose();
      } else {
        setError(`Failed to connect to ${name}.`);
      }
    } catch (err) {
      console.error(err);
      setError(`An error occurred while connecting to ${name}.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={() => {
        handleConnectWallet();
      }}
      className="flex items-center gap-4 p-4 hover:bg-zinc-900 rounded-xl transition-colors"
    >
      <Icon size={40} />
      <span className="text-lg font-bold">{name}</span>
      {loading && <span className="ml-2">Loading...</span>}
      {wallet && wallet.name === name && (
        <span className="ml-2 text-green-500">Connected!</span>
      )}
      {error && <span className="ml-2 text-red-500">Failed!</span>}
    </button>
  );
};

export default function ConnectWalletModal() {
  const items: ItemType[] = [
    {
      name: "MetaMask",
      connector: connectWallet.MetaMask,
      Icon: Metamask,
    },
    {
      name: "Binance Wallet",
      connector: connectWallet.BinanceWallet,
      Icon: Binance,
    },
    {
      name: "Trust Wallet",
      connector: connectWallet.TrustWallet,
      Icon: Trust,
    },
    {
      name: "Coinbase Wallet",
      connector: connectWallet.CoinbaseWallet,
      Icon: Coinbase,
    },
  ];

  return (
    <Modal id="modal-connect-wallet">
      <div className="flex flex-col gap-6">
        <span className="text-2xl font-bold">Connect to a wallet</span>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => console.log("Amando Wallet Connected!")}
            className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl"
          >
            <AM size={40} />
            <span className="text-lg font-bold text-primary6">
              Amando Wallet
            </span>
          </button>
          <span className="border-t border-gray-800"></span>
          <div className="flex flex-col gap-2">
            {items.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

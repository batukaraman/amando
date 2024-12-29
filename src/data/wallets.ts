import AM from "@/icons/coin/AM";
import ATOM from "@/icons/coin/ATOM";
import BNB from "@/icons/coin/BNB";
import ETH from "@/icons/coin/ETH";
import STELLA from "@/icons/coin/STELLA";
import TEZOS from "@/icons/coin/TEZOS";
import XRP from "@/icons/coin/XRP";

export interface IWallet {
    id: string;
    name: string;
    Icon: React.FC<{ size?: number }>;
}

const wallets: IWallet[] = [
    {
    id: "am",
    name: "Amando Multi-Coin Wallet",
    Icon: AM,
  },
  {
    id: "bnb",
    name: "BNB Smart Chain",
    Icon: BNB,
  },
  {
    id: "eth",
    name: "Ethereum",
    Icon: ETH,
  },
  {
    id: "stella",
    name: "Stellar",
    Icon: STELLA,
  },
  {
    id: "xrp",
    name: "XRP",
    Icon: XRP,
  },
  {
    id: "atom",
    name: "Cosmos",
    Icon: ATOM,
  },
  {
    id: "tezos",
    name: "Tezos",
    Icon: TEZOS,
  },
];

export default wallets 
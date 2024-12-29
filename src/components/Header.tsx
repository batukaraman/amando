import { JSX } from "react";
import Social from "./Social";
import Bell from "@/icons/Bell";
import ReactCountryFlag from "react-country-flag";
import ThemeSwich from "./ThemeSwich";
import ConnectWalletModal from "./ConnectWalletModal";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import WalletConnectButton from "./WalletConnectButton";

export default function Header(): JSX.Element {
  const wallet = useSelector((state: RootState) => state.wallet);

  return (
    <header className="flex items-center justify-between py-4 px-10">
      <Social />
      <div className="flex items-center gap-4">
        <button>
          <Bell size={32} />
        </button>
        <WalletConnectButton address={wallet.address} />
        <span className="self-stretch border-l border-gray-800"></span>
        <ThemeSwich />
        <button>
          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{ height: "1.2em", width: "2em" }}
          />
        </button>
      </div>
      <ConnectWalletModal />
    </header>
  );
}

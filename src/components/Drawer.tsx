import { JSX } from "react";
import { Logo } from "./Logo";
import MenuItem from "./MenuItem";
import Home from "@/icons/Home";
import Wallet from "@/icons/Wallet";
import DEX from "@/icons/DEX";
import Pool from "@/icons/Pool";
import Farm from "@/icons/Farm";
import Jungle from "@/icons/Jungle";
import IPO from "@/icons/IPO";
import TradeDeal from "./TradeDeal";

export default function Drawer(): JSX.Element {
  return (
    <div
      className={`w-64 min-h-screen h-full overflow-hidden bg-gray-50 dark:bg-[#141414]
                transition-transform transform flex flex-col justify-between`}
    >
      <div className="flex flex-col gap-6">
        <Logo withName />
        <nav className="flex flex-col gap-4 px-4">
          <MenuItem text="Home" Icon={Home} href="/" />
          <MenuItem text="Wallet" Icon={Wallet} href="/wallet" />
          <MenuItem text="DEX" Icon={DEX} href="/dex" />
          <MenuItem text="Pool" Icon={Pool} href="/pool" />
          <MenuItem text="Farm" Icon={Farm} href="/farm" />
          <MenuItem text="Jungle" Icon={Jungle} href="/Jungle" />
          <MenuItem text="IPO" Icon={IPO} href="/ipo" />
        </nav>
      </div>
      <div className="p-6 mb-6">
        <TradeDeal />
      </div>
    </div>
  );
}

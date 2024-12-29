"use client";

import BalanceCard from "@/components/BalanceCard";
import BannerCard from "@/components/BannerCard";
import FarmCard from "@/components/FarmCard";
import StakeCard from "@/components/StakeCard";
import { getWalletAssetsWithPrice } from "@/services/WalletServices";
import { JSX, useEffect } from "react";

export default function Home(): JSX.Element {
  useEffect(() => {
    const getBalance = async () =>
      await getWalletAssetsWithPrice(
        "0xfe956C28916349a9ED02961aCD19F413bB0E72Ce",
        [
          "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI Token kontrat adresi
          "0xA0b86991c6218b36c1d19D4A2e9eb0CE3606eB48", // USDC Token kontrat adresi
        ]
      );
    getBalance().then((res) => console.log(res));
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-3 gap-10">
        <BalanceCard />
        <BannerCard />
        <BannerCard />
      </div>
      <div className="grid grid-cols-3 gap-10">
        <StakeCard />
        <StakeCard />
        <StakeCard />
      </div>
      <div className="flex flex-col gap-6">
        <span className="text-xl font-bold">Top Farms</span>
        <div className="grid grid-cols-4 gap-10">
          <FarmCard />
          <FarmCard />
          <FarmCard />
          <FarmCard />
        </div>
      </div>
    </div>
  );
}

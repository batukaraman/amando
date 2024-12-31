"use client";

import BalanceCard from "@/components/BalanceCard";
import BannerCard from "@/components/BannerCard";
import FarmCard from "@/components/FarmCard";
import StakeCard from "@/components/StakeCard";
import { JSX } from "react";

export default function Home(): JSX.Element {
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

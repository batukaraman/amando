import AM from "@/icons/coin/AM";
import React from "react";
import Button from "./Button";
import USDC from "@/icons/coin/USDC";

export default function FarmCard() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-black/5 dark:bg-white/5 rounded-xl">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div className="flex -space-x-4 overflow-hidden">
            <AM size={40} />
            <USDC size={40} />
          </div>
          <span className="text-xs text-primary6 bg-primary6/20 rounded-full py-1 px-2">
            HOT
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl font-bold">AM-USDC</span>
          <span className="text-sm text-gray-500">Liquidity $3,611.823</span>
        </div>
      </div>
      <span className="bg-gradient2 text-transparent bg-clip-text text-2xl font-extrabold">
        425.85% APR
      </span>
      <Button text="Farm" size="lg" />
    </div>
  );
}

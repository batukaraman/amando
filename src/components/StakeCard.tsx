import React from "react";
import Button from "./Button";

export default function StakeCard() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-black/5 dark:bg-white/5 rounded-xl">
      <div className="flex flex-col gap-4">
        <span className="text-base font-bold">Stake AM token to Earn WBNB</span>
        <span className="text-4xl font-black leading-none bg-gradient1 text-transparent bg-clip-text">
          122.63% APR
        </span>
      </div>
      <Button text="Start Jungle" size="lg" variant="secondary" />
    </div>
  );
}

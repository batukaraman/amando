import { JSX } from "react";
import Button from "./Button";
import AM from "@/icons/coin/AM";

export default function BannerCard(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-2 items-center p-6 bg-black/5 dark:bg-white/5 bg-banner bg-right bg-no-repeat bg-half rounded-xl">
      <div className="flex flex-col items-start gap-4">
        <span className="text-xs font-bold">
          Stake your AM in exchange for even more tokens
        </span>
        <Button text="Star Earning Crypto" size="xs" />
      </div>
      <div className="flex flex-col gap-4 px-6 py-4 rounded-lg bg-black/5 dark:bg-white/5 shadow-sm">
        <div className="flex gap-1 items-center">
          <AM />
          <span className="text-base font-bold leading-none">Earn AM</span>
        </div>
        <span className="text-base font-bold text-primary5">396.44% APR</span>
      </div>
    </div>
  );
}

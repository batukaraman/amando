"use client";

import { AiOutlineEye } from "react-icons/ai";
import { JSX, useEffect, useState } from "react";
import { getWalletBalance } from "@/services/WalletServices";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function BalanceCard(): JSX.Element {
  const [balance, setBalance] = useState<number | null>(null);
  const wallet = useSelector((state: RootState) => state.wallet);

  useEffect(() => {
    if (wallet.address) {
      const getBalance = async () =>
        await getWalletBalance("0xcaBFcebd15A1138E3aC80249F6807905d2c0973f"); // wallet.address
      getBalance().then((res) => setBalance(parseFloat(res)));
    }
  }, [wallet.address]);

  return (
    <div className="flex flex-col gap-2 p-6 bg-black/5 dark:bg-white/5 rounded-xl">
      <div className="flex items-center gap-2">
        <span className="text-base font-bold">Balance</span>
        <AiOutlineEye />
      </div>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-black leading-none bg-gradient3 text-transparent bg-clip-text">
          {balance ? balance.toFixed(2) : "0.00"}
        </span>
        <span className="text-base leading-nones">AM</span>
      </div>
    </div>
  );
}

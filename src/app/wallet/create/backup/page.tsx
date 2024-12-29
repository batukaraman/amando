"use client";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Shield from "@/icons/Shield";
import { useRouter } from "next/navigation";
import { setIsUnderstand } from "@/store/walletCreateSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useEffect } from "react";

export default function Backup() {
  const { isUnderstand, password } = useSelector(
    (state: RootState) => state.walletCreate
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleCheckboxChange = (checked: boolean) => {
    dispatch(setIsUnderstand(checked));
  };

  useEffect(() => {
    if (!password) {
      router.push("/wallet/create");
    }
  }, []);

  if (!password) return null;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-16 w-full max-w-3xl mx-auto pt-20">
        <div className="flex items-center text-center flex-col gap-2">
          <span className="text-2xl font-bold">Back Up Your Wallet</span>
          <span className="text-sm text-gray-500 max-w-xs">
            In the next step you will see 12 words that allows you to recover a
            wallet
          </span>
        </div>
        <Shield size={192} />
        <div className="flex flex-col gap-6 self-stretch">
          <Checkbox
            label="I understand that if i lose my recovery words, I will not be able to access my wallet"
            id="understand"
            checked={isUnderstand}
            onChange={handleCheckboxChange}
          />
          <Button
            text="Next"
            size="xl"
            disable={!isUnderstand}
            onClick={() => router.push("/wallet/create/backup/confirm")}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import Alert from "@/components/Alert";
import Button from "@/components/Button";
import SeedItem from "@/components/SeedItem";
import Copy from "@/icons/Copy";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import CopyCheck from "@/icons/CopyCheck";
import Refresh from "@/icons/Refresh";
import { setRecoveryPhrase } from "@/store/walletCreateSlice";

export default function Confirm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { recoveryPhrase, password, isUnderstand } = useSelector(
    (state: RootState) => state.walletCreate
  );

  useEffect(() => {
    dispatch(setRecoveryPhrase());
  }, [dispatch]);

  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const handleCopy = () => {
    if (recoveryPhrase) {
      copyToClipboard(recoveryPhrase);
    }
  };

  useEffect(() => {
    if (!password) {
      router.push("/wallet/create");
    }
    if (!isUnderstand) {
      router.push("/wallet/create/backup");
    }
  }, []);

  if (!password || !isUnderstand) return null;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-16 w-full max-w-3xl mx-auto pt-20">
        <div className="flex items-center text-center flex-col gap-2">
          <span className="text-2xl font-bold">Confirm Your Seed Phrase</span>
          <span className="text-sm text-gray-500 max-w-xs">
            Write down or copy these words in the right order and save them
            somewhere safe.
          </span>
        </div>
        <div className="flex flex-col items-center gap-8 self-stretch">
          <div className="w-md grid grid-cols-4 gap-4">
            {recoveryPhrase &&
              recoveryPhrase
                .split(" ")
                .map((word, index) => (
                  <SeedItem
                    key={index}
                    index={index + 1}
                    label={word}
                    onlyShow
                  />
                ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              text="Refresh"
              onClick={() => dispatch(setRecoveryPhrase())}
              Icon={Refresh}
              size="lg"
              variant="secondary"
            />
            <Button
              text={isCopied ? "Copied!" : "Copy"}
              onClick={handleCopy}
              Icon={isCopied ? CopyCheck : Copy}
              size="lg"
              variant="secondary"
            />
          </div>
          <Alert
            title="Never share recovery phrase with anyone, store it securely!"
            variant="warning"
          />
          <Button
            text="Next"
            size="xl"
            classNames="self-stretch"
            onClick={() => router.push("/wallet/create/backup/confirm/verify")}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import Button from "@/components/Button";
import SeedItem from "@/components/SeedItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import FeedbackModal from "@/components/FeedbackModal";
import useToggle from "@/hooks/useToggle";
import { useEffect, useState } from "react";
import {
  reset,
  setPassword,
  setVerificationIndices,
  verifyMnemonic,
} from "@/store/walletCreateSlice";
import { createWallet } from "@/services/WalletServices";
import { setWallet, clearWallet } from "@/store/walletSlice";

export default function Verify() {
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    password,
    verificationIndices,
    isVerified,
    recoveryPhrase,
    selectedWords,
    shuffledRecoveryPhrase,
    isUnderstand,
  } = useSelector((state: RootState) => state.walletCreate);

  const { handleOpen } = useToggle({
    id: "modal-feedback",
    onClose: () => {
      if (isVerified) {
        router.push("/wallet");
        dispatch(reset());
      }
    },
    onOpen: () => {
      setFeedbackMessage(
        isVerified ? "Verification Successful!" : "Verification Failed!"
      );
    },
  });

  const handleVerify = () => {
    dispatch(verifyMnemonic());
    handleOpen();
  };

  useEffect(() => {
    const handleWalletCreation = async () => {
      if (isVerified && recoveryPhrase && password) {
        try {
          const result = await createWallet({ recoveryPhrase, password });
          // console.log("Wallet created:", wallet);
          if (result.walletInfo?.address) {
            dispatch(
              setWallet({
                name: "Amando Wallet",
                address: result.walletInfo?.address,
              })
            );
          }
        } catch (err) {
          console.error("Failed to create wallet:", err);
        }
      }
    };

    handleWalletCreation();
  }, [isVerified]);

  useEffect(() => {
    dispatch(setVerificationIndices({ size: 4, range: 12 }));
  }, [dispatch]);

  useEffect(() => {
    if (!password) {
      router.push("/wallet/create");
    }
    if (!isUnderstand) {
      router.push("/wallet/create/backup");
    }
    if (!recoveryPhrase) {
      router.push("/wallet/create/backup/confirm");
    }
  }, []);

  if (!password || !isUnderstand || !recoveryPhrase) return null;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-16 w-full max-w-3xl mx-auto pt-20">
        <div className="flex items-center text-center flex-col gap-2">
          <span className="text-2xl font-bold">Verify Recovery Phrase</span>
          <span className="text-sm text-gray-500 max-w-xs">
            Select each word in the order it was presented to you
          </span>
        </div>

        <div className="flex flex-col gap-16">
          <div className="w-md grid grid-cols-4 gap-4">
            {verificationIndices.map((i, idx) => (
              <SeedItem
                key={i}
                index={i + 1}
                label={selectedWords[idx]}
                onlyShow
              />
            ))}
          </div>
          <div className="w-md grid grid-cols-4 gap-4">
            {shuffledRecoveryPhrase.map((value, index) => (
              <SeedItem key={index} index={index + 1} label={value} verifing />
            ))}
          </div>
        </div>

        <Button
          text="Next"
          size="xl"
          onClick={handleVerify}
          classNames="self-stretch"
          disable={selectedWords.length < verificationIndices.length}
        />
      </div>
      <FeedbackModal message={feedbackMessage} success={isVerified} />
    </div>
  );
}

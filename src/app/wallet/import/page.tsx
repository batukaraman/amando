"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import wallets, { IWallet } from "@/data/wallets";
import WalletSearch from "@/components/WalletSearch";
import Tab from "@/components/Tab";
import PhraseForm, {
  FormData as PhraseFormData,
} from "@/components/PhraseForm";
import PrivateKeyForm, {
  FormData as PrivateKeyFormData,
} from "@/components/PrivateKeyForm";
import AddressForm, {
  FormData as AddressFormData,
} from "@/components/AddressForm";
import FeedbackModal from "@/components/FeedbackModal";
import useToggle from "@/hooks/useToggle";
import { importWallet } from "@/services/WalletServices";
import { useSelector, useDispatch } from "react-redux";
import { setWallet, clearWallet } from "@/store/walletSlice";

export default function Import() {
  const [data, setData] = useState<
    PhraseFormData | PrivateKeyFormData | AddressFormData | null
  >(null);
  const [walletID, setWalletID] = useState<IWallet | null | "loading">(
    "loading"
  );
  const searchParams = useSearchParams();

  const router = useRouter();
  const dispatch = useDispatch();

  const { handleOpen } = useToggle({
    id: "modal-feedback",
    onClose: () => {
      if (data) {
        router.push("/wallet");
      }
    },
  });

  useEffect(() => {
    const walletId = searchParams.get("walletid");
    const foundWallet = wallets.find((w) => w.id === walletId) || null;
    setWalletID(foundWallet);
  }, [searchParams]);

  if (walletID === "loading") {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const onSubmit = async (
    data: PhraseFormData | PrivateKeyFormData | AddressFormData
  ) => {
    try {
      let result;

      switch (data.type) {
        case "phrase":
          result = await importWallet.RecoveryPhrase(data.recoveryPhrase);
          // console.log("Recovery Phrase import result:", result);
          break;

        case "privateKey":
          result = await importWallet.PrivateKey(data.privateKey);
          // console.log("Private Key import result:", result);
          break;

        case "address":
          result = await importWallet.Address(data.address);
          // console.log("Address import result:", result);
          break;

        default:
          throw new Error("Unknown form type");
      }

      if (result.address) {
        dispatch(setWallet({ name: data.name, address: result.address }));
      }

      handleOpen();
      setData(data);
    } catch (error) {
      console.error(
        "Error during form submission:",
        error instanceof Error ? error.message : error
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-16 w-full max-w-3xl mx-auto pt-14">
        <div className="text-center flex flex-col items-center gap-6">
          {walletID && <walletID.Icon size={48} />}
          <span className="text-2xl font-bold">
            {walletID ? `Import ${walletID.name}` : "Import Wallet"}
          </span>
        </div>

        {!walletID ? (
          <WalletSearch />
        ) : (
          <div>
            <Tab
              items={[
                { name: "Phrase", element: <PhraseForm onSubmit={onSubmit} /> },
                {
                  name: "Private Key",
                  element: <PrivateKeyForm onSubmit={onSubmit} />,
                },
                {
                  name: "Address",
                  element: <AddressForm onSubmit={onSubmit} />,
                },
              ]}
            />
          </div>
        )}
      </div>
      <FeedbackModal message={"Successfully Import"} success />
    </div>
  );
}

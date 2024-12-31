import { truncateAddress } from "@/utils/format";
import Button from "./Button";
import Avatar from "@/icons/Avatar";
import useToggle from "@/hooks/useToggle";

export default function WalletConnectButton({
  address,
}: {
  address: string | null;
}) {
  const { handleOpen } = useToggle({ id: "modal-connect-wallet" });

  if (address) {
    return (
      <Button
        text={truncateAddress(address)}
        variant="secondary"
        Icon={Avatar}
        iconPosition="right"
        onClick={handleOpen}
      />
    );
  }

  return (
    <Button
      text="Connect Wallet"
      size="md"
      variant="primary"
      onClick={handleOpen}
    />
  );
}

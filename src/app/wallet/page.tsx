import Button from "@/components/Button";

export default function Wallet() {
  return (
    <div className="flex flex-col gap-16 w-full max-w-3xl mx-auto pt-20">
      <div className="flex text-center flex-col gap-2">
        <span className="text-2xl font-bold">Welcome To Amando Wallet</span>
        <span className="text-sm text-gray-500">
          Secure and trusted multi-chain crypto wallet
        </span>
      </div>
      <div className="flex flex-col gap-6">
        <Button href="/wallet/create" text="Create A Wallet" size="xl" />
        <Button
          href="/wallet/import"
          text="I Already Have a Wallet"
          variant="secondary"
          size="xl"
        />
      </div>
    </div>
  );
}

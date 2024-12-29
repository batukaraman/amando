import wallets from "@/data/wallets";
import ArrowRight from "@/icons/ArrowRight";
import AM from "@/icons/coin/AM";
import Search from "@/icons/Search";
import Link from "next/link";

const WalletSearch: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex items-center gap-2 px-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl focus-within:ring-1 focus-within:ring-zinc-800 dark:focus-within:ring-zinc-600">
        <input
          type="search"
          id="query"
          placeholder="Search"
          className="peer w-full bg-transparent focus:outline-none py-5 px-4"
        />
        <Search />
      </div>
      <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl py-4">
        <div className="max-h-[calc(72px*5)] overflow-y-auto pr-2 pl-4">
          {wallets.map(({ id, name, Icon }) => (
            <Link
              href={{
                pathname: "/wallet/import",
                query: { walletid: id },
              }}
              className={`flex items-center gap-2 py-4 ${
                id === "am" && "border-b border-zinc-800"
              }`}
              key={id}
            >
              <Icon size={40} />
              <span className="flex-1">{name}</span>
              <ArrowRight size={24} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletSearch;

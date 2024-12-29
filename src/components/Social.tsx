import { JSX } from "react";
import Link from "next/link";
import Twitter from "@/icons/Twitter";
import Telegram from "@/icons/Telegram";
import Facebook from "@/icons/Facebook";
import Reddit from "@/icons/Reddit";
import Youtube from "@/icons/Youtube";
import { IconProps } from "@/icons/type";

const links = [
  { href: "#", Icon: Twitter },
  { href: "#", Icon: Telegram },
  { href: "#", Icon: Facebook },
  { href: "#", Icon: Reddit },
  { href: "#", Icon: Youtube },
];

type ItemProps = {
  href: string;
  Icon: React.FC<IconProps>;
};

const Item: React.FC<ItemProps> = ({ href, Icon }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:text-primary7 transition-colors"
    >
      <Icon size={24} />
    </Link>
  );
};

export default function Social(): JSX.Element {
  return (
    <div className="flex gap-4">
      {links.map((link, index) => (
        <Item key={index} href={link.href} Icon={link.Icon} />
      ))}
    </div>
  );
}

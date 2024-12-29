"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItem({
  text,
  Icon,
  href,
  ...rest
}: {
  text: string;
  Icon: React.FC;
  href: string;
}) {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 py-3 px-6 rounded-xl cursor-pointer ${
        isActive
          ? "text-primary6 bg-[#1F1F1F]"
          : "hover:bg-[#1F1F1F] hover:text-white"
      } transition-colors`}
      {...rest}
    >
      <Icon />
      <span className="text-sm font-bold">{text}</span>
    </Link>
  );
}

"use client";

import { usePathname, useRouter } from "next/navigation";
import ArrowLeft from "@/icons/ArrowLeft";
import Link from "next/link";
import React from "react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const router = useRouter();

  const segmentTitleMap: Record<string, string> = {
    wallet: "Wallet",
    create: "Create a New Wallet",
    backup: "Back Up Your Wallet",
    confirm: "Confirm Your Seed Phrase",
    verify: "Verify Recovery Phrase",
    import: "Import Wallet",
  };

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length <= 1) {
    return null;
  }

  const breadcrumbItems = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const title = segmentTitleMap[segment] || segment;

    const isLast = index === segments.length - 1;

    return (
      <React.Fragment key={href}>
        {index > 0 && <span className="text-gray-400">/</span>}
        <span className="breadcrumb-item">
          {isLast ? (
            <span>{title}</span>
          ) : (
            <Link href={href} className="text-gray-400 hover:underline">
              {title}
            </Link>
          )}
        </span>
      </React.Fragment>
    );
  });

  return (
    <div className="flex items-center gap-4 px-10">
      <button
        onClick={() => router.back()}
        className="bg-zinc-800 p-1 rounded-lg text-primary6"
      >
        <ArrowLeft size={18} />
      </button>

      <div className="flex items-center gap-1 text-sm font-medium">
        {breadcrumbItems}
      </div>
    </div>
  );
}

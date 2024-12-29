"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Button from "./Button";
import Moon from "@/icons/Moon";
import Sun from "@/icons/Sun";

export default function ThemeSwich() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      size="md"
      variant="secondary"
      onlyIcon
      Icon={resolvedTheme === "dark" ? Moon : Sun}
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    />
  );
}

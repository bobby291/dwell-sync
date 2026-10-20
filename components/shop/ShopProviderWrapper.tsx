
"use client";

import type { ReactNode } from "react";
import { ShopProvider } from "@/context/ShopContext";

export default function ShopProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <ShopProvider>{children}</ShopProvider>;
}

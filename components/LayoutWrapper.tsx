"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function Layoutwrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  const hideLayout =
  pathname == "/" || 
  pathname == "/onboarding";

  return (
    <>
      <body className="min-h-full flex flex-col">
        {!hideLayout && <Navbar /> }
        <main>
          {children}
        </main>
        {!hideLayout && <Footer /> }
      </body>
    </>
  );
}

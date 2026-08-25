"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="fixed inset-0 z-[9999] h-screen w-screen overflow-hidden bg-[#0B0B16]">
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src="/images/Logo_Dwell.png"
          alt="dwellSync"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="select-none object-contain object-center"
        />
      </div>
    </main>
  );
}
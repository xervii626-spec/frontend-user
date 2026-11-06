"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

/** If already logged in, skip login → /games */
export function GuestOnly({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { accessToken, hydrated } = useAppSelector((s) => s.auth);

  useEffect(() => {
    if (!hydrated) return;
    if (accessToken) {
      router.replace("/games");
    }
  }, [hydrated, accessToken, router]);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]">
        Loading…
      </div>
    );
  }

  if (accessToken) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]">
        Redirecting…
      </div>
    );
  }

  return <>{children}</>;
}

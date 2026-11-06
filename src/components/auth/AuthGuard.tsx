"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

/** Protect player routes — redirect to /login when no token */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { accessToken, hydrated } = useAppSelector((s) => s.auth);

  useEffect(() => {
    if (!hydrated) return;
    if (!accessToken) {
      router.replace("/login");
    }
  }, [hydrated, accessToken, router]);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]">
        Loading…
      </div>
    );
  }

  if (!accessToken) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]">
        Redirecting to login…
      </div>
    );
  }

  return <>{children}</>;
}

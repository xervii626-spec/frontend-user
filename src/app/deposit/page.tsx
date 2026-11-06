"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { LobbyHeader } from "@/components/lobby/LobbyHeader";
import {
  DepositWorkspace,
  type DepositMainTab,
} from "@/components/deposit/DepositWorkspace";
import { useLobbyLogout } from "@/hooks/useLobbyLogout";
import { useMeQuery } from "@/store/api/authApi";
import { useGetRateQuery } from "@/store/api/paymentsApi";

export default function DepositPage() {
  return (
    <AuthGuard>
      <Suspense fallback={<DepositLoading />}>
        <DepositView />
      </Suspense>
    </AuthGuard>
  );
}

function DepositView() {
  const onLogout = useLobbyLogout();
  const search = useSearchParams();
  const { data: me } = useMeQuery();
  const { data: rateData } = useGetRateQuery();

  const tabParam = search.get("tab");
  const initialTab: DepositMainTab =
    tabParam === "withdraw" || tabParam === "history" ? tabParam : "deposit";

  return (
    <div className="min-h-screen w-full bg-[#01100b] text-[#f5efe0]">
      <LobbyHeader
        active="deposit"
        balanceUsd={me?.balance?.realBalance ?? "0"}
        mmkPerUsd={rateData?.mmkPerUsd ?? "4500"}
        onLogout={onLogout}
      />

      <main className="w-full px-3 pb-6 pt-4 sm:px-4 lg:px-5">
        <DepositWorkspace
          balanceUsd={me?.balance?.realBalance ?? "0"}
          mmkPerUsd={rateData?.mmkPerUsd ?? "4500"}
          initialTab={initialTab}
        />
      </main>
    </div>
  );
}

function DepositLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#01100b] text-[#d4af37]">
      Loading…
    </div>
  );
}

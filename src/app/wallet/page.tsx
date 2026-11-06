"use client";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { LobbyHeader } from "@/components/lobby/LobbyHeader";
import { WalletOverview } from "@/components/wallet/WalletOverview";
import { useLobbyLogout } from "@/hooks/useLobbyLogout";
import { useMeQuery } from "@/store/api/authApi";
import { useGetMyPaymentsQuery, useGetRateQuery } from "@/store/api/paymentsApi";

export default function WalletPage() {
  return (
    <AuthGuard>
      <WalletView />
    </AuthGuard>
  );
}

function WalletView() {
  const onLogout = useLobbyLogout();
  const { data: me } = useMeQuery();
  const { data: rateData } = useGetRateQuery();
  const { data: paymentsData, isFetching } = useGetMyPaymentsQuery({
    page: 1,
    limit: 20,
  });

  return (
    <div className="min-h-screen w-full bg-[#01100b] text-[#f5efe0]">
      <LobbyHeader
        active="wallet"
        balanceUsd={me?.balance?.realBalance ?? "0"}
        mmkPerUsd={rateData?.mmkPerUsd ?? "4500"}
        onLogout={onLogout}
      />

      <main className="w-full px-3 pb-6 pt-5 sm:px-4 lg:px-5">
        <WalletOverview
          balanceUsd={me?.balance?.realBalance ?? "0"}
          mmkPerUsd={rateData?.mmkPerUsd ?? "4500"}
          payments={paymentsData?.items ?? []}
          loading={isFetching && !paymentsData}
        />
      </main>
    </div>
  );
}

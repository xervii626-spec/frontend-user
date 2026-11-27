"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { LobbyHeader } from "@/components/lobby/LobbyHeader";
import {
  CategorySearchBar,
  type LobbyCategory,
} from "@/components/lobby/CategorySearchBar";
import { GameGrid } from "@/components/lobby/GameGrid";
import { QuestsClaimBox } from "@/components/lobby/QuestsClaimBox";
import { AnnouncementBox } from "@/components/lobby/AnnouncementBox";
import { AdsBanner } from "@/components/lobby/AdsBanner";
import { DailyLoginClaimModal } from "@/components/lobby/DailyLoginClaimModal";
import { FaqChatWidget } from "@/components/chat/FaqChatWidget";
import { useLobbyLogout } from "@/hooks/useLobbyLogout";
import { useMeQuery } from "@/store/api/authApi";
import { useGetGamesQuery, type LobbyGame } from "@/store/api/gamesApi";
import { useGetRateQuery } from "@/store/api/paymentsApi";

export default function GamesPage() {
  return (
    <AuthGuard>
      <LobbyPage />
    </AuthGuard>
  );
}

function LobbyPage() {
  const router = useRouter();
  const onLogout = useLobbyLogout();
  const [category, setCategory] = useState<LobbyCategory>("slots");
  const [search, setSearch] = useState("");

  const { data: me } = useMeQuery();
  const { data: rateData } = useGetRateQuery();
  const { data: gamesData, isFetching } = useGetGamesQuery({
    // CMS getGames rejects higher limits (e.g. 48 → status -1, empty list)
    limit: 30,
    offset: 0,
    search: search.trim() || undefined,
  });

  const filtered = useMemo(() => {
    const list = gamesData?.games ?? [];
    const q = search.trim().toLowerCase();
    return list.filter((g) => {
      const matchSearch =
        !q ||
        g.title.toLowerCase().includes(q) ||
        g.subtitle.toLowerCase().includes(q);

      if (gamesData?.fromFallback) {
        return g.category === category && matchSearch;
      }

      if (category === "slots") return matchSearch;
      return g.category === category && matchSearch;
    });
  }, [gamesData, category, search]);

  function onPlay(game: LobbyGame) {
    if (gamesData?.fromFallback) return;
    const mode = game.funMode ? "fun" : "real";
    const params = new URLSearchParams({
      gameId: game.id,
      title: game.title,
      mode,
    });
    router.push(`/play?${params.toString()}`);
  }

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_50%_0%,#062218_0%,#01100b_42%,#010c08_100%)] text-[#f5efe0]">
      <LobbyHeader
        active="games"
        balanceUsd={me?.balance?.realBalance ?? "0"}
        mmkPerUsd={rateData?.mmkPerUsd ?? "4500"}
        onLogout={onLogout}
      />

      <main className="w-full px-3 pb-5 pt-4 sm:px-4 lg:px-5">
        <AdsBanner />
        <AnnouncementBox />
        <QuestsClaimBox />

        <CategorySearchBar
          category={category}
          search={search}
          onCategoryChange={setCategory}
          onSearchChange={setSearch}
        />

        {gamesData?.fromFallback ? (
          <div className="mt-4 rounded-lg border border-[#d4af37]/40 bg-[rgba(120,90,20,0.18)] px-4 py-3 text-[0.85rem] text-[#e8c547]">
            Provider CMS returned 0 games for this partner. Showing preview
            lobby cards until games are enabled. Play launch is disabled.
          </div>
        ) : null}

        <div className="mt-3">
          <GameGrid
            games={filtered}
            loading={isFetching && !gamesData}
            onPlay={gamesData?.fromFallback ? undefined : onPlay}
          />
        </div>
      </main>
      <FaqChatWidget />
      <DailyLoginClaimModal />
    </div>
  );
}

"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useLobbyLogout } from "@/hooks/useLobbyLogout";
import { useMeQuery } from "@/store/api/authApi";
import { useLaunchGameMutation } from "@/store/api/launchApi";
import { useGetRateQuery } from "@/store/api/paymentsApi";
import { formatMmk, formatUsd } from "@/lib/money-format";

export default function PlayPage() {
  return (
    <AuthGuard>
      <Suspense fallback={<PlayShell message="Loading game…" />}>
        <PlayView />
      </Suspense>
    </AuthGuard>
  );
}

function PlayView() {
  const router = useRouter();
  const search = useSearchParams();
  const onLogout = useLobbyLogout();
  const { data: me } = useMeQuery();
  const { data: rateData } = useGetRateQuery();
  const [launchGame, { isLoading }] = useLaunchGameMutation();

  const gameId = search.get("gameId") ?? "";
  const title = search.get("title") ?? "Casino Game";
  const initialMode = (search.get("mode") === "real" ? "real" : "fun") as
    | "real"
    | "fun";

  const [mode, setMode] = useState<"real" | "fun">(initialMode);
  const [launchUrl, setLaunchUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const balanceUsd = me?.balance?.realBalance ?? "0";
  const mmkPerUsd = rateData?.mmkPerUsd ?? "4500";

  const origin = useMemo(() => {
    if (typeof window === "undefined") return "http://localhost:3003";
    return window.location.origin;
  }, []);

  useEffect(() => {
    const idNum = Number(gameId);
    if (!gameId || Number.isNaN(idNum) || idNum < 1) {
      setError("Invalid game id.");
      return;
    }

    let cancelled = false;
    setError(null);
    setLaunchUrl(null);

    (async () => {
      try {
        const res = await launchGame({
          gameId: idNum,
          openType: mode,
          language: "en",
          deviceTypeId: 1,
          exitUrl: `${origin}/games`,
          depositUrl: `${origin}/deposit`,
        }).unwrap();
        if (!cancelled) setLaunchUrl(res.launchUrl);
      } catch (err) {
        if (!cancelled) setError(extractError(err));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [gameId, mode, launchGame, origin]);

  return (
    <div className="flex min-h-screen flex-col bg-[#01100b] text-[#f5efe0]">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d4af37]/20 px-3 py-3 sm:px-4">
        <div className="min-w-0">
          <p className="truncate text-[1.05rem] font-bold text-white">{title}</p>
          <p className="text-[0.75rem] text-[#9a9280]">
            Mode: {mode === "real" ? "Real money" : "Fun / demo"} · ID {gameId}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="rounded-lg border border-[#d4af37]/40 bg-[#02150f] px-3 py-1.5 text-[0.82rem]">
            <span className="text-[#9a9280]">Balance </span>
            <span className="font-semibold text-white">
              {formatUsd(balanceUsd)} USD
            </span>
            <span className="mx-1 text-[#d4af37]">=</span>
            <span className="font-semibold text-[#e8c547]">
              {formatMmk(balanceUsd, mmkPerUsd)} MMK
            </span>
          </div>

          <div className="flex rounded-lg border border-[#d4af37]/35 p-0.5">
            <ModeBtn
              active={mode === "fun"}
              onClick={() => setMode("fun")}
              label="Fun"
            />
            <ModeBtn
              active={mode === "real"}
              onClick={() => setMode("real")}
              label="Real"
            />
          </div>

          <Link
            href="/games"
            className="rounded-lg border border-[#d4af37]/45 px-3 py-2 text-[0.8rem] font-semibold text-[#e8c547] hover:bg-[#d4af37]/10"
          >
            Lobby
          </Link>
          <button
            type="button"
            onClick={onLogout}
            className="rounded-lg border border-[#d4af37]/35 px-3 py-2 text-[0.8rem] font-semibold text-[#c5bba3] hover:text-[#e8c547]"
          >
            Log out
          </button>
        </div>
      </header>

      <main className="relative flex-1">
        {error ? (
          <div className="mx-auto max-w-lg px-4 py-16 text-center">
            <p className="text-[1.1rem] font-semibold text-[#ff8f8f]">{error}</p>
            <p className="mt-2 text-sm text-[#9a9280]">
              If the game UI opens but bets fail, Provider wallet callback may
              still need registration.
            </p>
            <button
              type="button"
              onClick={() => router.push("/games")}
              className="mt-5 rounded-lg bg-[#d4af37] px-4 py-2.5 text-sm font-bold text-[#1a1205]"
            >
              Back to Games
            </button>
          </div>
        ) : isLoading || !launchUrl ? (
          <PlayShell message="Launching game…" />
        ) : (
          <iframe
            title={title}
            src={launchUrl}
            className="absolute inset-0 h-full w-full border-0 bg-black"
            allow="autoplay; fullscreen; payment"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </main>
    </div>
  );
}

function ModeBtn({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-[0.78rem] font-semibold ${
        active
          ? "bg-[#d4af37] text-[#1a1205]"
          : "text-[#c5bba3] hover:text-[#e8c547]"
      }`}
    >
      {label}
    </button>
  );
}

function PlayShell({ message }: { message: string }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center text-[#d4af37]">
      {message}
    </div>
  );
}

function extractError(err: unknown): string {
  if (err && typeof err === "object" && "data" in err) {
    const data = (err as { data?: { message?: unknown } }).data;
    const message = data?.message;
    if (Array.isArray(message)) return message.join(", ");
    if (typeof message === "string" && message.trim()) return message;
  }
  return "Could not launch game.";
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatMmk } from "@/lib/money-format";

export type NavKey = "games" | "wallet" | "deposit";

type LobbyHeaderProps = {
  active?: NavKey;
  balanceUsd?: string;
  mmkPerUsd?: string;
  onLogout?: () => void;
};

const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: "games", label: "Games", href: "/games" },
  { key: "wallet", label: "Wallet", href: "/wallet" },
  { key: "deposit", label: "Deposit", href: "/deposit" },
];

export function LobbyHeader({
  active = "games",
  balanceUsd = "0",
  mmkPerUsd = "4500",
  onLogout,
}: LobbyHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const mmk = formatMmk(balanceUsd, mmkPerUsd);

  return (
    <header className="w-full border-b border-[#d4af37]/20 bg-[linear-gradient(180deg,#021a12_0%,#01100b_100%)]">
      <div className="relative flex h-[84px] w-full items-center justify-between gap-3 px-3 sm:h-[96px] sm:px-4 lg:px-5">
        <Link href="/games" className="flex shrink-0 items-center gap-3 sm:gap-3.5">
          <span className="relative inline-flex">
            <span
              className="absolute inset-0 rounded-full bg-[#d4af37]/30 blur-lg"
              aria-hidden
            />
            <Image
              src="/brand/sd-logo-circle.jpg"
              alt="Shwe Dunn"
              width={64}
              height={64}
              className="relative h-14 w-14 rounded-full border-2 border-[#d4af37]/60 object-cover shadow-[0_0_24px_rgba(212,175,55,0.35)] sm:h-16 sm:w-16"
              priority
            />
          </span>
          <p className="font-[family-name:var(--font-cinzel)] text-[1.35rem] font-semibold tracking-[0.12em] text-[#e8c547] sm:text-[1.7rem] lg:text-[1.85rem]">
            SHWE DUNN
          </p>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-11">
          {NAV.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative pb-1.5 font-[family-name:var(--font-cinzel)] text-[1.15rem] font-semibold tracking-[0.06em] transition lg:text-[1.3rem] ${
                  isActive
                    ? "text-[#e8c547]"
                    : "text-[#d8d0bc] hover:text-[#e8c547]"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span
                    className="absolute inset-x-0 -bottom-0.5 h-[3px] rounded-full bg-[#d4af37]"
                    aria-hidden
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <div className="flex items-center gap-2.5 rounded-full bg-[linear-gradient(180deg,#f0d78c_0%,#d4af37_55%,#b8922a_100%)] px-4 py-2.5 shadow-[0_8px_24px_rgba(212,175,55,0.32)] sm:px-5 sm:py-3">
            <p className="text-[1.05rem] font-extrabold tabular-nums tracking-wide text-[#1a1205] sm:text-[1.2rem]">
              {hidden ? "••••" : `${mmk} MMK`}
            </p>
            <button
              type="button"
              aria-label={hidden ? "Show balance" : "Hide balance"}
              onClick={() => setHidden((v) => !v)}
              className="text-[#1a1205]/80 hover:text-[#1a1205]"
            >
              <EyeIcon open={!hidden} />
            </button>
          </div>

          {onLogout ? (
            <button
              type="button"
              onClick={onLogout}
              className="hidden rounded-full border border-[#d4af37]/45 px-4 py-2.5 text-[0.85rem] font-semibold tracking-[0.06em] text-[#e8c547] transition hover:border-[#d4af37] hover:bg-[#d4af37]/10 sm:inline-flex"
            >
              Log out
            </button>
          ) : null}
        </div>
      </div>

      <nav className="flex items-center justify-center gap-7 border-t border-[#d4af37]/12 px-3 py-3 md:hidden">
        {NAV.map((item) => {
          const isActive = item.key === active;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`relative pb-1 font-[family-name:var(--font-cinzel)] text-[1.05rem] font-semibold tracking-[0.05em] ${
                isActive ? "text-[#e8c547]" : "text-[#c5bba3]"
              }`}
            >
              {item.label}
              {isActive ? (
                <span
                  className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-[#d4af37]"
                  aria-hidden
                />
              ) : null}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden
      >
        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
      <path d="m4 4 16 16" />
    </svg>
  );
}

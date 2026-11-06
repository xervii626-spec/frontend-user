"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatMmk, formatUsd } from "@/lib/money-format";

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
  const usd = formatUsd(balanceUsd);
  const mmk = formatMmk(balanceUsd, mmkPerUsd);

  return (
    <header className="w-full border-b border-[#d4af37]/15 bg-[#01100b]">
      <div className="relative flex h-[76px] w-full items-center justify-between gap-3 px-3 sm:h-[84px] sm:px-4 lg:px-5">
        <Link href="/games" className="flex shrink-0 items-center gap-3">
          <Image
            src="/brand/lotus-mark.jpg"
            alt="Shwe Dunn"
            width={46}
            height={46}
            className="rounded-full object-cover"
            priority
          />
          <div className="leading-[1.1]">
            <p className="font-[family-name:var(--font-cinzel)] text-[1.15rem] font-semibold tracking-[0.12em] text-[#e8c547] sm:text-[1.3rem]">
              SHWE DUNN
            </p>
            <p className="text-[0.62rem] font-medium tracking-[0.16em] text-[#c5bba3] sm:text-[0.68rem]">
              PLAY RICH • WIN GOLD
            </p>
          </div>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex lg:gap-2.5">
          {NAV.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[0.95rem] font-semibold transition lg:px-5 ${
                  isActive
                    ? "bg-[#d4af37] text-[#1a1205]"
                    : "text-white hover:text-[#e8c547]"
                }`}
              >
                <NavIcon name={item.key} active={isActive} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <div className="flex items-center gap-3 rounded-xl border border-[#d4af37]/50 bg-[#021a12] px-3.5 py-2 sm:gap-3.5 sm:px-4 sm:py-2.5">
            <div className="leading-tight">
              <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-[#9a9280]">
                BALANCE
              </p>
              <p className="text-[1.05rem] font-bold text-white sm:text-[1.15rem]">
                {hidden ? "••••" : `${usd} USD`}
              </p>
            </div>
            <span className="text-xl font-light text-[#d4af37]">=</span>
            <div className="leading-tight">
              <p className="text-[0.58rem] font-semibold tracking-[0.14em] text-[#9a9280]">
                MMK
              </p>
              <p className="text-[1.05rem] font-bold text-[#e8c547] sm:text-[1.15rem]">
                {hidden ? "••••" : mmk}
              </p>
            </div>
            <button
              type="button"
              aria-label={hidden ? "Show balance" : "Hide balance"}
              onClick={() => setHidden((v) => !v)}
              className="text-[#d4af37] hover:text-[#f0d78c]"
            >
              <EyeIcon open={!hidden} />
            </button>
          </div>

          {onLogout ? (
            <button
              type="button"
              onClick={onLogout}
              className="hidden rounded-xl border border-[#d4af37]/50 px-3.5 py-2.5 text-[0.82rem] font-semibold text-[#e8c547] hover:bg-[#d4af37]/10 sm:inline-flex"
            >
              Log out
            </button>
          ) : null}
        </div>
      </div>
    </header>
  );
}

function NavIcon({ name, active }: { name: NavKey; active: boolean }) {
  const stroke = active ? "#1a1205" : "#d4af37";
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.8,
  } as const;

  if (name === "games") {
    return (
      <svg {...common} aria-hidden>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M12 12 20 7.5M12 12v9M12 12 4 7.5" />
      </svg>
    );
  }
  if (name === "wallet") {
    return (
      <svg {...common} aria-hidden>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M16 14.5h2" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M7 6V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1M12 11v5M9.5 13.5 12 11l2.5 2.5" />
    </svg>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
      <path d="m4 4 16 16" />
    </svg>
  );
}

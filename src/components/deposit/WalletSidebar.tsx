"use client";

import Link from "next/link";
import { formatMmk, formatUsd } from "@/lib/money-format";

export type WalletSideTab = "deposit" | "withdraw" | "history" | "transactions";

type Props = {
  active: WalletSideTab;
  balanceUsd: string;
  mmkPerUsd: string;
  onSelect?: (tab: WalletSideTab) => void;
};

const ITEMS: { key: WalletSideTab; label: string; href?: string }[] = [
  { key: "deposit", label: "Deposit" },
  { key: "withdraw", label: "Withdraw" },
  { key: "history", label: "History" },
  { key: "transactions", label: "Transactions", href: "/wallet" },
];

export function WalletSidebar({
  active,
  balanceUsd,
  mmkPerUsd,
  onSelect,
}: Props) {
  const usd = formatUsd(balanceUsd);
  const mmk = formatMmk(balanceUsd, mmkPerUsd);
  const rate = Number(mmkPerUsd || 0).toLocaleString("en-US");

  return (
    <aside className="flex w-full flex-col rounded-xl border border-[#d4af37]/40 bg-[#02150f] lg:w-[260px] lg:shrink-0">
      <div className="border-b border-[#d4af37]/25 px-4 py-4">
        <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-[#d4af37]">
          USER WALLET
        </p>
        <div className="mt-3 rounded-lg border border-[#d4af37]/35 bg-[#01100b] px-3.5 py-3.5">
          <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-[#9a9280]">
            TOTAL BALANCE
          </p>
          <p className="mt-1.5 text-[1.45rem] font-bold leading-none text-[#e8c547]">
            USD {usd}
          </p>
          <p className="mt-2 text-[0.9rem] font-medium text-white">
            MMK {mmk}
          </p>
          <p className="mt-1.5 text-[0.72rem] text-[#9a9280]">
            1 USD = {rate} MMK
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-1.5 p-3">
        {ITEMS.map((item) => {
          const isActive = item.key === active;
          const className = `inline-flex items-center gap-3 rounded-lg border px-3.5 py-3 text-[0.95rem] font-semibold transition ${
            isActive
              ? "border-[#d4af37] bg-[#d4af37]/15 text-[#e8c547]"
              : "border-transparent text-white hover:border-[#d4af37]/35 hover:text-[#e8c547]"
          }`;

          if (item.href) {
            return (
              <Link key={item.key} href={item.href} className={className}>
                <SideIcon name={item.key} active={isActive} />
                {item.label}
              </Link>
            );
          }

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onSelect?.(item.key)}
              className={className}
            >
              <SideIcon name={item.key} active={isActive} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-[#d4af37]/20 px-4 py-4">
        <p className="flex items-start gap-2 text-[0.72rem] leading-relaxed text-[#9a9280]">
          <LockIcon />
          Your funds are safe and secure with Shwe Dunn Casino.
        </p>
      </div>
    </aside>
  );
}

function SideIcon({
  name,
  active,
}: {
  name: WalletSideTab;
  active: boolean;
}) {
  const stroke = active ? "#e8c547" : "#d4af37";
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.7,
  } as const;

  if (name === "deposit") {
    return (
      <svg {...common} aria-hidden>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M12 10v5M9.5 12.5 12 10l2.5 2.5" />
      </svg>
    );
  }
  if (name === "withdraw") {
    return (
      <svg {...common} aria-hidden>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M12 15v-5M9.5 12.5 12 15l2.5-2.5" />
      </svg>
    );
  }
  if (name === "history") {
    return (
      <svg {...common} aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4.5L15 15" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden>
      <path d="M4 7h16v12H4V7Z" />
      <path d="M8 7V5h8v2M8 12h8M8 15h5" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.7"
      className="mt-0.5 shrink-0"
      aria-hidden
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

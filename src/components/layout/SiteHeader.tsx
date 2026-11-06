import Link from "next/link";
import { SdLogo } from "../brand/SdLogo";

const NAV = [
  { label: "HOME", href: "/login", active: true },
  { label: "CASINO", href: "#" },
  { label: "LIVE CASINO", href: "#" },
  { label: "SLOTS", href: "#" },
  { label: "PROMOTIONS", href: "#" },
  { label: "VIP", href: "#" },
  { label: "ABOUT US", href: "#" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 bg-gradient-to-b from-[#04140f]/85 to-transparent">
      <div className="mx-auto flex h-[92px] max-w-[1440px] items-center justify-between gap-6 px-6 md:px-12">
        <Link href="/login" className="shrink-0">
          <SdLogo size={54} showWordmark wordmarkSize="md" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 xl:gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              data-active={item.active ? "true" : "false"}
              className="sd-nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[#d4af37]/45 bg-[#0a3d2e]/50 px-3.5 text-[0.8rem] font-semibold tracking-wider text-[#f5efe0]"
            title="Myanmar"
          >
            <span className="text-base leading-none">🇲🇲</span>
            MM
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[#d4af37]/55 bg-[#0a3d2e]/65 px-4 text-[0.8rem] font-semibold tracking-wider text-[#f5efe0]"
          >
            <GlobeIcon />
            EN
            <span className="text-[0.55rem] text-[#d4af37]">▾</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </svg>
  );
}

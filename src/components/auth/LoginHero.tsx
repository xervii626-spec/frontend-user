import { SdLogo } from "../brand/SdLogo";

const TRUST = [
  { title: "100% SECURE", desc: "Your security is our priority", icon: "shield" },
  { title: "FAST PAYOUTS", desc: "Quick & reliable withdrawals", icon: "trophy" },
  { title: "TRUSTED & LICENSED", desc: "Fair play, every time", icon: "medal" },
  { title: "24/7 SUPPORT", desc: "We're here to help", icon: "headset" },
] as const;

export function LoginHero() {
  return (
    <div className="sd-animate-in flex w-full max-w-[640px] flex-col items-start">
      <SdLogo
        size={158}
        className="mb-4 drop-shadow-[0_10px_36px_rgba(212,175,55,0.4)]"
      />

      <h1 className="font-[family-name:var(--font-cinzel)] text-[2.6rem] font-semibold leading-none tracking-[0.12em] text-[#e8c547] md:text-[3.35rem] lg:text-[3.6rem]">
        SHWE DUNN
      </h1>
      <p className="mt-2 font-[family-name:var(--font-cinzel)] text-[0.95rem] font-medium tracking-[0.42em] text-[#d4af37] md:text-[1.05rem]">
        ONLINE CASINO
      </p>

      {/* Separator between ONLINE CASINO and Play at Shwe Dunn */}
      <div className="my-5 flex w-full max-w-[420px] items-center gap-3 text-[#e8c547]">
        <span className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/15 via-[#d4af37]/90 to-[#d4af37]/55" />
        <span
          className="inline-block size-2.5 rotate-45 bg-[#e8c547] shadow-[0_0_10px_rgba(232,197,71,0.55)]"
          aria-hidden
        />
        <span className="h-px flex-1 bg-gradient-to-l from-[#d4af37]/15 via-[#d4af37]/90 to-[#d4af37]/55" />
      </div>

      <p className="font-[family-name:var(--font-cinzel)] text-[1.85rem] font-semibold leading-tight md:text-[2.25rem]">
        <span className="text-[#f7f2e6]">Play at </span>
        <span className="bg-[linear-gradient(180deg,#ffe9a0_0%,#e0b93a_48%,#b8860b_100%)] bg-clip-text text-transparent">
          Shwe Dunn
        </span>
      </p>

      <p className="mt-3 max-w-lg text-[1.02rem] leading-relaxed text-[#ddd2b8]">
        Trusted casino experience. Big wins.
        <br className="hidden sm:block" />
        Real rewards.
      </p>

      {/* Trust row — tall icon + 2-line text beside */}
      <div className="mt-10 flex w-full max-w-[760px] flex-wrap items-stretch gap-y-7 sm:flex-nowrap sm:gap-0">
        {TRUST.map((item, i) => (
          <div
            key={item.title}
            className={`flex min-w-[46%] flex-1 items-center gap-3 sm:min-w-0 sm:gap-3.5 sm:px-3.5 ${
              i > 0 ? "sm:border-l sm:border-[#d4af37]/40" : "sm:pl-0"
            }`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#e8c547] sm:h-14 sm:w-14">
              <TrustIcon name={item.icon} />
            </div>
            <div className="flex min-w-0 flex-col justify-center gap-1.5">
              <p className="text-[0.78rem] font-bold leading-none tracking-[0.02em] text-[#f0d78c]">
                {item.title}
              </p>
              <p className="text-[0.72rem] leading-snug text-[#d8d0bc]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustIcon({ name }: { name: (typeof TRUST)[number]["icon"] }) {
  const common = {
    width: 48,
    height: 48,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "shield") {
    return (
      <svg {...common} aria-hidden>
        <path d="M12 2.5 20 5.8v6.2c0 5.4-3.5 9.2-8 10.3-4.5-1.1-8-4.9-8-10.3V5.8L12 2.5Z" />
        <path d="m8.5 12 2.4 2.4 4.6-4.8" />
      </svg>
    );
  }
  if (name === "trophy") {
    return (
      <svg {...common} aria-hidden>
        <path d="M8 3.5h8v4a4 4 0 0 1-8 0v-4Z" />
        <path d="M8 5H4.8A2.3 2.3 0 0 0 7 9.2M16 5h3.2A2.3 2.3 0 0 1 17 9.2" />
        <path d="M10 18.5h4M12 11.5v7M9 21.5h6" />
      </svg>
    );
  }
  if (name === "medal") {
    return (
      <svg {...common} aria-hidden>
        <path d="m8.5 2.8 3.5 4.2 3.5-4.2" />
        <circle cx="12" cy="13.2" r="5.2" />
        <path d="M12 11.2v2l1.4 1.4" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden>
      <path d="M4 12.8v-1.3A8.2 8.2 0 0 1 20 11.5v1.3" />
      <path d="M4 12.8a2.3 2.3 0 0 0 2.3 2.3H8v-4.2H6.3A2.3 2.3 0 0 0 4 12.8ZM20 12.8a2.3 2.3 0 0 1-2.3 2.3H16v-4.2h1.7a2.3 2.3 0 0 1 2.3 2.2Z" />
      <path d="M12 18.2v2.5M9.2 20.7h5.6" />
    </svg>
  );
}

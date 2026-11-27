"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type AdSlide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
  tone: "gold" | "emerald" | "ruby";
};

const DEFAULT_SLIDES: AdSlide[] = [
  {
    id: "deposit-bonus",
    eyebrow: "PROMO",
    title: "Deposit Bonus",
    subtitle: "Top up today and get extra play credit",
    ctaLabel: "Claim Now",
    href: "/deposit",
    tone: "gold",
  },
  {
    id: "daily-login",
    eyebrow: "DAILY",
    title: "Login Reward",
    subtitle: "Come back every Yangon day for a free bonus",
    ctaLabel: "Play Now",
    href: "/games",
    tone: "emerald",
  },
  {
    id: "slots-night",
    eyebrow: "HOT",
    title: "Slots Night",
    subtitle: "Spin the featured titles and chase big hits",
    ctaLabel: "Explore Slots",
    href: "/games",
    tone: "ruby",
  },
];

const TONE: Record<
  AdSlide["tone"],
  { panel: string; glow: string; chip: string; accent: string }
> = {
  gold: {
    panel:
      "bg-[radial-gradient(ellipse_at_18%_40%,rgba(212,175,55,0.38)_0%,transparent_52%),linear-gradient(120deg,#1a1205_0%,#0a2218_48%,#06140f_100%)]",
    glow: "shadow-[0_0_40px_rgba(212,175,55,0.18)]",
    chip: "border-[#d4af37]/50 text-[#e8c547]",
    accent: "text-[#e8c547]",
  },
  emerald: {
    panel:
      "bg-[radial-gradient(ellipse_at_20%_35%,rgba(34,120,80,0.45)_0%,transparent_55%),linear-gradient(120deg,#041810_0%,#0a2418_50%,#06140f_100%)]",
    glow: "shadow-[0_0_40px_rgba(45,140,90,0.16)]",
    chip: "border-[#3dba7a]/45 text-[#7dffa3]",
    accent: "text-[#7dffa3]",
  },
  ruby: {
    panel:
      "bg-[radial-gradient(ellipse_at_18%_40%,rgba(160,40,50,0.4)_0%,transparent_52%),linear-gradient(120deg,#1a080c_0%,#140a12_48%,#06140f_100%)]",
    glow: "shadow-[0_0_40px_rgba(180,50,70,0.16)]",
    chip: "border-[#e8a0a8]/45 text-[#ffc4c8]",
    accent: "text-[#ffc4c8]",
  },
};

type Props = {
  slides?: AdSlide[];
  intervalMs?: number;
};

export function AdsBanner({
  slides = DEFAULT_SLIDES,
  intervalMs = 5500,
}: Props) {
  const [index, setIndex] = useState(0);
  const active = slides[index] ?? slides[0];

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  if (!active) return null;

  const tone = TONE[active.tone];

  return (
    <section className="mb-4" aria-roledescription="carousel" aria-label="Promotions">
      <div
        className={`relative overflow-hidden rounded-xl border border-[#d4af37]/45 ${tone.panel} ${tone.glow}`}
      >
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[55%] opacity-40 sm:opacity-55"
          aria-hidden
        >
          <div className="absolute -right-8 top-1/2 h-[140%] w-[70%] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,197,71,0.35)_0%,transparent_68%)] blur-2xl" />
          <div className="absolute right-6 top-4 h-24 w-24 rounded-full border border-[#d4af37]/25 sm:right-10 sm:h-32 sm:w-32" />
          <div className="absolute bottom-3 right-16 h-16 w-16 rounded-full border border-[#d4af37]/20 sm:bottom-6 sm:right-24 sm:h-20 sm:w-20" />
        </div>

        <span
          className={`absolute right-3 top-3 rounded border bg-black/35 px-2 py-0.5 text-[0.62rem] font-bold tracking-[0.14em] ${tone.chip}`}
        >
          AD
        </span>

        <div className="relative flex min-h-[140px] flex-col justify-center px-4 py-5 sm:min-h-[168px] sm:px-7 sm:py-6 lg:min-h-[190px] lg:px-9">
          <p
            className={`text-[0.68rem] font-semibold tracking-[0.2em] sm:text-[0.72rem] ${tone.accent}`}
          >
            {active.eyebrow}
          </p>
          <h2 className="mt-1.5 max-w-[18ch] font-[family-name:var(--font-cinzel)] text-[1.55rem] font-semibold leading-tight tracking-[0.04em] text-[#e8c547] sm:text-[2rem] lg:text-[2.25rem]">
            {active.title}
          </h2>
          <p className="mt-2 max-w-[36ch] text-[0.88rem] leading-relaxed text-[#d8d0bc] sm:text-[0.95rem]">
            {active.subtitle}
          </p>
          <Link
            href={active.href}
            className="mt-4 inline-flex w-fit items-center rounded-full bg-[linear-gradient(180deg,#f0d78c_0%,#d4af37_50%,#b8922a_100%)] px-5 py-2.5 text-[0.82rem] font-extrabold tracking-[0.14em] text-[#1a1205] shadow-[0_8px_22px_rgba(212,175,55,0.3)] transition hover:brightness-105 sm:px-6 sm:text-[0.88rem]"
          >
            {active.ctaLabel.toUpperCase()}
          </Link>
        </div>
      </div>

      {slides.length > 1 ? (
        <div className="mt-2.5 flex items-center justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show ad ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-[#d4af37]"
                  : "w-2 bg-[#d4af37]/35 hover:bg-[#d4af37]/55"
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

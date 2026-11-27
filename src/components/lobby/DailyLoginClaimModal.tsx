"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useClaimDailyLoginMutation } from "@/store/api/bonusApi";
import {
  clearDailyLoginPrompt,
  readDailyLoginPrompt,
  type DailyLoginPrompt,
} from "@/lib/daily-login-prompt";

/** Shown once after successful login when Yangon-day claim is still available. */
export function DailyLoginClaimModal() {
  const [prompt, setPrompt] = useState<DailyLoginPrompt | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const [claim, { isLoading }] = useClaimDailyLoginMutation();

  useEffect(() => {
    const p = readDailyLoginPrompt();
    if (p?.show && p.status.canClaim) setPrompt(p);
  }, []);

  if (!prompt) return null;

  async function onClaim() {
    setError(null);
    try {
      const res = await claim().unwrap();
      setDone(`Claimed ${Number(res.amountMmk).toLocaleString("en-US", { maximumFractionDigits: 0 })} MMK`);
      clearDailyLoginPrompt();
    } catch (err) {
      const msg =
        err && typeof err === "object" && "data" in err
          ? (err as { data?: { message?: string | string[] } }).data?.message
          : null;
      setError(
        Array.isArray(msg)
          ? msg.join(", ")
          : typeof msg === "string"
            ? msg
            : "Could not claim",
      );
    }
  }

  function onClose() {
    clearDailyLoginPrompt();
    setPrompt(null);
  }

  const amountLabel = Number(prompt.status.amountMmk).toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(1,10,7,0.78)] p-4 backdrop-blur-[3px]">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="daily-login-title"
        className="relative w-full max-w-[400px] pt-10"
      >
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
          <span
            className="absolute inset-0 rounded-full bg-[#d4af37]/35 blur-xl"
            aria-hidden
          />
          <Image
            src="/brand/sd-logo-circle.jpg"
            alt="Shwe Dunn"
            width={84}
            height={84}
            className="relative rounded-full border-2 border-[#d4af37] object-cover shadow-[0_0_32px_rgba(212,175,55,0.45)]"
            priority
          />
        </div>

        <div className="overflow-hidden rounded-[20px] border-2 border-[#d4af37]/70 bg-[radial-gradient(ellipse_at_50%_0%,rgba(48,78,50,0.98)_0%,rgba(6,18,12,0.99)_52%,rgba(2,10,7,1)_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.7),0_0_48px_rgba(212,175,55,0.16)]">
          <div
            className="pointer-events-none absolute inset-x-10 top-10 h-px bg-[linear-gradient(90deg,transparent,#d4af37,transparent)]"
            aria-hidden
          />

          <div className="flex flex-col items-center px-6 pb-5 pt-12 text-center">
            <p
              id="daily-login-title"
              className="font-[family-name:var(--font-cinzel)] text-[0.82rem] font-semibold tracking-[0.24em] text-[#d4af37]"
            >
              DAILY LOGIN BONUS
            </p>

            {done ? (
              <p className="mt-5 text-[1.1rem] font-semibold text-[#7dffa3]">
                {done}
              </p>
            ) : (
              <>
                <p className="mt-5 font-[family-name:var(--font-cinzel)] text-[2.6rem] font-semibold leading-none tracking-wide text-[#e8c547] drop-shadow-[0_0_22px_rgba(232,197,71,0.45)] sm:text-[2.85rem]">
                  {amountLabel}
                  <span className="ml-2 text-[1.05rem] tracking-[0.16em] text-[#d4af37]">
                    MMK
                  </span>
                </p>
                <p className="mt-4 text-[0.82rem] text-[#d8d0bc]">
                  play-only · not withdrawable
                </p>
                <p className="mt-2 text-[0.72rem] tracking-wide text-[#7a9a82]">
                  Resets daily in {prompt.status.timezone}
                </p>
              </>
            )}

            {error ? (
              <p className="mt-3 text-sm text-[#ff8f8f]">{error}</p>
            ) : null}
          </div>

          <div className="flex gap-2.5 border-t border-[#d4af37]/18 px-5 py-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-[#d4af37]/45 bg-[rgba(8,28,18,0.85)] px-4 py-3 text-sm font-semibold tracking-[0.14em] text-[#e8c547] transition hover:border-[#d4af37] hover:bg-[rgba(20,48,32,0.9)]"
            >
              {done ? "CLOSE" : "LATER"}
            </button>
            {!done ? (
              <button
                type="button"
                disabled={isLoading}
                onClick={onClaim}
                className="flex-[1.4] rounded-xl bg-[linear-gradient(180deg,#f5e0a0_0%,#d4af37_42%,#b8922a_100%)] px-4 py-3 text-sm font-extrabold tracking-[0.18em] text-[#1a1205] shadow-[0_10px_28px_rgba(212,175,55,0.35)] transition hover:brightness-105 disabled:opacity-50"
              >
                {isLoading ? "…" : "CLAIM"}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

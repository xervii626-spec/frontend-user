"use client";

import { useState } from "react";
import {
  useClaimDailyLoginMutation,
  useGetDailyLoginQuery,
} from "@/store/api/bonusApi";

export function DailyLoginClaimBox() {
  const { data, isFetching, isError } = useGetDailyLoginQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [claim, { isLoading }] = useClaimDailyLoginMutation();
  const [error, setError] = useState<string | null>(null);
  const [flash, setFlash] = useState<string | null>(null);

  if (isError || !data) {
    return null;
  }

  async function onClaim() {
    setError(null);
    setFlash(null);
    try {
      const res = await claim().unwrap();
      setFlash(`Claimed ${res.amountMmk} MMK bonus (play only)`);
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

  const amountLabel = `${Number(data.amountMmk).toLocaleString("en-US", {
    maximumFractionDigits: 0,
  })} MMK`;

  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-[#d4af37]/45 bg-[linear-gradient(135deg,rgba(20,40,28,0.95)_0%,rgba(8,16,12,0.98)_100%)] px-4 py-3.5 sm:px-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-[#d4af37]">
            DAILY LOGIN BONUS
          </p>
          <p className="mt-1 text-sm text-[#f5efe0]">
            {data.canClaim ? (
              <>
                Claim{" "}
                <span className="font-semibold text-[#e8c547]">{amountLabel}</span>{" "}
                play-only bonus
              </>
            ) : (
              <>
                Claimed today · comes back tomorrow ({data.timezone})
              </>
            )}
          </p>
          <p className="mt-0.5 text-[0.72rem] text-[#8a8070]">
            For game play only — not withdrawable
            {isFetching ? " · refreshing…" : ""}
          </p>
        </div>

        <button
          type="button"
          disabled={!data.canClaim || isLoading}
          onClick={onClaim}
          className="shrink-0 rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-5 py-2.5 text-sm font-extrabold tracking-[0.12em] text-[#1a1205] disabled:cursor-not-allowed disabled:opacity-45"
        >
          {isLoading ? "…" : data.canClaim ? "CLAIM" : "CLAIMED"}
        </button>
      </div>

      {error ? (
        <p className="mt-2 text-sm text-[#ff8f8f]">{error}</p>
      ) : null}
      {flash ? (
        <p className="mt-2 text-sm text-[#7dffa3]">{flash}</p>
      ) : null}
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  useClaimQuestMutation,
  useGetQuestsQuery,
} from "@/store/api/questsApi";

export function QuestsClaimBox() {
  const { data, isFetching } = useGetQuestsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [claim, { isLoading }] = useClaimQuestMutation();
  const [error, setError] = useState<string | null>(null);
  const [flash, setFlash] = useState<string | null>(null);

  const items = data?.items ?? [];
  if (!items.length) return null;

  async function onClaim(id: number) {
    setError(null);
    setFlash(null);
    try {
      const res = await claim(id).unwrap();
      setFlash(`Claimed ${res.rewardMmk} MMK bonus (play only)`);
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

  return (
    <div className="mb-4 rounded-xl border border-[#d4af37]/45 bg-[linear-gradient(135deg,rgba(20,40,28,0.95)_0%,rgba(8,16,12,0.98)_100%)] px-4 py-3.5 sm:px-5">
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-[#d4af37]">
          QUESTS
        </p>
        <p className="text-[0.7rem] text-[#8a8070]">
          Play-only rewards
          {isFetching ? " · …" : ""}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((q) => (
          <div
            key={q.id}
            className="rounded-lg border border-[#2a2418] bg-[#0a0f0c]/80 px-3 py-3"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[#f5efe0]">{q.title}</p>
                <p className="mt-0.5 text-[0.72rem] text-[#8a8070]">
                  {q.goalLabel}: {q.progressValue} / {q.targetValue}
                  {" · "}
                  Reward{" "}
                  {Number(q.rewardMmk).toLocaleString("en-US", {
                    maximumFractionDigits: 0,
                  })}{" "}
                  MMK
                </p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#1a241c]">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#d4af37,#e8c547)]"
                    style={{ width: `${q.percent}%` }}
                  />
                </div>
              </div>
              <button
                type="button"
                disabled={!q.canClaim || isLoading || q.status === "claimed"}
                onClick={() => onClaim(q.id)}
                className="shrink-0 rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-4 py-2 text-xs font-extrabold tracking-[0.1em] text-[#1a1205] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {q.status === "claimed"
                  ? "CLAIMED"
                  : q.canClaim
                    ? "CLAIM"
                    : `${q.percent}%`}
              </button>
            </div>
          </div>
        ))}
      </div>

      {error ? <p className="mt-2 text-sm text-[#ff8f8f]">{error}</p> : null}
      {flash ? <p className="mt-2 text-sm text-[#7dffa3]">{flash}</p> : null}
    </div>
  );
}

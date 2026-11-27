"use client";

import { useState } from "react";
import {
  useGetLeaderboardQuery,
  type LeaderboardMetric,
  type LeaderboardPeriod,
} from "@/store/api/leaderboardApi";
const METRICS: { id: LeaderboardMetric; label: string }[] = [
  { id: "win", label: "TOP WIN" },
  { id: "bet", label: "TOP BET" },
  { id: "net", label: "TOP NET" },
  { id: "biggest", label: "BIGGEST" },
];

const PERIODS: { id: LeaderboardPeriod; label: string }[] = [
  { id: "day", label: "TODAY" },
  { id: "week", label: "WEEK" },
  { id: "all", label: "ALL" },
];

export function LeaderboardPanel() {
  const [metric, setMetric] = useState<LeaderboardMetric>("win");
  const [period, setPeriod] = useState<LeaderboardPeriod>("day");
  const { data, isFetching } = useGetLeaderboardQuery(
    { metric, period, limit: 10 },
    { pollingInterval: 30_000 },
  );

  return (
    <section className="mb-4 rounded-xl border border-[#d4af37]/35 bg-[#06140f]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2a2418] px-3 py-2.5">
        <p className="text-[0.68rem] font-extrabold tracking-[0.16em] text-[#d4af37]">
          LEADERBOARD
        </p>
        <p className="text-[0.62rem] text-[#8a8070]">
          {data?.periodKey ?? "—"} · Yangon
          {isFetching ? " · …" : ""}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 px-3 pt-3">
        {PERIODS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPeriod(p.id)}
            className={`rounded-md px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.12em] transition ${
              period === p.id
                ? "bg-[#d4af37] text-[#1a1205]"
                : "border border-[#2a2418] text-[#c4b48a] hover:text-[#e8c547]"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 px-3 pt-2">
        {METRICS.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMetric(m.id)}
            className={`rounded-md px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.12em] transition ${
              metric === m.id
                ? "border border-[#2ecc71]/45 bg-[rgba(22,90,50,0.35)] text-[#7dffa3]"
                : "border border-transparent text-[#9a9280] hover:text-[#e8c547]"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <ol className="mt-2 max-h-[280px] space-y-0 overflow-y-auto px-2 pb-3">
        {(data?.items ?? []).length === 0 ? (
          <li className="px-2 py-6 text-center text-[0.8rem] text-[#8a8070]">
            No rankings yet for this filter.
          </li>
        ) : (
          data!.items.map((row) => (
            <li
              key={`${row.rank}-${row.displayName}`}
              className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 hover:bg-[rgba(212,175,55,0.06)]"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <span
                  className={`w-6 shrink-0 text-center text-[0.78rem] font-bold tabular-nums ${
                    row.rank <= 3 ? "text-[#e8c547]" : "text-[#8a8070]"
                  }`}
                >
                  {row.rank}
                </span>
                <span className="truncate text-[0.85rem] text-[#f5efe0]">
                  {row.displayName}
                </span>
              </div>
              <span className="shrink-0 text-[0.82rem] font-semibold tabular-nums text-[#e8c547]">
                {fmt(row.valueMmk)} MMK
              </span>
            </li>
          ))
        )}
      </ol>
    </section>
  );
}

function fmt(n: string) {
  const v = Number(n);
  if (!Number.isFinite(v)) return n;
  return v.toLocaleString("en-US", {
    maximumFractionDigits: v >= 100 ? 0 : 2,
  });
}

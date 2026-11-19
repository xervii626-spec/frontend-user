"use client";

import { useEffect, useMemo, useState } from "react";
import {
  useGetRecentBigWinsQuery,
  type BigWinItem,
} from "@/store/api/bigWinsApi";

function resolveApiBase(): string {
  const fromEnv = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return "http://localhost:5000";
}

export function BigWinTicker() {
  const { data } = useGetRecentBigWinsQuery({ limit: 20 });
  const [live, setLive] = useState<BigWinItem[]>([]);

  useEffect(() => {
    if (data?.items?.length) setLive(data.items);
  }, [data?.items]);

  useEffect(() => {
    const es = new EventSource(`${resolveApiBase()}/big-wins/stream`);
    es.onmessage = (ev) => {
      try {
        const item = JSON.parse(ev.data) as BigWinItem;
        setLive((prev) =>
          [item, ...prev.filter((x) => x.id !== item.id)].slice(0, 30),
        );
      } catch {
        // ignore malformed
      }
    };
    return () => es.close();
  }, []);

  const line = useMemo(() => {
    if (!live.length) return "Big wins will appear here…";
    return live
      .slice(0, 12)
      .map(
        (w) =>
          `${w.displayName} won ${Number(w.amountMmk).toLocaleString("en-US", {
            maximumFractionDigits: 0,
          })} MMK`,
      )
      .join("   ·   ");
  }, [live]);

  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-[#d4af37]/40 bg-[#06140f]">
      <div className="flex items-center gap-3 px-3 py-2">
        <span className="shrink-0 rounded bg-[#d4af37] px-2 py-1 text-[0.62rem] font-extrabold tracking-[0.14em] text-[#1a1205]">
          BIG WIN
        </span>
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <p className="sd-bigwin-marquee whitespace-nowrap text-[0.82rem] font-medium text-[#e8c547]">
            {line}
          </p>
        </div>
      </div>
    </div>
  );
}

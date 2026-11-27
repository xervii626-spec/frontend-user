"use client";

import { useState } from "react";
import {
  useGetAnnouncementInboxQuery,
  useMarkAnnouncementReadMutation,
} from "@/store/api/announcementsApi";

export function AnnouncementBox() {
  const { data, isFetching } = useGetAnnouncementInboxQuery(
    { limit: 5 },
    { pollingInterval: 30_000 },
  );
  const [markRead, { isLoading }] = useMarkAnnouncementReadMutation();
  const [error, setError] = useState<string | null>(null);

  const latest = (data?.items ?? []).find((x) => !x.readAt);
  if (!latest) return null;

  async function onDismiss() {
    setError(null);
    try {
      await markRead(latest!.announcementId).unwrap();
    } catch {
      setError("Could not mark as read");
    }
  }

  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-[#d4af37]/45 bg-[linear-gradient(135deg,rgba(20,40,28,0.95)_0%,rgba(8,16,12,0.98)_100%)] px-4 py-3.5 sm:px-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-[#d4af37]">
            ANNOUNCEMENT
            {(data?.unreadCount ?? 0) > 0
              ? ` · ${data!.unreadCount} NEW`
              : ""}
            {isFetching ? " · …" : ""}
          </p>
          <p className="mt-1 text-sm font-semibold text-[#f5efe0]">
            {latest.name}
          </p>
          <p className="mt-0.5 text-[0.82rem] text-[#c5bba3]">
            {latest.description}
          </p>
          {error ? (
            <p className="mt-1 text-[0.75rem] text-[#ff8f8f]">{error}</p>
          ) : null}
        </div>

        {!latest.readAt ? (
          <button
            type="button"
            disabled={isLoading}
            onClick={onDismiss}
            className="shrink-0 rounded-md bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-5 py-2.5 text-sm font-extrabold tracking-[0.12em] text-[#1a1205] disabled:opacity-45"
          >
            {isLoading ? "…" : "GOT IT"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

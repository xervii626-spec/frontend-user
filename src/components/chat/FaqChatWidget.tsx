"use client";

import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import {
  useAskFaqMutation,
  useGetChatThreadQuery,
  useGetFaqsQuery,
  type ChatMessage,
} from "@/store/api/chatApi";

export function FaqChatWidget() {
  const accessToken = useAppSelector((s) => s.auth.accessToken);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const { data: faqsData } = useGetFaqsQuery(undefined, {
    skip: !accessToken,
  });
  const { data: thread } = useGetChatThreadQuery(undefined, {
    skip: !accessToken || !open,
  });
  const [askFaq, { isLoading }] = useAskFaqMutation();

  useEffect(() => {
    if (thread?.items) setMessages(thread.items);
  }, [thread?.items]);

  useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [open, messages.length]);

  if (!accessToken) return null;

  async function onPick(faqId: number) {
    try {
      const res = await askFaq({ faqId }).unwrap();
      setMessages((prev) => {
        const ids = new Set(prev.map((m) => m.id));
        const next = [...prev];
        for (const m of res.messages) {
          if (!ids.has(m.id)) next.push(m);
        }
        return next;
      });
    } catch {
      // keep UI quiet
    }
  }

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="pointer-events-auto flex h-[min(520px,70vh)] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[#d4af37]/45 bg-[#07140f] shadow-[0_16px_48px_rgba(0,0,0,0.55)]">
          <div className="flex items-center justify-between border-b border-[#2a2418] bg-[#0c1a14] px-4 py-3">
            <div>
              <p className="text-[0.72rem] font-extrabold tracking-[0.16em] text-[#d4af37]">
                HELP CHAT
              </p>
              <p className="text-[0.68rem] text-[#8a8070]">
                Pick a question · typing coming later
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md border border-[#3a3220] px-2 py-1 text-[0.7rem] text-[#c4b48a] hover:text-[#e8c547]"
            >
              CLOSE
            </button>
          </div>

          <div className="flex-1 space-y-2.5 overflow-y-auto px-3 py-3">
            {messages.length === 0 ? (
              <p className="rounded-lg bg-[#0c0c0c] px-3 py-2 text-[0.8rem] text-[#9a9280]">
                Choose an FAQ below to get an answer.
              </p>
            ) : (
              messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-[0.82rem] leading-snug ${
                      m.role === "user"
                        ? "bg-[#d4af37] text-[#1a1205]"
                        : "border border-[#2a2418] bg-[#101010] text-[#f5efe0]"
                    }`}
                  >
                    {m.body}
                  </div>
                </div>
              ))
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-[#2a2418] bg-[#0a1210] px-3 py-2.5">
            <p className="mb-2 text-[0.62rem] font-semibold tracking-[0.14em] text-[#8a8070]">
              FREQUENT QUESTIONS
            </p>
            <div className="flex max-h-[120px] flex-col gap-1.5 overflow-y-auto">
              {(faqsData?.items ?? []).length === 0 ? (
                <p className="text-[0.75rem] text-[#8a8070]">No FAQs yet.</p>
              ) : (
                faqsData!.items.map((faq) => (
                  <button
                    key={faq.id}
                    type="button"
                    disabled={isLoading}
                    onClick={() => onPick(faq.id)}
                    className="rounded-lg border border-[#d4af37]/30 bg-[#0c0c0c] px-3 py-2 text-left text-[0.78rem] text-[#e8c547] hover:border-[#d4af37]/70 disabled:opacity-50"
                  >
                    {faq.question}
                  </button>
                ))
              )}
            </div>
            {/* Text input reserved for realtime later — intentionally hidden */}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] text-[#1a1205] shadow-[0_8px_24px_rgba(212,175,55,0.35)]"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <span className="text-lg font-bold">×</span>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M4 6.5h16v9.5H9l-4 3v-3H4V6.5Z" />
          </svg>
        )}
      </button>
    </div>
  );
}

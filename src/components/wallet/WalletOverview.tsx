"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { PaymentRequestItem } from "@/store/api/paymentsApi";
import { formatMmk, formatUsd } from "@/lib/money-format";

type Props = {
  balanceUsd: string;
  mmkPerUsd: string;
  payments: PaymentRequestItem[];
  loading?: boolean;
};

function statusLabel(status: string): { text: string; className: string } {
  const s = status.toLowerCase();
  if (s === "approved") {
    return { text: "Success", className: "bg-[#1f9d55] text-white" };
  }
  if (s === "pending") {
    return { text: "Pending", className: "bg-[#8a6a1f] text-white" };
  }
  if (s === "rejected" || s === "cancelled") {
    return { text: status.charAt(0).toUpperCase() + status.slice(1), className: "bg-[#7f1d1d] text-white" };
  }
  return { text: status, className: "bg-[#334155] text-white" };
}

function typeLabel(type: string): string {
  if (type === "deposit") return "Deposit";
  if (type === "withdraw") return "Withdraw";
  return type;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function WalletOverview({
  balanceUsd,
  mmkPerUsd,
  payments,
  loading,
}: Props) {
  const usd = formatUsd(balanceUsd);
  const mmk = formatMmk(balanceUsd, mmkPerUsd);
  const rate = Number(mmkPerUsd || 0).toLocaleString("en-US");

  const pendingDeposits = payments.filter(
    (p) => p.type === "deposit" && p.status === "pending",
  ).length;
  const pendingWithdrawals = payments.filter(
    (p) => p.type === "withdraw" && p.status === "pending",
  ).length;

  const rows = payments.slice(0, 8);

  return (
    <div className="w-full">
      <h1 className="text-[1.45rem] font-bold text-white sm:text-[1.6rem]">
        Wallet Overview
      </h1>
      <div className="mt-2 h-px w-40 bg-[#d4af37]/70" />

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        <SummaryCard title="Available Balance">
          <p className="text-[1.55rem] font-bold leading-tight text-white sm:text-[1.75rem]">
            {usd} USD
          </p>
          <p className="mt-1 text-[0.95rem] text-[#d4af37]">{mmk} MMK</p>
        </SummaryCard>
        <SummaryCard title="Pending Deposits">
          <p className="text-[1.55rem] font-bold leading-tight text-white sm:text-[1.75rem]">
            {pendingDeposits}
          </p>
        </SummaryCard>
        <SummaryCard title="Pending Withdrawals">
          <p className="text-[1.55rem] font-bold leading-tight text-white sm:text-[1.75rem]">
            {pendingWithdrawals}
          </p>
        </SummaryCard>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_300px]">
        <section className="overflow-hidden rounded-xl border border-[#d4af37]/45 bg-[#02150f]">
          <div className="border-b border-[#d4af37]/25 px-4 py-3">
            <h2 className="text-[1.05rem] font-semibold text-white">
              Recent Transactions
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-[0.9rem]">
              <thead>
                <tr className="bg-[#d4af37] text-[#1a1205]">
                  <th className="px-3 py-2.5 font-bold">Date</th>
                  <th className="px-3 py-2.5 font-bold">Type</th>
                  <th className="px-3 py-2.5 font-bold">Amount</th>
                  <th className="px-3 py-2.5 font-bold">Status</th>
                  <th className="px-3 py-2.5 font-bold">Currency</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-3 py-8 text-center text-[#9a9280]">
                      Loading…
                    </td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-3 py-8 text-center text-[#9a9280]">
                      No transactions yet.
                    </td>
                  </tr>
                ) : (
                  rows.map((row) => {
                    const st = statusLabel(row.status);
                    return (
                      <tr
                        key={row.id}
                        className="border-t border-[#d4af37]/20 text-white"
                      >
                        <td className="px-3 py-3 whitespace-nowrap">
                          {formatDate(row.createdAt)}
                        </td>
                        <td className="px-3 py-3">{typeLabel(row.type)}</td>
                        <td className="px-3 py-3 whitespace-nowrap">
                          {formatUsd(row.amountUsd)} USD
                        </td>
                        <td className="px-3 py-3">
                          <span
                            className={`inline-flex rounded-md px-2.5 py-1 text-[0.78rem] font-semibold ${st.className}`}
                          >
                            {st.text}
                          </span>
                        </td>
                        <td className="px-3 py-3">MMK</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="flex flex-col rounded-xl border border-[#d4af37]/45 bg-[#02150f] px-4 py-4">
          <h2 className="text-[1.05rem] font-semibold text-white">Quick actions</h2>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/deposit"
              className="inline-flex items-center justify-center rounded-lg bg-[#d4af37] px-4 py-3 text-[1rem] font-bold text-[#1a1205] transition hover:bg-[#e8c547]"
            >
              Deposit
            </Link>
            <Link
              href="/deposit?tab=withdraw"
              className="inline-flex items-center justify-center rounded-lg border border-[#d4af37] px-4 py-3 text-[1rem] font-bold text-[#e8c547] transition hover:bg-[#d4af37]/10"
            >
              Withdraw
            </Link>
            <Link
              href="/wallet"
              className="text-center text-[0.95rem] font-semibold text-[#d4af37] hover:text-[#f0d78c]"
            >
              View History
            </Link>
          </div>
          <p className="mt-auto pt-6 text-center text-[0.9rem] font-medium text-[#d4af37]">
            1 USD = {rate} MMK
          </p>
        </aside>
      </div>
    </div>
  );
}

function SummaryCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#d4af37]/45 bg-[#02150f] px-4 py-4 sm:px-5 sm:py-5">
      <p className="text-[0.85rem] font-semibold tracking-wide text-[#c5bba3]">
        {title}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

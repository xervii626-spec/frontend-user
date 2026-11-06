"use client";

import { useMemo, useState } from "react";
import { WalletSidebar, type WalletSideTab } from "./WalletSidebar";
import {
  DEPOSIT_MAX_MMK,
  DEPOSIT_METHODS,
  DEPOSIT_MIN_MMK,
} from "./deposit-mock";
import {
  useCancelPaymentMutation,
  useCreateDepositMutation,
  useCreateWithdrawMutation,
  useGetMyPaymentsQuery,
  type PaymentRequestItem,
} from "@/store/api/paymentsApi";
import {
  formatPaymentDateTime,
  formatPaymentRequestId,
  formatStatusLabel,
  isPendingPayment,
  statusPillClass,
} from "@/lib/payment-format";

export type DepositMainTab = "deposit" | "withdraw" | "history";

type Props = {
  balanceUsd: string;
  mmkPerUsd: string;
  initialTab?: DepositMainTab;
};

export function DepositWorkspace({
  balanceUsd,
  mmkPerUsd,
  initialTab = "deposit",
}: Props) {
  const [tab, setTab] = useState<DepositMainTab>(initialTab);
  const [amount, setAmount] = useState("100000");
  const [methodId, setMethodId] = useState(DEPOSIT_METHODS[0]?.id ?? "");
  const [reference, setReference] = useState("");
  const [accountName, setAccountName] = useState("");
  const [phone, setPhone] = useState("");
  const [methodOpen, setMethodOpen] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const { data: paymentsData, isFetching: paymentsLoading } =
    useGetMyPaymentsQuery({ page: 1, limit: 50 });
  const [createDeposit, { isLoading: depositing }] = useCreateDepositMutation();
  const [createWithdraw, { isLoading: withdrawing }] =
    useCreateWithdrawMutation();
  const [cancelPayment, { isLoading: cancelling }] = useCancelPaymentMutation();
  const submitting = depositing || withdrawing;

  const selectedMethod = useMemo(
    () => DEPOSIT_METHODS.find((m) => m.id === methodId) ?? DEPOSIT_METHODS[0],
    [methodId],
  );

  const pendingRows = useMemo(() => {
    const type = tab === "withdraw" ? "withdraw" : "deposit";
    return (paymentsData?.items ?? []).filter((p) =>
      isPendingPayment(p, type),
    );
  }, [paymentsData, tab]);

  const historyItems = useMemo(
    () => paymentsData?.items ?? [],
    [paymentsData],
  );

  function onSideSelect(side: WalletSideTab) {
    if (side === "transactions") return;
    if (side === "deposit" || side === "withdraw" || side === "history") {
      setTab(side);
      setFormError(null);
      setFormSuccess(null);
    }
  }

  async function onCancelPending(id: number) {
    setFormError(null);
    setFormSuccess(null);
    try {
      const cancelled = await cancelPayment({ id }).unwrap();
      setFormSuccess(
        `Cancelled ${formatPaymentRequestId(cancelled.id, cancelled.type)}.`,
      );
    } catch (err) {
      setFormError(extractApiError(err, tab === "withdraw" ? "withdraw" : "deposit"));
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    const n = Number(amount);
    if (!amount || Number.isNaN(n)) {
      setFormError("Please enter a valid amount.");
      return;
    }
    if (n < DEPOSIT_MIN_MMK || n > DEPOSIT_MAX_MMK) {
      setFormError(
        `Amount must be between ${DEPOSIT_MIN_MMK.toLocaleString("en-US")} and ${DEPOSIT_MAX_MMK.toLocaleString("en-US")} MMK.`,
      );
      return;
    }

    try {
      if (tab === "withdraw") {
        const name = accountName.trim();
        const phoneDigits = phone.replace(/\D/g, "");
        if (name.length < 2) {
          setFormError("Enter the account holder name for cashout.");
          return;
        }
        if (phoneDigits.length < 6) {
          setFormError("Enter a valid KBZPay / Wave phone number.");
          return;
        }
        const created = await createWithdraw({
          amountMmk: String(n),
          method: selectedMethod?.label,
          // phone for cashier payout
          reference: phoneDigits,
          // account name for cashier payout
          playerNote: name,
        }).unwrap();
        setFormSuccess(
          `Cashout request ${formatPaymentRequestId(created.id, "withdraw")} submitted. Waiting for admin approval.`,
        );
        setAccountName("");
        setPhone("");
      } else {
        const created = await createDeposit({
          amountMmk: String(n),
          method: selectedMethod?.label,
          reference: reference.trim() || undefined,
        }).unwrap();
        setFormSuccess(
          `Deposit request ${formatPaymentRequestId(created.id, "deposit")} submitted. Waiting for admin approval.`,
        );
        setReference("");
      }
      setAmount("100000");
    } catch (err) {
      setFormError(extractApiError(err, tab === "withdraw" ? "withdraw" : "deposit"));
    }
  }

  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-start lg:gap-5">
      <WalletSidebar
        active={tab === "withdraw" ? "withdraw" : tab === "history" ? "history" : "deposit"}
        balanceUsd={balanceUsd}
        mmkPerUsd={mmkPerUsd}
        onSelect={onSideSelect}
      />

      <div className="min-w-0 flex-1 space-y-4">
        <div className="rounded-xl border border-[#d4af37]/40 bg-[#02150f] px-4 py-5 sm:px-5 sm:py-6">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[#d4af37]/20 pb-4">
            <div>
              <h1 className="font-[family-name:var(--font-cinzel)] text-[1.55rem] font-semibold tracking-[0.14em] text-[#e8c547]">
                {tab === "withdraw"
                  ? "WITHDRAW"
                  : tab === "history"
                    ? "HISTORY"
                    : "DEPOSIT"}
              </h1>
              <p className="mt-1.5 text-[0.9rem] text-[#9a9280]">
                {tab === "withdraw"
                  ? "Request a withdrawal from your wallet."
                  : tab === "history"
                    ? "Review your recent deposit and withdraw requests."
                    : "Add funds to your wallet quickly and securely."}
              </p>
            </div>

            <div className="flex items-center gap-1 rounded-lg border border-[#d4af37]/30 bg-[#01100b] p-1">
              {(["deposit", "withdraw", "history"] as DepositMainTab[]).map(
                (t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`rounded-md px-3.5 py-2 text-[0.82rem] font-semibold capitalize transition ${
                      tab === t
                        ? "bg-[#d4af37] text-[#1a1205]"
                        : "text-[#c5bba3] hover:text-[#e8c547]"
                    }`}
                  >
                    {t}
                  </button>
                ),
              )}
            </div>
          </div>

          {tab === "deposit" || tab === "withdraw" ? (
            <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
              <form onSubmit={onSubmit} className="space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-[0.78rem] font-semibold tracking-[0.1em] text-[#d4af37]">
                    AMOUNT (MMK)
                  </span>
                  <div className="flex items-center overflow-hidden rounded-lg border border-[#d4af37]/45 bg-[#01100b]">
                    <input
                      value={amount}
                      onChange={(e) =>
                        setAmount(e.target.value.replace(/[^\d]/g, ""))
                      }
                      inputMode="numeric"
                      className="w-full bg-transparent px-3.5 py-3 text-[1.05rem] font-semibold text-white outline-none"
                    />
                    <span className="border-l border-[#d4af37]/30 px-3.5 py-3 text-[0.85rem] font-bold text-[#d4af37]">
                      MMK
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.75rem] text-[#9a9280]">
                    Min: {DEPOSIT_MIN_MMK.toLocaleString("en-US")} MMK | Max:{" "}
                    {DEPOSIT_MAX_MMK.toLocaleString("en-US")} MMK
                    {tab === "withdraw"
                      ? ` · Wallet ≈ $${Number(balanceUsd).toLocaleString("en-US", { maximumFractionDigits: 2 })} USD`
                      : ""}
                  </p>
                </label>

                <div className="relative">
                  <span className="mb-1.5 block text-[0.78rem] font-semibold tracking-[0.1em] text-[#d4af37]">
                    {tab === "withdraw" ? "CASHOUT METHOD" : "DEPOSIT METHOD"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMethodOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-lg border border-[#d4af37]/45 bg-[#01100b] px-3.5 py-3 text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <MethodBadge short={selectedMethod?.short ?? "?"} />
                      <span className="text-[0.95rem] font-medium text-white">
                        {selectedMethod?.label}
                      </span>
                    </span>
                    <ChevronIcon open={methodOpen} />
                  </button>
                  {methodOpen ? (
                    <ul className="absolute z-10 mt-1.5 w-full overflow-hidden rounded-lg border border-[#d4af37]/45 bg-[#021a12] shadow-lg">
                      {DEPOSIT_METHODS.map((m) => (
                        <li key={m.id}>
                          <button
                            type="button"
                            onClick={() => {
                              setMethodId(m.id);
                              setMethodOpen(false);
                            }}
                            className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[0.92rem] text-white hover:bg-[#d4af37]/15"
                          >
                            <MethodBadge short={m.short} />
                            {m.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                {tab === "withdraw" ? (
                  <>
                    <label className="block">
                      <span className="mb-1.5 block text-[0.78rem] font-semibold tracking-[0.1em] text-[#d4af37]">
                        ACCOUNT NAME
                      </span>
                      <input
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                        placeholder="Name on KBZPay / Wave account"
                        className="w-full rounded-lg border border-[#d4af37]/45 bg-[#01100b] px-3.5 py-3 text-[0.95rem] text-white placeholder:text-[#6b6560] outline-none focus:border-[#d4af37]"
                        disabled={submitting}
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-[0.78rem] font-semibold tracking-[0.1em] text-[#d4af37]">
                        PHONE NUMBER
                      </span>
                      <input
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value.replace(/[^\d+]/g, ""))
                        }
                        inputMode="tel"
                        placeholder="09xxxxxxxxx"
                        className="w-full rounded-lg border border-[#d4af37]/45 bg-[#01100b] px-3.5 py-3 text-[0.95rem] text-white placeholder:text-[#6b6560] outline-none focus:border-[#d4af37]"
                        disabled={submitting}
                      />
                    </label>
                  </>
                ) : (
                  <label className="block">
                    <span className="mb-1.5 block text-[0.78rem] font-semibold tracking-[0.1em] text-[#d4af37]">
                      REFERENCE / REMARKS{" "}
                      <span className="font-normal text-[#9a9280]">
                        (Optional)
                      </span>
                    </span>
                    <input
                      value={reference}
                      onChange={(e) => setReference(e.target.value)}
                      placeholder="Enter slip / txn reference (optional)"
                      className="w-full rounded-lg border border-[#d4af37]/45 bg-[#01100b] px-3.5 py-3 text-[0.95rem] text-white placeholder:text-[#6b6560] outline-none focus:border-[#d4af37]"
                      disabled={submitting}
                    />
                  </label>
                )}

                {formError ? (
                  <p className="rounded-lg border border-[#e74c3c]/40 bg-[rgba(120,30,30,0.25)] px-3 py-2 text-[0.85rem] text-[#ff8f8f]">
                    {formError}
                  </p>
                ) : null}
                {formSuccess ? (
                  <p className="rounded-lg border border-[#2ecc71]/35 bg-[rgba(22,90,50,0.25)] px-3 py-2 text-[0.85rem] text-[#7dffa3]">
                    {formSuccess}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(180deg,#e0c56a_0%,#d4af37_55%,#b8922a_100%)] px-4 py-3.5 text-[0.95rem] font-extrabold tracking-[0.12em] text-[#1a1205] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <ShieldIcon />
                  {submitting
                    ? "SUBMITTING…"
                    : tab === "withdraw"
                      ? "SUBMIT CASHOUT"
                      : "SUBMIT REQUEST"}
                </button>
              </form>

              {tab === "withdraw" ? <WithdrawInfoCard /> : <DepositInfoCard />}
            </div>
          ) : (
            <PaymentsHistoryTable
              items={historyItems}
              loading={paymentsLoading && !paymentsData}
            />
          )}
        </div>

        {tab === "deposit" || tab === "withdraw" ? (
          <PendingRequestsTable
            rows={pendingRows}
            loading={paymentsLoading && !paymentsData}
            cancelling={cancelling}
            onCancel={onCancelPending}
            onViewHistory={() => setTab("history")}
            title={
              tab === "withdraw" ? "PENDING WITHDRAWS" : "PENDING REQUESTS"
            }
          />
        ) : null}

        <footer className="flex flex-col gap-2 border-t border-[#d4af37]/15 pt-4 text-[0.72rem] text-[#7a7468] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Shwe Dunn Casino. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            Licensed &amp; Regulated | 18+ | Play Responsibly
            <ShieldIcon small />
          </p>
        </footer>
      </div>
    </div>
  );
}

function DepositInfoCard() {
  return (
    <aside className="h-fit rounded-xl border border-[#d4af37]/40 bg-[#01100b] px-4 py-4">
      <h2 className="text-[0.82rem] font-bold tracking-[0.14em] text-[#e8c547]">
        DEPOSIT INFORMATION
      </h2>
      <ul className="mt-4 space-y-3.5">
        <InfoRow icon="clock" label="Processing Time" value="After admin approve" />
        <InfoRow
          icon="bank"
          label="Daily Limit"
          value={`${DEPOSIT_MIN_MMK.toLocaleString("en-US")} – ${DEPOSIT_MAX_MMK.toLocaleString("en-US")} MMK`}
        />
        <InfoRow icon="wallet" label="Transaction Fee" value="Free" />
      </ul>
      <p className="mt-4 text-[0.75rem] leading-relaxed text-[#9a9280]">
        Transfer MMK first, then submit this request with your reference.
        Balance updates after admin approval.
      </p>
    </aside>
  );
}

function WithdrawInfoCard() {
  return (
    <aside className="h-fit rounded-xl border border-[#d4af37]/40 bg-[#01100b] px-4 py-4">
      <h2 className="text-[0.82rem] font-bold tracking-[0.14em] text-[#e8c547]">
        WITHDRAW INFORMATION
      </h2>
      <ul className="mt-4 space-y-3.5">
        <InfoRow icon="clock" label="Processing Time" value="After admin approve" />
        <InfoRow
          icon="bank"
          label="Amount Range"
          value={`${DEPOSIT_MIN_MMK.toLocaleString("en-US")} – ${DEPOSIT_MAX_MMK.toLocaleString("en-US")} MMK`}
        />
        <InfoRow icon="wallet" label="Wallet check" value="USD balance required" />
      </ul>
      <p className="mt-4 text-[0.75rem] leading-relaxed text-[#9a9280]">
        Cashout = withdraw. Enter the name + phone for your KBZPay / Wave
        account so cashier can send money. USD wallet is checked before submit.
      </p>
    </aside>
  );
}

function PendingRequestsTable({
  rows,
  loading,
  cancelling,
  onCancel,
  onViewHistory,
  title = "PENDING REQUESTS",
}: {
  rows: PaymentRequestItem[];
  loading?: boolean;
  cancelling?: boolean;
  onCancel?: (id: number) => void;
  onViewHistory?: () => void;
  title?: string;
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-[#d4af37]/40 bg-[#02150f]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d4af37]/25 px-4 py-3.5">
        <div className="flex items-center gap-2">
          <h2 className="text-[0.95rem] font-bold tracking-[0.08em] text-white">
            {title}
          </h2>
          <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-[#d4af37] px-1.5 py-0.5 text-[0.7rem] font-bold text-[#1a1205]">
            {rows.length}
          </span>
        </div>
        <button
          type="button"
          onClick={onViewHistory}
          className="text-[0.82rem] font-semibold text-[#d4af37] hover:text-[#f0d78c]"
        >
          View All History →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-[0.88rem]">
          <thead>
            <tr className="border-b border-[#d4af37]/20 text-[0.68rem] tracking-[0.12em] text-[#9a9280]">
              <th className="px-4 py-3 font-semibold">REQUEST ID</th>
              <th className="px-4 py-3 font-semibold">DATE &amp; TIME</th>
              <th className="px-4 py-3 font-semibold">METHOD</th>
              <th className="px-4 py-3 font-semibold">AMOUNT (MMK)</th>
              <th className="px-4 py-3 font-semibold">STATUS</th>
              <th className="px-4 py-3 font-semibold">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-[#9a9280]">
                  Loading…
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-[#9a9280]">
                  No pending requests.
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id} className="border-t border-[#d4af37]/15 text-white">
                  <td className="px-4 py-3.5 font-mono text-[0.82rem] text-[#c5bba3]">
                    {formatPaymentRequestId(row.id, row.type)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-[#e8e0d0]">
                    {formatPaymentDateTime(row.createdAt)}
                  </td>
                  <td className="px-4 py-3.5">{row.method ?? "—"}</td>
                  <td className="px-4 py-3.5 font-semibold tabular-nums">
                    {Number(row.amountMmk).toLocaleString("en-US")}
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-[0.7rem] font-bold tracking-wide ${statusPillClass(row.status)}`}
                    >
                      {formatStatusLabel(row.status)}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <button
                      type="button"
                      disabled={cancelling}
                      onClick={() => onCancel?.(row.id)}
                      className="rounded-md border border-[#e74c3c]/45 px-2.5 py-1 text-[0.72rem] font-semibold text-[#ff8f8f] transition hover:bg-[rgba(120,30,30,0.3)] disabled:opacity-50"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PaymentsHistoryTable({
  items,
  loading,
}: {
  items: PaymentRequestItem[];
  loading?: boolean;
}) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-[#d4af37]/35 bg-[#01100b]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-[0.88rem]">
          <thead>
            <tr className="border-b border-[#d4af37]/20 text-[0.68rem] tracking-[0.12em] text-[#9a9280]">
              <th className="px-4 py-3 font-semibold">REQUEST ID</th>
              <th className="px-4 py-3 font-semibold">TYPE</th>
              <th className="px-4 py-3 font-semibold">DATE &amp; TIME</th>
              <th className="px-4 py-3 font-semibold">METHOD</th>
              <th className="px-4 py-3 font-semibold">DETAILS</th>
              <th className="px-4 py-3 font-semibold">AMOUNT (MMK)</th>
              <th className="px-4 py-3 font-semibold">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-[#9a9280]">
                  Loading…
                </td>
              </tr>
            ) : items.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-[#9a9280]">
                  No payment history yet.
                </td>
              </tr>
            ) : (
              items.map((row) => (
                <tr key={row.id} className="border-t border-[#d4af37]/15 text-white">
                  <td className="px-4 py-3.5 font-mono text-[0.82rem] text-[#c5bba3]">
                    {formatPaymentRequestId(row.id, row.type)}
                  </td>
                  <td className="px-4 py-3.5 capitalize">
                    {row.type === "withdraw" ? "cashout" : row.type}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-[#e8e0d0]">
                    {formatPaymentDateTime(row.createdAt)}
                  </td>
                  <td className="px-4 py-3.5">{row.method ?? "—"}</td>
                  <td className="px-4 py-3.5 text-[0.82rem] text-[#c5bba3]">
                    {row.type === "withdraw" ? (
                      <span>
                        {row.playerNote ?? "—"} · {row.reference ?? "—"}
                      </span>
                    ) : (
                      row.reference ?? "—"
                    )}
                  </td>
                  <td className="px-4 py-3.5 font-semibold tabular-nums">
                    {Number(row.amountMmk).toLocaleString("en-US")}
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-[0.7rem] font-bold tracking-wide ${statusPillClass(row.status)}`}
                    >
                      {formatStatusLabel(row.status)}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function extractApiError(
  err: unknown,
  kind: "deposit" | "withdraw" = "deposit",
): string {
  if (err && typeof err === "object" && "data" in err) {
    const data = (err as { data?: { message?: unknown } }).data;
    const message = data?.message;
    if (Array.isArray(message)) return message.join(", ");
    if (typeof message === "string" && message.trim()) return message;
  }
  return kind === "withdraw"
    ? "Could not submit withdraw request. Please try again."
    : "Could not submit deposit request. Please try again.";
}

function MethodBadge({ short }: { short: string }) {
  return (
    <span className="inline-flex size-8 items-center justify-center rounded-md border border-[#d4af37]/45 bg-[#0a2a1c] text-[0.58rem] font-extrabold text-[#e8c547]">
      {short}
    </span>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: "clock" | "bank" | "wallet";
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-[#d4af37]/35 bg-[#02150f] text-[#d4af37]">
        {icon === "clock" ? <ClockIcon /> : null}
        {icon === "bank" ? <BankIcon /> : null}
        {icon === "wallet" ? <WalletGlyph /> : null}
      </span>
      <div>
        <p className="text-[0.72rem] font-semibold tracking-wide text-[#9a9280]">
          {label}
        </p>
        <p className="mt-0.5 text-[0.9rem] font-semibold text-white">{value}</p>
      </div>
    </li>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.8"
      className={`transition ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ShieldIcon({ small = false }: { small?: boolean }) {
  const size = small ? 12 : 16;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5L15 15" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 18h18M12 4l9 6H3l9-6Z" />
    </svg>
  );
}

function WalletGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M16 14.5h2" />
    </svg>
  );
}

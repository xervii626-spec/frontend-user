import type { PaymentRequestItem } from "@/store/api/paymentsApi";

export function formatPaymentRequestId(id: number, type: string): string {
  const prefix = type === "withdraw" ? "WRQ" : "DRQ";
  return `${prefix}-${String(id).padStart(6, "0")}`;
}

export function formatPaymentDateTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function formatStatusLabel(status: string): string {
  return status.toUpperCase();
}

export function statusPillClass(status: string): string {
  const s = status.toLowerCase();
  if (s === "pending") {
    return "border-[#d4af37]/55 bg-[#d4af37]/15 text-[#e8c547]";
  }
  if (s === "approved") {
    return "border-[#2ecc71]/45 bg-[rgba(22,90,50,0.35)] text-[#7dffa3]";
  }
  if (s === "rejected" || s === "cancelled") {
    return "border-[#e74c3c]/45 bg-[rgba(120,30,30,0.35)] text-[#ff8f8f]";
  }
  return "border-[#8a8070]/40 bg-[#1a1a1a] text-[#c5bba3]";
}

export function isPendingDeposit(p: PaymentRequestItem): boolean {
  return p.type === "deposit" && p.status === "pending";
}

export function isPendingPayment(
  p: PaymentRequestItem,
  type?: "deposit" | "withdraw",
): boolean {
  if (p.status !== "pending") return false;
  if (!type) return true;
  return p.type === type;
}

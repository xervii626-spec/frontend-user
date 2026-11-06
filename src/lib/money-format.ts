export function formatUsd(value: string | number | undefined | null): string {
  const n = Number(value ?? 0);
  if (Number.isNaN(n)) return "0.00";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatMmk(usd: string | number | undefined | null, rate: string | number | undefined | null): string {
  const u = Number(usd ?? 0);
  const r = Number(rate ?? 0);
  if (Number.isNaN(u) || Number.isNaN(r)) return "0.00";
  return (u * r).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

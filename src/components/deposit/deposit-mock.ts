export type DepositMethod = {
  id: string;
  label: string;
  short: string;
};

export const DEPOSIT_METHODS: DepositMethod[] = [
  { id: "kbz-wave", label: "KBZ Wave Bank", short: "KBZ" },
  { id: "kbzpay", label: "KBZPay", short: "Pay" },
  { id: "wavepay", label: "WavePay", short: "Wave" },
  { id: "cb-bank", label: "CB Bank", short: "CB" },
];

export const DEPOSIT_MIN_MMK = 10_000;
export const DEPOSIT_MAX_MMK = 5_000_000;

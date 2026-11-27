import type { DailyLoginStatus } from "@/store/api/bonusApi";

const KEY = "sd_daily_login_prompt";

export type DailyLoginPrompt = {
  show: boolean;
  status: Pick<
    DailyLoginStatus,
    "canClaim" | "amountMmk" | "claimDate" | "timezone" | "playOnly"
  >;
};

export function saveDailyLoginPrompt(status: DailyLoginStatus | undefined) {
  if (typeof window === "undefined") return;
  if (!status?.canClaim) {
    sessionStorage.removeItem(KEY);
    return;
  }
  const payload: DailyLoginPrompt = {
    show: true,
    status: {
      canClaim: status.canClaim,
      amountMmk: status.amountMmk,
      claimDate: status.claimDate,
      timezone: status.timezone,
      playOnly: status.playOnly,
    },
  };
  sessionStorage.setItem(KEY, JSON.stringify(payload));
}

export function readDailyLoginPrompt(): DailyLoginPrompt | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as DailyLoginPrompt;
  } catch {
    return null;
  }
}

export function clearDailyLoginPrompt() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(KEY);
}

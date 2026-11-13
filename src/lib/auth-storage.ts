const TOKEN_KEY = "sd_player_token";
const REFRESH_KEY = "sd_player_refresh";
const PLAYER_KEY = "sd_player";
const REMEMBER_KEY = "sd_remember";

export type StoredPlayer = {
  id: number;
  username: string;
  nickname: string;
  currency: string;
  country: string | null;
  isBlocked: boolean;
};

function store(remember: boolean): Storage {
  if (typeof window === "undefined") {
    throw new Error("auth storage is client-only");
  }
  return remember ? window.localStorage : window.sessionStorage;
}

function clearBoth() {
  if (typeof window === "undefined") return;
  for (const s of [window.localStorage, window.sessionStorage]) {
    s.removeItem(TOKEN_KEY);
    s.removeItem(REFRESH_KEY);
    s.removeItem(PLAYER_KEY);
  }
  window.localStorage.removeItem(REMEMBER_KEY);
}

export function saveAuthSession(params: {
  accessToken: string;
  refreshToken: string;
  player: StoredPlayer;
  remember: boolean;
}) {
  clearBoth();
  const s = store(params.remember);
  s.setItem(TOKEN_KEY, params.accessToken);
  s.setItem(REFRESH_KEY, params.refreshToken);
  s.setItem(PLAYER_KEY, JSON.stringify(params.player));
  window.localStorage.setItem(REMEMBER_KEY, params.remember ? "1" : "0");
}

export function patchTokens(
  accessToken: string,
  refreshToken: string,
  remember: boolean,
) {
  const s = store(remember);
  s.setItem(TOKEN_KEY, accessToken);
  s.setItem(REFRESH_KEY, refreshToken);
}

export function loadAuthSession(): {
  accessToken: string;
  refreshToken: string | null;
  player: StoredPlayer;
  remember: boolean;
} | null {
  if (typeof window === "undefined") return null;
  const remember = window.localStorage.getItem(REMEMBER_KEY) === "1";
  const s = store(remember);
  const accessToken = s.getItem(TOKEN_KEY);
  const refreshToken = s.getItem(REFRESH_KEY);
  const raw = s.getItem(PLAYER_KEY);
  if (!accessToken || !raw) return null;
  try {
    const player = JSON.parse(raw) as StoredPlayer;
    if (!player?.id || !player?.username) return null;
    return { accessToken, refreshToken, player, remember };
  } catch {
    return null;
  }
}

export function clearAuthSession() {
  clearBoth();
}

const TOKEN_KEY = "sd_player_token";
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
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(PLAYER_KEY);
  window.localStorage.removeItem(REMEMBER_KEY);
  window.sessionStorage.removeItem(TOKEN_KEY);
  window.sessionStorage.removeItem(PLAYER_KEY);
}

export function saveAuthSession(params: {
  accessToken: string;
  player: StoredPlayer;
  remember: boolean;
}) {
  clearBoth();
  const s = store(params.remember);
  s.setItem(TOKEN_KEY, params.accessToken);
  s.setItem(PLAYER_KEY, JSON.stringify(params.player));
  window.localStorage.setItem(REMEMBER_KEY, params.remember ? "1" : "0");
}

export function loadAuthSession(): {
  accessToken: string;
  player: StoredPlayer;
  remember: boolean;
} | null {
  if (typeof window === "undefined") return null;
  const remember = window.localStorage.getItem(REMEMBER_KEY) === "1";
  const s = store(remember);
  const accessToken = s.getItem(TOKEN_KEY);
  const raw = s.getItem(PLAYER_KEY);
  if (!accessToken || !raw) return null;
  try {
    const player = JSON.parse(raw) as StoredPlayer;
    if (!player?.id || !player?.username) return null;
    return { accessToken, player, remember };
  } catch {
    return null;
  }
}

export function clearAuthSession() {
  clearBoth();
}

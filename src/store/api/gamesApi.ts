import { baseApi } from "./baseApi";

const CMS_ASSET_BASE = "https://www.cmsbetconstruct.com";

export type LobbyGame = {
  /** Numeric id used for /launch/game */
  id: string;
  cmsId: string;
  title: string;
  subtitle: string;
  imageUrl: string | null;
  category: "slots" | "live" | "jackpot" | "popular";
  isNew: boolean;
  isLive: boolean;
  funMode: boolean;
  realMode: boolean;
};

type GamesListResponse = {
  cached?: boolean;
  data?: unknown;
};

function asRecord(v: unknown): Record<string, unknown> | null {
  return v && typeof v === "object" ? (v as Record<string, unknown>) : null;
}

function pickString(obj: Record<string, unknown>, keys: string[]): string {
  for (const k of keys) {
    const v = obj[k];
    if (typeof v === "string" && v.trim()) return v.trim();
    if (typeof v === "number") return String(v);
  }
  return "";
}

function absoluteUrl(path: string | null | undefined): string | null {
  if (!path || typeof path !== "string") return null;
  const p = path.trim();
  if (!p) return null;
  if (p.startsWith("http://") || p.startsWith("https://")) return p;
  if (p.startsWith("//")) return `https:${p}`;
  if (p.startsWith("/")) return `${CMS_ASSET_BASE}${p}`;
  return `${CMS_ASSET_BASE}/${p}`;
}

function pickImage(row: Record<string, unknown>): string | null {
  const direct = pickString(row, [
    "icon_2",
    "icon_3",
    "icon_url",
    "image",
    "image_url",
    "thumbnail",
    "background",
  ]);
  if (direct) return absoluteUrl(direct);

  const icon = asRecord(row.icon);
  if (icon) {
    const nested = pickString(icon, ["icon_2", "icon_3", "background"]);
    if (nested) return absoluteUrl(nested);
  }

  const webp = asRecord(row.webp_icon);
  if (webp) {
    const nested = pickString(webp, ["icon_2", "icon_3", "background"]);
    if (nested) return absoluteUrl(nested);
  }

  return null;
}

function catTitles(row: Record<string, unknown>): string {
  const cats = row.cats;
  if (!Array.isArray(cats)) return "";
  return cats
    .map((c) => {
      const r = asRecord(c);
      return r ? pickString(r, ["title", "name"]) : "";
    })
    .filter(Boolean)
    .join(" ");
}

function detectCategory(row: Record<string, unknown>): LobbyGame["category"] {
  const blob = [
    catTitles(row),
    pickString(row, ["category", "categories", "type", "game_category"]),
    pickString(row, ["name", "game_name", "title"]),
    pickString(asRecord(row.extra_category) ?? {}, ["title", "name"]),
  ]
    .join(" ")
    .toLowerCase();

  if (
    blob.includes("live") ||
    blob.includes("roulette") ||
    blob.includes("baccarat") ||
    blob.includes("blackjack")
  ) {
    return "live";
  }
  if (blob.includes("jackpot")) return "jackpot";
  if (blob.includes("popular") || blob.includes("hot")) return "popular";
  return "slots";
}

function detectNew(row: Record<string, unknown>, index: number): boolean {
  const titles = catTitles(row).toLowerCase();
  if (titles.includes("new")) return true;
  if (row.badge) return true;
  return index < 6;
}

export function normalizeGamesPayload(payload: unknown): LobbyGame[] {
  const root = asRecord(payload);
  const data = asRecord(root?.data) ?? root;
  const listCandidate =
    data?.games ??
    data?.Items ??
    data?.items ??
    data?.list ??
    (Array.isArray(data) ? data : null);

  if (!Array.isArray(listCandidate)) return [];

  return listCandidate
    .map((item, index) => {
      const row = asRecord(item);
      if (!row) return null;

      const cmsId = pickString(row, ["id"]) || `cms-${index}`;
      // Prefer external game id for RGS launch; fallback to CMS id
      const launchId =
        pickString(row, [
          "extearnal_game_id",
          "external_game_id",
          "game_id",
          "id",
        ]) || cmsId;

      const title =
        pickString(row, ["name", "game_name", "title", "gameName"]) ||
        `Game ${index + 1}`;
      const subtitle =
        pickString(row, ["provider_title", "provider", "show_as_provider"]) ||
        "Casino";

      const types = asRecord(row.types);
      const funMode = Number(types?.funMode ?? 1) === 1;
      const realMode = Number(types?.realMode ?? 1) === 1;
      const category = detectCategory(row);
      const isLive = category === "live";

      return {
        id: launchId,
        cmsId,
        title,
        subtitle,
        imageUrl: pickImage(row),
        category,
        isNew: detectNew(row, index),
        isLive,
        funMode,
        realMode,
      } satisfies LobbyGame;
    })
    .filter(Boolean) as LobbyGame[];
}

/** UI fallback when CMS returns empty */
export const FALLBACK_GAMES: LobbyGame[] = [
  {
    id: "f1",
    cmsId: "f1",
    title: "Sweet Fortune",
    subtitle: "Dragon Gold",
    imageUrl: null,
    category: "slots",
    isNew: true,
    isLive: false,
    funMode: false,
    realMode: false,
  },
];

export const gamesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGames: build.query<
      { games: LobbyGame[]; fromFallback: boolean; cached?: boolean },
      { limit?: number; offset?: number; search?: string; category?: string }
    >({
      query: ({ limit = 30, offset = 0, search, category }) => {
        const safeLimit = Math.min(Math.max(limit, 1), 30);
        const params: Record<string, string> = {
          limit: String(safeLimit),
          offset: String(offset),
        };
        if (search) params.search = search;
        if (category && category !== "slots") {
          params.category = category;
        }
        return { url: "/games", params };
      },
      transformResponse: (response: GamesListResponse) => {
        const games = normalizeGamesPayload(response);
        if (games.length === 0) {
          return {
            games: FALLBACK_GAMES,
            fromFallback: true,
            cached: response.cached,
          };
        }
        return { games, fromFallback: false, cached: response.cached };
      },
      providesTags: ["Games"],
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;

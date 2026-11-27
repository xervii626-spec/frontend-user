"use client";

export type LobbyCategory = "slots" | "live" | "jackpot" | "popular";

const CATEGORIES: { key: LobbyCategory; label: string }[] = [
  { key: "slots", label: "Slots" },
  { key: "live", label: "Live Casino" },
  { key: "jackpot", label: "Jackpot" },
  { key: "popular", label: "Popular" },
];

type Props = {
  category: LobbyCategory;
  search: string;
  onCategoryChange: (c: LobbyCategory) => void;
  onSearchChange: (v: string) => void;
};

export function CategorySearchBar({
  category,
  search,
  onCategoryChange,
  onSearchChange,
}: Props) {
  return (
    <div className="flex w-full flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
      <div className="flex flex-wrap items-end gap-5 sm:gap-8">
        {CATEGORIES.map((c) => {
          const active = c.key === category;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => onCategoryChange(c.key)}
              className={`relative pb-2 text-[1.05rem] font-semibold tracking-[0.04em] transition sm:text-[1.12rem] ${
                active
                  ? "text-[#e8c547]"
                  : "text-[#b8ae96] hover:text-[#e8c547]"
              }`}
            >
              {c.label}
              {active ? (
                <span
                  className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[#d4af37]"
                  aria-hidden
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="relative w-full sm:max-w-sm lg:max-w-md">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]">
          <SearchIcon />
        </span>
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search games..."
          className="w-full rounded-full border border-[#d4af37]/40 bg-[#021a12] py-2.5 pl-11 pr-4 text-[0.92rem] text-white placeholder:text-[#7a7a7a] outline-none focus:border-[#d4af37]"
        />
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

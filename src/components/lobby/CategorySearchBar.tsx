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
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {CATEGORIES.map((c) => {
          const active = c.key === category;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => onCategoryChange(c.key)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.92rem] font-semibold transition ${
                active
                  ? "border-[#d4af37] bg-[#d4af37] text-[#1a1205]"
                  : "border-[#d4af37]/60 bg-transparent text-white hover:border-[#e8c547] hover:text-[#e8c547]"
              }`}
            >
              <CategoryIcon name={c.key} active={active} />
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="relative w-full sm:max-w-md lg:max-w-xl">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]">
          <SearchIcon />
        </span>
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search games..."
          className="w-full rounded-full border border-[#d4af37]/45 bg-[#021a12] py-2.5 pl-11 pr-11 text-[0.92rem] text-white placeholder:text-[#7a7a7a] outline-none focus:border-[#d4af37]"
        />
        <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]">
          <FilterIcon />
        </span>
      </div>
    </div>
  );
}

function CategoryIcon({
  name,
  active,
}: {
  name: LobbyCategory;
  active: boolean;
}) {
  const stroke = active ? "#1a1205" : "#d4af37";
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.8,
  } as const;

  if (name === "slots") {
    return (
      <svg {...common} aria-hidden>
        <path d="M12 3 14.5 9.5 21 10l-5 4.2L17.5 21 12 17.5 6.5 21 8 14.2 3 10l6.5-.5L12 3Z" />
      </svg>
    );
  }
  if (name === "live") {
    return (
      <svg {...common} aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M5.5 7A9 9 0 0 0 5.5 17M18.5 7a9 9 0 0 1 0 10" />
      </svg>
    );
  }
  if (name === "jackpot") {
    return (
      <svg {...common} aria-hidden>
        <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
        <path d="M8 6H5a2 2 0 0 0 2 4M16 6h3a2 2 0 0 1-2 4M10 18h4M12 12v6" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden>
      <path d="M12 3 14.5 9.5 21 10l-5 4.2L17.5 21 12 17.5 6.5 21 8 14.2 3 10l6.5-.5L12 3Z" />
    </svg>
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

function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 6h16M7 12h10M10 18h4" />
    </svg>
  );
}

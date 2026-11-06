"use client";

import type { LobbyGame } from "@/store/api/gamesApi";

const GRADIENTS = [
  "from-[#5b2c6f] to-[#1a5276]",
  "from-[#145a32] to-[#0b5345]",
  "from-[#922b21] to-[#1b2631]",
  "from-[#7d3c98] to-[#f5b041]",
  "from-[#1a5276] to-[#154360]",
  "from-[#6c3483] to-[#c0392b]",
  "from-[#0e6655] to-[#1c2833]",
  "from-[#7b241c] to-[#4a235a]",
];

type Props = {
  game: LobbyGame;
  index: number;
  onPlay?: (game: LobbyGame) => void;
};

export function GameCard({ game, index, onPlay }: Props) {
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <button
      type="button"
      onClick={() => onPlay?.(game)}
      className="group flex w-full flex-col overflow-hidden rounded-lg border border-[#d4af37]/55 bg-[#02150f] text-left transition hover:border-[#e8c547]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {game.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={game.imageUrl}
            alt={game.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} aria-hidden />
        )}

        {game.isNew ? (
          <span className="absolute left-2 top-2 rounded-[3px] bg-[#1f9d55] px-1.5 py-0.5 text-[0.65rem] font-bold leading-none text-white">
            NEW
          </span>
        ) : null}
        {game.isLive ? (
          <span className="absolute right-2 top-2 rounded-[3px] bg-[#e11d48] px-1.5 py-0.5 text-[0.65rem] font-bold leading-none text-white">
            LIVE
          </span>
        ) : null}
      </div>

      <div className="border-t border-[#d4af37]/30 bg-[#02120d] px-2.5 py-2 sm:px-3 sm:py-2.5">
        <p className="truncate text-center text-[0.9rem] font-bold leading-tight text-white sm:text-[0.95rem]">
          {game.title}
        </p>
        <p className="mt-1 truncate text-center text-[0.75rem] font-medium leading-tight text-[#d4af37]">
          {game.subtitle}
        </p>
      </div>
    </button>
  );
}

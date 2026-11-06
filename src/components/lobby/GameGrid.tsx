"use client";

import type { LobbyGame } from "@/store/api/gamesApi";
import { GameCard } from "./GameCard";

type Props = {
  games: LobbyGame[];
  loading?: boolean;
  onPlay?: (game: LobbyGame) => void;
};

export function GameGrid({ games, loading, onPlay }: Props) {
  const gridClass =
    "grid w-full grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6";

  if (loading) {
    return (
      <div className={gridClass}>
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg border border-[#d4af37]/20"
          >
            <div className="aspect-[4/3] animate-pulse bg-[#0a2a1c]" />
            <div className="h-12 animate-pulse bg-[#02150f]" />
          </div>
        ))}
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="border border-[#d4af37]/25 bg-[#02150f] px-4 py-12 text-center text-[0.95rem] text-[#9a9280]">
        No games found.
      </div>
    );
  }

  return (
    <div className={gridClass}>
      {games.map((game, index) => (
        <GameCard key={game.id} game={game} index={index} onPlay={onPlay} />
      ))}
    </div>
  );
}

import Image from "next/image";

type SdLogoProps = {
  size?: number;
  className?: string;
  showWordmark?: boolean;
  wordmarkSize?: "sm" | "md" | "lg";
};

export function SdLogo({
  size = 44,
  className = "",
  showWordmark = false,
  wordmarkSize = "sm",
}: SdLogoProps) {
  const titleClass =
    wordmarkSize === "lg"
      ? "text-xl tracking-[0.14em] md:text-2xl"
      : wordmarkSize === "md"
        ? "text-[0.95rem] tracking-[0.14em] md:text-[1.05rem]"
        : "text-[0.78rem] tracking-[0.16em] md:text-[0.85rem]";

  const subClass =
    wordmarkSize === "lg"
      ? "text-[0.62rem] tracking-[0.3em]"
      : wordmarkSize === "md"
        ? "text-[0.58rem] tracking-[0.28em]"
        : "text-[0.55rem] tracking-[0.28em]";

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <Image
        src="/brand/sd-badge-v2.jpg"
        alt="Shwe Dunn"
        width={size}
        height={size}
        className="rounded-full object-cover shadow-[0_0_24px_rgba(212,175,55,0.4)]"
        priority
      />
      {showWordmark ? (
        <div className="leading-[1.15]">
          <p
            className={`font-[family-name:var(--font-cinzel)] font-semibold text-[#e8c547] ${titleClass}`}
          >
            SHWE DUNN
          </p>
          <p
            className={`font-[family-name:var(--font-cinzel)] text-[#d4af37]/90 ${subClass}`}
          >
            ONLINE CASINO
          </p>
        </div>
      ) : null}
    </div>
  );
}

interface CRLogoProps {
  className?: string;
  variant?: "default" | "white" | "compact";
  showWordmark?: boolean;
}

export default function CRLogo({
  className = "",
  variant = "default",
  showWordmark = true,
}: CRLogoProps) {
  const cColor = variant === "white" ? "#FFFFFF" : "#185FA5";
  const rColor = variant === "white" ? "#E2E8F0" : "#374151";
  const wordmarkPrimary = variant === "white" ? "#FFFFFF" : "#185FA5";
  const wordmarkSecondary = variant === "white" ? "#CBD5E1" : "#374151";
  const subtitleColor = variant === "white" ? "#94A3B8" : "#6B7280";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Monogram mark */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <rect width="44" height="44" rx="8" fill={variant === "white" ? "rgba(255,255,255,0.15)" : "#F0F7FF"} />
        {/* C letter */}
        <text
          x="7"
          y="31"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="26"
          fontWeight="700"
          fill={cColor}
          letterSpacing="-1"
        >
          C
        </text>
        {/* R letter */}
        <text
          x="22"
          y="31"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="26"
          fontWeight="700"
          fill={rColor}
          letterSpacing="-1"
        >
          R
        </text>
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <div className="leading-none">
          <div className="flex items-baseline gap-0">
            <span
              style={{ color: wordmarkPrimary }}
              className="font-bold text-base tracking-tight"
            >
              CERTIFY
            </span>
            <span
              style={{ color: wordmarkSecondary }}
              className="font-bold text-base tracking-tight ml-1"
            >
              RIGHT
            </span>
          </div>
          <div
            style={{ color: subtitleColor }}
            className="text-[9px] font-medium tracking-[0.15em] uppercase mt-0.5"
          >
            BUILDING CERTIFICATION
          </div>
        </div>
      )}
    </div>
  );
}

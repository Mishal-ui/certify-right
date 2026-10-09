import Image from "next/image";

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
  const isWhite = variant === "white";

  if (!showWordmark || variant === "compact") {
    return (
      <Image
        src={isWhite ? "/images/cr-mark-white.png" : "/images/cr-mark.png"}
        alt="Certify Right"
        width={512}
        height={512}
        className={`h-10 w-10 object-contain ${className}`}
        priority
      />
    );
  }

  return (
    <Image
      src={isWhite ? "/images/cr-logo-white.png" : "/images/cr-logo-full.png"}
      alt="Certify Right — Building Certification"
      width={1998}
      height={444}
      className={`h-12 w-auto object-contain ${className}`}
      priority
    />
  );
}

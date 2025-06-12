"use client"
import Link from "next/link"

interface DistressedTextLogoProps {
  className?: string
  onClick?: () => void
}

export default function DistressedTextLogo({ className = "", onClick }: DistressedTextLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`font-bold text-white relative inline-block ${className}`}
      style={{
        fontFamily: "'Bebas Neue', Impact, sans-serif",
        letterSpacing: "0.05em",
        textShadow: "1px 1px 0 rgba(0,0,0,0.3)",
        transform: "skew(-5deg, 0)",
      }}
    >
      <span className="relative z-10">AKINU</span>
      <span
        className="absolute inset-0 bg-white opacity-10 z-0"
        style={{
          clipPath:
            "polygon(5% 20%, 80% 15%, 95% 10%, 100% 30%, 98% 50%, 100% 70%, 95% 90%, 5% 95%, 0% 70%, 2% 50%, 0% 30%)",
        }}
      ></span>
    </Link>
  )
}

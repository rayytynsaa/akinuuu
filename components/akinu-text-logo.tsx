"use client"
import Link from "next/link"

interface AkinuTextLogoProps {
  className?: string
  onClick?: () => void
}

export default function AkinuTextLogo({ className = "", onClick }: AkinuTextLogoProps) {
  return (
    <Link href="/" onClick={onClick}>
      <div
        className={`font-bold tracking-wider text-white transform -skew-x-6 ${className}`}
        style={{
          textShadow: "0 0 2px rgba(255,255,255,0.3)",
          fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
        }}
      >
        AKINU
      </div>
    </Link>
  )
}

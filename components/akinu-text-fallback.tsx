"use client"
import Link from "next/link"

interface AkinuTextFallbackProps {
  className?: string
  onClick?: () => void
}

export default function AkinuTextFallback({ className = "", onClick }: AkinuTextFallbackProps) {
  return (
    <Link href="/" onClick={onClick} className={`inline-block ${className}`}>
      <div
        className="text-white font-bold tracking-widest text-3xl md:text-4xl"
        style={{ fontFamily: "AkinuFallback, Arial Black, Impact, sans-serif" }}
      >
        AKINU
      </div>
    </Link>
  )
}

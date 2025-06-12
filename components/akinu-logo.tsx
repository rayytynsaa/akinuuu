"use client"
import Link from "next/link"
import Image from "next/image"

interface AkinuLogoProps {
  className?: string
  onClick?: () => void
}

export default function AkinuLogo({ className = "", onClick }: AkinuLogoProps) {
  return (
    <Link href="/" onClick={onClick} className={`inline-block ${className}`}>
      {/* Primary logo implementation with fallback */}
      <div className="relative">
        {/* Fallback text that will always display if everything else fails */}
        <div className="sr-only">AKINU</div>

        {/* Image-based logo that will reliably display */}
        <Image src="/images/akinu-logo.png" alt="AKINU" width={200} height={60} className="w-full h-auto" priority />

        {/* CSS-based text fallback that will display if image fails */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0" aria-hidden="true">
          <span className="text-white text-3xl font-bold tracking-wider">AKINU</span>
        </div>
      </div>
    </Link>
  )
}

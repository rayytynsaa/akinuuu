"use client"
import Link from "next/link"
import Image from "next/image"

interface AkinuSimpleLogoProps {
  className?: string
  onClick?: () => void
}

export default function AkinuSimpleLogo({ className = "", onClick }: AkinuSimpleLogoProps) {
  return (
    <Link href="/" onClick={onClick} className={`inline-block ${className}`}>
      <div className="relative w-full h-auto">
        {/* We'll use an image for the most accurate representation */}
        <Image src="/images/akinu-logo.png" alt="AKINU" width={200} height={60} className="w-full h-auto" priority />
      </div>
    </Link>
  )
}

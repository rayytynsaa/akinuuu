"use client"
import Link from "next/link"
import Image from "next/image"

interface AkinuImageLogoProps {
  className?: string
  onClick?: () => void
}

export default function AkinuImageLogo({ className = "", onClick }: AkinuImageLogoProps) {
  return (
    <Link href="/" onClick={onClick} className={`inline-block ${className}`}>
      <Image src="/images/akinu-logo.png" alt="AKINU" width={200} height={60} className="w-full h-auto" />
    </Link>
  )
}

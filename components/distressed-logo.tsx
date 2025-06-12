"use client"
import Link from "next/link"

interface DistressedLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  onClick?: () => void
}

export default function DistressedLogo({ className = "", size = "md", onClick }: DistressedLogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  }

  return (
    <Link href="/" onClick={onClick}>
      <svg
        className={`${sizeClasses[size]} ${className}`}
        viewBox="0 0 200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="distressFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
        <mask id="distressMask">
          <rect width="100%" height="100%" fill="white" />
          <rect width="100%" height="100%" fill="black" filter="url(#distressFilter)" opacity="0.3" />
        </mask>
        <g mask="url(#distressMask)">
          <path d="M20 10L30 40H20L15 25L10 40H0L10 10H20Z" fill="white" transform="translate(0, 0)" />
          <path d="M35 10H45L55 25L65 10H75V40H65V25L55 40L45 25V40H35V10Z" fill="white" transform="translate(0, 0)" />
          <path d="M80 10H90V30H105V40H80V10Z" fill="white" transform="translate(0, 0)" />
          <path
            d="M110 10H120L130 25L140 10H150V40H140V25L130 40L120 25V40H110V10Z"
            fill="white"
            transform="translate(0, 0)"
          />
          <path d="M155 10H185V20H175V40H165V20H155V10Z" fill="white" transform="translate(0, 0)" />
        </g>
      </svg>
    </Link>
  )
}

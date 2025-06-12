"use client"

import { useState, useEffect } from "react"
import AkinuLogo from "./akinu-logo"
import AkinuTextFallback from "./akinu-text-fallback"

interface SmartLogoProps {
  className?: string
  onClick?: () => void
}

export default function SmartLogo({ className = "", onClick }: SmartLogoProps) {
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    // Check if the logo is rendering correctly
    const checkRendering = () => {
      try {
        const logoElement = document.querySelector(".logo-container")
        if (logoElement) {
          // If the element contains "#####" or is empty, use fallback
          const text = logoElement.textContent || ""
          if (text.includes("#") || text.trim() === "") {
            setUseFallback(true)
          }
        }
      } catch (error) {
        // If there's any error, use fallback
        setUseFallback(true)
      }
    }

    // Check after a short delay to allow rendering
    const timer = setTimeout(checkRendering, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="logo-container">
      {useFallback ? (
        <AkinuTextFallback className={className} onClick={onClick} />
      ) : (
        <AkinuLogo className={className} onClick={onClick} />
      )}
    </div>
  )
}

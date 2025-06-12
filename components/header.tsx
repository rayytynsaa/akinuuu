"use client"

import Link from "next/link"
import { ShoppingCart, Search, Menu, X, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"
import SearchBar from "./search-bar"
import { useState, useEffect } from "react"
import { useCart } from "@/lib/cart-context"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { state } = useCart()
  const router = useRouter()

  // Track scroll position for UI changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleBack = () => {
    window.history.back()
  }

  const handleForward = () => {
    window.history.forward()
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  const navLinks = [
    { href: "/new-arrivals", label: "New Arrivals" },
    { href: "/best-sellers", label: "Best Sellers" },
    { href: "/gym-gear", label: "Gym Gear" },
    { href: "/accessories", label: "Accessories" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black border-b border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left side - Mobile menu and navigation */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-1 mr-4">
              <Button variant="ghost" size="icon" onClick={handleBack} className="h-8 w-8" aria-label="Go back">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleForward} className="h-8 w-8" aria-label="Go forward">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleRefresh} className="h-8 w-8" aria-label="Refresh page">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[80vw] max-w-[300px] p-0 bg-black border-r border-gray-900">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b border-gray-800">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="w-32 h-10 relative flex items-center justify-center">
                        <img src="/images/new-logo.png" alt="Logo" className="max-h-full max-w-full object-contain" />
                      </div>
                    </Link>
                  </div>
                  <nav className="flex-1 overflow-auto p-4">
                    <ul className="space-y-4">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block py-2 text-lg text-white hover:text-red-500 transition-colors header-text"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="p-4 border-t border-gray-800">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => {
                        setShowSearch(true)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white font-medium hover:text-red-500 transition-colors header-text"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="inline-block">
              <div className="w-32 md:w-40 h-10 md:h-12 relative flex items-center justify-center">
                <img src="/images/new-logo.png" alt="Logo" className="max-h-full max-w-full object-contain" />
              </div>
              <span className="sr-only">Home</span>
            </Link>
          </div>

          {/* Right side - Search and cart */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="flex items-center justify-center hover:text-red-500 transition-colors"
              aria-label={showSearch ? "Close search" : "Open search"}
            >
              <Search className="w-5 h-5" />
            </button>
            <Link href="/cart">
              <Button variant="ghost" className="relative p-1">
                <ShoppingCart className="w-5 h-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.items.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Search bar */}
        {showSearch && (
          <div className="relative">
            <SearchBar />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              onClick={() => setShowSearch(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

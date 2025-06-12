"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { searchProducts, type SearchableProduct } from "@/lib/product-database"
import Link from "next/link"

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchableProduct[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Handle search query changes
  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = searchProducts(query)
      setResults(searchResults)
      setIsSearching(false)
    } else {
      setResults([])
    }
  }, [query])

  // Handle click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim() && results.length > 0) {
      // Navigate to the first result
      router.push(results[0].href)
      setQuery("")
      setResults([])
      setIsFocused(false)
    }
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className="relative py-3 md:py-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Input
            ref={inputRef}
            type="search"
            placeholder="Search products..."
            className="w-full bg-black border border-gray-800 pr-10 text-sm md:text-base h-10 md:h-12"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setIsSearching(true)
            }}
            onFocus={() => setIsFocused(true)}
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
              onClick={clearSearch}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
        <Button variant="ghost" size="icon" type="submit" className="h-10 md:h-12 w-10 md:w-12">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </form>

      {/* Search Results Dropdown */}
      {isFocused && (query.length >= 2 || results.length > 0) && (
        <div className="absolute w-full bg-black border border-gray-800 mt-2 rounded-md shadow-lg z-50 max-h-[60vh] md:max-h-[80vh] overflow-y-auto">
          {isSearching ? (
            <div className="px-4 py-3 text-sm text-gray-400">Searching...</div>
          ) : results.length > 0 ? (
            <>
              <div className="px-4 py-2 text-xs font-semibold text-gray-400 border-b border-gray-800">
                {results.length} {results.length === 1 ? "result" : "results"} found
              </div>
              {results.map((product) => (
                <Link
                  key={`${product.category}-${product.id}`}
                  href={product.href}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors ${
                    product.isComingSoon ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  onClick={(e) => {
                    if (product.isComingSoon) {
                      e.preventDefault()
                    } else {
                      setQuery("")
                      setResults([])
                      setIsFocused(false)
                    }
                  }}
                >
                  <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0 rounded-md overflow-hidden bg-gray-800">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className={`h-full w-full object-cover ${product.isComingSoon ? "filter grayscale" : ""}`}
                    />
                    {product.isComingSoon && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">Soon</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate">{product.name}</h4>
                    <p className="text-xs text-gray-400 truncate">
                      {product.category.replace("-", " ")}
                      {product.subcategory ? ` › ${product.subcategory.replace("-", " ")}` : ""}
                    </p>
                  </div>
                  <div className="text-sm font-medium">{product.price} DT</div>
                </Link>
              ))}
            </>
          ) : query.length >= 2 ? (
            <div className="px-4 py-3 text-sm text-gray-400">
              No results found for "{query}"<p className="text-xs mt-1">Try different keywords or check the spelling</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

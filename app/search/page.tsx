"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { searchProducts, type SearchableProduct } from "@/lib/product-database"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<SearchableProduct[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200])

  // Get unique categories from results
  const categories = [...new Set(results.map((product) => product.category))]

  // Handle search
  useEffect(() => {
    if (initialQuery) {
      setIsSearching(true)
      const searchResults = searchProducts(initialQuery)
      setResults(searchResults)
      setIsSearching(false)
    }
  }, [initialQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setIsSearching(true)
      // Update URL with search query
      const url = new URL(window.location.href)
      url.searchParams.set("q", query)
      window.history.pushState({}, "", url.toString())

      const searchResults = searchProducts(query)
      setResults(searchResults)
      setIsSearching(false)
    }
  }

  // Filter results based on selected categories and price range
  const filteredResults = results.filter((product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesCategory && matchesPrice
  })

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Search Products</h1>

      <form onSubmit={handleSearch} className="mb-8 flex gap-2">
        <Input
          type="search"
          placeholder="Search products..."
          className="max-w-xl"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" disabled={isSearching}>
          {isSearching ? "Searching..." : "Search"}
        </Button>
      </form>

      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </h3>
              <Separator className="mb-4" />

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label htmlFor={`category-${category}`} className="capitalize">
                          {category.replace("-", " ")}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>{priceRange[0]} DT</span>
                      <span>{priceRange[1]} DT</span>
                    </div>
                    <div className="flex gap-4">
                      <Input
                        type="number"
                        min={0}
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-20"
                      />
                      <span className="self-center">to</span>
                      <Input
                        type="number"
                        min={priceRange[0]}
                        max={200}
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search results */}
          <div className="md:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {filteredResults.length} {filteredResults.length === 1 ? "result" : "results"} for "{initialQuery}"
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((product) => (
                <Link
                  key={`${product.category}-${product.id}`}
                  href={product.href}
                  className={`group block ${product.isComingSoon ? "opacity-70 cursor-not-allowed" : ""}`}
                  onClick={(e) => product.isComingSoon && e.preventDefault()}
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-900 relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                        product.isComingSoon ? "filter grayscale" : ""
                      }`}
                    />
                    {product.isComingSoon && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="text-gray-400">{product.price} DT</p>
                    <p className="text-gray-500 mt-1 text-sm line-clamp-2">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            {filteredResults.length === 0 && (
              <div className="text-center py-12 bg-gray-900/50 rounded-lg">
                <p className="text-xl">No products match your filters</p>
                <p className="text-gray-400 mt-2">Try adjusting your search criteria</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategories([])
                    setPriceRange([0, 200])
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {initialQuery && results.length === 0 && !isSearching && (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">No results found for "{initialQuery}"</h2>
          <p className="text-gray-400 mb-8">Try different keywords or check the spelling</p>
          <Link href="/" className="text-red-500 hover:text-red-400 underline">
            Return to homepage
          </Link>
        </div>
      )}

      {!initialQuery && !isSearching && (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">Search for products</h2>
          <p className="text-gray-400 mb-8">Enter keywords to find products across our store</p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="search"
                placeholder="What are you looking for?"
                className="flex-1"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

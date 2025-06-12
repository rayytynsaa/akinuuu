"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const products = {
  "yoga-resistance": {
    name: "Yoga Resistance",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TjEK0esfnDjNAH0oRMCh6xVKdquj4p.png",
    price: 120,
    description:
      "Professional grade resistance bands with multiple resistance levels. Perfect for yoga and stretching exercises.",
    features: [
      "5 resistance levels",
      "Color-coded system",
      "Premium latex material",
      "Includes exercise guide",
      "Perfect for all fitness levels",
    ],
  },
  "strength-rubber": {
    name: "Strength Rubber Band",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5C61JbUe2GIwikwkqRwW2LZOlP7ppK.png",
    price: 120,
    description: "Heavy-duty strength training bands perfect for pull-ups and resistance training.",
    features: [
      "Multiple resistance options",
      "Durable construction",
      "Perfect for pull-ups",
      "Professional grade",
      "Enhanced grip texture",
    ],
  },
  "bands-handles": {
    name: "Bands with Handles",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dLjSwslor2mLvAbb5eZXd8H8jtIXZ1.png",
    price: 120,
    description: "Ergonomic handle resistance bands for comfortable and effective workouts.",
    features: [
      "Comfortable handles",
      "Multiple colors available",
      "Adjustable length",
      "Anti-snap design",
      "Premium grip coating",
    ],
  },
  "yoga-pilates": {
    name: "Yoga Pilates",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RknHj78W3eFBsx5hmbkcL3Diusvhhj.png",
    price: 120,
    description: "Premium quality bands specifically designed for yoga and pilates exercises.",
    features: [
      "Various resistance levels",
      "Extra wide design",
      "Non-slip texture",
      "Includes carry bag",
      "Studio quality material",
    ],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("M")
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return <div>Product not found</div>
  }

  const sizes = ["S", "M", "L", "XL", "XXL"]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-900">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-400">{product.price} DT</p>
          <p className="text-gray-300">{product.description}</p>

          <div>
            <label className="block text-sm font-medium mb-2">SIZE:</label>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center border rounded ${
                    selectedSize === size ? "bg-black text-white border-white" : "border-gray-800 text-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
            <ShoppingCart className="mr-2 h-5 w-5" />
            ADD TO CART - {product.price} DT
          </Button>

          <div className="border-t border-gray-800 pt-6">
            <h3 className="font-medium mb-4">Product Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

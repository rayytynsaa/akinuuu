"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const products = {
  "eco-green": {
    name: "Eco-Friendly Green Mat",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hwWD8Uf0AtPIJcuTAbscmRZaECOO2Z.png",
    price: 120,
    description:
      "Premium eco-friendly exercise mat perfect for yoga and calisthenics. Made from sustainable materials with optimal grip and cushioning.",
    features: [
      "Eco-friendly materials",
      "Non-slip surface",
      "6mm thickness",
      "Easy to clean",
      "Biodegradable construction",
    ],
  },
  "classic-blue": {
    name: "Classic Blue Mat",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6LKSZAl4KqOeTxdtQ4qSjGDPYc1Nst.png",
    price: 120,
    description: "Professional grade exercise mat with perfect density for all types of workouts.",
    features: [
      "Professional grade material",
      "Enhanced durability",
      "Perfect density",
      "Moisture resistant",
      "Anti-bacterial coating",
    ],
  },
  "premium-red": {
    name: "Premium Red Mat",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2i0dc5bUI1h1RZjIzkMdXy2TUl8zwj.png",
    price: 120,
    description:
      "High-density comfort mat designed for intensive training sessions. Superior grip and shock absorption.",
    features: ["High-density foam", "Superior grip", "Shock absorption", "Premium finish", "Extra cushioning"],
  },
  "pro-black": {
    name: "Professional Black Mat",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GKsmcs6w5TZioTo1f3xdD1xRW7RJKO.png",
    price: 120,
    description: "Competition grade exercise mat built for professional athletes. Maximum durability and performance.",
    features: [
      "Competition grade",
      "Maximum durability",
      "Professional design",
      "Premium thickness",
      "Enhanced grip surface",
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

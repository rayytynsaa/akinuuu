"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const products = {
  "mystic-eyes": {
    name: "Mystic Eyes Ring",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rD5xaNXijnHoRCZw14sIcnx5XleIrE.png",
    price: 65,
    description:
      "Channel your inner power with this mystical ring featuring intricate eye designs. Each eye represents awareness and protection, crafted in premium stainless steel with an antique finish.",
    features: [
      "Premium stainless steel construction",
      "Detailed eye engravings",
      "Antique finish",
      "Adjustable size",
      "Tarnish resistant",
    ],
    sizes: ["16mm", "17mm", "18mm", "19mm", "20mm", "21mm"],
  },
  // Add more ring products here
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState(products[params.id as keyof typeof products]?.sizes[0])
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return <div>Product not found</div>
  }

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
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size ? "border-white bg-white text-black" : "border-gray-800 hover:border-gray-600"
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

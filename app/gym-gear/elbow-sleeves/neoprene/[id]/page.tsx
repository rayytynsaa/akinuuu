"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const products = {
  black: {
    name: "Black Neoprene Sleeve",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ke0EyftTLBPvCRUDPhxrIpzAHegd5o.png",
    price: 35,
    description:
      "Professional grade neoprene elbow sleeve designed for maximum support and heat retention. Perfect for heavy lifting and intense training sessions.",
  },
  white: {
    name: "White Neoprene Sleeve",
    image: "/placeholder.svg?height=400&width=400",
    price: 35,
    description:
      "Premium white neoprene elbow sleeve offering superior compression and stability. Ideal for both training and competition use.",
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
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

          <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
            <ShoppingCart className="mr-2 h-5 w-5" />
            ADD TO CART - {product.price} DT
          </Button>

          <div className="border-t border-gray-800 pt-6">
            <h3 className="font-medium mb-4">Product Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Premium neoprene material</li>
              <li>Enhanced heat retention</li>
              <li>Superior compression</li>
              <li>Durable construction</li>
              <li>Competition approved</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

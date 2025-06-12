"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const products = {
  "red-black": {
    name: "Red & Black Breathable Brace",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-He72H34nKU4n583m6Ho8hZOJtcglUm.png",
    price: 35,
    description:
      "Professional grade breathable elbow brace with advanced compression technology. Features a striking red and black design perfect for serious athletes.",
  },
  "pink-black": {
    name: "Pink & Black Breathable Brace",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JLRlTA10EXOhpJ2nbXfaTNNdVG3dUU.png",
    price: 35,
    description:
      "High-performance breathable elbow support with unique pink and black design. Engineered for maximum comfort and stability during intense workouts.",
  },
  "gray-black": {
    name: "Gray & Black Breathable Brace",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OIwR1MCCOKKVDOxW3Cwt8U6uDHU11U.png",
    price: 35,
    description:
      "Premium breathable elbow brace in classic gray and black. Delivers superior support while maintaining optimal ventilation for extended training sessions.",
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
              <li>Advanced compression technology</li>
              <li>Breathable moisture-wicking fabric</li>
              <li>Anatomical fit for maximum comfort</li>
              <li>Perfect for all types of training</li>
              <li>Competition approved design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

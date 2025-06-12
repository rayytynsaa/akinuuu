"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

const products = {
  "classic-black": {
    name: "Classic Black Wrist Wraps",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OmzEEJ4sgwuNfA5gHXzkDvA8wucjnK.png",
    price: 35,
    description: "Professional grade wrist wraps with superior support and comfort.",
  },
  "kanji-black": {
    name: "Kanji Black Wrist Wraps",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OrtaEeRzvNLdqaWQU0bNg0mNOMh8GK.png",
    price: 35,
    description: "Stylish wrist wraps featuring Japanese characters for strength and power.",
  },
  "dragon-white": {
    name: "Dragon White Wrist Wraps",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H3ov3jkI5Y8oll2IKwmeyquaz7OC8L.png",
    price: 35,
    description: "Premium white wrist wraps with elegant dragon design.",
  },
  "blue-wave": {
    name: "Blue Wave Wrist Wraps",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yq1lDRfBbCnLRWUPriR4iGCQsgAmBJ.png",
    price: 35,
    description: "Unique blue wave pattern wrist wraps for maximum style and support.",
  },
  "metallic-red": {
    name: "Metallic Red Wrist Wraps",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G8CagbCB2Orw64AQzW4ZtARsMasyXY.png",
    price: 35,
    description: "Metallic finish wrist wraps with striking red accents.",
  },
  "artistic-red": {
    name: "Artistic Red Wrist Wraps",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H5vtYw0yfWqRFEvH4cgevob38RFmtS.png",
    price: 35,
    description: "Artistic pattern wrist wraps in red and white for a bold look.",
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    addToCart({
      id: params.id,
      name: product.name,
      price: 35,
      image: product.image,
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
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
          <Button size="lg" className="w-full bg-red-600 hover:bg-red-700" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            ADD TO CART - 35 DT
          </Button>
          <div className="border-t border-gray-800 pt-6">
            <h3 className="font-medium mb-4">Product Details</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Premium quality materials</li>
              <li>Adjustable length</li>
              <li>Strong velcro closure</li>
              <li>Machine washable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

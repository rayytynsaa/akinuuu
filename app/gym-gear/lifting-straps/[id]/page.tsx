"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

const products = {
  "why-so-serious": {
    name: "Why So Serious Lifting Straps",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CxPAebHtAwzyjRCYdBD2iXeChbOOON.png",
    price: 35,
    description: "Premium lifting straps with unique joker-inspired design",
    features: [
      "Premium cotton blend material",
      "Reinforced stitching",
      "Secure grip design",
      "Competition approved",
      "Unique joker-inspired pattern",
    ],
  },
  bats: {
    name: "Bats Lifting Straps",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OXNyIAyZp6KIX0ejvx2Nqi91rOfliC.png",
    price: 35,
    description: "Classic lifting straps with bat pattern design",
    features: [
      "Premium cotton blend material",
      "Reinforced stitching",
      "Secure grip design",
      "Competition approved",
      "Bat pattern design",
    ],
  },
  "blood-red": {
    name: "Blood Red Lifting Straps",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SI01SmxyPDHWbBsRuJAa9U2mOp6fmb.png",
    price: 35,
    description: "Professional lifting straps with blood red pattern",
    features: [
      "Premium cotton blend material",
      "Reinforced stitching",
      "Secure grip design",
      "Competition approved",
      "Blood red pattern design",
    ],
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
      price: product.price,
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

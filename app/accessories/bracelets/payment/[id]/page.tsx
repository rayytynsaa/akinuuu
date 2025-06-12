"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

const products = {
  "onepiece-skull": {
    name: "One Piece Skull Bracelet",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N45MYzBJgaTZzfkutyFrnQ6lJmAg7L.png",
    price: 15,
    description: "Straw Hat Pirates leather bracelet",
    details:
      "Premium leather bracelet featuring the iconic Straw Hat Pirates skull emblem. Perfect for One Piece fans and collectors. Made with genuine leather and high-quality metal components.",
    features: [
      "Genuine leather construction",
      "Premium metal skull charm",
      "Adjustable length",
      "Secure clasp mechanism",
      "Water-resistant finish",
    ],
  },
  "akatsuki-cloud": {
    name: "Akatsuki Cloud Bracelet",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IjLu1WZs9K7khWYoEjzZRAjUPtNBbq.png",
    price: 15,
    description: "Naruto Akatsuki red cloud bracelet",
    details:
      "Officially inspired Akatsuki design featuring the iconic red cloud. Crafted with durable leather and metal components. A must-have for Naruto fans.",
    features: [
      "Durable leather construction",
      "High-quality metal components",
      "Officially licensed design",
      "Adjustable sizing",
      "Secure clasp",
    ],
  },
  "aot-wings": {
    name: "Survey Corps Wings Bracelet",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oxDsfbLcoQqUxXrJvZauHmN3JvDAZk.png",
    price: 15,
    description: "Attack on Titan Survey Corps emblem",
    details:
      "Featuring the Wings of Freedom emblem of the Survey Corps. Made with high-quality materials and attention to detail. Perfect for Attack on Titan enthusiasts.",
    features: [
      "High-quality materials",
      "Detailed Wings of Freedom emblem",
      "Durable construction",
      "Comfortable fit",
      "Perfect for fans",
    ],
  },
  "aot-freedom": {
    name: "Wings of Freedom Bracelet",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2MRqyyiY5w9SWYuGFAzhyCIbZNvutC.png",
    price: 15,
    description: "Attack on Titan Wings of Freedom design",
    details:
      "Premium leather bracelet with the iconic Wings of Freedom design. Features detailed metalwork and comfortable wear. A tribute to humanity's strongest soldiers.",
    features: ["Premium leather", "Detailed metalwork", "Comfortable wear", "Secure clasp", "Iconic design"],
  },
  "onepiece-bronze": {
    name: "Straw Hat Bronze Bracelet",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MuP8aPX2xeDVNiFib3K6WVfGVdHLj2.png",
    price: 15,
    description: "One Piece bronze skull design",
    details:
      "Vintage-style bronze finish featuring the Straw Hat Pirates symbol. Handcrafted with premium materials for lasting quality. A unique piece for One Piece collectors.",
    features: [
      "Vintage bronze finish",
      "Straw Hat Pirates symbol",
      "Handcrafted",
      "Premium materials",
      "Unique design",
    ],
  },
  "berserk-band": {
    name: "Berserk Band Bracelet",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZYdLnWywckzGYDKwEbqRXL8A8qu4N4.png",
    price: 15,
    description: "Band of the Hawk inspired bracelet",
    details:
      "Inspired by the legendary Band of the Hawk. Features premium rubber construction with metal plate design. Perfect for fans of the dark fantasy series.",
    features: ["Premium rubber construction", "Metal plate design", "Band of the Hawk inspired", "Durable", "Stylish"],
  },
  "berserk-chain": {
    name: "Berserk Chain Bracelet",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M2FEUEPMGFmBbv6e1Jz5orNbak4aI5.png",
    price: 15,
    description: "Premium metal chain design",
    details:
      "High-quality stainless steel chain bracelet with Berserk-inspired design. Features premium finish and secure clasp. Durable and stylish for everyday wear.",
    features: [
      "High-quality stainless steel",
      "Berserk-inspired design",
      "Premium finish",
      "Secure clasp",
      "Durable and stylish",
    ],
  },
  "fitness-dumbbell": {
    name: "Fitness Dumbbell Bracelet",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1N7G6PC1T7a1bCHOpeUtCnZ4yUXTPQ.png",
    price: 15,
    description: "Beaded bracelet with dumbbell charm",
    details:
      "Natural stone beaded bracelet with stainless steel dumbbell charm. Perfect for fitness enthusiasts and gym lovers. Combines style with motivation.",
    features: [
      "Natural stone beads",
      "Stainless steel dumbbell charm",
      "Adjustable size",
      "Stylish and motivational",
      "Perfect for fitness enthusiasts",
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
      price: 15,
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
          <p className="text-xl text-gray-400">15 DT</p>
          <p className="text-gray-300">{product.details}</p>

          <Button size="lg" className="w-full bg-red-600 hover:bg-red-700" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            ADD TO CART - 15 DT
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

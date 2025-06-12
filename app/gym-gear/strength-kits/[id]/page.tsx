"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const products = {
  "powerlifting-kit": {
    name: "Powerlifting Kit",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFSNponcrHOz0GGQ3CDtKF6avB18RS.png",
    price: 150,
    description:
      "Complete powerlifting support kit designed for serious lifters. Includes everything you need for maximum performance and safety during heavy lifts.",
    features: [
      "Premium Knee Sleeves (7mm neoprene)",
      "Professional Wrist Wraps (pair)",
      "Heavy-Duty Lifting Belt",
      "Chalk Ball for Enhanced Grip",
      "Lifting Straps for Pull Movements",
    ],
    contents: [
      {
        name: "Kanji Knee Sleeves",
        description: "7mm neoprene knee sleeves with Japanese character design",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pmA3WERoiM1ZDL5qOISp9I6SmRCR7b.png",
      },
      {
        name: "Classic Black Wrist Wraps",
        description: "Professional grade wrist wraps with superior support",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OmzEEJ4sgwuNfA5gHXzkDvA8wucjnK.png",
      },
      {
        name: "Premium Lifting Belt",
        description: "Heavy-duty leather belt with secure buckle system",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFSNponcrHOz0GGQ3CDtKF6avB18RS.png",
      },
      {
        name: "Why So Serious Lifting Straps",
        description: "Premium lifting straps with unique joker-inspired design",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CxPAebHtAwzyjRCYdBD2iXeChbOOON.png",
      },
    ],
  },
  "deadlift-kit": {
    name: "Deadlift Specialist Kit",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RlK5VZrT6J7pcuyi1OHoH8uoyHbvcj.png",
    price: 120,
    description:
      "Specialized kit designed specifically for deadlift performance. Includes essential gear for grip strength, back support, and proper form maintenance.",
    features: [
      "Premium Lifting Straps",
      "Deadlift Socks (knee-high)",
      "Liquid Chalk for Maximum Grip",
      "Shin Guards for Protection",
      "Grip Strengthener Tool",
    ],
    contents: [
      {
        name: "Blood Red Lifting Straps",
        description: "Professional lifting straps with blood red pattern",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SI01SmxyPDHWbBsRuJAa9U2mOp6fmb.png",
      },
      {
        name: "Deadlift Socks",
        description: "Knee-high socks to protect shins during deadlifts",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RlK5VZrT6J7pcuyi1OHoH8uoyHbvcj.png",
      },
      {
        name: "Liquid Chalk",
        description: "Quick-drying liquid chalk for enhanced grip",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RlK5VZrT6J7pcuyi1OHoH8uoyHbvcj.png",
      },
    ],
  },
  "bench-kit": {
    name: "Bench Press Kit",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f00Fx7xA2ffH46TRH5BwCcdnM5MvWW.png",
    price: 110,
    description:
      "Complete bench press support kit designed for maximum chest development and safety during pressing movements.",
    features: [
      "Premium Wrist Wraps (extra stiff)",
      "Bench Press Grip Pads",
      "Elbow Sleeves (pair)",
      "Chest Support Band",
      "Grip Training Tools",
    ],
    contents: [
      {
        name: "Dragon White Wrist Wraps",
        description: "Premium white wrist wraps with elegant dragon design",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H3ov3jkI5Y8oll2IKwmeyquaz7OC8L.png",
      },
      {
        name: "Bench Press Grip Pads",
        description: "Silicone grip pads for improved bar control",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f00Fx7xA2ffH46TRH5BwCcdnM5MvWW.png",
      },
      {
        name: "Red & Black Breathable Elbow Brace",
        description: "Professional grade breathable elbow brace with advanced compression",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-He72H34nKU4n583m6Ho8hZOJtcglUm.png",
      },
    ],
  },
  "squat-kit": {
    name: "Squat Support Kit",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFSNponcrHOz0GGQ3CDtKF6avB18RS.png",
    price: 130,
    description:
      "Premium squat support kit designed for maximum leg development and safety during squatting movements.",
    features: [
      "Premium Knee Sleeves (7mm neoprene)",
      "Heavy-Duty Lifting Belt",
      "Squat Shoes with Elevated Heel",
      "Hip Circle Resistance Band",
      "Ankle Support Wraps",
    ],
    contents: [
      {
        name: "Spider Web Knee Sleeves",
        description: "Unique spider web pattern knee sleeves for a bold look",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q3CSoW8o2bGXO3QPZN1uRRsj0WkZu7.png",
      },
      {
        name: "Premium Lifting Belt",
        description: "Heavy-duty leather belt with secure buckle system",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFSNponcrHOz0GGQ3CDtKF6avB18RS.png",
      },
      {
        name: "Hip Circle Resistance Band",
        description: "Fabric resistance band for hip activation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFSNponcrHOz0GGQ3CDtKF6avB18RS.png",
      },
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
            <Tabs defaultValue="features">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="contents">Kit Contents</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="mt-4">
                <h3 className="font-medium mb-4">Product Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="contents" className="mt-4">
                <h3 className="font-medium mb-4">Kit Contents</h3>
                <div className="space-y-4">
                  {product.contents.map((item, index) => (
                    <div key={index} className="flex gap-4 items-center bg-gray-800/50 p-3 rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

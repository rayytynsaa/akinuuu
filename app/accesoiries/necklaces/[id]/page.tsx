"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const products = {
  dumbbell: {
    name: "Dumbbell Warrior Necklace",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2jTlwSkdxiTgvL11CFSqK0I9tn89vl.png",
    price: 55,
    description:
      "Embrace your strength with our premium stainless steel dumbbell pendant. A symbol of dedication and power, perfect for the committed athlete.",
    features: [
      "316L Stainless Steel",
      "High-polish finish",
      "24-inch chain included",
      "Secure clasp mechanism",
      "Tarnish resistant",
    ],
  },
  katana: {
    name: "Shadow Katana Necklace",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OiD4HfTAgbw7aqag7vIFfbo2JHhllB.png",
    price: 60,
    description:
      "Channel your inner warrior with our sleek katana pendant. Featuring intricate detailing and a premium leather cord for the perfect blend of style and strength.",
    features: [
      "Detailed katana design",
      "Premium leather cord",
      "Adjustable length",
      "Antique silver finish",
      "Handcrafted details",
    ],
  },
  thor: {
    name: "Thor's Hammer Pendant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LcA9I2qKdYy9aG9sA90SCOBj7Rh7SM.png",
    price: 65,
    description:
      "Invoke the power of Thor with this intricately designed hammer pendant. Each detail tells a story of strength and determination.",
    features: [
      "Norse-inspired design",
      "Premium chain included",
      "Detailed engravings",
      "Heavy-duty construction",
      "Authentic styling",
    ],
  },
  sword: {
    name: "Warrior's Sword Necklace",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ABAotJ1ssc3fNKNrySDkK1CIzcfLV1.png",
    price: 58,
    description:
      "A symbol of courage and determination, our warrior's sword necklace features clean lines and premium materials for a bold statement.",
    features: [
      "Classic sword design",
      "Premium leather cord",
      "Adjustable length",
      "Durable construction",
      "Antique finish",
    ],
  },
  skull: {
    name: "Ram Skull Pendant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-obI3UtfmbdRSK8jyVRUZ7q56zxkATq.png",
    price: 70,
    description:
      "Make a bold statement with our gothic ram skull pendant. Intricate details and premium craftsmanship create an unforgettable piece.",
    features: ["Detailed skull design", "Heavy-duty chain", "Gothic styling", "Premium finish", "Secure clasp"],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedLength, setSelectedLength] = useState('20"')
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return <div>Product not found</div>
  }

  const chainLengths = ['18"', '20"', '22"', '24"']

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
            <label className="block text-sm font-medium mb-2">CHAIN LENGTH:</label>
            <div className="flex gap-2">
              {chainLengths.map((length) => (
                <button
                  key={length}
                  onClick={() => setSelectedLength(length)}
                  className={`px-4 py-2 border rounded ${
                    selectedLength === length
                      ? "border-white bg-white text-black"
                      : "border-gray-800 hover:border-gray-600"
                  }`}
                >
                  {length}
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

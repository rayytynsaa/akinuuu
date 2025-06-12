import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AccessoryPacks() {
  const products = [
    {
      id: "anime-pack",
      name: "Anime Collector's Pack",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7kWlSrdG6Ck0SLzwE9rfNSVRRael9D.png",
      price: 45,
      description: "Complete anime-themed jewelry set",
    },
    {
      id: "gothic-pack",
      name: "Gothic Collection Pack",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mzFAixBCVN3ZAIO0s6615iYlM7qT3p.png",
      price: 45,
      description: "Premium gothic jewelry collection",
    },
    {
      id: "fitness-pack",
      name: "Fitness Enthusiast Pack",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1N7G6PC1T7a1bCHOpeUtCnZ4yUXTPQ.png",
      price: 45,
      description: "Complete fitness-themed jewelry set",
    },
    {
      id: "premium-pack",
      name: "Premium Jewelry Pack",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-w67RxzdoZtqzwc8goKOuPcY3vDGIFI.png",
      price: 60,
      description: "Deluxe collection of our finest pieces",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Accessory Packs</h1>

      <Alert className="mb-8 border-yellow-500 bg-yellow-500/10">
        <AlertCircle className="h-5 w-5 text-yellow-500" />
        <AlertTitle className="text-yellow-500 font-semibold">Coming Soon</AlertTitle>
        <AlertDescription className="text-yellow-300">
          Our Accessory Packs collection is currently being prepared. Check back soon for our premium jewelry
          collections.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group block opacity-70 cursor-not-allowed">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-900 relative">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover filter grayscale"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Coming Soon</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-medium">{product.name}</h3>
              <p className="text-gray-400">{product.price} DT</p>
              <p className="text-gray-500 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

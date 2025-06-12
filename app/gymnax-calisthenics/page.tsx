import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function GymnaxCalisthenics() {
  const products = [
    {
      name: "Resistance Band",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wUi6Slp0YPOW2RIY3mb46fqXNfKe1l.png",
      href: "/gymnax-calisthenics/resistance-band",
      count: 4,
      description: "Professional Grade Training Bands",
    },
    {
      name: "Mat",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sAxHsV2lgTD8iHWjGCKQvucrJRiRGW.png",
      href: "/gymnax-calisthenics/mat",
      count: 4,
      description: "Premium Exercise Mats",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">GymnaXcalisthenics</h1>

      <Alert className="mb-8 border-yellow-500 bg-yellow-500/10">
        <AlertCircle className="h-5 w-5 text-yellow-500" />
        <AlertTitle className="text-yellow-500 font-semibold">Coming Soon</AlertTitle>
        <AlertDescription className="text-yellow-300">
          Our GymnaXcalisthenics collection is currently being prepared. Check back soon for our premium calisthenics
          equipment.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((product) => (
          <div key={product.name} className="group block opacity-70 cursor-not-allowed">
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
              <p className="text-gray-400">{product.description}</p>
              <p className="text-gray-500 mt-2">{product.count} Products</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

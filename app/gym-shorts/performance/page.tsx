import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PerformanceShorts() {
  const products = [
    {
      id: "skull-performance",
      name: "Skull Performance Shorts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GKfBjNRNC9YBcwFwbsbtNQeBeet8cX.png",
      price: 45,
      description: "Premium skull design performance shorts",
    },
    {
      id: "inferno-performance",
      name: "Inferno Performance Shorts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cR2qbi13T2QoSUBS0DqGGE588YDzpE.png",
      price: 45,
      description: "Red flame design performance shorts",
    },
    {
      id: "dragon-performance",
      name: "Dragon Performance Shorts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SzX6n7nfvFxsaYQvFR84fnYAVGXT94.png",
      price: 45,
      description: "Dragon warrior performance shorts",
    },
    {
      id: "samurai-performance",
      name: "Samurai Performance Shorts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-THxb0d4lSPZqIONnlmWHn3KL3evPt3.png",
      price: 45,
      description: "Samurai sword design performance shorts",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Performance Shorts</h1>

      <Alert className="mb-8 border-yellow-500 bg-yellow-500/10">
        <AlertCircle className="h-5 w-5 text-yellow-500" />
        <AlertTitle className="text-yellow-500 font-semibold">Coming Soon</AlertTitle>
        <AlertDescription className="text-yellow-300">
          Our Performance Shorts collection is currently being prepared. Check back soon for our premium performance
          training shorts.
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

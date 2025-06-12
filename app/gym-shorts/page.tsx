import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function GymShorts() {
  const categories = [
    {
      name: "Mesh Shorts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pta0pOmmD4pIrafZYwfTFBCB74xQqD.png",
      href: "/gym-shorts/mesh",
      description: "Breathable mesh training shorts",
    },
    {
      name: "Performance Shorts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GKfBjNRNC9YBcwFwbsbtNQeBeet8cX.png",
      href: "/gym-shorts/performance",
      description: "High-performance training shorts",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Gym Shorts</h1>

      <Alert className="mb-8 border-yellow-500 bg-yellow-500/10">
        <AlertCircle className="h-5 w-5 text-yellow-500" />
        <AlertTitle className="text-yellow-500 font-semibold">Coming Soon</AlertTitle>
        <AlertDescription className="text-yellow-300">
          Our Gym Shorts collection is currently being prepared. Check back soon for our premium performance and mesh
          shorts.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {categories.map((category) => (
          <div key={category.name} className="group block opacity-70 cursor-not-allowed">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-900 relative">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="h-full w-full object-cover filter grayscale"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Coming Soon</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-medium">{category.name}</h3>
              <p className="text-gray-400">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

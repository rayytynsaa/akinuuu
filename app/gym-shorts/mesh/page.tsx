import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function MeshShorts() {
  const products = [
    {
      id: "arachnid",
      name: "Arachnid Mesh Shorts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pta0pOmmD4pIrafZYwfTFBCB74xQqD.png",
      price: 45,
      description: "Spider web pattern training shorts",
    },
    {
      id: "carnage",
      name: "Carnage Mesh Shorts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IchlkSE31SHJ3jUmlut47pwNt7z4s6.png",
      price: 45,
      description: "Predator teeth design training shorts",
    },
    {
      id: "skull",
      name: "Skull Mesh Shorts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bEJ7Z1nAyK3YF09vDgt36NmAlAHLKu.png",
      price: 45,
      description: "Skull and stitch pattern design",
    },
    {
      id: "reaper",
      name: "Reaper Mesh Shorts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cm3wnABs0XCWLCG9JjqnMaXw4HdN5l.png",
      price: 45,
      description: "Angel of death design shorts",
    },
  ]

  return (
    <div className="pt-32 pb-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Mesh Shorts</h1>

      <Alert className="mb-8 border-yellow-500 bg-yellow-500/10">
        <AlertCircle className="h-5 w-5 text-yellow-500" />
        <AlertTitle className="text-yellow-500 font-semibold">Coming Soon</AlertTitle>
        <AlertDescription className="text-yellow-300">
          Our Mesh Shorts collection is currently being prepared. Check back soon for our premium mesh training shorts.
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

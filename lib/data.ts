export async function getProducts() {
  // Replace this with your actual data fetching logic.  This example uses a hardcoded array.
  return [
    {
      id: "breathable",
      name: "Breathable Brace",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FEZbkpNSTScSxtnwsDsuw1et5ZcwxR.png",
      price: 35,
      description: "Premium breathable elbow support",
    },
    {
      id: "neoprene",
      name: "Neoprene Elbow Sleeves",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ke0EyftTLBPvCRUDPhxrIpzAHegd5o.png",
      price: 35,
      description: "Professional neoprene elbow sleeves",
    },
    // Add more products here as needed.
  ]
}

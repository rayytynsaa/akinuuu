// Product database for search functionality
export type ProductCategory =
  | "wrist-wraps"
  | "knee-sleeves"
  | "gym-bags"
  | "lifting-straps"
  | "elbow-sleeves"
  | "gym-shorts"
  | "accessories"
  | "rings"
  | "necklaces"
  | "bracelets"
  | "strength-kits"

export interface SearchableProduct {
  id: string
  name: string
  category: ProductCategory | string
  subcategory?: string
  href: string
  image: string
  price: number
  description: string
  tags: string[]
  isComingSoon?: boolean
}

// This is our comprehensive product database for search
export const productDatabase: SearchableProduct[] = [
  // Wrist Wraps
  {
    id: "classic-black",
    name: "Classic Black Wrist Wraps",
    category: "wrist-wraps",
    href: "/gym-gear/wrist-wraps/classic-black",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OmzEEJ4sgwuNfA5gHXzkDvA8wucjnK.png",
    price: 35,
    description: "Professional grade wrist wraps with superior support and comfort.",
    tags: ["wrist wraps", "black", "classic", "support", "gym gear", "weightlifting"],
  },
  {
    id: "kanji-black",
    name: "Kanji Black Wrist Wraps",
    category: "wrist-wraps",
    href: "/gym-gear/wrist-wraps/kanji-black",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OrtaEeRzvNLdqaWQU0bNg0mNOMh8GK.png",
    price: 35,
    description: "Stylish wrist wraps featuring Japanese characters for strength and power.",
    tags: ["wrist wraps", "black", "kanji", "japanese", "gym gear", "weightlifting"],
  },
  {
    id: "dragon-white",
    name: "Dragon White Wrist Wraps",
    category: "wrist-wraps",
    href: "/gym-gear/wrist-wraps/dragon-white",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H3ov3jkI5Y8oll2IKwmeyquaz7OC8L.png",
    price: 35,
    description: "Premium white wrist wraps with elegant dragon design.",
    tags: ["wrist wraps", "white", "dragon", "gym gear", "weightlifting"],
  },

  // Knee Sleeves
  {
    id: "kanji",
    name: "Kanji Knee Sleeves",
    category: "knee-sleeves",
    href: "/gym-gear/knee-sleeves/kanji",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pmA3WERoiM1ZDL5qOISp9I6SmRCR7b.png",
    price: 60,
    description: "Premium knee sleeves featuring Japanese characters for strength and power.",
    tags: ["knee sleeves", "kanji", "japanese", "gym gear", "weightlifting", "support"],
  },
  {
    id: "spider",
    name: "Spider Web Knee Sleeves",
    category: "knee-sleeves",
    href: "/gym-gear/knee-sleeves/spider",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q3CSoW8o2bGXO3QPZN1uRRsj0WkZu7.png",
    price: 60,
    description: "Unique spider web pattern knee sleeves for a bold look.",
    tags: ["knee sleeves", "spider", "web", "gym gear", "weightlifting", "support"],
  },

  // Gym Bags
  {
    id: "bereserk",
    name: "Bereserk Bag",
    category: "gym-bags",
    href: "/gym-gear/gym-bags/bereserk",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rldggGpUoDQJHu95qe7IwdUM5Lgqui.png",
    price: 75,
    description: "Premium marble pattern gym bag featuring unique design elements and high-quality construction.",
    tags: ["gym bag", "bereserk", "marble", "gym gear", "bag"],
  },
  {
    id: "goth-bish",
    name: "Goth Bish Deathcore",
    category: "gym-bags",
    href: "/gym-gear/gym-bags/goth-bish",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zy1Pe73WpTBOd1TXx2xEu0tDyX97bA.png",
    price: 75,
    description: "Gothic style gym bag with premium construction and unique design.",
    tags: ["gym bag", "gothic", "deathcore", "gym gear", "bag"],
  },
  {
    id: "zoro",
    name: "Zoro Bag",
    category: "gym-bags",
    href: "/gym-gear/gym-bags/zoro",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W469RHJRxQsaacOQy40rCJ6mwTlQJm.png",
    price: 75,
    description: "One Piece inspired gym bag with premium construction.",
    tags: ["gym bag", "zoro", "one piece", "anime", "gym gear", "bag"],
  },
  {
    id: "baki",
    name: "Baki Hanma",
    category: "gym-bags",
    href: "/gym-gear/gym-bags/baki",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQyy07VaEkP7aEeLDO8y9VJGMxQ5xD.png",
    price: 75,
    description: "Baki inspired design gym bag with premium construction.",
    tags: ["gym bag", "baki", "anime", "gym gear", "bag"],
  },
  {
    id: "red-flame",
    name: "Red Flame",
    category: "gym-bags",
    href: "/gym-gear/gym-bags/red-flame",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qCdHBRhF2QuYUKjTOvvCh6hE3yz7WM.png",
    price: 75,
    description: "Red tribal pattern design gym bag with premium construction.",
    tags: ["gym bag", "red", "flame", "tribal", "gym gear", "bag"],
  },

  // Lifting Straps
  {
    id: "why-so-serious",
    name: "Why So Serious Lifting Straps",
    category: "lifting-straps",
    href: "/gym-gear/lifting-straps/why-so-serious",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CxPAebHtAwzyjRCYdBD2iXeChbOOON.png",
    price: 35,
    description: "Premium lifting straps with unique joker-inspired design",
    tags: ["lifting straps", "joker", "why so serious", "gym gear", "weightlifting"],
  },
  {
    id: "bats",
    name: "Bats Lifting Straps",
    category: "lifting-straps",
    href: "/gym-gear/lifting-straps/bats",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OXNyIAyZp6KIX0ejvx2Nqi91rOfliC.png",
    price: 35,
    description: "Classic lifting straps with bat pattern design",
    tags: ["lifting straps", "bats", "gym gear", "weightlifting"],
  },
  {
    id: "blood-red",
    name: "Blood Red Lifting Straps",
    category: "lifting-straps",
    href: "/gym-gear/lifting-straps/blood-red",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SI01SmxyPDHWbBsRuJAa9U2mOp6fmb.png",
    price: 35,
    description: "Professional lifting straps with blood red pattern",
    tags: ["lifting straps", "blood red", "gym gear", "weightlifting"],
  },

  // Elbow Sleeves
  {
    id: "red-black",
    name: "Red & Black Breathable Brace",
    category: "elbow-sleeves",
    subcategory: "breathable",
    href: "/gym-gear/elbow-sleeves/breathable/red-black",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-He72H34nKU4n583m6Ho8hZOJtcglUm.png",
    price: 35,
    description: "Professional grade breathable elbow brace with advanced compression technology.",
    tags: ["elbow sleeves", "red", "black", "breathable", "gym gear", "support"],
  },

  // Strength Kits
  {
    id: "powerlifting-kit",
    name: "Powerlifting Kit",
    category: "strength-kits",
    href: "/gym-gear/strength-kits/powerlifting-kit",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFSNponcrHOz0GGQ3CDtKF6avB18RS.png",
    price: 150,
    description: "Complete powerlifting support kit designed for serious lifters.",
    tags: ["strength kit", "powerlifting", "gym gear", "weightlifting", "knee sleeves", "wrist wraps", "lifting belt"],
  },
  {
    id: "deadlift-kit",
    name: "Deadlift Specialist Kit",
    category: "strength-kits",
    href: "/gym-gear/strength-kits/deadlift-kit",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RlK5VZrT6J7pcuyi1OHoH8uoyHbvcj.png",
    price: 120,
    description: "Specialized deadlift support kit for maximum performance.",
    tags: ["strength kit", "deadlift", "gym gear", "weightlifting", "lifting straps", "chalk"],
  },
  {
    id: "bench-kit",
    name: "Bench Press Kit",
    category: "strength-kits",
    href: "/gym-gear/strength-kits/bench-kit",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f00Fx7xA2ffH46TRH5BwCcdnM5MvWW.png",
    price: 110,
    description: "Complete bench press support kit for chest development.",
    tags: ["strength kit", "bench press", "gym gear", "weightlifting", "wrist wraps", "elbow sleeves"],
  },
  {
    id: "squat-kit",
    name: "Squat Support Kit",
    category: "strength-kits",
    href: "/gym-gear/strength-kits/squat-kit",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFSNponcrHOz0GGQ3CDtKF6avB18RS.png",
    price: 130,
    description: "Premium squat support kit for leg development.",
    tags: ["strength kit", "squat", "gym gear", "weightlifting", "knee sleeves", "lifting belt"],
  },

  // Accessories - Rings
  {
    id: "kanji-black-ring",
    name: "Kanji Symbol Ring",
    category: "accessories",
    subcategory: "rings",
    href: "/accessories/rings/kanji-black",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-grmzvMGkY0MmZaQrgwLvfjVwSYntP1.png",
    price: 15,
    description: "Japanese character design ring in black stainless steel.",
    tags: ["ring", "kanji", "black", "accessories", "japanese"],
  },

  // Accessories - Necklaces
  {
    id: "berserk-brand",
    name: "Brand of Sacrifice",
    category: "accessories",
    subcategory: "necklaces",
    href: "/accessories/necklaces/berserk-brand",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H8dWMNbwpz8HmJkbUARrL7hjqZ6jxm.png",
    price: 15,
    description: "Berserk Brand of Sacrifice pendant with red enamel detail.",
    tags: ["necklace", "berserk", "brand of sacrifice", "accessories", "anime"],
  },

  // Accessories - Bracelets
  {
    id: "onepiece-skull",
    name: "One Piece Skull Bracelet",
    category: "accessories",
    subcategory: "bracelets",
    href: "/accessories/bracelets/payment/onepiece-skull",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N45MYzBJgaTZzfkutyFrnQ6lJmAg7L.png",
    price: 15,
    description: "Straw Hat Pirates leather bracelet with skull emblem.",
    tags: ["bracelet", "one piece", "skull", "accessories", "anime", "straw hat"],
  },

  // Add more products as needed...
]

// Search function that returns relevant products based on query
export function searchProducts(query: string): SearchableProduct[] {
  if (!query || query.trim() === "") {
    return []
  }

  const searchTerms = query.toLowerCase().trim().split(/\s+/)

  return productDatabase.filter((product) => {
    // Check if any search term matches product fields
    return searchTerms.some((term) => {
      // Check name
      if (product.name.toLowerCase().includes(term)) {
        return true
      }

      // Check description
      if (product.description.toLowerCase().includes(term)) {
        return true
      }

      // Check category and subcategory
      if (
        product.category.toLowerCase().includes(term) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(term))
      ) {
        return true
      }

      // Check tags
      return product.tags.some((tag) => tag.toLowerCase().includes(term))
    })
  })
}

// Function to get product recommendations (can be used for popular products or related items)
export function getProductRecommendations(limit = 5): SearchableProduct[] {
  // For now, just return some random products that are not coming soon
  return productDatabase
    .filter((product) => !product.isComingSoon)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)
}

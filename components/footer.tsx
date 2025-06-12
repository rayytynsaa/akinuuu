import Link from "next/link"
import { Instagram } from "lucide-react"

const PAYMENT_METHODS = [
  {
    id: "edinar",
    name: "E-Dinar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UktbxqHveabjrlkyYaSJPN4bUIw7MN.png",
  },
  {
    id: "mastercard",
    name: "Mastercard",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IPXjFv1bgJ3IoYUVOVt6Q7tyf4l90B.png",
  },
  {
    id: "flouci",
    name: "Flouci",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-X5DUPcy1UE62yLwjR4fdM6mD1cG4AD.png",
  },
  {
    id: "usdt",
    name: "USDT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GHt6JDgUXx4QaMQ8dM9PsD4fzp48sQ.png",
  },
  {
    id: "d17",
    name: "D17",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WaDgncWlAiLDrty0j2m8I2DIUhnkWF.png",
  },
]

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Our Products</h3>
            <ul className="space-y-2 grid grid-cols-2 sm:grid-cols-1 gap-2">
              <li>
                <Link href="/gym-gear/wrist-wraps" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Wrist Wraps
                </Link>
              </li>
              <li>
                <Link href="/gym-gear/knee-sleeves" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Knee Sleeves
                </Link>
              </li>
              <li>
                <Link href="/gym-gear/gym-bags" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Gym Bags
                </Link>
              </li>
              <li>
                <Link href="/gym-gear/lifting-straps" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Lifting Straps
                </Link>
              </li>
              <li>
                <Link href="/gym-gear/elbow-sleeves" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Elbow Sleeves
                </Link>
              </li>
              <li>
                <Link href="/gym-shorts" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Gym Shorts
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Social</h3>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/akinutn_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200 mr-3">
                  <Instagram className="w-5 h-5" />
                </span>
                <span className="text-sm sm:text-base">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@akinutn_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200 mr-3">
                  <TikTokIcon />
                </span>
                <span className="text-sm sm:text-base">TikTok</span>
              </a>
              <a
                href="https://discord.gg/EujEMerG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200 mr-3">
                  <DiscordIcon />
                </span>
                <span className="text-sm sm:text-base">Discord</span>
              </a>
            </div>
            <div className="mt-8">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-gray-900/50 border border-gray-800 px-3 py-2 rounded-lg flex-1 focus:outline-none focus:border-gray-700 transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm whitespace-nowrap"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-4">Secure payment methods</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              {PAYMENT_METHODS.map((method) => (
                <div
                  key={method.id}
                  className="relative h-8 sm:h-10 w-12 sm:w-16 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-md p-2 transition-all hover:bg-white/10"
                  title={method.name}
                >
                  <img
                    src={method.image || "/placeholder.svg"}
                    alt={method.name}
                    className="max-h-5 sm:max-h-6 max-w-full object-contain mix-blend-luminosity hover:mix-blend-normal transition-all"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-6">© {new Date().getFullYear()} AKINU. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

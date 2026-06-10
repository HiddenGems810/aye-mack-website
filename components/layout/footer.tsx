import Link from "next/link"
import { Mail } from "lucide-react"
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-ink-black)] border-t border-[var(--color-concrete-gray)]/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-3xl tracking-widest text-[var(--color-bone-white)] uppercase">Aye Mack</span>
            </Link>
            <p className="text-[var(--color-concrete-gray)] text-sm max-w-sm mb-8 leading-relaxed">
              Saginaw pressure. Real life music. Official site for music, videos, booking, features, and the latest from Aye Mack.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/aye_mack1k" target="_blank" rel="noopener noreferrer" className="text-[var(--color-concrete-gray)] hover:text-[var(--color-saginaw-red)] transition-colors">
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.youtube.com/@ayemack1k806" target="_blank" rel="noopener noreferrer" className="text-[var(--color-concrete-gray)] hover:text-[var(--color-saginaw-red)] transition-colors">
                <FaYoutube size={24} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://www.facebook.com/aye.mack.720377" target="_blank" rel="noopener noreferrer" className="text-[var(--color-concrete-gray)] hover:text-[var(--color-saginaw-red)] transition-colors">
                <FaFacebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest uppercase text-[var(--color-bone-white)] mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/music" className="text-[var(--color-concrete-gray)] hover:text-[var(--color-bone-white)] transition-colors text-sm">Music</Link></li>
              <li><Link href="/videos" className="text-[var(--color-concrete-gray)] hover:text-[var(--color-bone-white)] transition-colors text-sm">Videos</Link></li>
              <li><Link href="/story" className="text-[var(--color-concrete-gray)] hover:text-[var(--color-bone-white)] transition-colors text-sm">Story</Link></li>
              <li><Link href="/epk" className="text-[var(--color-concrete-gray)] hover:text-[var(--color-bone-white)] transition-colors text-sm">EPK</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest uppercase text-[var(--color-bone-white)] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li><Link href="/booking" className="text-[var(--color-concrete-gray)] hover:text-[var(--color-bone-white)] transition-colors text-sm">Booking & Features</Link></li>
              <li className="flex items-center space-x-2 text-[var(--color-concrete-gray)] text-sm">
                <Mail size={16} />
                <span>bookayemack@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-concrete-gray)]/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[var(--color-concrete-gray)] text-xs mb-4 md:mb-0">
            &copy; {currentYear} Aye Mack Music. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[var(--color-concrete-gray)] text-xs">
            <Link href="#" className="hover:text-[var(--color-bone-white)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--color-bone-white)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

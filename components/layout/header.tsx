"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/videos", label: "Videos" },
  { href: "/story", label: "Story" },
  { href: "/epk", label: "EPK" },
  { href: "/booking", label: "Booking" },
]

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-ink-black)]/90 backdrop-blur-md border-b border-[var(--color-concrete-gray)]/10">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 z-50">
          <span className="font-display text-2xl tracking-widest text-[var(--color-bone-white)] uppercase">Aye Mack</span>
          <span className="w-2 h-2 rounded-full bg-[var(--color-saginaw-red)] animate-pulse" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm tracking-widest uppercase transition-colors hover:text-[var(--color-saginaw-red)] ${
                  isActive ? "text-[var(--color-saginaw-red)]" : "text-[var(--color-bone-white)]"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-[var(--color-bone-white)] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[var(--color-ink-black)] z-40 flex flex-col items-center justify-center space-y-8 pt-20">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-display text-2xl tracking-widest uppercase transition-colors ${
                  isActive ? "text-[var(--color-saginaw-red)]" : "text-[var(--color-bone-white)]"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa"

export default function EPKPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-ink-black)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h1 className="font-display text-5xl md:text-7xl tracking-tighter text-[var(--color-bone-white)] uppercase">
            Electronic Press Kit
          </h1>
          <Button asChild>
            <a href="/Aye_Mack_EPK.pdf" download className="flex items-center gap-2">
              <Download size={18} /> Download Full EPK
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="font-display text-2xl tracking-widest text-[var(--color-bone-white)] uppercase mb-6 border-b border-[var(--color-concrete-gray)]/10 pb-2">Biography</h2>
              <div className="prose prose-invert max-w-none text-[var(--color-concrete-gray)]">
                <p><strong>Short Bio:</strong> Aye Mack is a Saginaw, Michigan-based rapper known for his street-level authenticity, emotional grounding, and resilient narrative. Bypassing gimmicks, his music serves as a documentary of real life, driven by a deep work ethic and family legacy.</p>
                <p><strong>Long Bio:</strong> Taking the risk to fully commit to music, Aye Mack has established himself as a powerful independent voice out of Michigan. With projects like <em>Flowworth a Bag</em> and <em>Take Me in or Take Me Out</em>, and singles like <em>Saginaw United</em>, he blends cinematic street grit with studio precision. Mack's sound maps the pressure of survival, loyalty, and ambition. Supported by a loyal local following and growing digital presence, Aye Mack is a working artist building a durable, authentic brand.</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl tracking-widest text-[var(--color-bone-white)] uppercase mb-6 border-b border-[var(--color-concrete-gray)]/10 pb-2">Press Photos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative aspect-square bg-[var(--color-graphite)]">
                   <Image src="/aye_mack_artist.jpg" alt="Press Photo 1" fill className="object-cover" />
                </div>
                <div className="relative aspect-square bg-[var(--color-graphite)]">
                   <Image src="/epk_press_1.png" alt="Press Photo 2" fill className="object-cover" />
                </div>
                <div className="relative aspect-square bg-[var(--color-graphite)]">
                   <Image src="/epk_press_2.png" alt="Press Photo 3" fill className="object-cover" />
                </div>
              </div>
              <p className="text-sm text-[var(--color-concrete-gray)] mt-4">High-resolution images available in the downloadable EPK ZIP.</p>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[var(--color-graphite)] p-8 border border-[var(--color-concrete-gray)]/20">
              <h3 className="font-display text-xl tracking-widest text-[var(--color-bone-white)] uppercase mb-6">Stats & Socials</h3>
              <ul className="space-y-4 text-[var(--color-concrete-gray)]">
                <li className="flex items-center gap-3">
                  <FaInstagram size={20} className="text-[var(--color-saginaw-red)]" />
                  <span>8.8K+ Followers</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaYoutube size={20} className="text-[var(--color-saginaw-red)]" />
                  <span>4.9K+ Subscribers</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaFacebook size={20} className="text-[var(--color-saginaw-red)]" />
                  <span>1.4K+ Page Likes</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-graphite)] p-8 border border-[var(--color-concrete-gray)]/20">
              <h3 className="font-display text-xl tracking-widest text-[var(--color-bone-white)] uppercase mb-6">Contact</h3>
              <ul className="space-y-4 text-[var(--color-concrete-gray)]">
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-[var(--color-saginaw-red)]" />
                  <a href="mailto:bookayemack@example.com" className="hover:text-[var(--color-bone-white)]">bookayemack@example.com</a>
                </li>
                <li>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link href="/booking">Booking Form</Link>
                  </Button>
                </li>
              </ul>
            </div>
            
            <div className="bg-[var(--color-graphite)] p-8 border border-[var(--color-concrete-gray)]/20">
              <h3 className="font-display text-xl tracking-widest text-[var(--color-bone-white)] uppercase mb-6">Key Press</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://shoutoutla.com/meet-aye-mack-music-artist/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-concrete-gray)] hover:text-[var(--color-saginaw-red)] transition-colors underline underline-offset-4">
                    Meet Aye Mack | Music Artist – SHOUTOUT LA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ReleaseCard } from "@/components/ui/release-card"
import { VideoCard } from "@/components/ui/video-card"
import { ArrowRight, Disc, PlayCircle, UserCheck } from "lucide-react"
import { FaInstagram, FaYoutube } from "react-icons/fa"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-ink-black)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-60"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-ink-black)]/40 to-[var(--color-ink-black)] z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" /> {/* Dark overlay for text readability */}
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tighter text-[var(--color-bone-white)] uppercase mb-4 animate-fade-in-up">
            Aye Mack
          </h1>
          <p className="font-display text-xl md:text-3xl text-[var(--color-saginaw-red)] tracking-widest uppercase mb-8 animate-fade-in-up animation-delay-100">
            Saginaw Pressure. Real Life Music.
          </p>
          <p className="max-w-2xl mx-auto text-[var(--color-concrete-gray)] md:text-lg mb-10 animate-fade-in-up animation-delay-200">
            Official site for music, videos, booking, features, and the latest from Aye Mack.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button size="lg" asChild>
              <Link href="/music">Listen Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/booking">Book Aye Mack</Link>
            </Button>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-[var(--color-concrete-gray)] text-sm font-display tracking-widest uppercase animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2"><FaInstagram size={16} /> <span>8.8K+ Followers</span></div>
            <div className="flex items-center gap-2"><FaYoutube size={16} /> <span>4.9K+ Subscribers</span></div>
            <div className="flex items-center gap-2"><Disc size={16} /> <span>Latest: Saginaw United</span></div>
          </div>
        </div>
      </section>

      {/* 2. Latest Release */}
      <section className="py-24 bg-[var(--color-ink-black)] relative border-t border-[var(--color-concrete-gray)]/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl md:text-5xl tracking-widest text-[var(--color-bone-white)] uppercase flex items-center gap-4">
              <span className="w-3 h-3 bg-[var(--color-saginaw-red)] rounded-full animate-pulse" />
              Latest Drop
            </h2>
            <Link href="/music" className="hidden md:flex items-center text-[var(--color-saginaw-red)] hover:text-[var(--color-bone-white)] transition-colors uppercase font-display tracking-widest text-sm">
              All Music <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <ReleaseCard
            title="Saginaw United"
            type="Single"
            date="Mar 13, 2026"
            imageSrc="/saginaw_united_cover.png"
            featured={true}
            links={{
              spotify: "https://open.spotify.com/artist/2gNnWtSL0RYqeQ1k9FID6u",
              apple: "https://music.apple.com/ca/artist/aye-mack/1530997764"
            }}
          />
        </div>
      </section>

      {/* 3. Video Wall */}
      <section className="py-24 bg-[var(--color-graphite)] border-t border-[var(--color-concrete-gray)]/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl md:text-5xl tracking-widest text-[var(--color-bone-white)] uppercase">
              Visuals
            </h2>
            <Link href="/videos" className="hidden md:flex items-center text-[var(--color-saginaw-red)] hover:text-[var(--color-bone-white)] transition-colors uppercase font-display tracking-widest text-sm">
              All Videos <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoCard title="Monday 2 Sunday (Remix)" videoId="1VJayV98vOw" thumbnailUrl="https://img.youtube.com/vi/1VJayV98vOw/hqdefault.jpg" />
            <VideoCard title="Staying Active" videoId="PxghYgLYICY" thumbnailUrl="https://img.youtube.com/vi/PxghYgLYICY/hqdefault.jpg" />
            <VideoCard title="Wont Believe" videoId="nx0Er1_rk3k" thumbnailUrl="https://img.youtube.com/vi/nx0Er1_rk3k/hqdefault.jpg" />
          </div>
        </div>
      </section>

      {/* 4. The Story Teaser */}
      <section className="py-32 bg-[var(--color-ink-black)] relative overflow-hidden border-t border-[var(--color-concrete-gray)]/10">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter text-[var(--color-bone-white)] uppercase mb-8">
            Built off real life,<br/>
            <span className="text-[var(--color-saginaw-red)]">not a character.</span>
          </h2>
          <p className="text-[var(--color-concrete-gray)] md:text-xl mb-10 leading-relaxed">
            From the streets of Saginaw to the studio booth, Aye Mack's music is a documentary of resilience, family legacy, and working-artist momentum. No gimmicks, just pressure.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/story">Read Full Story</Link>
          </Button>
        </div>
      </section>

      {/* 5. Booking CTA */}
      <section className="py-24 bg-[var(--color-saginaw-red)] relative border-t border-[var(--color-concrete-gray)]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-widest text-[var(--color-bone-white)] uppercase mb-6">
            Bookings & Features
          </h2>
          <p className="text-[var(--color-bone-white)]/80 md:text-lg mb-10 max-w-2xl mx-auto">
            Verses, performances, and appearances. For serious inquiries, send project details, budget, timeline, and contact information.
          </p>
          <Button variant="secondary" size="lg" asChild className="bg-[var(--color-ink-black)] hover:bg-[var(--color-ink-black)]/80 text-[var(--color-bone-white)] border-none">
            <Link href="/booking">Submit Inquiry</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

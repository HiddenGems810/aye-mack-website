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
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-ink-black)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-60 scale-105"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-ink-black)] z-10" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center -mt-24">
          <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] tracking-tighter text-[var(--color-bone-white)] uppercase mb-2 animate-fade-in-up drop-shadow-2xl">
            Aye Mack
          </h1>
          <p className="font-display text-xl md:text-3xl text-[var(--color-saginaw-red)] tracking-widest uppercase mb-12 animate-fade-in-up animation-delay-100">
            Saginaw Pressure. Real Life Music.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-200">
            <Button size="lg" className="h-14 px-10 text-lg bg-[var(--color-bone-white)] text-black hover:bg-[var(--color-saginaw-red)] hover:text-white transition-all" asChild>
              <Link href="/music">Listen Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-[var(--color-concrete-gray)] text-[var(--color-bone-white)] hover:border-[var(--color-saginaw-red)] hover:text-[var(--color-saginaw-red)] transition-all bg-black/50 backdrop-blur-sm" asChild>
              <Link href="/booking">Book Aye Mack</Link>
            </Button>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-20 flex flex-wrap justify-center gap-12 text-[var(--color-bone-white)]/70 text-sm font-display tracking-widest uppercase animate-fade-in-up animation-delay-300">
            <a href="https://www.instagram.com/aye_mack1k" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
              <FaInstagram size={18} /> <span>8.8K+ Followers</span>
            </a>
            <a href="https://www.youtube.com/@ayemack1k806" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
              <FaYoutube size={18} /> <span>4.9K+ Subscribers</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Latest Drop (Overlapping Hero) */}
      <section className="relative z-30 -mt-32 px-4 mb-32">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[var(--color-ink-black)] border border-[var(--color-concrete-gray)]/20 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between mb-8 border-b border-[var(--color-concrete-gray)]/10 pb-6">
              <h2 className="font-display text-2xl md:text-3xl tracking-widest text-[var(--color-bone-white)] uppercase flex items-center gap-4">
                <span className="w-3 h-3 bg-[var(--color-saginaw-red)] rounded-full animate-pulse shadow-[0_0_15px_var(--color-saginaw-red)]" />
                Latest Drop
              </h2>
              <Link href="/music" className="hidden md:flex items-center text-[var(--color-concrete-gray)] hover:text-[var(--color-saginaw-red)] transition-colors uppercase font-display tracking-widest text-sm">
                View Catalog <ArrowRight size={16} className="ml-2" />
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
                apple: "https://music.apple.com/us/album/saginaw-united-single/1881872144?uo=4"
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. Cinematic Premiere */}
      <section className="py-24 bg-[var(--color-ink-black)] relative border-t border-[var(--color-concrete-gray)]/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-graphite)]/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-7xl tracking-widest text-[var(--color-bone-white)] uppercase mb-16">
            Premiere
          </h2>
          
          <div className="max-w-6xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[var(--color-concrete-gray)]/20">
            <VideoCard 
              title="Wont Believe" 
              videoId="nx0Er1_rk3k" 
              thumbnailUrl="https://img.youtube.com/vi/nx0Er1_rk3k/hqdefault.jpg" 
            />
          </div>

          <div className="mt-16">
            <Button variant="outline" size="lg" className="h-14 px-10 border-[var(--color-concrete-gray)] text-[var(--color-bone-white)] hover:bg-[var(--color-bone-white)] hover:text-black transition-all font-display tracking-widest uppercase" asChild>
              <Link href="/videos">Enter The Vault</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Editorial Magazine Story */}
      <section className="bg-[var(--color-graphite)] border-t border-[var(--color-concrete-gray)]/10">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          {/* Left: Image spanning edge-to-edge */}
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
            <Image 
              src="/epk_press_1.png" 
              alt="Aye Mack Live Performance"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-graphite)] lg:from-transparent to-transparent lg:bg-gradient-to-r lg:to-[var(--color-graphite)]" />
          </div>
          
          {/* Right: Typography */}
          <div className="lg:w-1/2 flex items-center justify-center p-12 lg:p-24">
            <div className="max-w-xl">
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter text-[var(--color-bone-white)] uppercase leading-none mb-8">
                Built off<br/>
                <span className="text-[var(--color-saginaw-red)]">real life.</span><br/>
                Not a character.
              </h2>
              <div className="w-16 h-1 bg-[var(--color-saginaw-red)] mb-8" />
              <p className="text-[var(--color-concrete-gray)] text-lg md:text-xl font-light leading-relaxed mb-10">
                From the streets of Saginaw to the studio booth, Aye Mack's music is a raw documentary of resilience, family legacy, and working-artist momentum. No industry gimmicks. Just pressure.
              </p>
              <Button variant="outline" size="lg" className="border-[var(--color-saginaw-red)] text-[var(--color-saginaw-red)] hover:bg-[var(--color-saginaw-red)] hover:text-white transition-all rounded-none uppercase font-display tracking-widest h-14 px-8" asChild>
                <Link href="/story">Read The Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tour Poster Booking CTA */}
      <section className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden">
        {/* Gritty Texture + Red Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-30"
          style={{ backgroundImage: "url('/intro_flow_cover.png')" }}
        />
        <div className="absolute inset-0 bg-[var(--color-saginaw-red)]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-black)] to-transparent" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] tracking-tighter text-white uppercase leading-none mb-6 drop-shadow-2xl">
            Secure The<br/>Energy.
          </h2>
          <p className="text-white/80 md:text-xl mb-12 max-w-2xl mx-auto font-light tracking-wide">
            Available for live performances, exclusive verses, hosting, and press appearances. Bring Aye Mack to your city.
          </p>
          <Button size="lg" className="h-16 px-12 text-xl bg-white text-[var(--color-saginaw-red)] hover:bg-black hover:text-white transition-all font-display tracking-widest uppercase shadow-2xl" asChild>
            <Link href="/booking">Submit Inquiry</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

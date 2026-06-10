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
            <source src="/hero-bg.mp4#t=30" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] tracking-tighter text-[var(--color-bone-white)] uppercase mb-4 animate-fade-in-up drop-shadow-2xl">
            Aye Mack
          </h1>
          <p className="font-display text-xl md:text-3xl text-[var(--color-saginaw-red)] tracking-widest uppercase mb-10 animate-fade-in-up animation-delay-100">
            Saginaw Pressure. Real Life Music.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-200">
            <Button size="lg" className="h-14 px-10 text-lg bg-[var(--color-saginaw-red)] text-white hover:bg-white hover:text-[var(--color-saginaw-red)] transition-all uppercase font-display tracking-widest" asChild>
              <Link href="/music">Listen Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-[var(--color-bone-white)] text-[var(--color-bone-white)] hover:border-[var(--color-saginaw-red)] hover:text-[var(--color-saginaw-red)] transition-all bg-black/50 backdrop-blur-sm uppercase font-display tracking-widest" asChild>
              <Link href="/booking">Lock In</Link>
            </Button>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-16 flex flex-wrap justify-center gap-10 text-[var(--color-bone-white)]/80 text-sm font-display tracking-widest uppercase animate-fade-in-up animation-delay-300">
            <a href="https://www.instagram.com/aye_mack1k" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
              <FaInstagram size={18} /> <span>8.8K+ Followers</span>
            </a>
            <a href="https://www.youtube.com/@ayemack1k806" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
              <FaYoutube size={18} /> <span>4.9K+ Subscribers</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Latest Release - Cinematic */}
      <section className="py-32 relative overflow-hidden">
        {/* Cinematic Edge-to-Edge Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-xl scale-110"
          style={{ backgroundImage: "url('/saginaw_united_cover.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[var(--color-graphite)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-display text-4xl md:text-5xl tracking-widest text-[var(--color-bone-white)] uppercase flex items-center gap-4">
              <span className="w-3 h-3 bg-[var(--color-saginaw-red)] rounded-full animate-pulse shadow-[0_0_15px_var(--color-saginaw-red)]" />
              Fresh Out The Booth
            </h2>
            <Link href="/music" className="hidden md:flex items-center text-[var(--color-concrete-gray)] hover:text-[var(--color-saginaw-red)] transition-colors uppercase font-display tracking-widest text-sm">
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
              apple: "https://music.apple.com/us/album/saginaw-united-single/1881872144?uo=4"
            }}
          />
        </div>
      </section>

      {/* 3. Video Wall - Cinematic */}
      <section className="py-32 relative overflow-hidden">
        {/* Cinematic Edge-to-Edge Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 grayscale scale-105"
          style={{ backgroundImage: "url('/epk_press_1.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-graphite)] via-black/90 to-black" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-display text-4xl md:text-5xl tracking-widest text-[var(--color-bone-white)] uppercase">
              The Vision
            </h2>
            <Link href="/videos" className="hidden md:flex items-center text-[var(--color-concrete-gray)] hover:text-[var(--color-saginaw-red)] transition-colors uppercase font-display tracking-widest text-sm">
              Enter The Vault <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoCard title="Monday 2 Sunday (Remix)" videoId="1VJayV98vOw" thumbnailUrl="https://img.youtube.com/vi/1VJayV98vOw/hqdefault.jpg" />
            <VideoCard title="Staying Active" videoId="PxghYgLYICY" thumbnailUrl="https://img.youtube.com/vi/PxghYgLYICY/hqdefault.jpg" />
            <VideoCard title="Wont Believe" videoId="nx0Er1_rk3k" thumbnailUrl="https://img.youtube.com/vi/nx0Er1_rk3k/hqdefault.jpg" />
          </div>
        </div>
      </section>

      {/* 4. The Story Teaser - Split Layout */}
      <section className="py-24 lg:py-32 bg-[var(--color-ink-black)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--color-graphite)]/10 to-black pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Side (Left) */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-display text-5xl md:text-7xl tracking-tighter text-[var(--color-bone-white)] uppercase mb-8 leading-none drop-shadow-lg">
                This ain't no industry gimmick.
              </h2>
              <div className="w-16 h-1 bg-[var(--color-saginaw-red)] mb-8 shadow-[0_0_10px_var(--color-saginaw-red)]" />
              <p className="text-[var(--color-concrete-gray)] md:text-xl mb-12 leading-relaxed font-light">
                This is real life documented. From the Saginaw streets to the booth, every track is pure pressure. Built off real life, not a character.
              </p>
              <Button variant="outline" size="lg" className="h-14 px-10 border-[var(--color-bone-white)] text-[var(--color-bone-white)] hover:bg-white hover:text-black transition-all font-display tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.1)]" asChild>
                <Link href="/story">Read The Story</Link>
              </Button>
            </div>
            
            {/* Image Side (Right) */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[var(--color-concrete-gray)]/10 group">
                <Image 
                  src="/aye_mack_artist.jpg" 
                  alt="Aye Mack"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                {/* Inner shadow/vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Booking CTA - Cinematic */}
      <section className="py-40 relative overflow-hidden">
        {/* Cinematic Edge-to-Edge Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/intro_flow_cover.png')" }}
        />
        <div className="absolute inset-0 bg-[var(--color-saginaw-red)]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-widest text-[var(--color-bone-white)] uppercase mb-8 drop-shadow-2xl">
            Lock In
          </h2>
          <p className="text-[var(--color-bone-white)]/90 md:text-xl mb-12 max-w-2xl mx-auto font-light tracking-wide drop-shadow-md">
            Need that Saginaw pressure in your city? Hit the line for live performances, exclusive verses, and hosting. Secure the energy.
          </p>
          <Button size="lg" className="h-16 px-12 text-xl bg-[var(--color-bone-white)] text-[var(--color-saginaw-red)] hover:bg-black hover:text-[var(--color-bone-white)] transition-all font-display tracking-widest uppercase shadow-2xl" asChild>
            <Link href="/booking">Submit Inquiry</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

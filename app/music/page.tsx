import { ReleaseCard } from "@/components/ui/release-card"

export default function MusicPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-ink-black)]">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl md:text-7xl tracking-tighter text-[var(--color-bone-white)] uppercase mb-12">
          Music
        </h1>
        
        {/* Latest Release Featured */}
        <div className="mb-24">
          <h2 className="font-display text-3xl tracking-widest text-[var(--color-bone-white)] uppercase mb-8 flex items-center gap-4">
            <span className="w-3 h-3 bg-[var(--color-saginaw-red)] rounded-full animate-pulse" />
            Latest Drop
          </h2>
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

        {/* Catalog Grid */}
        <div className="mb-24">
          <h2 className="font-display text-3xl tracking-widest text-[var(--color-bone-white)] uppercase mb-8">
            Singles & Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ReleaseCard
              title="So Lucky"
              type="Single"
              date="2025"
              imageSrc="/aye_mack_so_lucky.jpg"
              links={{ 
                spotify: "https://open.spotify.com/artist/2gNnWtSL0RYqeQ1k9FID6u", 
                apple: "https://music.apple.com/us/album/so-lucky-single/1535240771?uo=4" 
              }}
            />
            <ReleaseCard
              title="Connected ft. Jadakiss"
              type="Single"
              date="2024"
              imageSrc="/connected_cover.png"
              links={{ 
                spotify: "https://open.spotify.com/artist/2gNnWtSL0RYqeQ1k9FID6u", 
                apple: "https://music.apple.com/us/artist/aye-mack/1530997764" 
              }}
            />
            <ReleaseCard
              title="Pay Attention"
              type="Single"
              date="2024"
              imageSrc="/pay_attention_cover.png"
              links={{ 
                spotify: "https://open.spotify.com/artist/2gNnWtSL0RYqeQ1k9FID6u", 
                apple: "https://music.apple.com/us/artist/aye-mack/1530997764" 
              }}
            />
            <ReleaseCard
              title="Talking Heavy"
              type="Single"
              date="2024"
              imageSrc="/talking_heavy_cover.png"
              links={{ 
                spotify: "https://open.spotify.com/artist/2gNnWtSL0RYqeQ1k9FID6u", 
                apple: "https://music.apple.com/us/artist/aye-mack/1530997764" 
              }}
            />
            <ReleaseCard
              title="Intro Flow"
              type="Single"
              date="2024"
              imageSrc="/intro_flow_cover.png"
              links={{ 
                spotify: "https://open.spotify.com/artist/2gNnWtSL0RYqeQ1k9FID6u", 
                apple: "https://music.apple.com/us/artist/aye-mack/1530997764" 
              }}
            />
            <ReleaseCard
              title="Staying Active"
              type="Single"
              date="2024"
              imageSrc="/staying_active_cover.png"
              links={{ 
                spotify: "https://open.spotify.com/artist/2gNnWtSL0RYqeQ1k9FID6u", 
                apple: "https://music.apple.com/us/artist/aye-mack/1530997764" 
              }}
            />
            <ReleaseCard
              title="MackSauce ft. Sauce Walka"
              type="Single"
              date="2023"
              imageSrc="/aye_mack_cover2_hd.jpg"
              links={{ 
                spotify: "https://open.spotify.com/artist/2gNnWtSL0RYqeQ1k9FID6u", 
                apple: "https://music.apple.com/us/artist/aye-mack/1530997764" 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

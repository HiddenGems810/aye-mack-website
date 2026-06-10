import { VideoCard } from "@/components/ui/video-card"

export default function VideosPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-ink-black)]">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl md:text-7xl tracking-tighter text-[var(--color-bone-white)] uppercase mb-12">
          Visuals
        </h1>
        
        {/* Featured Premiere */}
        <div className="mb-24">
          <h2 className="font-display text-3xl tracking-widest text-[var(--color-bone-white)] uppercase mb-8 flex items-center gap-4">
            <span className="w-3 h-3 bg-[var(--color-saginaw-red)] rounded-full animate-pulse" />
            Premiere
          </h2>
          <div className="w-full max-w-5xl">
            <VideoCard 
              title="Wont Believe" 
              videoId="nx0Er1_rk3k" 
              thumbnailUrl="https://img.youtube.com/vi/nx0Er1_rk3k/hqdefault.jpg" 
            />
          </div>
        </div>

        {/* The Vault */}
        <div>
          <h2 className="font-display text-3xl tracking-widest text-[var(--color-bone-white)] uppercase mb-8 border-b border-[var(--color-concrete-gray)]/10 pb-4">
            The Vault
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoCard 
              title="Monday 2 Sunday (Remix)" 
              videoId="1VJayV98vOw" 
              thumbnailUrl="https://img.youtube.com/vi/1VJayV98vOw/hqdefault.jpg" 
            />
            <VideoCard 
              title="Staying Active" 
              videoId="PxghYgLYICY" 
              thumbnailUrl="https://img.youtube.com/vi/PxghYgLYICY/hqdefault.jpg" 
            />
            <VideoCard 
              title="Staying Active (Interview Pt. 1)" 
              videoId="a1CpMl4YcOM" 
              thumbnailUrl="https://img.youtube.com/vi/a1CpMl4YcOM/hqdefault.jpg" 
            />
            <VideoCard 
              title="Intro Flow" 
              videoId="_jv1tUCLo7s" 
              thumbnailUrl="https://img.youtube.com/vi/_jv1tUCLo7s/hqdefault.jpg" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

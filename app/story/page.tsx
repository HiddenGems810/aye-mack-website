import Image from "next/image"

export default function StoryPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-ink-black)]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl tracking-tighter text-[var(--color-bone-white)] uppercase mb-12">
          The Story
        </h1>
        
        <div className="relative w-full aspect-[21/9] mb-16 grayscale">
          <Image
            src="/aye_mack_artist.jpg"
            alt="Aye Mack in Saginaw"
            fill
            className="object-cover border border-[var(--color-concrete-gray)]/20"
          />
        </div>

        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-widest prose-a:text-[var(--color-saginaw-red)]">
          <h2 className="text-3xl text-[var(--color-bone-white)] border-b border-[var(--color-concrete-gray)]/10 pb-4 mb-8">
            Built Off Real Life, Not a Character
          </h2>
          
          <p className="text-[var(--color-concrete-gray)] leading-relaxed">
            Hailing from Saginaw, Michigan, Aye Mack is a working artist whose music is deeply rooted in lived experience. In an industry often dominated by manufactured images and trends, Mack stands out for his emotional grounding, directness, and street-level authenticity. His sound is the pressure of the city translated into music.
          </p>
          
          <p className="text-[var(--color-concrete-gray)] leading-relaxed">
            Taking the biggest risk of his life by fully committing to his musical journey, Aye Mack has built a foundation on consistency, resilience, and a deep sense of family legacy. He is not afraid to speak on fatherhood, betrayal, loyalty, and the daily grind of survival.
          </p>

          <blockquote className="border-l-4 border-[var(--color-saginaw-red)] pl-6 py-2 my-10 italic text-[var(--color-bone-white)] bg-[var(--color-graphite)]/30">
            "I built this off real life... Everything you hear in the music is something I’ve lived, something I’ve seen, or something I’ve felt. It’s a documentary."
          </blockquote>

          <h3 className="text-2xl text-[var(--color-bone-white)] mt-12 mb-6">
            The Saginaw Influence
          </h3>

          <p className="text-[var(--color-concrete-gray)] leading-relaxed">
            Saginaw is more than just a backdrop; it’s a character in his story. The city's grit, its challenges, and its unyielding spirit are woven into every track, from "Intro Flow" to "Saginaw United." Mack acknowledges that his environment shaped his work ethic—a relentless drive to provide, survive, and leave a mark.
          </p>

          <p className="text-[var(--color-concrete-gray)] leading-relaxed">
            Supported by key producers, engineers, and a strong family foundation, Aye Mack continues to build momentum independently, proving that raw, honest rap still commands respect and attention.
          </p>
        </article>
      </div>
    </div>
  )
}

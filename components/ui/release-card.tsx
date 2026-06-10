import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"
import { Play } from "lucide-react"

interface ReleaseCardProps {
  title: string
  type: string
  date: string
  imageSrc: string
  links: {
    spotify?: string
    apple?: string
    youtube?: string
  }
  featured?: boolean
}

export function ReleaseCard({ title, type, date, imageSrc, links, featured = false }: ReleaseCardProps) {
  return (
    <div className={`group relative overflow-hidden bg-[var(--color-graphite)] border border-[var(--color-concrete-gray)]/20 transition-all duration-300 hover:border-[var(--color-saginaw-red)]/50 ${featured ? 'flex flex-col md:flex-row' : 'flex flex-col'}`}>
      <div className={`relative overflow-hidden ${featured ? 'w-full md:w-1/2 aspect-square' : 'w-full aspect-square'}`}>
        <Image
          src={imageSrc}
          alt={`${title} cover art`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-black)]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
           {links.spotify && (
             <Link href={links.spotify} target="_blank" rel="noopener noreferrer">
               <div className="w-16 h-16 rounded-full bg-[var(--color-saginaw-red)] flex items-center justify-center text-[var(--color-bone-white)] shadow-lg hover:scale-110 transition-transform">
                 <Play className="w-8 h-8 ml-1" />
               </div>
             </Link>
           )}
        </div>
      </div>
      
      <div className={`flex flex-col p-6 md:p-10 ${featured ? 'w-full md:w-1/2 justify-center space-y-6 bg-gradient-to-br from-[var(--color-graphite)] to-[var(--color-ink-black)]' : 'flex-1 justify-between'}`}>
        <div>
          <div className="flex items-center space-x-2 text-xs md:text-sm font-display tracking-widest text-[var(--color-saginaw-red)] mb-3 uppercase">
            <span>{type}</span>
            <span className="text-[var(--color-concrete-gray)]">&bull;</span>
            <span className="text-[var(--color-concrete-gray)]">{date}</span>
          </div>
          <h3 className={`font-display tracking-wide text-[var(--color-bone-white)] uppercase ${featured ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-4">
          {links.spotify && (
            <Button variant="outline" size="sm" asChild>
              <Link href={links.spotify} target="_blank" rel="noopener noreferrer">Spotify</Link>
            </Button>
          )}
          {links.apple && (
            <Button variant="outline" size="sm" asChild>
              <Link href={links.apple} target="_blank" rel="noopener noreferrer">Apple Music</Link>
            </Button>
          )}
          {links.youtube && (
            <Button variant="outline" size="sm" asChild>
              <Link href={links.youtube} target="_blank" rel="noopener noreferrer">YouTube</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface VideoCardProps {
  title: string
  videoId: string
  thumbnailUrl: string
}

export function VideoCard({ title, videoId, thumbnailUrl }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="group relative w-full aspect-video bg-[var(--color-ink-black)] overflow-hidden border border-[var(--color-concrete-gray)]/20 cursor-pointer" onClick={() => setIsPlaying(true)}>
      {!isPlaying ? (
        <>
          <img
            src={thumbnailUrl}
            alt={title}
            className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
          
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-[var(--color-saginaw-red)]/90 flex items-center justify-center text-[var(--color-bone-white)] shadow-lg group-hover:scale-110 transition-transform duration-300">
               <Play className="w-8 h-8 ml-1" />
             </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--color-ink-black)] to-transparent">
            <h3 className="font-display text-xl tracking-wide uppercase text-[var(--color-bone-white)] truncate">{title}</h3>
          </div>
        </>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        ></iframe>
      )}
    </div>
  )
}

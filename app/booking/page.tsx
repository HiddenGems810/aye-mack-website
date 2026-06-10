"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[var(--color-ink-black)] flex flex-col md:flex-row">
      {/* Left Column: The Pitch & Trust Signals */}
      <div className="w-full md:w-5/12 lg:w-1/2 relative flex flex-col justify-between pt-32 pb-16 px-8 lg:px-16 bg-black">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('/intro_flow_cover.png')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

        <div className="relative z-10 mb-12">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter text-[var(--color-bone-white)] uppercase leading-none mb-6">
            Secure<br />The<br /><span className="text-[var(--color-saginaw-red)]">Energy.</span>
          </h1>
          <p className="text-[var(--color-concrete-gray)] text-lg md:text-xl max-w-md font-sans font-light">
            Bring Aye Mack to your city. Available for live performances, exclusive verses, club hosting, and press appearances. 
          </p>
        </div>

        <div className="relative z-10 space-y-8 mt-auto">
          <div>
            <h3 className="font-display text-xl tracking-widest text-[var(--color-bone-white)] uppercase mb-4 border-b border-[var(--color-concrete-gray)]/20 pb-2">
              Management & Press
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-[var(--color-concrete-gray)] hover:text-[var(--color-bone-white)] transition-colors">
                <Mail className="w-5 h-5 text-[var(--color-saginaw-red)]" />
                <a href="mailto:booking@ayemack.com" className="font-light tracking-wide">booking@ayemack.com</a>
              </li>
              <li className="flex items-center gap-4 text-[var(--color-concrete-gray)] hover:text-[var(--color-bone-white)] transition-colors">
                <Phone className="w-5 h-5 text-[var(--color-saginaw-red)]" />
                <a href="tel:+10000000000" className="font-light tracking-wide">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-4 text-[var(--color-concrete-gray)]">
                <MapPin className="w-5 h-5 text-[var(--color-saginaw-red)]" />
                <span className="font-light tracking-wide">Saginaw, MI / Global</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Column: The Portal */}
      <div className="w-full md:w-7/12 lg:w-1/2 pt-24 pb-24 px-8 lg:px-24 flex items-center bg-[var(--color-graphite)]/30">
        <div className="w-full max-w-xl mx-auto">
          {isSuccess ? (
            <div className="text-center py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="w-20 h-20 bg-[var(--color-saginaw-red)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-[var(--color-saginaw-red)] rounded-full animate-pulse" />
              </div>
              <h3 className="font-display text-4xl tracking-widest text-[var(--color-bone-white)] uppercase mb-4">Request Sent</h3>
              <p className="text-[var(--color-concrete-gray)] mb-12 text-lg font-light">
                Your inquiry has been routed to Aye Mack's management team. We will review the details and contact you shortly.
              </p>
              <Button onClick={() => setIsSuccess(false)} variant="outline" size="lg" className="border-[var(--color-saginaw-red)] text-[var(--color-saginaw-red)] hover:bg-[var(--color-saginaw-red)] hover:text-white transition-all">
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-1000">
              <div className="mb-12">
                <h2 className="font-display text-2xl tracking-widest text-[var(--color-bone-white)] uppercase">
                  Submit Inquiry
                </h2>
                <div className="w-12 h-1 bg-[var(--color-saginaw-red)] mt-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" id="name" required placeholder=" " className="peer w-full bg-transparent border-b border-[var(--color-concrete-gray)]/30 py-3 text-[var(--color-bone-white)] focus:outline-none focus:border-[var(--color-saginaw-red)] transition-colors" />
                  <label htmlFor="name" className="absolute left-0 top-3 text-[var(--color-concrete-gray)] text-sm font-display tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-saginaw-red)] peer-valid:-top-4 peer-valid:text-xs">
                    Name / Organization
                  </label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" required placeholder=" " className="peer w-full bg-transparent border-b border-[var(--color-concrete-gray)]/30 py-3 text-[var(--color-bone-white)] focus:outline-none focus:border-[var(--color-saginaw-red)] transition-colors" />
                  <label htmlFor="email" className="absolute left-0 top-3 text-[var(--color-concrete-gray)] text-sm font-display tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-saginaw-red)] peer-valid:-top-4 peer-valid:text-xs">
                    Email Address
                  </label>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <select id="type" required className="w-full bg-transparent border-b border-[var(--color-concrete-gray)]/30 py-3 text-[var(--color-bone-white)] focus:outline-none focus:border-[var(--color-saginaw-red)] transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected className="bg-[var(--color-ink-black)]">Select an option</option>
                    <option value="performance" className="bg-[var(--color-ink-black)]">Live Performance</option>
                    <option value="feature" className="bg-[var(--color-ink-black)]">Verse / Feature</option>
                    <option value="appearance" className="bg-[var(--color-ink-black)]">Appearance / Hosting</option>
                    <option value="press" className="bg-[var(--color-ink-black)]">Press / Interview</option>
                    <option value="other" className="bg-[var(--color-ink-black)]">Other</option>
                  </select>
                  <label htmlFor="type" className="absolute left-0 -top-4 text-[var(--color-concrete-gray)] text-xs font-display tracking-widest uppercase text-[var(--color-saginaw-red)]">
                    Inquiry Type
                  </label>
                </div>
                <div className="relative group">
                  <input type="text" id="budget" placeholder=" " required className="peer w-full bg-transparent border-b border-[var(--color-concrete-gray)]/30 py-3 text-[var(--color-bone-white)] focus:outline-none focus:border-[var(--color-saginaw-red)] transition-colors" />
                  <label htmlFor="budget" className="absolute left-0 top-3 text-[var(--color-concrete-gray)] text-sm font-display tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-saginaw-red)] peer-valid:-top-4 peer-valid:text-xs">
                    Budget Range
                  </label>
                </div>
              </div>

              <div className="relative group pt-4">
                <input type="date" id="date" className="w-full bg-transparent border-b border-[var(--color-concrete-gray)]/30 py-3 text-[var(--color-bone-white)] focus:outline-none focus:border-[var(--color-saginaw-red)] transition-colors cursor-text" />
                <label htmlFor="date" className="absolute left-0 -top-1 text-[var(--color-concrete-gray)] text-xs font-display tracking-widest uppercase">
                  Date Needed (Optional)
                </label>
              </div>

              <div className="relative group pt-6">
                <textarea id="message" rows={4} required placeholder=" " className="peer w-full bg-transparent border-b border-[var(--color-concrete-gray)]/30 py-3 text-[var(--color-bone-white)] focus:outline-none focus:border-[var(--color-saginaw-red)] transition-colors resize-none"></textarea>
                <label htmlFor="message" className="absolute left-0 top-6 text-[var(--color-concrete-gray)] text-sm font-display tracking-widest uppercase transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-[var(--color-saginaw-red)] peer-valid:top-0 peer-valid:text-xs">
                  Project Details
                </label>
              </div>

              <Button type="submit" className="w-full bg-[var(--color-saginaw-red)] hover:bg-white hover:text-[var(--color-saginaw-red)] text-white font-display tracking-widest uppercase transition-all h-14 mt-4" disabled={isSubmitting}>
                {isSubmitting ? "Routing..." : "Send Inquiry"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

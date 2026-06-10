# Developer Handoff — Aye Mack Official Website

## Objective
Build a premium official artist website that turns Aye Mack's scattered social presence into a central hub for streams, videos, booking/features, press credibility, and EPK downloads.

## Visual Direction
Name: **Saginaw Signal**

Style: dark cinematic artist site, Michigan/Saginaw street-documentary energy, studio precision, concrete texture, red recording-light accents, oversized condensed typography, clean mobile-first conversion UX.

## Primary Pages
1. Home
2. Music
3. Videos
4. Story / About
5. EPK
6. Booking / Features

## Required Components
- `HeroArtist`
- `SocialProofStrip`
- `LatestReleaseFeature`
- `ReleaseCard`
- `VideoCard`
- `MusicPlatformLinks`
- `PressCard`
- `EPKDownloadBlock`
- `BookingInquiryForm`
- `SocialLinkRail`
- `FooterArtist`

## CTA Hierarchy
1. Listen Now
2. Watch Latest Video
3. Book Aye Mack
4. Request a Feature
5. Download EPK
6. Follow @aye_mack1k

## Performance Requirements
- Do not load YouTube iframes on initial page load. Use thumbnails + click-to-load modals.
- Compress/replace hero video on mobile.
- Use responsive images and fixed dimensions to avoid layout shift.
- Use static metadata and JSON-LD for SEO.

## Accessibility Requirements
- Visible focus states.
- Buttons for actions, links for navigation.
- All press/gallery images must have alt text and credits.
- Reduced-motion fallback for title reveals, waveform animation, and video backgrounds.

## Do Not Do
- Do not make it look like a generic mixtape template.
- Do not use scraped photos/album covers without rights confirmation.
- Do not bury booking behind social icons.
- Do not use unreadable text over photos.
- Do not autoplay audio.

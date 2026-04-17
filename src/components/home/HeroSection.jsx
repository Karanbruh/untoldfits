import { Link } from 'react-router-dom'
import { ASSETS } from '@/constants/figmaAssets'
import { COLORS, HEADER_HEIGHT_PX } from '@/constants/theme'

export default function HeroSection() {
  const mediaTop = HEADER_HEIGHT_PX

  return (
    <section
      className="position-relative w-100 overflow-hidden text-white"
      style={{ height: 'min(900px, 100svh)', backgroundColor: COLORS.surfaceGray }}
    >
      <div
        className="position-absolute start-0 end-0 overflow-hidden"
        style={{ top: mediaTop, bottom: 0 }}
      >
        <img
          src={ASSETS.hero}
          alt="Models in neutral athleisure and streetwear"
          className="position-absolute top-0 start-0 untold-hero-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
      </div>
      <div
        className="position-absolute start-0 end-0 pointer-events-none untold-hero-scrim"
        style={{ top: mediaTop, bottom: 0 }}
        aria-hidden
      />
      <div
        className="position-absolute start-0 text-start px-3 px-sm-4 px-lg-5 pb-5 untold-hero-copy"
        style={{ maxWidth: '720px', zIndex: 1 }}
      >
        <h1
          className="text-white fw-normal mb-0 untold-hero-title"
          style={{
            fontSize: 'clamp(1.75rem, 4.2vw, 3.25rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
          }}
        >
          <span className="d-block">{"We don't sell clothes."}</span>
          <span className="d-block mt-2">We sell personality issues.</span>
        </h1>
        <p
          className="mt-3 mb-0 text-white untold-hero-lead"
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
            lineHeight: 1.55,
            opacity: 0.92,
            maxWidth: '640px',
          }}
        >
          Limited drops. Unlimited opinions.
        </p>
        <p
          className="mt-3 mb-4 text-white untold-hero-tagline"
          style={{
            fontSize: 'clamp(0.6875rem, 1.5vw, 0.8125rem)',
            lineHeight: 1.5,
            letterSpacing: '0.14em',
            opacity: 0.95,
          }}
        >
          INSPIRED BY THE FEAR OF BEING AVERAGE.
        </p>
        <Link
          to="/products"
          className="btn btn-light text-dark text-uppercase fw-medium border-0 rounded-1 w-70 w-sm-auto"
          style={{
            padding: '16px 32px',
            fontSize: '14px',
            letterSpacing: '0.5px',
          }}
        >
          Shop The Collection
        </Link>
      </div>
    </section>
  )
}

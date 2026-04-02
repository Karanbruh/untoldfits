import { Link } from 'react-router-dom'
import { BRAND, COLORS } from '@/constants/theme'

export default function AboutPage() {
  return (
    <div className="container py-5" style={{ maxWidth: '720px' }}>
      <h1 className="h3 fw-normal mb-4" style={{ color: COLORS.ink }}>
        About {BRAND.name}
      </h1>
      <p className="text-muted lh-lg mb-4">
        {BRAND.name} is a modern streetwear label built on premium materials, essential silhouettes, and
        a minimalist design philosophy. We design for cities, movement, and the spaces in between.
      </p>
      <p className="text-muted lh-lg mb-4">
        Each collection balances technical performance with quiet luxury—outerwear that shields,
        layers that comfort, and basics that anchor your wardrobe season after season.
      </p>
      <Link to="/products" className="text-dark text-uppercase small fw-medium" style={{ fontSize: '13px', letterSpacing: '0.5px' }}>
        Shop the collection →
      </Link>
    </div>
  )
}

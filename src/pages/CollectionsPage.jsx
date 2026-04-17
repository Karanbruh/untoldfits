import { Link } from 'react-router-dom'
import { collectionShowcase } from '@/data/collections'
import CollectionShowcaseCard from '@/components/collections/CollectionShowcaseCard'
import { COLORS } from '@/constants/theme'

export default function CollectionsPage() {
  return (
    <div className="container-fluid px-3 px-sm-4 px-lg-5 py-5" style={{ maxWidth: '1440px' }}>
      <h1 className="h3 fw-normal mb-4" style={{ color: COLORS.ink }}>
        Collections
      </h1>
      <p className="text-muted mb-5" style={{ maxWidth: '560px' }}>
        Seasonal edits and curated drops. Start from a collection or{' '}
        <Link to="/products" className="text-dark">
          view all products
        </Link>
        .
      </p>
      <div className="row g-4">
        {collectionShowcase.map((item) => {
          const exploreTo =
            item.mode === 'shop' && item.shopSlug
              ? `/category/${encodeURIComponent(item.shopSlug)}`
              : `/collections/unavailable/${encodeURIComponent(item.slug)}`
          return (
            <div key={item.slug} className="col-12 col-md-6 col-lg-4">
              <CollectionShowcaseCard title={item.title} image={item.image} exploreTo={exploreTo} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { featuredCategories } from '@/data/categories'
import CategoryCard from '@/components/home/CategoryCard'
import { COLORS } from '@/constants/theme'

export default function CollectionsPage() {
  return (
    <div className="container-fluid px-3 px-sm-4 px-lg-5 py-5" style={{ maxWidth: '1440px' }}>
      <h1 className="h3 fw-normal mb-4" style={{ color: COLORS.ink }}>
        Collections
      </h1>
      <p className="text-muted mb-5" style={{ maxWidth: '560px' }}>
        Seasonal edits and curated drops. Start from a category or{' '}
        <Link to="/products" className="text-dark">
          view all products
        </Link>
        .
      </p>
      <div className="row g-4">
        {featuredCategories.map((cat) => (
          <div key={cat.slug} className="col-12 col-md-6 col-lg-4">
            <CategoryCard slug={cat.slug} title={cat.title} image={cat.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

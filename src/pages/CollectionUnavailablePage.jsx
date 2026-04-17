import { Link, Navigate, useParams } from 'react-router-dom'
import {
  collectionUnavailableSlugs,
  getCollectionShowcaseTitle,
} from '@/data/collections'
import { COLORS } from '@/constants/theme'

export default function CollectionUnavailablePage() {
  const { slug } = useParams()
  const decoded = slug ? decodeURIComponent(slug) : ''

  if (!decoded || !collectionUnavailableSlugs.includes(decoded)) {
    return <Navigate to="/collections" replace />
  }

  const title = getCollectionShowcaseTitle(decoded) ?? 'Collection'

  return (
    <div className="container-fluid px-3 px-sm-4 px-lg-5 py-5" style={{ maxWidth: '720px' }}>
      <p className="text-uppercase small text-muted mb-2" style={{ letterSpacing: '0.5px' }}>
        <Link to="/collections" className="text-muted text-decoration-none">
          Collections
        </Link>
        <span className="mx-2">/</span>
        {title}
      </p>
      <h1 className="h3 fw-normal mb-3" style={{ color: COLORS.ink }}>
        {title}
      </h1>
      <p className="text-muted mb-4" style={{ maxWidth: '480px', lineHeight: 1.6 }}>
        This collection is currently out of stock. Check back soon, or browse what is available in
        the shop today.
      </p>
      <div className="d-flex flex-wrap gap-3">
        <Link to="/products" className="btn btn-dark text-uppercase fw-medium rounded-1 px-4">
          View all products
        </Link>
        <Link
          to="/collections"
          className="btn btn-outline-secondary text-uppercase fw-medium rounded-1 px-4"
        >
          All collections
        </Link>
      </div>
    </div>
  )
}

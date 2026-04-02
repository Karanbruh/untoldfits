import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { getTrendingProducts } from '@/data/products'
import { COLORS } from '@/constants/theme'

export default function TrendingProducts() {
  return (
    <section
      className="w-100 untold-section-py"
      style={{ backgroundColor: COLORS.surfaceGray }}
    >
      <div className="container-fluid px-3 px-sm-4 px-lg-5 mx-auto" style={{ maxWidth: '1440px' }}>
        <div className="d-flex flex-column flex-sm-row align-items-sm-end justify-content-between gap-3 mb-5">
          <h2
            className="fw-normal mb-0 text-start"
            style={{
              color: COLORS.ink,
              fontSize: '28px',
              lineHeight: '42px',
              letterSpacing: '-0.5px',
            }}
          >
            Trending Now
          </h2>
          <Link
            to="/products"
            className="text-uppercase fw-medium text-dark text-decoration-none border-bottom border-dark pb-1 align-self-start"
            style={{ fontSize: '14px', letterSpacing: '0.5px' }}
          >
            View All Products
          </Link>
        </div>
        <div className="row g-4">
          {getTrendingProducts().map((p) => (
            <div key={p.id} className="col-6 col-lg-3">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { COLORS } from '@/constants/theme'

/** @param {{ product: import('@/data/products').Product & { image?: string, price?: string, swatches?: string[] } }} props */
export default function ProductCard({ product }) {
  const image = product.image ?? product.images?.[0]
  const price = product.price ?? product.priceDisplay
  const swatches = product.swatches ?? product.colors?.map((c) => c.hex) ?? []

  return (
    <article className="d-flex flex-column">
      <div
        className="position-relative mb-2 overflow-hidden untold-product-visual"
        style={{ backgroundColor: COLORS.surfaceGray }}
      >
        <div className="position-relative w-100 untold-product-media-height">
          <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
            <Link to={`/product/${product.id}`} className="d-block h-100 w-100 position-relative">
              <img
                src={image}
                alt={product.name}
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
              />
            </Link>
          </div>
          <div
            className="position-absolute bottom-0 start-0 end-0 pointer-events-none"
            style={{
              height: '60px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)',
            }}
            aria-hidden
          />
          <div
            className="position-absolute start-0 end-0 untold-product-hover-cta"
            style={{
              bottom: '16px',
              left: '5.03%',
              right: '5.03%',
              padding: '14px 16px',
              background: 'rgba(255,255,255,0.95)',
              borderRadius: '4px',
              zIndex: 1,
            }}
          >
            <Link
              to={`/product/${product.id}`}
              className="btn btn-link text-dark text-uppercase w-100 text-decoration-none fw-medium d-block py-2 px-2"
              style={{ fontSize: '13px', letterSpacing: '0.5px' }}
            >
              View product
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column gap-1 text-start">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <Link
            to={`/product/${product.id}`}
            className="text-decoration-none text-dark fw-medium min-w-0 text-break"
            style={{ fontSize: '15px', lineHeight: '22.5px' }}
          >
            {product.name}
          </Link>
          <span className="text-dark flex-shrink-0" style={{ fontSize: '15px' }}>
            {price}
          </span>
        </div>
        <p className="mb-0" style={{ color: COLORS.muted, fontSize: '14px', lineHeight: '21px' }}>
          {product.categoryLabel}
        </p>
        <div className="d-flex gap-2 pt-2">
          {swatches.map((hex, i) => (
            <span
              key={`${product.id}-sw-${i}`}
              className="d-inline-block rounded-1 border"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: hex,
                borderColor: 'rgba(0,0,0,0.08)',
              }}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </article>
  )
}

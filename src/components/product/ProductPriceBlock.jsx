import { COLORS } from '@/constants/theme'
import { getDiscountPercentOff, hasCompareAtPrice } from '@/utils/productPricing'

/**
 * @param {{ product: import('@/data/products').Product, compact?: boolean }} props
 */
export default function ProductPriceBlock({ product, compact = false }) {
  const pct = getDiscountPercentOff(product)
  const showCompare = hasCompareAtPrice(product) && product.compareAtPriceDisplay

  const strikeSize = compact ? '13px' : '15px'
  const saleSize = compact ? '15px' : '20px'

  return (
    <div className={`d-flex flex-column ${compact ? 'align-items-end text-end' : 'gap-2'}`}>
      {pct != null && (
        <span
          className={`badge ${compact ? 'align-self-end' : 'align-self-start'}`}
          style={{
            backgroundColor: COLORS.ink,
            fontSize: compact ? '10px' : '11px',
            letterSpacing: '0.5px',
            fontWeight: 600,
          }}
        >
          {pct}% off
        </span>
      )}
      <p className={`mb-0 d-flex flex-wrap align-items-baseline gap-2 ${compact ? 'justify-content-end' : ''}`}>
        {showCompare && (
          <span
            className="text-muted text-decoration-line-through"
            style={{ fontSize: strikeSize, lineHeight: 1.2 }}
          >
            {product.compareAtPriceDisplay}
          </span>
        )}
        <span
          className="text-dark fw-medium"
          style={{ fontSize: saleSize, lineHeight: compact ? 1.2 : 1.4 }}
        >
          {product.priceDisplay}
        </span>
      </p>
    </div>
  )
}

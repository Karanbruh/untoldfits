import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductListingInfinite from '@/components/product/ProductListingInfinite'
import { COLORS } from '@/constants/theme'
import { getAllProducts } from '@/data/products'
import { filterProductsByName } from '@/features/products/filterSort'
const BATCH = 12

export default function SearchPage() {
  const [params, setParams] = useSearchParams()
  const qParam = params.get('q') ?? ''
  const [localQ, setLocalQ] = useState(qParam)

  const allProducts = useMemo(() => getAllProducts(), [])

  const filtered = useMemo(
    () => filterProductsByName(allProducts, qParam),
    [allProducts, qParam],
  )

  function handleSubmit(e) {
    e.preventDefault()
    const next = localQ.trim()
    setParams(next ? { q: next } : {})
  }

  return (
    <div className="container-fluid px-3 px-sm-4 px-lg-5 py-5" style={{ maxWidth: '1440px' }}>
      <h1 className="h3 fw-normal mb-4" style={{ color: COLORS.ink }}>
        Search
      </h1>
      <form onSubmit={handleSubmit} className="mb-5 w-100" style={{ maxWidth: '480px' }}>
        <label className="visually-hidden" htmlFor="search-page-input">
          Search products
        </label>
        <div className="input-group">
          <input
            id="search-page-input"
            type="search"
            className="form-control"
            placeholder="Search by product name…"
            value={localQ}
            onChange={(e) => setLocalQ(e.target.value)}
            style={{ fontSize: '15px' }}
          />
          <button type="submit" className="btn btn-dark text-uppercase" style={{ fontSize: '13px' }}>
            Search
          </button>
        </div>
      </form>

      {qParam.trim() === '' ? (
        <p className="text-muted">Enter a search term to see results.</p>
      ) : filtered.length === 0 ? (
        <p className="text-muted">No products found for &ldquo;{qParam}&rdquo;.</p>
      ) : (
        <>
          <p className="small text-muted mb-4">
            {filtered.length} result{filtered.length === 1 ? '' : 's'} for &ldquo;{qParam}&rdquo;
          </p>
          <ProductListingInfinite key={qParam} products={filtered} batchSize={BATCH} />
        </>
      )}
    </div>
  )
}

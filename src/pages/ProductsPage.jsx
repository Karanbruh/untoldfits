import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '@/components/filters/FilterSidebar'
import ProductListingInfinite from '@/components/product/ProductListingInfinite'
import { COLORS } from '@/constants/theme'
import { CATEGORY_SLUGS, getAllProducts } from '@/data/products'
import { filterProducts, sortProducts } from '@/features/products/filterSort'
const BATCH = 12

function defaultFilters() {
  return {
    categories: [],
    sizes: [],
    colorHexes: [],
    genders: [],
    priceMinCents: null,
    priceMaxCents: null,
  }
}

export default function ProductsPage() {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')

  const [filters, setFilters] = useState(() => {
    const base = defaultFilters()
    if (categoryParam && CATEGORY_SLUGS.includes(categoryParam)) {
      base.categories = [categoryParam]
    }
    return base
  })

  const [sort, setSort] = useState('newest')
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false)

  const allProducts = useMemo(() => getAllProducts(), [])

  const filteredSorted = useMemo(() => {
    const f = filterProducts(allProducts, filters)
    return sortProducts(f, sort)
  }, [allProducts, filters, sort])

  const resetKey = useMemo(
    () => JSON.stringify({ filters, sort }),
    [filters, sort],
  )

  return (
    <div className="container-fluid px-3 px-sm-4 px-lg-5 py-5" style={{ maxWidth: '1440px' }}>
      <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4">
        <h1 className="h3 fw-normal mb-0" style={{ color: COLORS.ink }}>
          Shop
        </h1>
        <div className="d-flex align-items-center gap-3 flex-grow-1 flex-lg-grow-0 min-w-0 justify-content-end">
          <button
            type="button"
            className="btn btn-outline-dark btn-sm d-lg-none text-uppercase flex-shrink-0"
            style={{ fontSize: '12px', letterSpacing: '0.5px' }}
            onClick={() => setFilterDrawerOpen(true)}
          >
            Filters
          </button>
          <div className="flex-grow-1 min-w-0" style={{ maxWidth: '200px' }}>
            <label className="visually-hidden" htmlFor="sort-products">
              Sort
            </label>
            <select
              id="sort-products"
              className="form-select form-select-sm w-100"
              style={{ fontSize: '13px' }}
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-auto">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            allProducts={allProducts}
            mobileOpen={filterDrawerOpen}
            onMobileClose={() => setFilterDrawerOpen(false)}
          />
        </div>
        <div className="col-lg ps-lg-3 ps-xl-4">
          {filteredSorted.length === 0 ? (
            <p className="text-muted">No products match your filters.</p>
          ) : (
            <ProductListingInfinite key={resetKey} products={filteredSorted} batchSize={BATCH} />
          )}
        </div>
      </div>
    </div>
  )
}

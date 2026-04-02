import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FilterSidebar from '@/components/filters/FilterSidebar'
import ProductListingInfinite from '@/components/product/ProductListingInfinite'
import { COLORS } from '@/constants/theme'
import { CATEGORY_SLUGS, getAllProducts } from '@/data/products'
import { featuredCategories } from '@/data/categories'
import { filterProducts, sortProducts } from '@/features/products/filterSort'
const BATCH = 12

export default function CategoryPage() {
  const { slug } = useParams()
  const valid = slug && CATEGORY_SLUGS.includes(slug)

  const [filters, setFilters] = useState(() => ({
    categories: valid ? [slug] : [],
    sizes: [],
    colorHexes: [],
    genders: [],
    priceMinCents: null,
    priceMaxCents: null,
  }))

  const [sort, setSort] = useState('newest')
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false)

  const allProducts = useMemo(() => getAllProducts(), [])

  const meta = useMemo(
    () => featuredCategories.find((c) => c.slug === slug),
    [slug],
  )

  const filteredSorted = useMemo(() => {
    const f = filterProducts(allProducts, filters)
    return sortProducts(f, sort)
  }, [allProducts, filters, sort])

  const resetKey = useMemo(
    () => JSON.stringify({ filters, sort, slug }),
    [filters, sort, slug],
  )

  if (!valid) {
    return (
      <div className="container py-5">
        <p className="text-muted">Category not found.</p>
        <Link to="/products" className="text-dark">
          Back to shop
        </Link>
      </div>
    )
  }

  return (
    <div className="w-100">
      <section
        className="position-relative w-100 overflow-hidden text-white"
        style={{ height: '280px', backgroundColor: COLORS.surfaceGray }}
      >
        {meta?.image && (
          <>
            <div className="position-absolute top-0 start-0 w-100 h-100">
              <img
                src={meta.image}
                alt=""
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 100%)',
              }}
              aria-hidden
            />
          </>
        )}
        <div className="position-relative h-100 d-flex align-items-end px-3 px-sm-4 px-lg-5 pb-4 mx-auto" style={{ maxWidth: '1440px' }}>
          <div>
            <p className="text-white text-uppercase small mb-1" style={{ fontSize: '12px', letterSpacing: '0.5px', opacity: 0.75 }}>
              Category
            </p>
            <h1
              className="text-white fw-normal text-uppercase mb-0"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.5px' }}
            >
              {meta?.title ?? slug}
            </h1>
          </div>
        </div>
      </section>

      <div className="container-fluid px-3 px-sm-4 px-lg-5 py-5" style={{ maxWidth: '1440px' }}>
        <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4">
          <Link to="/products" className="small text-muted text-decoration-none">
            ← All products
          </Link>
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
              <label className="visually-hidden" htmlFor="sort-category">
                Sort
              </label>
              <select
                id="sort-category"
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
              lockedCategorySlug={slug}
              mobileOpen={filterDrawerOpen}
              onMobileClose={() => setFilterDrawerOpen(false)}
            />
          </div>
          <div className="col-lg ps-lg-3 ps-xl-4">
            {filteredSorted.length === 0 ? (
              <p className="text-muted">No products in this category yet.</p>
            ) : (
              <ProductListingInfinite key={resetKey} products={filteredSorted} batchSize={BATCH} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

import { useMemo } from 'react'
import { COLORS } from '@/constants/theme'
import { CATEGORY_SLUGS, SIZE_OPTIONS } from '@/data/products'
import { getUniqueColorHexes } from '@/features/products/filterSort'

const sectionTitle = {
  fontSize: '13px',
  letterSpacing: '0.5px',
  color: COLORS.ink,
}

const labels = {
  henleys: 'Henleys',
  'crop-tops': 'Crop Tops',
  'leather-jackets': 'Leather jackets',
}

function toggleArray(arr, val) {
  return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]
}

function FilterForm({ filters, onChange, allProducts, lockedCategorySlug }) {
  const colorHexes = useMemo(() => getUniqueColorHexes(allProducts), [allProducts])

  function patch(partial) {
    onChange({ ...filters, ...partial })
  }

  function clearAll() {
    onChange({
      categories: lockedCategorySlug ? [lockedCategorySlug] : [],
      sizes: [],
      colorHexes: [],
      genders: [],
      priceMinCents: null,
      priceMaxCents: null,
    })
  }

  return (
    <>
      {!lockedCategorySlug && (
        <div className="mb-4">
          <div className="text-uppercase fw-medium mb-3" style={sectionTitle}>
            Category
          </div>
          <div className="d-flex flex-column gap-2">
            {CATEGORY_SLUGS.map((slug) => (
              <label
                key={slug}
                className="d-flex align-items-center gap-2 small"
                style={{ cursor: 'pointer' }}
              >
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={filters.categories.includes(slug)}
                  onChange={() => patch({ categories: toggleArray(filters.categories, slug) })}
                />
                <span>{labels[slug]}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="mb-4">
        <div className="text-uppercase fw-medium mb-3" style={sectionTitle}>
          Size
        </div>
        <div className="d-flex flex-wrap gap-2">
          {SIZE_OPTIONS.map((s) => (
            <button
              key={s}
              type="button"
              className={`btn btn-sm ${filters.sizes.includes(s) ? 'btn-dark' : 'btn-outline-dark'}`}
              style={{ fontSize: '12px', minWidth: '36px' }}
              onClick={() => patch({ sizes: toggleArray(filters.sizes, s) })}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-uppercase fw-medium mb-3" style={sectionTitle}>
          Color
        </div>
        <div className="d-flex flex-wrap gap-2">
          {colorHexes.map((hex) => (
            <button
              key={hex}
              type="button"
              className={`btn p-0 border rounded-1 ${filters.colorHexes.includes(hex) ? 'border-dark border-2' : ''}`}
              style={{ width: '28px', height: '28px' }}
              title={hex}
              onClick={() => patch({ colorHexes: toggleArray(filters.colorHexes, hex) })}
            >
              <span
                className="d-block w-100 h-100 rounded-1"
                style={{ backgroundColor: hex }}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-uppercase fw-medium mb-3" style={sectionTitle}>
          Gender
        </div>
        <div className="d-flex flex-wrap gap-2">
          {[
            { id: 'men', label: 'Men' },
            { id: 'women', label: 'Women' },
            { id: 'unisex', label: 'Unisex' },
          ].map((g) => (
            <button
              key={g.id}
              type="button"
              className={`btn btn-sm ${filters.genders.includes(g.id) ? 'btn-dark' : 'btn-outline-dark'}`}
              style={{ fontSize: '12px' }}
              onClick={() => patch({ genders: toggleArray(filters.genders, g.id) })}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-2">
        <div className="text-uppercase fw-medium mb-3" style={sectionTitle}>
          Price
        </div>
        <div className="row g-2">
          <div className="col-6">
            <label className="visually-hidden" htmlFor="price-min">
              Min price
            </label>
            <input
              id="price-min"
              type="number"
              min={0}
              step={1}
              className="form-control form-control-sm"
              placeholder="Min ₹"
              value={filters.priceMinCents != null ? filters.priceMinCents / 100 : ''}
              onChange={(e) => {
                const v = e.target.value
                patch({
                  priceMinCents:
                    v === '' ? null : Math.max(0, Math.round((parseFloat(v) || 0) * 100)),
                })
              }}
            />
          </div>
          <div className="col-6">
            <label className="visually-hidden" htmlFor="price-max">
              Max price
            </label>
            <input
              id="price-max"
              type="number"
              min={0}
              step={1}
              className="form-control form-control-sm"
              placeholder="Max ₹"
              value={filters.priceMaxCents != null ? filters.priceMaxCents / 100 : ''}
              onChange={(e) => {
                const v = e.target.value
                patch({
                  priceMaxCents:
                    v === '' ? null : Math.max(0, Math.round((parseFloat(v) || 0) * 100)),
                })
              }}
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-link btn-sm text-dark text-uppercase p-0 mt-3"
        style={{ fontSize: '12px', letterSpacing: '0.5px' }}
        onClick={clearAll}
      >
        Clear filters
      </button>
    </>
  )
}

/** @param {{ filters: object, onChange: Function, allProducts: import('@/data/products').Product[], lockedCategorySlug?: string | null, mobileOpen?: boolean, onMobileClose?: () => void }} props */
export default function FilterSidebar({
  filters,
  onChange,
  allProducts,
  lockedCategorySlug = null,
  mobileOpen = false,
  onMobileClose = () => {},
}) {
  return (
    <>
      <aside className="d-none d-lg-block" style={{ minWidth: '176px', maxWidth: '200px' }}>
        <FilterForm
          filters={filters}
          onChange={onChange}
          allProducts={allProducts}
          lockedCategorySlug={lockedCategorySlug}
        />
      </aside>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="offcanvas-backdrop fade show border-0 w-100 m-0 p-0"
            style={{ position: 'fixed', inset: 0, zIndex: 1060, background: 'rgba(0,0,0,0.4)' }}
            aria-label="Close filters"
            onClick={onMobileClose}
          />
          <div
            className="offcanvas offcanvas-start show"
            tabIndex={-1}
            style={{
              visibility: 'visible',
              zIndex: 1061,
              width: 'min(320px, 88vw)',
            }}
          >
            <div className="offcanvas-header border-bottom">
              <h2 className="offcanvas-title h6 mb-0">Filters</h2>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onMobileClose}
              />
            </div>
            <div className="offcanvas-body">
              <FilterForm
                filters={filters}
                onChange={onChange}
                allProducts={allProducts}
                lockedCategorySlug={lockedCategorySlug}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

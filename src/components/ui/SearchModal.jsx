import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllProducts } from '@/data/products'
import { filterProductsByName } from '@/features/products/filterSort'
import { COLORS } from '@/constants/theme'

export default function SearchModal({ show, onHide }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const results = useMemo(() => {
    const all = getAllProducts()
    return filterProductsByName(all, query).slice(0, 6)
  }, [query])

  function goFullSearch() {
    const q = query.trim()
    navigate(`/search${q ? `?q=${encodeURIComponent(q)}` : ''}`)
    setQuery('')
    onHide()
  }

  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`}
      tabIndex={-1}
      role="dialog"
      aria-modal={show}
      aria-hidden={!show}
      style={{
        backgroundColor: show ? 'rgba(0,0,0,0.4)' : 'transparent',
        zIndex: 1055,
      }}
      onClick={(e) => e.target === e.currentTarget && onHide()}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable mx-2 mx-sm-auto">
        <div className="modal-content border-0 rounded-1 shadow">
          <div className="modal-header border-bottom-0">
            <label className="visually-hidden" htmlFor="untold-search-input">
              Search products
            </label>
            <input
              id="untold-search-input"
              type="search"
              className="form-control form-control-lg border-0 shadow-none"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus={show}
              style={{ fontSize: '16px' }}
            />
            <button type="button" className="btn-close ms-2" aria-label="Close" onClick={onHide} />
          </div>
          <div className="modal-body pt-0">
            {query.trim() && results.length === 0 && (
              <p className="text-muted small mb-0">No matches.</p>
            )}
            <ul className="list-unstyled mb-3">
              {results.map((p) => (
                <li key={p.id} className="border-bottom py-2">
                  <Link
                    to={`/product/${p.id}`}
                    className="d-flex align-items-center gap-3 text-decoration-none text-dark"
                    onClick={() => {
                      setQuery('')
                      onHide()
                    }}
                  >
                    <div
                      className="flex-shrink-0 overflow-hidden"
                      style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: COLORS.surfaceGray,
                      }}
                    >
                      <img
                        src={p.images[0]}
                        alt=""
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <div className="fw-medium" style={{ fontSize: '15px' }}>
                        {p.name}
                      </div>
                      <div className="small text-muted">{p.priceDisplay}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn-dark btn-sm text-uppercase w-100"
              style={{ fontSize: '13px', letterSpacing: '0.5px' }}
              onClick={goFullSearch}
            >
              View all results
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

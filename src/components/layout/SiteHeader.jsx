import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BsCart3, BsPerson, BsSearch } from 'react-icons/bs'
import { BRAND } from '@/constants/theme'
import { useCart } from '@/features/cart/CartContext'

const navStyle = { fontSize: '13px', letterSpacing: '0.5px' }

function mainNavClass({ isActive }) {
  return [
    'text-uppercase small fw-medium text-decoration-none text-dark untold-nav-link',
    isActive ? 'active' : '',
  ]
    .filter(Boolean)
    .join(' ')
}

export default function SiteHeader({ onOpenSearch }) {
  const { pathname } = useLocation()
  const { totalQuantity } = useCart()
  const [open, setOpen] = useState(false)
  const shopSectionActive =
    pathname === '/products' || pathname.startsWith('/category/')

  return (
    <header
      className="untold-header border-bottom fixed-top w-100"
      style={{
        height: '80px',
        background: 'rgba(255, 255, 255, 0.95)',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        zIndex: 1030,
      }}
    >
      <div className="container-fluid h-100 px-3 px-sm-4 px-lg-5">
        <div className="row align-items-center h-100 g-0">
          <div className="col-4 d-none d-lg-block">
            <nav className="d-flex gap-4">
              <NavLink
                to="/products"
                className={(args) =>
                  mainNavClass({ isActive: args.isActive || shopSectionActive })
                }
                style={navStyle}
              >
                Shop
              </NavLink>
              <NavLink to="/collections" className={mainNavClass} style={navStyle}>
                Collections
              </NavLink>
              <NavLink to="/editorial" className={mainNavClass} style={navStyle}>
                Editorial
              </NavLink>
            </nav>
          </div>

          <div className="col-12 col-lg-4 text-center order-first order-lg-0 position-relative">
            <button
              type="button"
              className="btn btn-link d-lg-none position-absolute start-0 top-50 translate-middle-y p-0 border-0"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="untold-hamburger text-dark">☰</span>
            </button>
            <Link
              to="/"
              className="text-decoration-none text-dark fw-semibold d-inline-block untold-logo"
              style={{ fontSize: '24px', letterSpacing: '4px' }}
            >
              {BRAND.logo}
            </Link>
          </div>

          <div className="col-4 d-none d-lg-block">
            <div className="d-flex align-items-center justify-content-end gap-2">
              <button
                type="button"
                className="btn btn-link p-2 border-0"
                aria-label="Search"
                onClick={onOpenSearch}
              >
                <BsSearch size={20} className="text-dark" aria-hidden />
              </button>
              <Link to="/account" className="btn btn-link p-2" aria-label="Account">
                <BsPerson size={20} className="text-dark" aria-hidden />
              </Link>
              <Link to="/cart" className="btn btn-link p-2 position-relative" aria-label="Cart">
                <BsCart3 size={20} className="text-dark" aria-hidden />
                {totalQuantity > 0 && (
                  <span
                    className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-dark text-white d-flex align-items-center justify-content-center"
                    style={{
                      minWidth: '16px',
                      height: '16px',
                      fontSize: '10px',
                      fontWeight: 600,
                    }}
                  >
                    {totalQuantity > 99 ? '99+' : totalQuantity}
                  </span>
                )}
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-4 d-flex d-lg-none justify-content-end gap-1">
            <button
              type="button"
              className="btn btn-link p-2 border-0"
              aria-label="Search"
              onClick={onOpenSearch}
            >
              <BsSearch size={20} className="text-dark" aria-hidden />
            </button>
            <Link to="/cart" className="btn btn-link p-2 position-relative" aria-label="Cart">
              <BsCart3 size={20} className="text-dark" aria-hidden />
              {totalQuantity > 0 && (
                <span
                  className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-dark text-white"
                  style={{ minWidth: '16px', height: '16px', fontSize: '10px' }}
                >
                  {totalQuantity > 99 ? '99+' : totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>

        {open && (
          <div className="d-lg-none border-top bg-white py-3 untold-mobile-nav">
            <nav className="d-flex flex-column gap-2">
              <NavLink
                to="/products"
                className={(args) =>
                  [
                    'text-uppercase text-dark text-decoration-none py-1 untold-nav-link',
                    args.isActive || shopSectionActive ? 'active fw-medium' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
                style={navStyle}
                onClick={() => setOpen(false)}
              >
                Shop
              </NavLink>
              <NavLink
                to="/collections"
                className="text-uppercase text-dark text-decoration-none py-1"
                style={navStyle}
                onClick={() => setOpen(false)}
              >
                Collections
              </NavLink>
              <NavLink
                to="/editorial"
                className="text-uppercase text-dark text-decoration-none py-1"
                style={navStyle}
                onClick={() => setOpen(false)}
              >
                Editorial
              </NavLink>
              <Link
                to="/account"
                className="text-uppercase text-dark text-decoration-none py-1"
                style={navStyle}
                onClick={() => setOpen(false)}
              >
                Account
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

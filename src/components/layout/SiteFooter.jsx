import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BRAND, COLORS } from '@/constants/theme'

const linkClass = 'text-decoration-none d-block py-1'
const linkStyle = { color: COLORS.footerText, fontSize: '14px', lineHeight: '21px' }

export default function SiteFooter() {
  function onNewsletterSubmit(e) {
    e.preventDefault()
  }

  return (
    <footer
      className="w-100 text-white"
      style={{ backgroundColor: COLORS.ink, paddingTop: '80px', paddingBottom: '40px' }}
    >
      <div className="container-fluid px-3 px-sm-4 px-lg-5" style={{ maxWidth: '1440px' }}>
        <div className="row g-5 g-lg-4 pb-5">
          <div className="col-12 col-lg-5 col-xl-4" style={{ maxWidth: '320px' }}>
            <div
              className="fw-semibold text-white mb-3"
              style={{ fontSize: '24px', letterSpacing: '4px', lineHeight: '36px' }}
            >
              {BRAND.logo}
            </div>
            <p
              className="mb-4"
              style={{ color: COLORS.footerText, fontSize: '14px', lineHeight: '22.4px' }}
            >
              Redefining modern streetwear with premium materials, essential silhouettes, and a
              minimalist design philosophy.
            </p>
            <form
              onSubmit={onNewsletterSubmit}
              className="d-flex align-items-end border-bottom pb-2 gap-2"
              style={{ borderColor: COLORS.borderFooter }}
            >
              <label className="visually-hidden" htmlFor="newsletter-email">
                Subscribe to our newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Subscribe to our newsletter"
                className="form-control border-0 bg-transparent shadow-none px-0 text-white untold-footer-input"
                style={{ color: COLORS.footerMeta, fontSize: '14px' }}
              />
              <button
                type="submit"
                className="btn btn-link text-white text-uppercase p-0 text-decoration-none fw-medium"
                style={{ fontSize: '14px' }}
              >
                Join
              </button>
            </form>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div
              className="text-uppercase text-white fw-medium mb-3"
              style={{ fontSize: '13px', letterSpacing: '1px' }}
            >
              Shop
            </div>
            <nav className="d-flex flex-column">
              <Link to="/products" className={linkClass} style={linkStyle}>
                All Products
              </Link>
              <Link to="/collections" className={linkClass} style={linkStyle}>
                Collections
              </Link>
              <Link to="/products" className={linkClass} style={linkStyle}>
                Tops
              </Link>
              <Link to="/products" className={linkClass} style={linkStyle}>
                Bottoms
              </Link>
              <Link to="/products" className={linkClass} style={linkStyle}>
                Accessories
              </Link>
            </nav>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div
              className="text-uppercase text-white fw-medium mb-3"
              style={{ fontSize: '13px', letterSpacing: '1px' }}
            >
              Support
            </div>
            <nav className="d-flex flex-column">
              <Link to="/faq" className={linkClass} style={linkStyle}>
                FAQ
              </Link>
              <Link to="/shipping" className={linkClass} style={linkStyle}>
                Shipping &amp; Returns
              </Link>
              <Link to="/size-guide" className={linkClass} style={linkStyle}>
                Size Guide
              </Link>
              <Link to="/contact" className={linkClass} style={linkStyle}>
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="col-12 col-md-4 col-lg-2">
            <div
              className="text-uppercase text-white fw-medium mb-3"
              style={{ fontSize: '13px', letterSpacing: '1px' }}
            >
              Company
            </div>
            <nav className="d-flex flex-column">
              <Link to="/about" className={linkClass} style={linkStyle}>
                About Us
              </Link>
              <Link to="/sustainability" className={linkClass} style={linkStyle}>
                Sustainability
              </Link>
              <Link to="/careers" className={linkClass} style={linkStyle}>
                Careers
              </Link>
              <Link to="/terms" className={linkClass} style={linkStyle}>
                Terms &amp; Conditions
              </Link>
              <Link to="/privacy" className={linkClass} style={linkStyle}>
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        <div
          className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 pt-4 border-top"
          style={{ borderColor: COLORS.borderDark }}
        >
          <p className="mb-0 small" style={{ color: COLORS.footerMeta, fontSize: '13px' }}>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="d-flex gap-4 align-items-center">
            <a href="https://instagram.com" className="d-inline-flex text-white" aria-label="Instagram">
              <FaInstagram size={20} aria-hidden />
            </a>
            <a href="https://x.com" className="d-inline-flex text-white" aria-label="X">
              <FaXTwitter size={20} aria-hidden />
            </a>
            <a href="https://facebook.com" className="d-inline-flex text-white" aria-label="Facebook">
              <FaFacebook size={20} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { COLORS } from '@/constants/theme'
import {
  DELIVERY_FLAT_CENTS,
  FREE_SHIPPING_THRESHOLD_CENTS,
  useCart,
} from '@/features/cart/CartContext'
import { formatCents } from '@/features/cart/formatMoney'

export default function CartPage() {
  const { items, updateQty, removeItem, subtotalCents, deliveryCents, totalCents } = useCart()

  return (
    <div className="container-fluid px-3 px-sm-4 px-lg-5 py-5" style={{ maxWidth: '1200px' }}>
      <h1 className="h3 fw-normal mb-4 text-dark">
        Cart
      </h1>

      {items.length === 0 ? (
        <>
          <p className="text-muted mb-4">Your bag is empty.</p>
          <Link
            to="/products"
            className="btn btn-dark text-uppercase btn-sm px-4 py-2 rounded-1 text-decoration-none"
            style={{ fontSize: '13px', letterSpacing: '0.5px' }}
          >
            Continue shopping
          </Link>
        </>
      ) : (
        <div className="row g-5">
          <div className="col-lg-8">
            <ul className="list-unstyled">
              {items.map((line) => (
                <li
                  key={line.lineId}
                  className="border-bottom py-4 d-flex flex-column flex-sm-row gap-3 gap-sm-4"
                >
                  <div
                    className="flex-shrink-0 mx-auto mx-sm-0"
                    style={{
                      width: '120px',
                      height: '150px',
                      backgroundColor: COLORS.surfaceGray,
                    }}
                  >
                    <img
                      src={line.snapshot.image}
                      alt=""
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex-grow-1 text-center text-sm-start">
                    <div className="fw-medium mb-1" style={{ fontSize: '15px', color: COLORS.ink }}>
                      {line.snapshot.name}
                    </div>
                    <div className="small text-muted mb-2">
                      Size {line.size} · {line.snapshot.colorLabel}
                    </div>
                    <div className="fw-medium mb-3">{formatCents(line.snapshot.priceCents)}</div>
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start gap-3">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-sm"
                          disabled={line.quantity <= 1}
                          onClick={() => updateQty(line.lineId, line.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="small" style={{ minWidth: '1.5rem', textAlign: 'center' }}>
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-sm"
                          onClick={() => updateQty(line.lineId, line.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="btn btn-link btn-sm text-muted text-decoration-underline p-0"
                        onClick={() => removeItem(line.lineId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-sm-end fw-medium d-none d-sm-block">
                    {formatCents(line.snapshot.priceCents * line.quantity)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <div
              className="p-4 border"
              style={{ borderColor: 'rgba(0,0,0,0.08)' }}
            >
              <h2 className="h6 text-uppercase fw-medium mb-3" style={{ fontSize: '13px', letterSpacing: '0.5px' }}>
                Summary
              </h2>
              <div className="d-flex justify-content-between small mb-2">
                <span className="text-muted">Subtotal</span>
                <span>{formatCents(subtotalCents)}</span>
              </div>
              <div className="d-flex justify-content-between small mb-2">
                <span className="text-muted">Delivery</span>
                <span>
                  {deliveryCents === 0 ? 'Free' : formatCents(deliveryCents)}
                </span>
              </div>
              <p className="small text-muted mb-3" style={{ fontSize: '12px' }}>
                Orders under {formatCents(FREE_SHIPPING_THRESHOLD_CENTS)} include a{' '}
                {formatCents(DELIVERY_FLAT_CENTS)} delivery fee. Free shipping above that threshold.
              </p>
              <div
                className="d-flex justify-content-between fw-semibold pt-2 border-top mb-4"
                style={{ borderColor: 'rgba(0,0,0,0.08)' }}
              >
                <span>Total</span>
                <span>{formatCents(totalCents)}</span>
              </div>
              <button
                type="button"
                className="btn btn-dark w-100 text-uppercase py-2 rounded-1"
                style={{ fontSize: '13px', letterSpacing: '0.5px' }}
                disabled
                title="Checkout coming soon"
              >
                Proceed to checkout
              </button>
              <p className="small text-muted text-center mt-2 mb-0" style={{ fontSize: '11px' }}>
                Checkout will connect to your payment provider when you are ready.
              </p>
            </div>
            <div className="mt-3 text-center">
              <Link to="/products" className="small text-dark">
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

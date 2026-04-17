import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { COLORS } from '@/constants/theme'
import { getProductById } from '@/data/products'
import ProductPriceBlock from '@/components/product/ProductPriceBlock'
import { useCart } from '@/features/cart/CartContext'

export default function ProductPage() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [mainIdx, setMainIdx] = useState(0)
  const [size, setSize] = useState('')
  const [colorId, setColorId] = useState('')
  const [qty, setQty] = useState(1)

  const selectedColor = useMemo(
    () => product?.colors.find((c) => c.id === colorId),
    [product, colorId],
  )

  if (!product) {
    return (
      <div className="container py-5">
        <p className="text-muted">Product not found.</p>
        <Link to="/products" className="text-dark">
          Back to shop
        </Link>
      </div>
    )
  }

  const needsColorChoice = product.colors.length > 1
  const canAdd = size && (!needsColorChoice || colorId)

  function handleAdd(e) {
    e.preventDefault()
    if (!canAdd) return
    const cid = product.colors.length === 1 ? product.colors[0].id : colorId
    addItem({ productId: product.id, size, colorId: cid, quantity: qty })
  }

  return (
    <div className="container-fluid px-3 px-sm-4 px-lg-5 py-5" style={{ maxWidth: '1200px' }}>
      <div className="row g-5 align-items-start">
        <div className="col-12 col-md-6">
          <div
            className="w-100 overflow-hidden mb-3 untold-pdp-main-visual"
            style={{ backgroundColor: COLORS.surfaceGray }}
          >
            <img
              src={product.images[mainIdx] ?? product.images[0]}
              alt={product.name}
              className="w-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
          {product.images.length > 1 && (
            <div className="row g-2">
              {product.images.map((src, i) => (
                <div key={src} className="col-3">
                  <button
                    type="button"
                    className={`btn p-0 border w-100 ${mainIdx === i ? 'border-dark border-2' : ''}`}
                    onClick={() => setMainIdx(i)}
                    style={{ aspectRatio: '1', overflow: 'hidden' }}
                  >
                    <img src={src} alt="" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-12 col-md-6">
          <p className="text-muted small text-uppercase mb-2" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
            {product.categoryLabel}
          </p>
          <h1 className="h3 fw-normal mb-2" style={{ color: COLORS.ink }}>
            {product.name}
          </h1>
          <div className="mb-4">
            <ProductPriceBlock product={product} />
          </div>
          <p className="text-muted mb-4" style={{ fontSize: '15px', lineHeight: '24px' }}>
            {product.description}
          </p>

          <div className="mb-4">
            <div
              className="text-uppercase fw-medium mb-2"
              style={{ fontSize: '13px', letterSpacing: '0.5px', color: COLORS.ink }}
            >
              Size
            </div>
            <div className="d-flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`btn ${size === s ? 'btn-dark' : 'btn-outline-dark'}`}
                  style={{ fontSize: '13px', minWidth: '44px' }}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {needsColorChoice && (
            <div className="mb-4">
              <div
                className="text-uppercase fw-medium mb-2"
                style={{ fontSize: '13px', letterSpacing: '0.5px', color: COLORS.ink }}
              >
                Color
              </div>
              <div className="d-flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`btn p-1 border ${colorId === c.id ? 'border-dark border-2' : ''}`}
                    style={{ width: '44px', height: '44px' }}
                    title={c.label}
                    onClick={() => setColorId(c.id)}
                  >
                    <span
                      className="d-block w-100 h-100 rounded-1 border"
                      style={{ backgroundColor: c.hex, borderColor: 'rgba(0,0,0,0.08)' }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-4">
            <div
              className="text-uppercase fw-medium mb-2"
              style={{ fontSize: '13px', letterSpacing: '0.5px', color: COLORS.ink }}
            >
              Quantity
            </div>
            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="btn btn-outline-dark btn-sm"
                disabled={qty <= 1}
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="px-2" style={{ minWidth: '2rem', textAlign: 'center' }}>
                {qty}
              </span>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {size && (!needsColorChoice || colorId) && (
            <p className="small text-muted mb-3">
              Selected: {size} ·{' '}
              {needsColorChoice ? selectedColor?.label : product.colors[0]?.label}
            </p>
          )}

          <button
            type="button"
            className="btn btn-dark text-uppercase px-4 py-3 rounded-1 mb-3 w-100 d-md-inline-block"
            style={{ fontSize: '14px', letterSpacing: '0.5px' }}
            disabled={!canAdd}
            onClick={handleAdd}
          >
            Add to bag
          </button>
          <div>
            <Link to="/products" className="small text-muted">
              ← All products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

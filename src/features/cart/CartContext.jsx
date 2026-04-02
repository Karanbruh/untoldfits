/* eslint-disable react-refresh/only-export-components -- context + hook pattern */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { getProductById } from '@/data/products'

const STORAGE_KEY = 'untold_cart_v1'

/** Subtotal under this (paise) pays flat delivery. */
const FREE_SHIPPING_THRESHOLD_CENTS = 299900
/** Flat delivery in paise (₹99). */
const DELIVERY_FLAT_CENTS = 9900

function loadStoredItems() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function persistItems(items) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    /* ignore quota */
  }
}

function makeLineId(productId, size, colorId) {
  return `${productId}__${size}__${colorId}`
}

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadStoredItems)

  useEffect(() => {
    persistItems(items)
  }, [items])

  const addItem = useCallback(
    ({ productId, size, colorId, quantity = 1 }) => {
      const product = getProductById(productId)
      if (!product) return
      const color = product.colors.find((c) => c.id === colorId)
      const lineId = makeLineId(productId, size, colorId)
      const snapshot = {
        name: product.name,
        priceCents: product.priceCents,
        image: product.images[0],
        colorLabel: color?.label ?? colorId,
      }

      setItems((prev) => {
        const idx = prev.findIndex((l) => l.lineId === lineId)
        if (idx >= 0) {
          const next = [...prev]
          next[idx] = {
            ...next[idx],
            quantity: next[idx].quantity + quantity,
          }
          return next
        }
        return [
          ...prev,
          {
            lineId,
            productId,
            size,
            colorId,
            quantity,
            snapshot,
          },
        ]
      })
    },
    [],
  )

  const updateQty = useCallback((lineId, quantity) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((l) => (l.lineId === lineId ? { ...l, quantity } : l)),
    )
  }, [])

  const removeItem = useCallback((lineId) => {
    setItems((prev) => prev.filter((l) => l.lineId !== lineId))
  }, [])

  const clear = useCallback(() => {
    setItems([])
  }, [])

  const totals = useMemo(() => {
    const subtotalCents = items.reduce(
      (sum, l) => sum + l.snapshot.priceCents * l.quantity,
      0,
    )
    const deliveryCents =
      subtotalCents > 0 && subtotalCents < FREE_SHIPPING_THRESHOLD_CENTS
        ? DELIVERY_FLAT_CENTS
        : 0
    const totalCents = subtotalCents + deliveryCents
    const totalQuantity = items.reduce((sum, l) => sum + l.quantity, 0)
    return { subtotalCents, deliveryCents, totalCents, totalQuantity }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      addItem,
      updateQty,
      removeItem,
      clear,
      subtotalCents: totals.subtotalCents,
      deliveryCents: totals.deliveryCents,
      totalCents: totals.totalCents,
      totalQuantity: totals.totalQuantity,
    }),
    [items, addItem, updateQty, removeItem, clear, totals],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider')
  }
  return ctx
}

export { FREE_SHIPPING_THRESHOLD_CENTS, DELIVERY_FLAT_CENTS }

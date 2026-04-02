import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ProductGrid from '@/components/product/ProductGrid'

const DEFAULT_BATCH = 12

/**
 * Remount with key={resetKey} when filters/sort change so visible window resets without effects.
 * @param {{ products: import('@/data/products').Product[], batchSize?: number }} props
 */
export default function ProductListingInfinite({ products, batchSize = DEFAULT_BATCH }) {
  const fullLen = products.length
  const [visibleCount, setVisibleCount] = useState(() => Math.min(batchSize, fullLen))

  const visible = useMemo(
    () => products.slice(0, visibleCount),
    [products, visibleCount],
  )

  const loadMore = useCallback(() => {
    setVisibleCount((c) => Math.min(c + batchSize, fullLen))
  }, [batchSize, fullLen])

  const sentinelRef = useRef(null)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el || visibleCount >= fullLen) return undefined

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore()
        }
      },
      { root: null, rootMargin: '200px', threshold: 0 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [loadMore, visibleCount, fullLen])

  const hasMore = visibleCount < fullLen

  return (
    <>
      <ProductGrid products={visible} />
      {hasMore && (
        <div
          ref={sentinelRef}
          className="text-center text-muted small py-4"
          aria-hidden
        >
          Loading more…
        </div>
      )}
    </>
  )
}

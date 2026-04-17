/**
 * @param {{ priceCents: number, compareAtPriceCents?: number }} product
 * @returns {number | null} Rounded percent off (e.g. 30 for "30% off"), or null if no valid compare-at
 */
export function getDiscountPercentOff(product) {
  const compare = product.compareAtPriceCents
  if (compare == null || compare <= product.priceCents) return null
  return Math.round(((compare - product.priceCents) / compare) * 100)
}

/**
 * @param {{ priceCents: number, compareAtPriceCents?: number }} product
 */
export function hasCompareAtPrice(product) {
  return (
    product.compareAtPriceCents != null && product.compareAtPriceCents > product.priceCents
  )
}

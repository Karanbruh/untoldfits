/**
 * @param {import('@/data/products').Product[]} products
 * @param {{ categories: string[], sizes: string[], colorHexes: string[], genders: string[], priceMinCents: number | null, priceMaxCents: number | null }} filters
 */
export function filterProducts(products, filters) {
  return products.filter((p) => {
    if (filters.categories.length && !filters.categories.includes(p.categorySlug)) {
      return false
    }
    if (filters.genders.length && !filters.genders.includes(p.gender)) {
      return false
    }
    if (filters.sizes.length) {
      const hasSize = p.sizes.some((s) => filters.sizes.includes(s))
      if (!hasSize) return false
    }
    if (filters.colorHexes.length) {
      const hexes = p.colors.map((c) => c.hex.toLowerCase())
      const wanted = filters.colorHexes.map((h) => h.toLowerCase())
      const match = wanted.some((h) => hexes.includes(h))
      if (!match) return false
    }
    if (filters.priceMinCents != null && p.priceCents < filters.priceMinCents) {
      return false
    }
    if (filters.priceMaxCents != null && p.priceCents > filters.priceMaxCents) {
      return false
    }
    return true
  })
}

/**
 * @param {import('@/data/products').Product[]} products
 * @param {string} query
 */
export function filterProductsByName(products, query) {
  const q = query.trim().toLowerCase()
  if (!q) return products
  return products.filter((p) => p.name.toLowerCase().includes(q))
}

/** @param {'price-asc' | 'price-desc' | 'newest'} sort */
export function sortProducts(products, sort) {
  const copy = [...products]
  if (sort === 'price-asc') {
    copy.sort((a, b) => a.priceCents - b.priceCents)
  } else if (sort === 'price-desc') {
    copy.sort((a, b) => b.priceCents - a.priceCents)
  } else if (sort === 'newest') {
    copy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }
  return copy
}

export function getUniqueColorHexes(products) {
  const set = new Set()
  products.forEach((p) => {
    p.colors.forEach((c) => set.add(c.hex.toLowerCase()))
  })
  return [...set]
}

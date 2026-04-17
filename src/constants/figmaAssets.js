/**
 * Site imagery: Unsplash URLs (stable IDs). Replace with /public assets anytime.
 * Icons use react-icons — not defined here.
 */

/** @param {string} photoId Unsplash photo id (e.g. 1551028719-00167b16eac5) */
function u(photoId, w = 1200) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${w}&q=80`
}

/** Hero background — retail / streetwear mood */
export const ASSETS = {
  hero: '/images/hero-home.png',
  jackets: u('1551028719-00167b16eac5'),
  hoodies: '/images/collections/hoodie-collection.png',
  tShirts: '/images/collections/t-shirt-collection.png',
  henleys: '/images/products/henleys/black-rib-henley-full.png',
  trackpants: u('1515886657613-9f3515b0c78f'),
  tankTops: '/images/collections/tank-top-collection.png',
  cropTops: u('1509631179647-0177331693ae'),
}

/**
 * Two distinct placeholder shots per category for legacy catalog products (not real SKUs).
 * @type {Record<import('@/data/products').CategorySlug, { primary: string, secondary: string }>}
 */
export const PRODUCT_PLACEHOLDERS = {
  henleys: {
    primary: '/images/products/henleys/black-rib-henley-full.png',
    secondary: '/images/products/henleys/black-rib-henley-detail.png',
  },
  'crop-tops': {
    primary: u('1469334031218-e382a71b716b'),
    secondary: u('1515886657613-9f3515b0c78f'),
  },
  'leather-jackets': {
    primary: '/images/products/leather-jackets/black-leather-jacket-1.png',
    secondary: '/images/products/leather-jackets/black-leather-jacket-2.png',
  },
}

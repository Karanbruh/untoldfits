import { ASSETS } from '@/constants/figmaAssets'

/** @typedef {'shop' | 'oos'} CollectionShowcaseMode */

/**
 * @typedef {Object} CollectionShowcaseItem
 * @property {string} slug Unique list key; for `oos`, used in `/collections/unavailable/:slug`
 * @property {string} title
 * @property {string} image
 * @property {CollectionShowcaseMode} mode
 * @property {import('@/data/products').CategorySlug} [shopSlug] When `mode === 'shop'`, category to open
 */

/** @type {CollectionShowcaseItem[]} */
export const collectionShowcase = [
  {
    slug: 't-shirts',
    title: 'T-Shirt',
    image: ASSETS.tShirts,
    mode: 'shop',
    shopSlug: 'henleys',
  },
  {
    slug: 'tank-tops',
    title: 'Tank top',
    image: ASSETS.tankTops,
    mode: 'oos',
  },
  {
    slug: 'crop-tops',
    title: 'Crop top',
    image: ASSETS.cropTops,
    mode: 'shop',
    shopSlug: 'crop-tops',
  },
  {
    slug: 'hoodies',
    title: 'Hoodie',
    image: ASSETS.hoodies,
    mode: 'oos',
  },
  {
    slug: 'leather-jacket',
    title: 'Leather jacket',
    image: '/images/collections/leather-jacket-collection.png',
    mode: 'shop',
    shopSlug: 'leather-jackets',
  },
  {
    slug: 'trackpants',
    title: 'Trackpant',
    image: ASSETS.trackpants,
    mode: 'oos',
  },
]

/** Slugs that resolve to the out-of-stock collection page */
export const collectionUnavailableSlugs = collectionShowcase
  .filter((c) => c.mode === 'oos')
  .map((c) => c.slug)

/**
 * @param {string} slug
 * @returns {string | null}
 */
export function getCollectionShowcaseTitle(slug) {
  const row = collectionShowcase.find((c) => c.slug === slug)
  return row ? row.title : null
}

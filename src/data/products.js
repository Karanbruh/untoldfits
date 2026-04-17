/** @typedef {'henleys' | 'crop-tops' | 'leather-jackets'} CategorySlug */
/** @typedef {'men' | 'women' | 'unisex'} Gender */

/**
 * @typedef {Object} ProductColor
 * @property {string} id
 * @property {string} label
 * @property {string} hex
 */

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} priceCents INR in paise (rupees × 100) — current selling price
 * @property {string} priceDisplay
 * @property {number} [compareAtPriceCents] Optional higher “was” price in paise (for strikethrough)
 * @property {string} [compareAtPriceDisplay] Optional display string e.g. ₹999
 * @property {CategorySlug} categorySlug
 * @property {string} categoryLabel
 * @property {Gender} gender
 * @property {string[]} sizes
 * @property {ProductColor[]} colors
 * @property {string[]} images
 * @property {string} createdAt ISO
 */

const TRENDING_IDS = [
  'black-rib-long-sleeve-henley',
  'black-leather-jacket',
  'baby-monster-crop-top',
  'lana-del-ray-crop-top',
]

/** @type {Product[]} */
const CATALOG = [
  {
    id: 'black-rib-long-sleeve-henley',
    name: 'Black Rib Long-Sleeve Henley',
    description:
      'Fine vertical rib knit, slim fit, and a classic five-button henley placket in solid black. Full-length sleeves for an elevated everyday base layer.',
    priceCents: 69900,
    priceDisplay: '₹699',
    compareAtPriceCents: 99900,
    compareAtPriceDisplay: '₹999',
    categorySlug: 'henleys',
    categoryLabel: 'Henleys',
    gender: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'black', label: 'Black', hex: '#000000' }],
    images: [
      '/images/products/henleys/black-rib-henley-full.png',
      '/images/products/henleys/black-rib-henley-detail.png',
    ],
    createdAt: '2026-04-17T12:00:00.000Z',
  },
  {
    id: 'baby-monster-crop-top',
    name: 'Baby monster crop-top',
    description: 'Statement graphic crop top with a soft handfeel and everyday comfort.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'black', label: 'Black', hex: '#000000' }],
    images: ['/images/products/crop-tops/baby-monster-crop-top.png'],
    createdAt: '2025-03-01T09:00:00.000Z',
  },
  {
    id: 'hotmess-crop-top',
    name: 'Hotmess crop-top',
    description: 'Bold slogan crop top in breathable cotton with a relaxed, casual fit.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'white', label: 'White', hex: '#ffffff' }],
    images: ['/images/products/crop-tops/hotmess-crop-top.png'],
    createdAt: '2025-03-02T09:00:00.000Z',
  },
  {
    id: 'spicy-crop-top',
    name: 'Spicy crop-top',
    description: 'Playful graphic crop top designed for easy styling with denim or cargos.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'white', label: 'White', hex: '#ffffff' }],
    images: ['/images/products/crop-tops/spicy-crop-top.png'],
    createdAt: '2025-03-03T09:00:00.000Z',
  },
  {
    id: 'siri-block-his-number-crop-top',
    name: 'Siri, Block his number crop-top',
    description: 'Conversation-starting printed crop top with a clean silhouette.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'red', label: 'Red', hex: '#dc2626' }],
    images: ['/images/products/crop-tops/siri-block-his-number-crop-top.png'],
    createdAt: '2025-03-04T09:00:00.000Z',
  },
  {
    id: 'gym-therapy-crop-top',
    name: 'Gym therapy crop-top',
    description: 'Lightweight crop top made for off-duty looks and gym-day layering.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'pink', label: 'Pink', hex: '#ec4899' }],
    images: ['/images/products/crop-tops/gym-therapy-crop-top.png'],
    createdAt: '2025-03-05T09:00:00.000Z',
  },
  {
    id: 'mans-right-to-shut-the-fuck-up-crop-top',
    name: 'Mans right to shut the fuck up crop-top',
    description: 'Edgy statement crop top with a modern cut and soft stretch feel.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'black', label: 'Black', hex: '#000000' }],
    images: ['/images/products/crop-tops/mans-right-to-shut-the-fuck-up-crop-top.png'],
    createdAt: '2025-03-06T09:00:00.000Z',
  },
  {
    id: 'i-like-coffee-more-than-people-crop-top',
    name: 'I like coffee more than people crop-top',
    description: 'Daily-wear graphic crop top with a soft finish and flattering drape.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'black', label: 'Black', hex: '#000000' }],
    images: ['/images/products/crop-tops/i-like-coffee-more-than-people-crop-top.png'],
    createdAt: '2025-03-07T09:00:00.000Z',
  },
  {
    id: 'too-blessed-to-be-stressed-crop-top',
    name: 'Too blessed to be stressed crop-top',
    description: 'Feel-good slogan crop top that pairs easily with joggers and skirts.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'red', label: 'Red', hex: '#dc2626' }],
    images: ['/images/products/crop-tops/too-blessed-to-be-stressed-crop-top.png'],
    createdAt: '2025-03-08T09:00:00.000Z',
  },
  {
    id: '1989-taylor-swift-crop-top',
    name: '1989 Taylor swift crop-top',
    description: 'Retro-inspired crop top graphic with a comfortable, easy-to-layer fit.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'dark-blue', label: 'Dark blue', hex: '#1e3a8a' }],
    images: ['/images/products/crop-tops/1989-taylor-swift-crop-top.png'],
    createdAt: '2025-03-09T09:00:00.000Z',
  },
  {
    id: 'pass-joint-not-judgement-crop-top',
    name: 'Pass joint not judgement crop-top',
    description: 'Printed crop top with a contemporary streetwear vibe and soft jersey feel.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'pink', label: 'Pink', hex: '#ec4899' }],
    images: ['/images/products/crop-tops/pass-joint-not-judgement-crop-top.png'],
    createdAt: '2025-03-10T09:00:00.000Z',
  },
  {
    id: 'lana-del-ray-crop-top',
    name: 'Lana del ray crop-top',
    description: 'Minimal crop top print with a clean neckline and soft cotton comfort.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'black', label: 'Black', hex: '#000000' }],
    images: [
      '/images/products/crop-tops/lana-del-ray-crop-top.png',
      '/images/products/crop-tops/lana-del-ray-crop-top-back.png',
    ],
    createdAt: '2025-03-11T09:00:00.000Z',
  },
  {
    id: 'evolution-crop-top',
    name: 'Evolution crop-top',
    description: 'Clean graphic crop top built for daily wear with a confident silhouette.',
    priceCents: 39900,
    priceDisplay: '₹399',
    compareAtPriceCents: 59900,
    compareAtPriceDisplay: '₹599',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'green', label: 'Green', hex: '#16a34a' }],
    images: ['/images/products/crop-tops/evolution-crop-top.png'],
    createdAt: '2025-03-12T09:00:00.000Z',
  },
  {
    id: 'black-leather-jacket',
    name: 'Black Leather Jacket',
    description:
      'High-shine black leather zip jacket with a relaxed cut. Layer it open over dark shirting for night-out edge, or zip up for a clean silhouette.',
    priceCents: 150000,
    priceDisplay: '₹1,500',
    compareAtPriceCents: 300000,
    compareAtPriceDisplay: '₹3,000',
    categorySlug: 'leather-jackets',
    categoryLabel: 'Leather jackets',
    gender: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'black', label: 'Black', hex: '#000000' }],
    images: [
      '/images/products/leather-jackets/black-leather-jacket-1.png',
      '/images/products/leather-jackets/black-leather-jacket-2.png',
    ],
    createdAt: '2026-04-18T12:00:00.000Z',
  },
]

export function getAllProducts() {
  return [...CATALOG]
}

export function getProductById(id) {
  return CATALOG.find((p) => p.id === id) ?? null
}

export function getTrendingProducts() {
  return TRENDING_IDS.map((tid) => getProductById(tid)).filter(Boolean)
}

export const CATEGORY_SLUGS = ['henleys', 'crop-tops', 'leather-jackets']

export const SIZE_OPTIONS = ['XS', 'S', 'M', 'L', 'XL']

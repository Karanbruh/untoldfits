import { ASSETS } from '@/constants/figmaAssets'

/** @typedef {'jackets' | 'hoodies' | 't-shirts' | 'trackpants' | 'tank-tops' | 'crop-tops'} CategorySlug */
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
 * @property {number} priceCents INR in paise (rupees × 100)
 * @property {string} priceDisplay
 * @property {CategorySlug} categorySlug
 * @property {string} categoryLabel
 * @property {Gender} gender
 * @property {string[]} sizes
 * @property {ProductColor[]} colors
 * @property {string[]} images
 * @property {string} createdAt ISO
 */

const TRENDING_IDS = [
  'technical-shell-jacket',
  'heavyweight-core-hoodie',
  'nylon-cargo-trackpants',
  'essential-boxy-tee',
]

/** @type {Product[]} */
const CATALOG = [
  {
    id: 'technical-shell-jacket',
    name: 'Technical Shell Jacket',
    description:
      'Water-resistant shell with taped seams, packable hood, and articulated sleeves. Built for city weather and travel.',
    priceCents: 1999900,
    priceDisplay: '₹19,999',
    categorySlug: 'jackets',
    categoryLabel: 'Outerwear',
    gender: 'unisex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'slate', label: 'Slate', hex: '#4b5563' },
    ],
    images: [ASSETS.technicalShellJacket, ASSETS.jackets],
    createdAt: '2025-01-12T10:00:00.000Z',
  },
  {
    id: 'heavyweight-core-hoodie',
    name: 'Heavyweight Core Hoodie',
    description:
      'Dense fleece interior, relaxed drop shoulder, ribbed cuffs. A daily uniform in premium cotton blend.',
    priceCents: 899900,
    priceDisplay: '₹8,999',
    categorySlug: 'hoodies',
    categoryLabel: 'Fleece',
    gender: 'unisex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'mist', label: 'Mist', hex: '#9ca3af' },
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'bone', label: 'Bone', hex: '#f3f4f6' },
    ],
    images: [ASSETS.heavyweightCoreHoodie, ASSETS.hoodies],
    createdAt: '2025-01-18T14:30:00.000Z',
  },
  {
    id: 'nylon-cargo-trackpants',
    name: 'Nylon Cargo Trackpants',
    description:
      'Lightweight nylon with articulated knees, zip pockets, and tapered leg. Movement-first tailoring.',
    priceCents: 1199900,
    priceDisplay: '₹11,999',
    categorySlug: 'trackpants',
    categoryLabel: 'Bottoms',
    gender: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'black', label: 'Black', hex: '#000000' }],
    images: [ASSETS.nylonCargoTrackpants, ASSETS.trackpants],
    createdAt: '2025-02-01T09:00:00.000Z',
  },
  {
    id: 'essential-boxy-tee',
    name: 'Essential Boxy Tee',
    description:
      'Supima cotton, boxy silhouette, minimal branding. The foundation layer for every fit.',
    priceCents: 449900,
    priceDisplay: '₹4,499',
    categorySlug: 't-shirts',
    categoryLabel: 'T-Shirts',
    gender: 'unisex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'white', label: 'White', hex: '#ffffff' },
      { id: 'black', label: 'Black', hex: '#000000' },
    ],
    images: [ASSETS.essentialBoxyTee, ASSETS.tShirts],
    createdAt: '2025-01-05T12:00:00.000Z',
  },
  {
    id: 'urban-puffer-jacket',
    name: 'Urban Puffer Jacket',
    description: 'Channel-quilted insulation, matte shell, stand collar. Cold-city essential.',
    priceCents: 2649900,
    priceDisplay: '₹26,499',
    categorySlug: 'jackets',
    categoryLabel: 'Outerwear',
    gender: 'unisex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'olive', label: 'Olive', hex: '#3f4f3a' },
    ],
    images: [ASSETS.jackets, ASSETS.technicalShellJacket],
    createdAt: '2025-02-10T11:00:00.000Z',
  },
  {
    id: 'studio-wool-coat',
    name: 'Studio Wool Coat',
    description: 'Double-faced wool, hidden placket, relaxed fit. Elevated minimal outer layer.',
    priceCents: 3699900,
    priceDisplay: '₹36,999',
    categorySlug: 'jackets',
    categoryLabel: 'Outerwear',
    gender: 'women',
    sizes: ['S', 'M', 'L'],
    colors: [
      { id: 'charcoal', label: 'Charcoal', hex: '#374151' },
      { id: 'camel', label: 'Camel', hex: '#b8956a' },
    ],
    images: [ASSETS.jackets, ASSETS.cropTops],
    createdAt: '2025-01-22T16:00:00.000Z',
  },
  {
    id: 'zip-tech-hoodie',
    name: 'Zip Tech Hoodie',
    description: 'Two-way zip, scuba hood, phone sleeve. Layer-ready technical fleece.',
    priceCents: 1099900,
    priceDisplay: '₹10,999',
    categorySlug: 'hoodies',
    categoryLabel: 'Fleece',
    gender: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'navy', label: 'Navy', hex: '#1e3a5f' },
    ],
    images: [ASSETS.hoodies, ASSETS.heavyweightCoreHoodie],
    createdAt: '2025-02-03T10:00:00.000Z',
  },
  {
    id: 'cropped-fleece-hoodie',
    name: 'Cropped Fleece Hoodie',
    description: 'Cropped body, brushed interior, tonal drawcord. Studio-to-street balance.',
    priceCents: 799900,
    priceDisplay: '₹7,999',
    categorySlug: 'hoodies',
    categoryLabel: 'Fleece',
    gender: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'heather', label: 'Heather', hex: '#9ca3af' },
      { id: 'black', label: 'Black', hex: '#000000' },
    ],
    images: [ASSETS.hoodies, ASSETS.cropTops],
    createdAt: '2025-01-28T13:20:00.000Z',
  },
  {
    id: 'graphic-arc-tee',
    name: 'Graphic Arc Tee',
    description: 'Screen-printed arc motif on midweight cotton. Limited seasonal graphic.',
    priceCents: 529900,
    priceDisplay: '₹5,299',
    categorySlug: 't-shirts',
    categoryLabel: 'T-Shirts',
    gender: 'unisex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'white', label: 'White', hex: '#ffffff' },
      { id: 'black', label: 'Black', hex: '#000000' },
    ],
    images: [ASSETS.tShirts, ASSETS.essentialBoxyTee],
    createdAt: '2025-02-14T09:00:00.000Z',
  },
  {
    id: 'longline-rib-tee',
    name: 'Longline Rib Tee',
    description: 'Ribbed jersey, elongated hem, slim sleeve. Base layer with structure.',
    priceCents: 399900,
    priceDisplay: '₹3,999',
    categorySlug: 't-shirts',
    categoryLabel: 'T-Shirts',
    gender: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'stone', label: 'Stone', hex: '#d6d3d1' },
    ],
    images: [ASSETS.tShirts, ASSETS.tankTops],
    createdAt: '2025-01-30T15:00:00.000Z',
  },
  {
    id: 'tapered-jersey-pants',
    name: 'Tapered Jersey Pants',
    description: 'French terry, elastic waist, clean taper. Lounge-grade comfort.',
    priceCents: 729900,
    priceDisplay: '₹7,299',
    categorySlug: 'trackpants',
    categoryLabel: 'Bottoms',
    gender: 'unisex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'grey', label: 'Grey', hex: '#6b7280' },
    ],
    images: [ASSETS.trackpants, ASSETS.nylonCargoTrackpants],
    createdAt: '2025-02-06T12:00:00.000Z',
  },
  {
    id: 'split-hem-trackpants',
    name: 'Split Hem Trackpants',
    description: 'Zip ankles, reflective tape detail, water-repellent finish.',
    priceCents: 1349900,
    priceDisplay: '₹13,499',
    categorySlug: 'trackpants',
    categoryLabel: 'Bottoms',
    gender: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'black', label: 'Black', hex: '#000000' }],
    images: [ASSETS.trackpants, ASSETS.technicalShellJacket],
    createdAt: '2025-02-11T10:00:00.000Z',
  },
  {
    id: 'performance-tank',
    name: 'Performance Tank',
    description: 'Mesh back panel, bonded seams, anti-odor finish. Training essential.',
    priceCents: 349900,
    priceDisplay: '₹3,499',
    categorySlug: 'tank-tops',
    categoryLabel: 'Tops',
    gender: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'white', label: 'White', hex: '#ffffff' },
    ],
    images: [ASSETS.tankTops, ASSETS.tShirts],
    createdAt: '2025-01-17T11:00:00.000Z',
  },
  {
    id: 'rib-tank',
    name: 'Rib Tank',
    description: 'Compact rib knit, high neck, clean arm opening. Layer or stand alone.',
    priceCents: 319900,
    priceDisplay: '₹3,199',
    categorySlug: 'tank-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'espresso', label: 'Espresso', hex: '#4a3728' },
    ],
    images: [ASSETS.tankTops, ASSETS.cropTops],
    createdAt: '2025-02-08T14:00:00.000Z',
  },
  {
    id: 'studio-crop-top',
    name: 'Studio Crop Top',
    description: 'Compact fit, bonded hem, second-skin feel. Pair with high-rise bottoms.',
    priceCents: 369900,
    priceDisplay: '₹3,699',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'white', label: 'White', hex: '#ffffff' },
    ],
    images: [ASSETS.cropTops, ASSETS.tankTops],
    createdAt: '2025-02-02T09:30:00.000Z',
  },
  {
    id: 'twist-crop-tee',
    name: 'Twist Crop Tee',
    description: 'Asymmetric twist detail, lightweight jersey. Editorial silhouette.',
    priceCents: 429900,
    priceDisplay: '₹4,299',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'grey', label: 'Grey', hex: '#9ca3af' },
      { id: 'black', label: 'Black', hex: '#000000' },
    ],
    images: [ASSETS.cropTops, ASSETS.tShirts],
    createdAt: '2025-02-15T10:00:00.000Z',
  },
  {
    id: 'field-anorak',
    name: 'Field Anorak',
    description: 'Half-zip anorak, storm flap, packable hood. Transit-ready shell.',
    priceCents: 2299900,
    priceDisplay: '₹22,999',
    categorySlug: 'jackets',
    categoryLabel: 'Outerwear',
    gender: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'olive', label: 'Olive', hex: '#3f4f3a' },
      { id: 'black', label: 'Black', hex: '#000000' },
    ],
    images: [ASSETS.technicalShellJacket, ASSETS.jackets],
    createdAt: '2025-01-25T08:00:00.000Z',
  },
  {
    id: 'oversized-zip-hoodie',
    name: 'Oversized Zip Hoodie',
    description: 'Dropped shoulders, heavy zip, kangaroo pockets. Maximum volume.',
    priceCents: 1029900,
    priceDisplay: '₹10,299',
    categorySlug: 'hoodies',
    categoryLabel: 'Fleece',
    gender: 'unisex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'bone', label: 'Bone', hex: '#f3f4f6' },
    ],
    images: [ASSETS.heavyweightCoreHoodie, ASSETS.hoodies],
    createdAt: '2025-02-04T16:00:00.000Z',
  },
  {
    id: 'stripe-tee',
    name: 'Stripe Tee',
    description: 'Yarn-dyed stripes, relaxed crew, garment washed.',
    priceCents: 479900,
    priceDisplay: '₹4,799',
    categorySlug: 't-shirts',
    categoryLabel: 'T-Shirts',
    gender: 'unisex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ id: 'navy-stripe', label: 'Navy Stripe', hex: '#1e3a5f' }],
    images: [ASSETS.essentialBoxyTee, ASSETS.tShirts],
    createdAt: '2025-01-20T12:00:00.000Z',
  },
  {
    id: 'warmup-trackpants',
    name: 'Warm-Up Trackpants',
    description: 'Snap side seams, tricot track fabric, vintage sport reference.',
    priceCents: 759900,
    priceDisplay: '₹7,599',
    categorySlug: 'trackpants',
    categoryLabel: 'Bottoms',
    gender: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'burgundy', label: 'Burgundy', hex: '#6b2d3c' },
    ],
    images: [ASSETS.trackpants, ASSETS.nylonCargoTrackpants],
    createdAt: '2025-02-09T11:00:00.000Z',
  },
  {
    id: 'mesh-tank',
    name: 'Mesh Tank',
    description: 'Open mesh front, solid back, breathable training layer.',
    priceCents: 299900,
    priceDisplay: '₹2,999',
    categorySlug: 'tank-tops',
    categoryLabel: 'Tops',
    gender: 'unisex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'white', label: 'White', hex: '#ffffff' },
    ],
    images: [ASSETS.tankTops, ASSETS.tShirts],
    createdAt: '2025-02-12T09:00:00.000Z',
  },
  {
    id: 'racer-crop',
    name: 'Racer Crop',
    description: 'Racerback cut, compression hold, studio-to-street.',
    priceCents: 329900,
    priceDisplay: '₹3,299',
    categorySlug: 'crop-tops',
    categoryLabel: 'Tops',
    gender: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'plum', label: 'Plum', hex: '#5c3d4a' },
    ],
    images: [ASSETS.cropTops, ASSETS.tankTops],
    createdAt: '2025-02-16T13:00:00.000Z',
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

export const CATEGORY_SLUGS = [
  'jackets',
  'hoodies',
  't-shirts',
  'trackpants',
  'tank-tops',
  'crop-tops',
]

export const SIZE_OPTIONS = ['XS', 'S', 'M', 'L', 'XL']

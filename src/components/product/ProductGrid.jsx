import ProductCard from '@/components/product/ProductCard'

/** @param {{ products: import('@/data/products').Product[] }} props */
export default function ProductGrid({ products }) {
  return (
    <div className="untold-product-grid">
      {products.map((p) => (
        <div key={p.id} className="min-w-0">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  )
}

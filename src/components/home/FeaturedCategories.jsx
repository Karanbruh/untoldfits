import { featuredCategories } from '@/data/categories'
import CategoryCard from '@/components/home/CategoryCard'
import { COLORS } from '@/constants/theme'

export default function FeaturedCategories() {
  return (
    <section className="w-100 untold-section-py px-3 px-sm-4 px-lg-5">
      <div className="mx-auto w-100" style={{ maxWidth: '1440px' }}>
        <h2
          className="text-start fw-normal mb-5"
          style={{
            color: COLORS.ink,
            fontSize: '28px',
            lineHeight: '42px',
            letterSpacing: '-0.5px',
          }}
        >
          Featured Categories
        </h2>
        <div className="row g-4">
          {featuredCategories.map((cat) => (
            <div key={cat.slug} className="col-12 col-md-6 col-lg-4">
              <CategoryCard slug={cat.slug} title={cat.title} image={cat.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

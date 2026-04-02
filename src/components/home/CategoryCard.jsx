import { Link } from 'react-router-dom'
import { COLORS } from '@/constants/theme'

export default function CategoryCard({ title, image, slug }) {
  return (
    <div
      className="position-relative overflow-hidden untold-category-card"
      style={{ backgroundColor: COLORS.surfaceGray }}
    >
      <div className="position-relative w-100 untold-category-media">
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="position-absolute top-0 start-0 w-100 h-100 untold-category-img"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
        </div>
      </div>
      <div
        className="position-absolute bottom-0 start-0 end-0 text-start p-4"
        style={{
          padding: '32px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)',
        }}
      >
        <h3
          className="text-white fw-normal mb-3"
          style={{ fontSize: '24px', lineHeight: '36px', letterSpacing: '-0.5px' }}
        >
          {title}
        </h3>
        <Link
          to={`/category/${encodeURIComponent(slug)}`}
          className="btn btn-outline-light text-uppercase fw-medium rounded-1"
          style={{
            fontSize: '12px',
            letterSpacing: '0.5px',
            padding: '11px 25px',
            borderWidth: '1px',
          }}
        >
          Explore
        </Link>
      </div>
    </div>
  )
}

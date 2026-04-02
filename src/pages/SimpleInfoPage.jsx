import { COLORS } from '@/constants/theme'

export default function SimpleInfoPage({ title, description }) {
  return (
    <div className="container py-5" style={{ maxWidth: '640px' }}>
      <h1 className="h3 fw-normal mb-3" style={{ color: COLORS.ink }}>
        {title}
      </h1>
      <p className="text-muted lh-lg mb-0">{description}</p>
    </div>
  )
}

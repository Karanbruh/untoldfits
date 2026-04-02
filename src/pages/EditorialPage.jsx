import { COLORS } from '@/constants/theme'

export default function EditorialPage() {
  return (
    <div className="container py-5" style={{ maxWidth: '720px' }}>
      <h1 className="h3 fw-normal mb-4" style={{ color: COLORS.ink }}>
        Editorial
      </h1>
      <p className="text-muted lh-lg">
        Stories on craft, city culture, and the people who wear UNTOLD. New features are added here
        as the season unfolds.
      </p>
    </div>
  )
}

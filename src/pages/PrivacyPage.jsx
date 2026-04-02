import { BRAND, COLORS } from '@/constants/theme'

export default function PrivacyPage() {
  return (
    <div className="container py-5" style={{ maxWidth: '720px' }}>
      <h1 className="h3 fw-normal mb-4" style={{ color: COLORS.ink }}>
        Privacy Policy
      </h1>
      <p className="text-muted lh-lg mb-3">
        This is placeholder copy for {BRAND.name}. When you launch, replace this page with a policy
        drafted for your jurisdiction and payment processors.
      </p>
      <p className="text-muted lh-lg mb-0">
        We respect your privacy. This demo site does not collect or store personal data beyond what
        your browser keeps locally (for example, cart contents in local storage on your device).
      </p>
    </div>
  )
}

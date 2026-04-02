import { useState } from 'react'
import { COLORS } from '@/constants/theme'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="container py-5" style={{ maxWidth: '560px' }}>
      <h1 className="h3 fw-normal mb-3" style={{ color: COLORS.ink }}>
        Contact Us
      </h1>
      <p className="text-muted lh-lg mb-4">
        For order questions, press inquiries, or wholesale, send a message. We typically reply within
        two business days.
      </p>
      {sent ? (
        <p className="text-muted small">Thanks—your message has been noted (demo only, no email sent).</p>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="contact-name" className="form-label small text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
              Name
            </label>
            <input id="contact-name" name="name" required className="form-control" style={{ fontSize: '15px' }} />
          </div>
          <div className="mb-3">
            <label htmlFor="contact-email" className="form-label small text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
              Email
            </label>
            <input id="contact-email" name="email" type="email" required className="form-control" style={{ fontSize: '15px' }} />
          </div>
          <div className="mb-4">
            <label htmlFor="contact-msg" className="form-label small text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
              Message
            </label>
            <textarea id="contact-msg" name="message" required rows={5} className="form-control" style={{ fontSize: '15px' }} />
          </div>
          <button
            type="submit"
            className="btn btn-dark text-uppercase px-4 py-2 rounded-1"
            style={{ fontSize: '13px', letterSpacing: '0.5px' }}
          >
            Send
          </button>
        </form>
      )}
    </div>
  )
}

/** @param {number} cents Amount in paise (1 rupee = 100 paise). */
export function formatCents(cents) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100)
}

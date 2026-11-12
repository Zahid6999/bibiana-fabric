export function buildWhatsappHref(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '').replace(/^0/, '')
  return `https://wa.me/880${digits}?text=${encodeURIComponent(message)}`
}

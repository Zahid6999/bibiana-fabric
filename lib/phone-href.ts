export function buildPhoneHref(phone: string): string {
  return `tel:+88${phone.replace(/\D/g, '')}`
}

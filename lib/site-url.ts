const FALLBACK_URL = 'http://localhost:3000'

export function resolveSiteUrl(): URL {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL
  if (typeof host !== 'string' || host.length === 0) return new URL(FALLBACK_URL)
  return new URL(`https://${host}`)
}

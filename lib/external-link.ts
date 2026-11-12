type ExternalLinkProps = { target?: '_blank'; rel?: string }

export function buildExternalLinkProps(href: string): ExternalLinkProps {
  if (!/^https?:\/\//.test(href)) return {}
  return { target: '_blank', rel: 'noopener noreferrer' }
}

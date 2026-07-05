export function getImgUrl(path) {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path
  const base = import.meta.env.BASE_URL || '/'
  const normalized = base.endsWith('/') ? base : base + '/'
  return path.startsWith('/') ? `${normalized}${path.slice(1)}` : `${normalized}${path}`
}

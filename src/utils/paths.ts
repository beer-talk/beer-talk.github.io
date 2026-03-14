export function getPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  // If path is exactly "/" and we have no base (base === '/'), return "/"
  if (path === '/' && base === '/') return '/';
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

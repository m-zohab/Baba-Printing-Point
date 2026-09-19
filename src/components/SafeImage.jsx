import { useState } from 'react'
import { ImageOff } from 'lucide-react'
export default function SafeImage({ src, alt, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)
  if (failed) return (
    <div role="img" aria-label={alt} className={`flex items-center justify-center bg-brand-soft text-brand ${className}`}>
      <ImageOff aria-hidden="true" className="h-8 w-8" />
    </div>)
  return <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} className={className} />
}

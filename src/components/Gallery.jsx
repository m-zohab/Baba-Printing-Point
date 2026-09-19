import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import SafeImage from './SafeImage'
import { gallery, galleryCategories } from '../data/services'
export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [active, setActive] = useState(null)
  const shown = gallery.filter((g) => cat === 'All' || g.cat === cat)
  useEffect(() => {
    if (!active) return
    const k = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [active])
  return (
    <section id="gallery" className="section">
      <h2 className="text-3xl font-extrabold sm:text-4xl">Gallery</h2>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
        {galleryCategories.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`min-h-[44px] rounded-full px-4 text-sm font-semibold transition-colors ${cat === c ? 'bg-brand text-white' : 'bg-white text-ink hover:bg-brand-soft'}`}>{c}</button>))}
      </div>
      {shown.length === 0 ? <p className="mt-10 text-ink/70">No photos in this category yet.</p> : (
        <div className="mt-8 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {shown.map((g, i) => (
            <button key={g.cat + i} onClick={() => setActive(g)} className="block w-full overflow-hidden rounded-2xl shadow-sm transition hover:shadow-lg" aria-label={`View ${g.alt}`}>
              <SafeImage src={g.src} alt={g.alt} className="w-full object-cover" />
            </button>))}
        </div>)}
      {active && (
        <div role="dialog" aria-modal="true" aria-label={active.alt} className="fixed inset-0 z-[60] grid place-items-center bg-ink/80 p-4" onClick={() => setActive(null)}>
          <button className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white" aria-label="Close" autoFocus onClick={() => setActive(null)}><X /></button>
          <SafeImage src={active.src.replace('w=800', 'w=1400')} alt={active.alt} className="max-h-[85vh] max-w-full rounded-xl object-contain" />
        </div>)}
    </section>)
}

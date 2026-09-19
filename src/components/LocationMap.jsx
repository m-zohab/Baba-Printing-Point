import { Navigation } from 'lucide-react'
import { GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED_URL } from '../data/config'
import { isConfigured } from '../utils/whatsapp'
export default function LocationMap() {
  return (
    <section id="find-us" className="section pt-0 sm:pt-0">
      <h2 className="text-3xl font-extrabold sm:text-4xl">Find Us</h2>
      <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5">
        {GOOGLE_MAPS_EMBED_URL ? (
          <iframe title="BABA PRINTING POINT location on Google Maps" src={GOOGLE_MAPS_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0 sm:h-96" />
        ) : (
          <div className="grid h-56 place-items-center p-6 text-center text-ink/70 sm:h-72">Map will appear here once the shop's Google Maps embed link is added in <code>src/data/config.js</code>.</div>)}
      </div>
      {isConfigured(GOOGLE_MAPS_URL)
        ? <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6"><Navigation className="h-5 w-5" aria-hidden="true" />Get Directions</a>
        : <button disabled className="btn-primary mt-6 cursor-not-allowed opacity-50"><Navigation className="h-5 w-5" aria-hidden="true" />Get Directions</button>}
    </section>)
}

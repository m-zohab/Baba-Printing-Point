import { BUSINESS_NAME, PHONE_NUMBER, WHATSAPP_NUMBER, ADDRESS, SOCIAL_LINKS } from '../data/config'
import { links } from './Navbar'
const svc = ['Wedding Cards','Business Cards','Brochures','Flex','Stamp','Cap Printing','Shirt Printing','Mug Printing']
export default function Footer() {
  const h = 'font-display font-bold mb-3'
  return (
    <footer className="mt-10 bg-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div><p className="font-display text-xl font-extrabold text-white">{BUSINESS_NAME}</p><p className="mt-2 text-sm">Professional printing and customization.</p>
          {SOCIAL_LINKS.length > 0 && <ul className="mt-3 flex gap-3">{SOCIAL_LINKS.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="underline">{s.label}</a></li>)}</ul>}</div>
        <nav aria-label="Quick links"><p className={h + ' text-white'}>Quick Links</p><ul className="space-y-2 text-sm">{links.filter(([l]) => l !== 'Online Applications').map(([l, u]) => <li key={u}><a href={u} className="hover:text-white">{l}</a></li>)}</ul></nav>
        <div><p className={h + ' text-white'}>Services</p><ul className="space-y-2 text-sm">{svc.map((s) => <li key={s}><a href="#services" className="hover:text-white">{s}</a></li>)}</ul></div>
        <div><p className={h + ' text-white'}>Contact</p><ul className="space-y-2 text-sm break-words"><li>Phone: {PHONE_NUMBER}</li><li>WhatsApp: {WHATSAPP_NUMBER}</li><li>Address: {ADDRESS}</li></ul></div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-sm">© 2026 BABA PRINTING POINT. All Rights Reserved.</p>
    </footer>)
}

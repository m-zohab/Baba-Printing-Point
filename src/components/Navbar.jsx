import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import useScrolled from '../hooks/useScrolled'
import { BUSINESS_NAME } from '../data/config'
import { customMessage } from '../utils/whatsapp'
export const links = [['Home','#home'],['Services','#services'],['Gallery','#gallery'],['About','#about'],['Online Applications','#online'],['Contact','#contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(20)
  return (
    <header className={`sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur transition-all ${scrolled ? 'shadow-sm' : ''}`}>
      <nav aria-label="Main" className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 transition-all ${scrolled ? 'h-14' : 'h-20'}`}>
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-extrabold leading-none sm:text-xl">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white">B</span>
          <span>{BUSINESS_NAME.split(' ')[0]} <span className="text-brand">{BUSINESS_NAME.split(' ').slice(1).join(' ')}</span></span>
        </a>
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map(([l, h]) => <li key={h}><a href={h} className="font-semibold text-ink/80 hover:text-brand">{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <WhatsAppButton message={customMessage} className="hidden sm:inline-flex !py-2" />
          <button className="grid h-11 w-11 place-items-center rounded-lg border border-ink/15 bg-white lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className={`grid overflow-hidden transition-all duration-300 lg:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <ul className="min-h-0 space-y-1 bg-white px-4">
          {links.map(([l, h]) => <li key={h}><a href={h} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold hover:bg-brand-soft">{l}</a></li>)}
          <li className="py-3"><WhatsAppButton message={customMessage} className="w-full" /></li>
        </ul>
      </div>
    </header>)
}

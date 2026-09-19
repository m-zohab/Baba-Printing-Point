import { ShieldCheck, Palette, Layers } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import SafeImage from './SafeImage'
import { services } from '../data/services'
import { customMessage } from '../utils/whatsapp'
export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
      <div>
        <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">Creative Printing Solutions for Every Occasion</h1>
        <p className="mt-5 max-w-xl text-lg text-ink/75">BABA PRINTING POINT provides professional printing and customization services, from wedding cards and business cards to shirts, mugs and large-format flex.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#services" className="btn-primary">Explore Services</a>
          <WhatsAppButton message={customMessage} variant="btn-ghost" />
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink/80">
          <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-brand" aria-hidden="true" />Quality printing</li>
          <li className="flex items-center gap-2"><Palette className="h-5 w-5 text-brand" aria-hidden="true" />Creative designs</li>
          <li className="flex items-center gap-2"><Layers className="h-5 w-5 text-brand" aria-hidden="true" />Full customization</li>
        </ul>
      </div>
      <div className="relative mx-auto grid w-full max-w-lg grid-cols-2 gap-3 sm:gap-4">
        <SafeImage eager src={services[0].image} alt={services[0].alt} className="col-span-2 h-56 w-full rounded-2xl object-cover shadow-md sm:h-64" />
        <SafeImage eager src={services[1].image} alt={services[1].alt} className="h-36 w-full rounded-2xl object-cover shadow-md sm:h-44" />
        <SafeImage eager src={services[6].image} alt={services[6].alt} className="h-36 w-full rounded-2xl object-cover shadow-md sm:h-44" />
      </div>
    </section>)
}

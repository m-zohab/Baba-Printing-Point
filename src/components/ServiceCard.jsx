import SafeImage from './SafeImage'
import WhatsAppButton from './WhatsAppButton'
import { serviceMessage } from '../utils/whatsapp'
export default function ServiceCard({ s }) {
  const Icon = s.icon
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <SafeImage src={s.image} alt={s.alt} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-xl bg-white text-brand shadow"><Icon className="h-5 w-5" aria-hidden="true" /></span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold">{s.title}</h3>
        <p className="mt-2 flex-1 text-ink/70">{s.desc}</p>
        <WhatsAppButton message={serviceMessage(s.msg)} variant="btn-ghost" className="mt-4 w-full">Get Quote</WhatsAppButton>
      </div>
    </article>)
}

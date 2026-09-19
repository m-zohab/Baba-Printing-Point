import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import { BUSINESS_NAME, PHONE_NUMBER, WHATSAPP_NUMBER, ADDRESS, BUSINESS_HOURS } from '../data/config'
import { customMessage, isConfigured } from '../utils/whatsapp'
export default function Contact() {
  const rows = [[Phone,'Phone',PHONE_NUMBER,isConfigured(PHONE_NUMBER)?`tel:${PHONE_NUMBER}`:null],[MessageCircle,'WhatsApp',isConfigured(WHATSAPP_NUMBER)?WHATSAPP_NUMBER:'[WHATSAPP NUMBER PLACEHOLDER]',null],[MapPin,'Address',ADDRESS,null],[Clock,'Business Hours',BUSINESS_HOURS,null]]
  return (
    <section id="contact" className="section">
      <h2 className="text-3xl font-extrabold sm:text-4xl">Contact</h2>
      <p className="mt-2 text-lg font-semibold text-brand">{BUSINESS_NAME}</p>
      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        {rows.map(([I, l, v, href]) => (
          <div key={l} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5">
            <I className="mt-1 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
            <div><dt className="font-bold">{l}</dt><dd className="mt-1 break-words text-ink/75">{href ? <a href={href} className="hover:text-brand">{v}</a> : v}</dd></div>
          </div>))}
      </dl>
      <WhatsAppButton message={customMessage} className="mt-8">Contact on WhatsApp</WhatsAppButton>
    </section>)
}

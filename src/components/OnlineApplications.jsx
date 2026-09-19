import { Laptop } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import { serviceMessage } from '../utils/whatsapp'
export default function OnlineApplications() {
  return (
    <section id="online" className="section">
      <div className="flex flex-col items-start gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:flex-row sm:items-center sm:p-10">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand"><Laptop className="h-8 w-8" aria-hidden="true" /></span>
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Online Application System</h2>
          <p className="mt-2 max-w-2xl text-ink/70">Need help with an online application? Contact the shop on WhatsApp and tell us what you need. We will let you know how we can help.</p>
        </div>
        <WhatsAppButton message={serviceMessage('the Online Application service')}>Contact on WhatsApp</WhatsAppButton>
      </div>
    </section>)
}

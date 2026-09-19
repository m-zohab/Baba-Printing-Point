import WhatsAppButton from './WhatsAppButton'
import { customMessage } from '../utils/whatsapp'
export default function CustomOrder() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-3xl bg-brand px-6 py-12 text-center text-white sm:px-12">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Have a Custom Printing Idea?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/90">Tell us what you need and we'll help you turn your idea into a professional printed product.</p>
        <WhatsAppButton message={customMessage} variant="btn bg-white text-brand-dark hover:bg-brand-soft" className="mt-6" />
      </div>
    </section>)
}

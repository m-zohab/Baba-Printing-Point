import { BadgeCheck, PenTool, LayoutGrid, Zap, Wallet, Smile } from 'lucide-react'
const items = [
  [BadgeCheck,'Quality Printing','Clean, sharp results on every product.'],
  [PenTool,'Custom Designs','Your idea, your artwork, your style.'],
  [LayoutGrid,'Multiple Services','Cards, flex, apparel and more under one roof.'],
  [Zap,'Fast Service','Simple ordering over WhatsApp.'],
  [Wallet,'Affordable Solutions','Ask for a quote that fits your budget.'],
  [Smile,'Customer Satisfaction','We work with you until you are happy.'],
]
export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="section">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Why choose BABA PRINTING POINT</h2>
        <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([I, t, d]) => (
            <div key={t} className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand"><I aria-hidden="true" /></span>
              <div><h3 className="text-lg font-bold">{t}</h3><p className="mt-1 text-ink/70">{d}</p></div>
            </div>))}
        </div>
      </div>
    </section>)
}

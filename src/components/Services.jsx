import ServiceCard from './ServiceCard'
import { services } from '../data/services'
export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="text-3xl font-extrabold sm:text-4xl">Our Services</h2>
      <p className="mt-3 max-w-2xl text-ink/70">Choose a service and message us on WhatsApp. We will share details and pricing.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.map((s) => <ServiceCard key={s.id} s={s} />)}</div>
    </section>)
}

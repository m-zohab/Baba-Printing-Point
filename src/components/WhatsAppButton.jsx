import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../utils/whatsapp'
export default function WhatsAppButton({ message, children = 'Order on WhatsApp', variant = 'btn-primary', floating = false, className = '' }) {
  const href = whatsappLink(message)
  if (floating) return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#128C4A] text-white shadow-lg transition-transform hover:scale-105">
      <MessageCircle aria-hidden="true" />
    </a>)
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${variant} ${className}`}>
      <MessageCircle aria-hidden="true" className="h-5 w-5" />{children}
    </a>)
}

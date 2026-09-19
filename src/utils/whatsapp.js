import { WHATSAPP_NUMBER, BUSINESS_NAME } from '../data/config'
export const isConfigured = (v) => Boolean(v) && !/YOUR_|PLACEHOLDER/.test(v)
export function whatsappLink(message) {
  const text = encodeURIComponent(message)
  return isConfigured(WHATSAPP_NUMBER) ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}` : `https://wa.me/?text=${text}`
}
export const serviceMessage = (s) => `Hello ${BUSINESS_NAME}, I am interested in ${s}. Please share details and pricing.`
export const customMessage = `Hello ${BUSINESS_NAME}, I would like to ask about a custom printing order.`

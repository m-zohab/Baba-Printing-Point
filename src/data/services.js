import { Heart, Contact as ContactIcon, BookOpen, Maximize, Stamp, HardHat, Shirt, Coffee, Laptop, Sparkles } from 'lucide-react'
// Replace any `image` URL with your own, e.g. '/images/wedding.jpg' (put files in /public/images)
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`
export const services = [
  { id:'wedding', title:'Wedding Cards', icon:Heart, image:u('photo-1607190074257-dd4b7af0309f'), alt:'Printed wedding invitation cards', desc:'Elegant invitation cards in your choice of paper, finish and design.', msg:'Wedding Card printing' },
  { id:'business', title:'Business Cards', icon:ContactIcon, image:u('photo-1589829085413-56de8ae18c73'), alt:'Professional business cards on a desk', desc:'Sharp, professional cards that make a strong first impression.', msg:'Business Card printing' },
  { id:'brochures', title:'Brochures', icon:BookOpen, image:u('photo-1586953208448-b95a79798f07'), alt:'Printed brochures and leaflets', desc:'Folded brochures and flyers to present your business clearly.', msg:'Brochure printing' },
  { id:'flex', title:'Flex Printing', icon:Maximize, image:u('photo-1563986768609-322da13575f3'), alt:'Large format flex banner printing', desc:'Large-format banners and signboards for shops and events.', msg:'Flex Printing' },
  { id:'stamp', title:'Stamp Making', icon:Stamp, image:u('photo-1568667256549-094345857637'), alt:'Custom rubber stamp', desc:'Custom rubber stamps for offices, shops and personal use.', msg:'Stamp Making' },
  { id:'cap', title:'Cap Printing', icon:HardHat, image:u('photo-1588850561407-ed78c282e89b'), alt:'Custom printed cap', desc:'Caps printed with your logo, name or custom design.', msg:'Cap Printing' },
  { id:'shirt', title:'Shirt Printing', icon:Shirt, image:u('photo-1503342217505-b0a15ec3261c'), alt:'Custom printed shirts', desc:'Custom shirts for teams, events, businesses or gifts.', msg:'Shirt Printing' },
  { id:'mug', title:'Mug Printing', icon:Coffee, image:u('photo-1514228742587-6b1558fcca3d'), alt:'Personalized printed mug', desc:'Personalized mugs with photos, names or artwork.', msg:'Mug Printing' },
  { id:'online', title:'Online Application System', icon:Laptop, image:u('photo-1498050108023-c5249f4df085'), alt:'Computer used for online application service', desc:'Contact the shop for help with online application-related services.', msg:'the Online Application service' },
  { id:'custom', title:'Custom Printing', icon:Sparkles, image:u('photo-1452860606245-08befc0ff44b'), alt:'Custom printed products', desc:'Have something else in mind? Tell us and we will help.', msg:'a custom printing order' },
]
export const galleryCategories = ['All','Wedding Cards','Business Cards','Flex','Cups/Mugs','Shirts','Caps','Other Designs']
export const gallery = [
  { cat:'Wedding Cards', src:services[0].image, alt:'Wedding card sample' },
  { cat:'Business Cards', src:services[1].image, alt:'Business card sample' },
  { cat:'Flex', src:services[3].image, alt:'Flex print sample' },
  { cat:'Cups/Mugs', src:services[7].image, alt:'Mug print sample' },
  { cat:'Shirts', src:services[6].image, alt:'Shirt print sample' },
  { cat:'Caps', src:services[5].image, alt:'Cap print sample' },
  { cat:'Other Designs', src:services[9].image, alt:'Custom design sample' },
  { cat:'Other Designs', src:services[2].image, alt:'Brochure sample' },
]

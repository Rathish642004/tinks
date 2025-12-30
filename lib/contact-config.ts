// Contact configuration using environment variables
export const contactConfig = {
  phone: process.env.NEXT_PUBLIC_PHONE || "+919750999906",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919750999906",
  email: process.env.NEXT_PUBLIC_EMAIL || "rathish642004@gmail.com",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Chennai, Tamil Nadu, India",
}

// Generate WhatsApp link with a contextual message
export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

// Pre-defined contextual messages for different pages/sections
export const whatsappMessages = {
  general: "Hi! I'm interested in your uniform services. Please share details.",
  hero: "Hi! I'm interested in your premium uniforms. Can you share details?",
  custom: "Hi! I'm interested in custom uniforms with logo embroidery/printing. Please share details.",
  product: (productName: string, color?: string, size?: string, quantity?: number) => {
    let msg = `Hi! I'm interested in ${productName}`
    if (color) msg += ` in ${color} color`
    if (size) msg += ` and ${size} size`
    if (quantity) msg += `. Quantity: ${quantity}`
    msg += ". Please provide more information."
    return msg
  },
  customUniforms: "Hi! I'm interested in custom uniforms with logo embroidery/printing. Please share details.",
  schoolUniforms: "Hi! I'm interested in school uniforms. Please share details.",
  corporateWear: "Hi! I'm interested in corporate uniforms. Please share details.",
  retailUniforms: "Hi! I'm interested in retail staff uniforms. Please share details.",
  sportsWear: "Hi! I'm interested in sports uniforms and jerseys. Please share details.",
  bulkOrder: "Hi! I'm looking for bulk uniform orders. Please share pricing and details.",
  quote: "Hi! I'd like to request a quote for uniforms. Please share details.",
}

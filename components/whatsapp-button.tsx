"use client"

import { MessageCircle } from "lucide-react"
import { getWhatsAppLink, whatsappMessages } from "@/lib/contact-config"

export function WhatsAppButton() {
  const whatsappUrl = getWhatsAppLink(whatsappMessages.general)

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" />
    </a>
  )
}

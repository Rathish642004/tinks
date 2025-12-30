"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getWhatsAppLink, whatsappMessages } from "@/lib/contact-config"

interface Slide {
  title: string
  description: string
  cta_text: string
  cta_link: string
  image: string
}

const slides: Slide[] = [
  {
    title: "Premium Uniforms That Last",
    description: "Perfect fit. Everyday comfort. Consistent quality.",
    cta_text: "Get Quote on WhatsApp",
    cta_link: getWhatsAppLink(whatsappMessages.hero),
    image: "/school-uniform-shirt-pant-set.jpg",
  },
  {
    title: "Uniform Solutions for Schools & Businesses",
    description: "School, corporate, retail & institutional uniforms.",
    cta_text: "Explore Uniform Options",
    cta_link: "/#uniform-solutions",
    image: "/corporate-formal-shirt.jpg",
  },
  {
    title: "Customized Uniforms That Represent Your Brand",
    description: "Colors, logos, and fits tailored to your identity.",
    cta_text: "Get Quote on WhatsApp",
    cta_link: getWhatsAppLink(whatsappMessages.custom),
    image: "/chef-coat-apron-kitchen-uniform.jpg",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative w-full h-96 lg:h-[500px] overflow-hidden rounded-lg">
      {/* Slide Image Background */}
      <Image
        src={currentSlideData.image || "/placeholder.svg"}
        alt={currentSlideData.title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">{currentSlideData.title}</h1>
        <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl text-balance">{currentSlideData.description}</p>
        <Link href={currentSlideData.cta_link}>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold">
            {currentSlideData.cta_text}
          </Button>
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

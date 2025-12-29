"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    collections: "",
    category: [] as string[],
    quantity: "",
    budget: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const customerTypes = [
    "School Uniforms",
    "Corporate Wear",
    "Retail & Staff Wear",
    "Sports & jersey Wear"
  ]
  
  // Category options based on selected collection
  const categoryMapping: Record<string, string[]> = {
    "School Uniforms": ["Boys Uniform Set", "Girls Uniform Set", "Kindergarten Uniform Set"],
    "Corporate Wear": ["Everyday Comfort Polo", "EasyCare Work Polo", "StretchFit Polo", "Premium Soft Polo"],
    "Retail & Staff Wear": ["WorkComfort Polo", "AirFlow Knit T-Shirt ", "GraceWear Saree"],
    "Sports & jersey Wear": ["Team Jerseys", "Custom Sportswear"]
  }
  
  const categories = formData.collections ? categoryMapping[formData.collections] || [] : []
  const budgetRanges = ["Under ₹10,000", "₹10,000 - ₹50,000", "₹50,000 - ₹1,00,000", "Above ₹1,00,000"]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitted(true)
    setIsLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        collections: "",
        category: [],
        quantity: "",
        budget: "",
        message: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  const handleCategoryChange = (cat: string) => {
    setFormData((prev) => {
      const currentCategories = prev.category
      if (currentCategories.includes(cat)) {
        return { ...prev, category: currentCategories.filter((c) => c !== cat) }
      } else {
        return { ...prev, category: [...currentCategories, cat] }
      }
    })
  }

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Contact Us</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl text-balance">
            Get in touch for quotes, bulk orders, or any uniform inquiries. We're here to help!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <p className="text-sm text-foreground/80 mb-1">+91 98765 43210</p>
                  <p className="text-xs text-foreground/60">Mon - Sat, 10 AM - 6 PM</p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition block"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">WhatsApp</h3>
                  <p className="text-sm text-foreground/80 mb-1">+91 98765 43210</p>
                  <p className="text-xs text-accent hover:underline">Chat on WhatsApp</p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@tinks.com"
              className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition block"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <p className="text-sm text-foreground/80 mb-1">contact@tinks.com</p>
                  <p className="text-xs text-accent hover:underline">Send us an email</p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Address</h3>
                  <p className="text-sm text-foreground/80">Tamil Nadu, India</p>
                  <p className="text-xs text-foreground/60 mt-2">
                    Serving: Chennai, Coimbatore, Madurai, Trichy, Salem + all Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            {/* <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-primary mb-4">Business Hours</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10 AM - 6 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10 AM - 4 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
                  <p className="text-foreground/80 mb-4">
                    Your message has been received. We'll contact you soon with a quote.
                  </p>
                  <p className="text-sm text-foreground/60">Redirecting you back to the form...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Phone and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Collections */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Uniform Collections *</label>
                    <select
                      name="collections"
                      value={formData.collections}
                      onChange={(e) => {
                        handleChange(e)
                        // Reset category when collection changes
                        setFormData((prev) => ({ ...prev, collections: e.target.value, category: [] }))
                      }}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    >
                      <option value="">Select collection type...</option>
                      {customerTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Category and Quantity - Only show after Collections is selected */}
                  {formData.collections && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">Category * <span className="text-xs font-normal text-foreground/60">(Select one or more)</span></label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {categories.map((cat) => (
                            <label
                              key={cat}
                              className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                                formData.category.includes(cat)
                                  ? "border-primary bg-primary/10"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.category.includes(cat)}
                                onChange={() => handleCategoryChange(cat)}
                                className="w-4 h-4 accent-primary"
                              />
                              <span className="text-sm text-foreground">{cat}</span>
                            </label>
                          ))}
                        </div>
                        {formData.category.length === 0 && (
                          <input type="hidden" name="category" required />
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Approximate Quantity</label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                          placeholder="e.g., 100 pieces"
                        />
                      </div>
                    </div>
                  )}

                  {/* Budget */}
                  {/* <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Budget Range (Optional)</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    >
                      <option value="">Select budget range...</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div> */}

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                      placeholder="Tell us about your uniform requirements, custom requests, etc..."
                    />
                  </div>

                  {/* Note about logo upload */}
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                    <p className="text-sm text-foreground">
                      <strong>Logo files:</strong> You can share logo files via WhatsApp or email after initial contact.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base font-semibold disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="inline-block w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={18} />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        {/* <div className="bg-secondary/30 rounded-lg border border-border p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📞",
                method: "Call Us",
                description: "Direct phone call for quick inquiries and order discussions",
                action: "Call Now",
                link: "tel:+919876543210",
              },
              {
                icon: "💬",
                method: "WhatsApp",
                description: "Quick messaging, image sharing, and instant replies",
                action: "Chat on WhatsApp",
                link: "https://wa.me/919876543210",
              },
              {
                icon: "✉️",
                method: "Email",
                description: "Detailed communication with document attachments and formal quotes",
                action: "Send Email",
                link: "mailto:contact@tinks.com",
              },
            ].map((item) => (
              <a
                key={item.method}
                href={item.link}
                target={item.method !== "Call Us" ? "_blank" : undefined}
                rel={item.method !== "Call Us" ? "noopener noreferrer" : undefined}
                className="block"
              >
                <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg hover:border-primary transition">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-primary mb-2">{item.method}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{item.description}</p>
                  <span className="text-sm font-semibold text-accent hover:underline">{item.action}</span>
                </div>
              </a>
            ))}
          </div>
        </div> */}
      </div>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

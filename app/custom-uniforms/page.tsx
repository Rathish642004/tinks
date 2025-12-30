import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"
import { getWhatsAppLink, whatsappMessages } from "@/lib/contact-config"

export const metadata = {
  title: "Custom Uniforms & Logo Stitching | Tinks",
  description:
    "Custom uniforms with logo embroidery and printing. Tailored stitching for schools, corporates, hospitals and more across India.",
}

export default function CustomUniformsPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Custom Uniforms</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl text-balance">
            Make your uniforms unique with custom logo embroidery, printing, and tailored stitching. Show your brand
            identity.
          </p>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Customization Options</h2>
            <p className="text-lg text-foreground/70">Choose from multiple ways to personalize your uniforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧵",
                title: "Logo Embroidery",
                description:
                  "High-quality embroidered logos on chest, sleeve, or back. Perfect for professional branding.",
                details: [
                  "Durable and long-lasting",
                  "Multiple thread colors",
                  "Custom design support",
                  "Perfect for formal wear",
                ],
              },
              {
                icon: "🖨️",
                title: "Logo Printing",
                description: "Direct screen printing or digital printing for detailed logos and designs.",
                details: ["Vibrant colors", "Quick turnaround", "Large print areas", "Great for casual wear"],
              },
              {
                icon: "✂️",
                title: "Custom Tailoring",
                description: "Precise stitching and alteration to match exact measurements and fit requirements.",
                details: [
                  "Individual measurements",
                  "Perfect fit guaranteed",
                  "Multiple size options",
                  "Quality seams and stitching",
                ],
              },
            ].map((option, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{option.title}</h3>
                <p className="text-foreground/80 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Our Services</h2>
            <p className="text-lg text-foreground/70">Complete solutions for your uniform needs</p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Bulk Uniform Supply",
                description:
                  "Supply uniforms in bulk for schools, offices, hospitals, and industries. Competitive pricing for large orders.",
              },
              {
                title: "Stitching & Tailoring",
                description:
                  "Professional stitching with precision. We handle individual measurements for perfect fit across all sizes.",
              },
              {
                title: "Logo Embroidery & Printing",
                description: "Transform plain uniforms into branded apparel with your company or institution logo.",
              },
              {
                title: "Alterations & Repairs",
                description:
                  "Quick alterations and repairs for existing uniforms to maintain quality and extend lifespan.",
              },
              {
                title: "Design Consultation",
                description:
                  "Need help with design? Our team can suggest layouts, colors, and positioning for your logo.",
              },
              {
                title: "Fast Turnaround",
                description:
                  "Quick production and delivery across India. Timeline depends on order complexity and quantity.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-foreground/80">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Custom Uniform Process</h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Submit Request",
                  description: "Send us your uniform requirements, logo design, and bulk quantity details.",
                },
                {
                  step: 2,
                  title: "Design Review",
                  description: "Our team reviews your design and provides suggestions for best results.",
                },
                {
                  step: 3,
                  title: "Sample & Approval",
                  description: "We create a sample for your approval before proceeding with bulk production.",
                },
                {
                  step: 4,
                  title: "Production",
                  description: "Full production begins with your approved specifications and customizations.",
                },
                {
                  step: 5,
                  title: "Quality Check",
                  description: "All uniforms undergo strict quality inspection for stitching and embroidery.",
                },
                {
                  step: 6,
                  title: "Delivery",
                  description: "Fast delivery across India. We handle packaging and logistics.",
                },
              ].map((item, index) => (
                <div key={item.step} className="relative flex gap-6">
                  {/* Circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    {index < 5 && <div className="w-1 h-12 bg-accent/30 mt-2" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <h3 className="font-bold text-primary text-lg">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & FAQ */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Custom Uniform FAQ</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the minimum order for custom uniforms?",
                a: "Minimum order is 20 pieces for custom logos. For smaller quantities, we can offer pre-made uniforms with basic customization.",
              },
              {
                q: "How much does logo embroidery cost?",
                a: "Embroidery costs depend on logo size and complexity. We provide customized quotes based on your design and order quantity.",
              },
              {
                q: "Can I provide my own designs?",
                a: "Yes! You can provide your logo in any format (image, vector, or sketch). We'll help position it optimally on the uniform.",
              },
              {
                q: "How long does custom uniform production take?",
                a: "Production timeline: 7-14 days for design approval and production, depending on bulk quantity. Rush orders available upon request.",
              },
              {
                q: "Do you offer color customization?",
                a: "Yes, we can match custom colors. We work with standard fabric suppliers and can also source special color fabrics.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready for Custom Uniforms?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-balance max-w-2xl mx-auto">
            Let us create branded uniforms that represent your organization. Contact us with your requirements and we'll
            provide a detailed quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={getWhatsAppLink(whatsappMessages.customUniforms)} target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold">
                Request Custom Quote
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-base font-semibold bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

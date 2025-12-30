import { HeroSlider } from "@/components/hero-slider"
import { CategoryCard } from "@/components/category-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import { contactConfig, getWhatsAppLink, whatsappMessages } from "@/lib/contact-config"

export const metadata = {
  title: "Premium Uniforms & Custom Stitching in Tamil Nadu | Tinks",
  description:
    "Get premium uniforms for schools, corporates, medical, hotels & industries. Bulk orders, custom logo embroidery, tailoring across India.",
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Slider */}
      <section className="max-w-7xl mx-auto px-8 lg:px-8 py-8">
        <HeroSlider />
      </section>

      {/* Why TINKS Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
              Why TINKS Is the Right Uniform Partner
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              TINKS delivers high-quality uniforms designed for everyday use, consistent supply, and long-term
              partnerships with schools, businesses, and brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Premium Fabrics",
                description: "Carefully selected materials that offer comfort, durability, and a professional finish.",
                icon: "🧵",
              },
              {
                title: "Consistent Fit & Quality",
                description: "Uniform sizing and stitching maintained across every order, every time.",
                icon: "🧥",
              },
              {
                title: "Bulk & Repeat Order Ready",
                description: "Reliable production and supply for institutions and growing organizations.",
                icon: "📦",
              },
              {
                title: "On-Time Delivery",
                description: "Committed timelines you can plan around with confidence.",
                icon: "🚚",
              },
            ].map((point, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="font-bold text-primary mb-2">{point.title}</h3>
                <p className="text-sm text-foreground/80">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uniform Solutions by TINKS */}
      <section id="uniform-solutions" className="py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
              Uniform Solutions by TINKS
            </h2>
            <p className="text-lg text-foreground/70">Premium uniforms for every sector</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/collections/school">
              <CategoryCard
                title="School Uniforms"
                description="Smart, comfortable uniforms built for everyday school life."
                image="/school-front-1.png"
                ctaText="Explore More"
                detailLink="/collections/school"
              />
            </Link>
            <Link href="/collections/corporate">
              <CategoryCard
                title="Corporate Uniforms"
                description="Professional uniforms that strengthen your brand identity."
                image="/Coparate-uniform-front-1.png"
                ctaText="Explore More"
                detailLink="/collections/corporate"
              />
            </Link>
            <Link href="/collections/retail">
              <CategoryCard
                title="Retail & Staff Wears"
                description="Polished staff uniforms for confident customer interactions."
                image="/Retail-front-1.png"
                ctaText="Explore More"
                detailLink="/collections/retail"
              />
            </Link>
            <Link href="/collections/sports">
              <CategoryCard
                title="Sports & Jersey Wears"
                description="Durable, flexible uniforms made for active performance."
                image="/sports-front-1.png"
                ctaText="Explore More"
                detailLink="/collections/sports"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">How It Works</h2>
            <p className="text-lg text-foreground/70">Simple steps from selection to delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Choose", description: "Select from our collection or customize your uniform." },
              { step: 2, title: "Confirm", description: "Finalize sizes, colors, logo, and quantity." },
              { step: 3, title: "Craft", description: "Stitching and printing done with precision and care." },
              { step: 4, title: "Deliver", description: "Uniforms delivered on time, ready to wear." },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-card p-6 rounded-lg text-center h-full border border-border">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>

                {item.step < 4 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="text-accent text-2xl">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold">
                Let's Discuss Your Uniform Needs
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Chennai Public School",
                role: "School Administrator",
                feedback:
                  "High-quality uniforms at reasonable prices. The bulk ordering process was smooth and delivery was on time.",
              },
              {
                name: "TCS Bangalore Branch",
                role: "HR Manager",
                feedback:
                  "Professional service and excellent quality. Our team appreciated the custom embroidery work. Definitely recommending!",
              },
              {
                name: "Apollo Hospital",
                role: "Procurement Head",
                feedback:
                  "Reliable supplier for our scrubs and medical uniforms. Consistent quality and prompt delivery every time.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{testimonial.feedback}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-8 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Let's Discuss Your Uniform Needs</h2>
          {/* <p className="text-lg text-primary-foreground/90 mb-8 text-balance">
            Get in touch with us today for quotes, bulk orders, or custom design consultations.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold">
                Request a Quote
              </Button>
            </Link>
            <a
              href={getWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-base font-semibold bg-transparent">
                <MessageCircle className="mr-2" size={20} />
                Chat on WhatsApp
              </Button>
            </a>
            <a href={`tel:${contactConfig.phone}`}>
              <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-base font-semibold bg-transparent">
                <Phone className="mr-2" size={20} />
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

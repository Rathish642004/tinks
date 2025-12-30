import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Wind, Move, Shield, Target, RefreshCw, MessageSquare, Quote } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About TINKS | Your Trusted Uniform Partner",
  description: "Learn about TINKS – uniforms designed for comfort, fit, and durability. Your long-term uniform partner for schools, businesses, and brands.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">About TINKS</h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl text-balance">
                Uniforms made to support people – comfortably, confidently, and consistently.
              </p>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/security-guard-uniform-shirt-pant.jpg"
                alt="TINKS Uniforms"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center text-balance">Our Story</h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground/80">
                TINKS was created with a simple realization – uniforms are not just clothing; they shape comfort, 
                confidence, and consistency in everyday work and learning.
              </p>
              <p className="text-lg text-foreground/80">
                Thoughtfully designed uniforms support people through long hours and repeated use while helping 
                organizations present a unified, professional image.
              </p>
              <p className="text-lg text-foreground/80">
                We built TINKS around practical innovation, focusing on real-world comfort, fit, and dependable 
                quality rather than short-term trends.
              </p>
              <p className="text-lg text-foreground/80">
                By treating uniforms as solutions, we work as a uniform partner to schools, businesses, and brands 
                that value long-term reliability and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Way of Working Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Our Way of Working</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We believe great uniforms come from clear processes, honest communication, and attention to everyday details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-accent" size={32} />,
                title: "Design with Purpose",
                description:
                  "Every uniform is planned for daily wear, ease of movement, and long-term reliability.",
              },
              {
                icon: <RefreshCw className="text-accent" size={32} />,
                title: "Consistency First",
                description:
                  "The same standards are maintained across every order and repeat batch as a reliable uniform partner.",
              },
              {
                icon: <MessageSquare className="text-accent" size={32} />,
                title: "Clear Communication",
                description:
                  "We keep requirements, timelines, and expectations transparent.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wind className="text-accent" size={32} />,
                title: "Comfort",
                description:
                  "Soft, breathable fabrics designed for all-day wear.",
              },
              {
                icon: <Move className="text-accent" size={32} />,
                title: "Fit",
                description:
                  "Thoughtfully structured sizing that allows easy movement.",
              },
              {
                icon: <Shield className="text-accent" size={32} />,
                title: "Durability",
                description:
                  "Strong stitching and materials built for long-term use.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary text-balance">Our Commitment</h2>
              <p className="text-lg text-foreground/80">
                We are committed to delivering consistent quality in every order. From fabric selection to final 
                finishing, each uniform is produced with care, reliability, and attention to detail – reinforcing 
                our role as a long-term uniform partner organizations can trust.
              </p>
            </div>

            <div className="relative h-96 lg:h-full">
              <Image
                src="/industrial-safety-coverall-uniform.jpg"
                alt="Quality Uniforms"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="text-accent mx-auto mb-6" size={48} />
          <blockquote className="text-2xl lg:text-3xl font-semibold text-primary italic text-balance">
            "Uniforms made to support people – comfortably, confidently, and consistently."
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Let's Work Together</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-balance">
            Whether you need uniforms for your school, company, or industry, we're here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold w-full sm:w-auto">
                Get in Touch
              </Button>
            </Link>
            <Link href="/#uniform-solutions">
              <Button variant="outline" className="px-8 py-6 text-base font-semibold bg-transparent w-full sm:w-auto">
                View Collections
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

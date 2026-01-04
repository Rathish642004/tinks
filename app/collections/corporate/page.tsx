import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { CategoryCard } from "@/components/category-card"
import { corporateWearData } from "@/lib/collections-data"
import Link from "next/link"
import { getWhatsAppLink } from "@/lib/contact-config"

export const metadata = {
  title: "Corporate Uniforms for Offices & Teams | TINKS",
  description: "Corporate uniforms designed for offices and professional teams. Polo t-shirts and workwear uniforms with a polished, professional finish.",
  keywords: "corporate uniform , company uniforms"
}

export default function CorporateWearPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-5 lg:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{corporateWearData.name}</h1>
          <p className="text-lg text-primary-foreground/80 text-balance max-w-3xl">{corporateWearData.intro}</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-5 lg:py-5 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corporateWearData.categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                image={category.image}
                ctaText={category.cta_text}
                detailLink={`/products/corporate/${category.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-balance">
            {corporateWearData.final_cta_text}
          </h2>
          <p className="text-lg text-foreground/80">{corporateWearData.final_cta_subtext}</p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold"
          >
            <Link href={getWhatsAppLink(corporateWearData.whatsapp_message)}>Start a Conversation with TINKS</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

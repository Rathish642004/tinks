import { Suspense } from "react"
import { CollectionsContent } from "@/components/collections-content"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Collections | Tinks Clotting's Place",
  description:
    "Browse our premium uniform collections for schools, corporates, medical, hospitality and industrial sectors.",
}

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<CollectionsLoadingFallback />}>
        <CollectionsContent />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

function CollectionsLoadingFallback() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-40 bg-muted rounded" />
            <div className="h-40 bg-muted rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-64 bg-muted rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

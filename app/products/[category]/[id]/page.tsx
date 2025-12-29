"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronLeft, MessageCircle } from "lucide-react"
import { allCollections } from "@/lib/collections-data"

interface ProductDetailPageProps {
  params: Promise<{
    category: string
    id: string
  }>
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { category, id } = use(params)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  // Find the collection and product
  const collection = allCollections.find((c) => c.id === category)
  const product = collection?.categories.find((cat) => cat.id === id)

  if (!collection || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Product Not Found</h1>
          <Link href="/collections">
            <Button>Go Back</Button>
          </Link>
        </div>
      </div>
    )
  }

  const details = product.productDetails

  return (
    <>
      <Navbar />

      {/* Mobile-Optimized Product Detail Page */}
      <div className="bg-background min-h-screen">
        {/* Back Button */}
        <div className="sticky top-0 bg-card border-b border-border z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2">
            <Link href={`/collections/${category}`}>
              <Button variant="ghost" size="sm" className="gap-2">
                <ChevronLeft size={20} />
                Back
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Product Image and Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image - Left Side */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-square bg-muted rounded-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Product Details - Right Side */}
            <div className="space-y-6">
              {/* Category Badge */}
              <div>
                <p className="text-sm font-medium text-accent">{collection.name}</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-primary mt-2">{product.title}</h1>
              </div>

              {/* Description */}
              <p className="text-foreground/80 text-base">{product.description}</p>

              {/* Price */}
              <div>
                <p className="text-sm text-foreground/60 mb-1">Starting Price</p>
                <p className="text-3xl font-bold text-accent">{details.startingPrice}</p>
                <p className="text-sm text-foreground/70 mt-2">{details.bulkDiscountNote}</p>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Available Colors</h3>
                <div className="flex flex-wrap gap-3">
                  {details.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`px-4 py-2 rounded-lg border-2 transition font-medium ${
                        selectedColor === color.name
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-foreground hover:border-primary"
                      }`}
                    >
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Available Sizes</h3>
                <div className="flex flex-wrap gap-3">
                  {details.sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size.size)}
                      disabled={!size.available}
                      className={`px-4 py-2 rounded-lg border-2 transition font-medium ${
                        selectedSize === size.size
                          ? "border-primary bg-primary text-primary-foreground"
                          : size.available
                            ? "border-border bg-card text-foreground hover:border-primary"
                            : "border-muted bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                      }`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="w-16 text-center border border-border rounded-lg py-2 px-3"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add-ons Info */}
              <div className="bg-secondary/50 border-l-4 border-accent p-4 rounded">
                <p className="font-semibold text-sm text-foreground mb-1">Add-ons available:</p>
                <p className="text-sm text-foreground/80">{details.addOnsNote}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="flex-1">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold">
                    Request Quote
                  </Button>
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hi! I'm interested in this product."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full py-6 text-base font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    WhatsApp Order
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold text-primary mb-8">Why Choose This Product</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {details.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-md transition"
                >
                  <p className="text-4xl mb-3">{feature.icon}</p>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

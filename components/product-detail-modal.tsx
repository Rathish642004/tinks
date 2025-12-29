"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import type { ProductDetails, ProductColor, ProductSize } from "@/lib/collections-data"

interface ProductDetailModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  image: string
  collectionName: string
  details?: ProductDetails
  contactLink: string
}

export function ProductDetailModal({
  isOpen,
  onClose,
  title,
  description,
  image,
  collectionName,
  details,
  contactLink,
}: ProductDetailModalProps) {
  const [selectedColor, setSelectedColor] = useState<ProductColor | undefined>()
  const [selectedSize, setSelectedSize] = useState<ProductSize | undefined>()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (details && isOpen) {
      setSelectedColor(details.colors?.[0])
      setSelectedSize(details.sizes?.[0])
      setQuantity(1)
    }
  }, [details, isOpen])

  if (!isOpen || !details) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 flex justify-between items-center p-4">
          <h2 className="text-lg font-bold text-navy-900">{title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Product content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: Product image */}
          <div className="flex flex-col gap-4">
            <div className="relative h-96 md:h-full bg-gray-100 rounded-lg overflow-hidden">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          </div>

          {/* Right: Product details */}
          <div className="space-y-6">
            {/* Breadcrumb and title */}
            <div>
              <p className="text-sm text-navy-600 font-medium">{collectionName}</p>
              <h3 className="text-3xl font-bold text-navy-900 mt-1">{title}</h3>
              <p className="text-gray-700 mt-2">{description}</p>
            </div>

            {/* Price */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Starting Price</p>
              <p className="text-3xl font-bold text-orange-500">{details.startingPrice}</p>
              <p className="text-sm text-gray-600 mt-2">{details.bulkDiscountNote}</p>
            </div>

            {/* Colors */}
            {details.colors && details.colors.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Available Colors</label>
                <div className="flex gap-3 flex-wrap">
                  {details.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition font-medium text-sm ${
                        selectedColor?.name === color.name
                          ? "border-navy-900 bg-navy-900 text-white"
                          : "border-gray-300 bg-white text-gray-900 hover:border-gray-400"
                      }`}
                    >
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {details.sizes && details.sizes.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Available Sizes</label>
                <div className="flex gap-3 flex-wrap">
                  {details.sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size)}
                      disabled={!size.available}
                      className={`px-4 py-2 rounded-lg border-2 transition font-medium text-sm ${
                        selectedSize?.size === size.size
                          ? "border-navy-900 bg-navy-900 text-white"
                          : size.available
                            ? "border-gray-300 bg-white text-gray-900 hover:border-gray-400"
                            : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
              <div className="flex items-center gap-4 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  −
                </button>
                <span className="text-xl font-semibold text-navy-900 w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add-ons note */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-sm font-medium text-navy-900">
                <span className="font-bold">Add-ons available:</span> {details.addOnsNote}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-4">
              <Link href={contactLink} className="flex-1">
                <Button className="w-full bg-navy-900 text-white hover:bg-navy-800 font-semibold py-3">
                  Request Quote
                </Button>
              </Link>
              <Button
                variant="outline"
                className="flex-1 border-navy-900 text-navy-900 hover:bg-navy-50 font-semibold py-3 bg-transparent"
                onClick={() => {
                  const message = `Hi, I'm interested in ${title} in ${selectedColor?.name} color and ${selectedSize?.size} size. Quantity: ${quantity}. Please provide more information.`
                  window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank")
                }}
              >
                WhatsApp Order
              </Button>
            </div>

            {/* Features */}
            {details.features && details.features.length > 0 && (
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                {details.features.map((feature) => (
                  <div key={feature.title} className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">{feature.icon}</div>
                    <p className="font-semibold text-sm text-gray-900">{feature.title}</p>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { products, categories } from "@/lib/products"
import { Search } from "lucide-react"

export function CollectionsContent() {
  const searchParams = useSearchParams()
  const categoryFilter = searchParams.get("category")

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter || "")
  const [sortBy, setSortBy] = useState("newest")

  const filteredProducts = useMemo(() => {
    let result = products

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Sort
    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price)
    }

    return result
  }, [selectedCategory, searchQuery, sortBy])

  return (
    <>
      {/* Header */}
      <section className="bg-secondary/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-2">Our Collections</h1>
          <p className="text-lg text-foreground/70">Browse our premium uniform collections for all industries</p>
        </div>
      </section>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 text-foreground/50" size={20} />
          <input
            type="text"
            placeholder="Search uniforms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          />
        </div>

        {/* Category and Sort Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Categories */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">Filter by Category</label>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory("")}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  selectedCategory === ""
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-foreground/70">
            Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition group">
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                    {product.bulkDiscount && (
                      <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Bulk Discount
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-primary font-semibold mb-2">{product.category}</p>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-primary mb-4">Starting from ₹{product.price}</p>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="sm">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-foreground/70 text-lg mb-4">No products found matching your search.</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("")
              }}
              variant="outline"
              className="bg-transparent"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)

  const collections = [
    { href: "/collections/school", label: "School Uniforms" },
    { href: "/collections/corporate", label: "Corporate Wear" },
    { href: "/collections/retail", label: "Retail & Staff Wear" },
    { href: "/collections/sports", label: "Sports & Jersey Wear" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-primary rounded" />
            Tinks
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">
              Home
            </Link>

            {/* Collections Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition flex items-center gap-1">
                Collections
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                {collections.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* <Link href="/custom-uniforms" className="text-sm font-medium text-foreground hover:text-primary transition">
              Custom Uniforms
            </Link> */}
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Request a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded">
              Home
            </Link>

            {/* Mobile Collections */}
            <div>
              <button
                onClick={() => setCollectionsOpen(!collectionsOpen)}
                className="w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded flex items-center justify-between"
              >
                Collections
                <ChevronDown size={16} className={collectionsOpen ? "rotate-180" : ""} />
              </button>
              {collectionsOpen && (
                <div className="pl-4 space-y-2">
                  {collections.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/custom-uniforms"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded"
            >
              Custom Uniforms
            </Link>
            <Link href="/about" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded">
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded"
            >
              Contact
            </Link>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-4">Request a Quote</Button>
          </div>
        )}
      </div>
    </nav>
  )
}

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-accent rounded" />
              Tinks
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Premium uniforms & custom stitching for businesses across Tamil Nadu.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-accent transition">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/custom-uniforms" className="hover:text-accent transition">
                  Custom Uniforms
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Custom Stitching</li>
              <li>Logo Embroidery</li>
              <li>Logo Printing</li>
              <li>Bulk Orders</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Tamil Nadu, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>contact@tinks.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/80">
          <p className="text-center">
            © 2025 Tinks Clotting's Place. Serving customers across Tamil Nadu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

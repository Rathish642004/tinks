import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { contactConfig } from "@/lib/contact-config";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-8 lg:px-8 py-8 md:py-12">
        {/* Brand Section - Full width */}
        <div className="mb-6 md:mb-0 md:hidden">
          <Link href="/" className="block mb-2">
            <div className="relative h-8 w-28">
              <Image
                src="/logo2.png"
                alt="Tinks Logo"
                fill
                sizes="112px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <p className="text-xs text-primary-foreground font-semibold">
            Comfort • Fit • Durability
          </p>
        </div>

        {/* Desktop: 4 columns, Mobile: 3 columns for Links, Services, Contact */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
          {/* Brand - Desktop only */}
          <div className="hidden md:block">
            <Link href="/" className="block mb-4">
              <div className="relative h-14 w-48">
                <Image
                  src="/logo2.png"
                  alt="Tinks Logo"
                  fill
                  sizes="192px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm text-primary-foreground font-semibold">
              Comfort • Fit • Durability
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-xs md:text-base mb-2 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2 text-[10px] md:text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#uniform-solutions"
                  className="hover:text-accent transition"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-xs md:text-base mb-2 md:mb-4">Services</h4>
            <ul className="space-y-1 md:space-y-2 text-[10px] md:text-sm">
              <li>Custom Stitching</li>
              <li>Logo Embroidery</li>
              <li>Logo Printing</li>
              <li>Bulk Orders</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs md:text-base mb-2 md:mb-4">Contact</h4>
            <ul className="space-y-1 md:space-y-3 text-[10px] md:text-sm">
              <li className="flex items-start gap-1 md:gap-2">
                <MapPin size={12} className="mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                <span>{contactConfig.address}</span>
              </li>
              <li className="flex items-start gap-1 md:gap-2">
                <Phone size={12} className="mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                <a href={`tel:${contactConfig.phone}`} className="hover:text-accent transition">
                  {contactConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-1 md:gap-2">
                <Mail size={12} className="mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                <a href={`mailto:${contactConfig.email}`} className="hover:text-accent transition">
                  {contactConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 md:pt-8 text-[10px] md:text-sm text-primary-foreground/80">
          <p className="text-center">
            © 2025 Tinks Clotting's Place. Serving customers across India.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

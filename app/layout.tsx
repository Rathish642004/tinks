import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tinks Clotting's Place | Premium Uniforms in Tamil Nadu",
  description:
    "Premium uniforms & custom stitching for schools, corporate, medical, hospitality & industrial. Bulk orders, logo embroidery, on-time delivery across India.",
  keywords: "uniforms Tamil Nadu, school uniforms, corporate uniforms, medical scrubs, bulk orders, custom stitching",
  openGraph: {
    title: "Tinks Clotting's Place | Premium Uniforms in Tamil Nadu",
    description: "Premium uniforms & custom stitching for schools, corporate, medical, hospitality & industrial",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

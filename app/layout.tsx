import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TINKS Uniforms | Premium Uniforms for Schools & Businesses",
  description:
    "Reliable uniform partner for schools, corporate, retail, and sportswear. Quality-focused uniforms designed for daily use and consistent supply.",
  keywords: "uniforms Tamil Nadu, school uniforms, corporate uniforms, medical scrubs, bulk orders, custom stitching",
  openGraph: {
    title: "TINKS Uniforms | Premium Uniforms for Schools & Businesses",
    description: "Reliable uniform partner for schools, corporate, retail, and sportswear. Quality-focused uniforms designed for daily use and consistent supply.",
    type: "website",
  }
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

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
        {/* Preconnect to important origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`font-sans antialiased`}>
        <main>
          {children}
        </main>
        <Analytics />
        
        {/* Google Analytics - loaded after page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SCBCHHZCYQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SCBCHHZCYQ');
          `}
        </Script>
      </body>
    </html>
  )
}

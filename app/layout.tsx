import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TINKS Uniforms | Premium Uniforms for Schools & Businesses",
    template: "%s | TINKS Uniforms",
  },
  description:
    "Reliable uniform partner for schools, corporate, retail, and sportswear. Quality-focused uniforms designed for daily use and consistent supply in Tamil Nadu and beyond.",
  keywords: [
    "uniforms Tamil Nadu",
    "school uniforms",
    "corporate uniforms",
    "medical scrubs",
    "bulk orders",
    "custom stitching",
    "uniform manufacturer",
    "uniform supplier",
  ],

  metadataBase: new URL("https://www.tinksuniforms.in"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "TINKS Uniforms | Premium Uniforms for Schools & Businesses",
    description:
      "Reliable uniform partner for schools, corporate, retail, and sportswear. Quality-focused uniforms designed for daily use and consistent supply.",
    url: "https://www.tinksuniforms.in",
    siteName: "TINKS Uniforms",
    images: [
      {
        url: "/icon.png", // Using icon as fallback, consider adding a specific og-image.jpg
        width: 512,
        height: 512,
        alt: "TINKS Uniforms Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TINKS Uniforms | Premium Uniforms for Schools & Businesses",
    description:
      "Reliable uniform partner for schools, corporate, retail, and sportswear.",
    images: ["/icon.png"], // Fallback image
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TINKS Uniforms",
  url: "https://www.tinksuniforms.in",
  logo: "https://www.tinksuniforms.in/icon.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9876543210", // Placeholder, check contact config if available or user provided
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.instagram.com/tinksuniforms", // Example, update if real link exists
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1e3a8a" />
        {/* Preconnect to important origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <main>{children}</main>
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
  );
}

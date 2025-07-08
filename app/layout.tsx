import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Seyon Sri - Software Developer",
  description:
    "Software Development & Network Engineering student at Sheridan College with a passion for turning complex problems into elegant solutions. Specializing in AI/ML development, full-stack web development, and database solutions.",
  manifest: "/manifest.json",
  metadataBase: new URL('https://seyons.com'),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Seyon Sri Portfolio",
  },
  openGraph: {
    title: "Seyon Sri - Software Developer",
    description:
      "Software Development & Network Engineering student at Sheridan College with a passion for turning complex problems into elegant solutions.",
    url: "https://seyons.com",
    siteName: "Seyon Sri Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seyon Sri - Software Developer",
    description:
      "Software Development & Network Engineering student at Sheridan College with a passion for turning complex problems into elegant solutions.",
    images: ["/opengraph-image.png"],
  },
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: "/icons/icon-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/icons/icon-512x512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/icon-152x152.svg", sizes: "152x152", type: "image/svg+xml" },
      { url: "/icons/icon-144x144.svg", sizes: "144x144", type: "image/svg+xml" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'

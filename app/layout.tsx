import './globals.css'
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
    statusBarStyle: "black-translucent",
    title: "Seyon Sri Portfolio",
    startupImage: [
      {
        url: "/icons/icon-512x512.png",
        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/icon-512x512.png", 
        media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/icon-512x512.png",
        media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)",
      }
    ]
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}

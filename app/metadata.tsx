import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Seyon Sri - Software Developer",
  description:
    "Software Development & Network Engineering student at Sheridan College with a passion for turning complex problems into elegant solutions. Specializing in AI/ML development, full-stack web development, and database solutions.",
  openGraph: {
    title: "Seyon Sri - Software Developer",
    description:
      "Software Development & Network Engineering student at Sheridan College with a passion for turning complex problems into elegant solutions.",
    url: "https://seyonsri.dev",
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
}

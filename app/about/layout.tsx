import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Seyon Sri | Software Developer",
  description: "Learn about Seyon Sri's background, skills, and journey in software development and network engineering at Sheridan College.",
  openGraph: {
    title: "About - Seyon Sri | Software Developer",
    description: "Learn about Seyon Sri's background, skills, and journey in software development and network engineering.",
    url: "https://seyons.com/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
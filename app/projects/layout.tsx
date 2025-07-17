import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Seyon Sri | Software Developer Portfolio",
  description: "Explore Seyon Sri's software development projects including web applications, AI/ML projects, and database solutions built with modern technologies.",
  openGraph: {
    title: "Projects - Seyon Sri | Software Developer Portfolio",
    description: "Explore Seyon Sri's software development projects including web applications, AI/ML projects, and database solutions.",
    url: "https://seyons.com/projects",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
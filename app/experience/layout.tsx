import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience - Seyon Sri | Software Developer",
  description: "View Seyon Sri's professional experience, work history, and career journey in software development and network engineering.",
  openGraph: {
    title: "Experience - Seyon Sri | Software Developer",
    description: "View Seyon Sri's professional experience, work history, and career journey in software development.",
    url: "https://seyons.com/experience",
  },
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
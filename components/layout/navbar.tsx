"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const navbarMenu = [
  { title: "home", href: "/", key: "h" },
  { title: "about", href: "/about", key: "a" },
  { title: "projects", href: "/projects", key: "p" },
  { title: "experience", href: "/experience", key: "e" },
] as const

export default function Navbar() {
  const pathname = usePathname()

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return

      const menuItem = navbarMenu.find((item) => item.key === e.key.toLowerCase())
      if (menuItem) {
        window.location.href = menuItem.href
      }
    }

    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [])

  const isActive = (href: string, currentPath: string) => {
    if (currentPath === href) return true
    if (href !== "/" && currentPath.startsWith(href + "/")) return true
    return false
  }

  const getHighlightedParts = (title: string, key: string) => {
    if (!title || !key || key.length !== 1) return { before: title, highlighted: null, after: null }

    const index = title.toLowerCase().indexOf(key.toLowerCase())
    if (index === -1) return { before: title, highlighted: null, after: null }

    return {
      before: title.substring(0, index),
      highlighted: title.substring(index, index + 1),
      after: title.substring(index + 1),
    }
  }

  return (
    <nav className="bg-bg-secondary/50 border-t border-border-primary text-sm select-none">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-text-secondary">
            <div className="w-2 h-4 bg-text-accent"></div>
            <span className="text-xs">~/seyon</span>
          </div>
          <div className="flex items-center gap-1">
            {navbarMenu.map(({ title, href, key }, i) => {
              const parts = getHighlightedParts(title, key)
              const isOnCurrentPath = isActive(href, pathname)

              return (
                <Link
                  key={i}
                  href={href}
                  className={`px-3 py-1 text-sm transition-all ${
                    isOnCurrentPath
                      ? "bg-text-accent text-bg-primary rounded"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                  aria-label={`${title} (Shortcut: ${key})`}
                >
                  {parts.before}
                  {parts.highlighted && (
                    <span className={`${isOnCurrentPath ? "text-bg-primary" : "text-text-accent"} transition-all`}>
                      {parts.highlighted}
                    </span>
                  )}
                  {parts.after}
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-text-secondary text-xs">-- VIEW --</span>
          <div className="bg-text-accent text-bg-primary px-3 py-1 text-xs rounded">SEYON</div>
        </div>
      </div>
    </nav>
  )
}

"use client"

import type React from "react"
import { useTheme } from "@/contexts/ThemeContext"

interface HeaderProps {
  isFullscreen: boolean
  onMouseDown: (e: React.MouseEvent) => void
  toggleFullscreen: () => void
  isMobile?: boolean
}

export default function Header({ isFullscreen, onMouseDown, toggleFullscreen, isMobile = false }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()

  const handleHeaderKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggleFullscreen()
    }
  }

  return (
    <header
      className={`relative flex cursor-default items-center justify-between overflow-hidden px-4 py-3 bg-bg-secondary/50 border-b border-border-primary ${
        isFullscreen ? "lg:cursor-pointer" : "lg:cursor-grab lg:active:cursor-grabbing"
      }`}
      onDoubleClick={toggleFullscreen}
      onMouseDown={onMouseDown}
      onKeyDown={handleHeaderKeyDown}
    >
      <div className="group absolute top-1/2 flex -translate-y-1/2 items-center">
        <button
          className={`grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full ${!isMobile ? 'hover:cursor-pointer' : 'cursor-default'}`}
          onClick={isMobile ? undefined : () => window.close()}
          aria-label="Close"
          disabled={isMobile}
        >
          <div className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#898989] transition-colors ${!isMobile ? 'group-hover:bg-[#FF6057]' : ''}`}></div>
        </button>
        <button 
          className={`grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full ${!isMobile ? 'hover:cursor-pointer' : 'cursor-default'}`}
          aria-label="Minimize"
          disabled={isMobile}
        >
          <div className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#898989] transition-colors ${!isMobile ? 'group-hover:bg-[#FEBC2D]' : ''}`}></div>
        </button>
        <button
          className={`grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full ${!isMobile ? 'hover:cursor-pointer' : 'cursor-default'}`}
          onClick={isMobile ? undefined : toggleFullscreen}
          aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          disabled={isMobile}
        >
          <div className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#898989] transition-colors ${!isMobile ? 'group-hover:bg-[#2BC840]' : ''}`}></div>
        </button>
      </div>

      {/* Dark/Light Mode Toggle - Now visible on both mobile and desktop */}
      <div className="flex items-center ml-auto">
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-bg-tertiary/50 border border-border-secondary hover:bg-bg-tertiary/80 transition-all duration-300 group"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            // Sun icon - shows when in dark mode (click to go to light)
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-500 transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-110"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            // Moon icon - shows when in light mode (click to go to dark)
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-110"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

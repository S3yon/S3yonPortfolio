"use client"

import { useEffect } from "react"

export default function PWAStandaloneDetector() {
  useEffect(() => {
    // Check if running in standalone mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isInStandaloneMode = (window.navigator as any).standalone === true

    if (isStandalone || isInStandaloneMode) {
      // Add PWA class to body for standalone-specific styling
      document.body.classList.add('pwa-standalone')
      console.log('Running in PWA standalone mode')
      
      // iOS specific adjustments
      if (isIOS) {
        document.body.classList.add('pwa-ios')
        
        // Prevent zoom on iOS
        document.addEventListener('gesturestart', (e) => {
          e.preventDefault()
        })
        
        // Prevent scroll bounce on iOS
        document.addEventListener('touchmove', (e) => {
          if ((e.target as Element).closest('.scroll-container')) {
            return // Allow scrolling in designated scroll containers
          }
          e.preventDefault()
        }, { passive: false })
      }
    }

    // Listen for display-mode changes
    const mediaQuery = window.matchMedia('(display-mode: standalone)')
    const handleDisplayModeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('pwa-standalone')
      } else {
        document.body.classList.remove('pwa-standalone')
      }
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleDisplayModeChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleDisplayModeChange)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleDisplayModeChange)
      } else {
        mediaQuery.removeListener(handleDisplayModeChange)
      }
    }
  }, [])

  return null
}
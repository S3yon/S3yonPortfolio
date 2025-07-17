"use client"

import { useState, useEffect } from "react"

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    const handleAppInstalled = () => {
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      // Track PWA install success for analytics
    } else {
      // Track PWA install dismissal for analytics
    }

    setDeferredPrompt(null)
    setShowInstallPrompt(false)
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // Hide for 24 hours
    localStorage.setItem('pwa-install-dismissed', String(Date.now() + 24 * 60 * 60 * 1000))
  }

  // Check if user previously dismissed the prompt
  useEffect(() => {
    const dismissed = localStorage.getItem('pwa-install-dismissed')
    if (dismissed && Date.now() < Number(dismissed)) {
      setShowInstallPrompt(false)
    }
  }, [])

  if (!showInstallPrompt) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-50 bg-bg-secondary border border-border-primary rounded-lg shadow-lg p-4 animate-in slide-in-from-bottom-2">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-text-accent to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-bg-primary font-bold text-lg">S</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-text-primary text-sm">Install Portfolio App</h3>
          <p className="text-text-secondary text-xs mt-1">
            Install this portfolio as an app for faster access and offline viewing.
          </p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleInstallClick}
              className="px-3 py-1.5 bg-text-accent text-bg-primary rounded text-xs font-medium hover:bg-green-500 transition-colors"
            >
              Install
            </button>
            <button
              onClick={handleDismiss}
              className="px-3 py-1.5 bg-bg-tertiary text-text-secondary rounded text-xs font-medium hover:bg-bg-quaternary transition-colors"
            >
              Not now
            </button>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="text-text-secondary hover:text-text-primary transition-colors text-lg leading-none"
          aria-label="Dismiss install prompt"
        >
          ×
        </button>
      </div>
    </div>
  )
}
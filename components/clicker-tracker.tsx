'use client'
import { useEffect } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'

export default function ClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a')
      if (!link) return
      const href = link.getAttribute('href') || ''
      const text = link.textContent?.trim().slice(0, 80)

      if (href.startsWith('tel:')) {
        sendGTMEvent({
          event: 'phone_click',
          phone_number: href.replace('tel:', ''),
          link_text: text,
          page_path: window.location.pathname,
        })
      } else if (/wa\.me|api\.whatsapp\.com|web\.whatsapp\.com/.test(href)) {
        sendGTMEvent({
          event: 'whatsapp_click',
          link_text: text,
          page_path: window.location.pathname,
        })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
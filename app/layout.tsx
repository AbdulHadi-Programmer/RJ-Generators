import type { Metadata } from 'next'
// @ts-ignore: allow side-effect global CSS import when no type declarations are present
import './globals.css' // Global styles
import { GoogleTagManager } from '@next/third-parties/google'
import FloatingCall from '../components/floating-call'

// Fallback stub for ClickTracker when the component or its types are missing.
// Replace with the real import if the component is added back to the project.
const ClickTracker = () => null

export const metadata: Metadata = {
  title: 'RJ Generators — Generator Sale & Purchase',
  description:
    'Buy and sell generators with RJ Generators. We buy all makes and models and sell quality-checked, certified new and used generators backed by warranty.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5GML4FP6" />
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GML4FP6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <FloatingCall />
        <ClickTracker />
      </body>
    </html>
  )
}
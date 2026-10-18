import type { Metadata } from 'next'
// @ts-ignore: allow side-effect global CSS import when no type declarations are present
import './globals.css' // Global styles
import { GoogleTagManager } from '@next/third-parties/google'

// ClickTracker component removed from separate file; provide a minimal inline
// placeholder to avoid missing-module errors. If you have a client-side
// click-tracker implementation, restore the import and remove this stub.
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
        {children}
        <ClickTracker />
      </body>
    </html>
  )
}
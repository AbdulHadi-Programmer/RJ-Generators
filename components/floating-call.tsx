import { Phone } from 'lucide-react'

export default function FloatingCall() {
  return (
    <a
      href="tel:+923223025354"
      aria-label="Call RJ Generators"
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
    >
      <Phone className="h-6 w-6" />
    </a>
  )
}
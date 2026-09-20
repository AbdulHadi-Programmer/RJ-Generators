import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const socials = [
    { name: "Facebook", handle: "@rjgenerators", icon: <Facebook className="w-4 h-4" /> },
    { name: "Instagram", handle: "@rjgenerators", icon: <Instagram className="w-4 h-4" /> },
    { name: "LinkedIn", handle: "RJ Generators", icon: <Linkedin className="w-4 h-4" /> },
    { name: "Twitter / X", handle: "@rjgenerators", icon: <Twitter className="w-4 h-4" /> },
    { name: "YouTube", handle: "RJ Generators", icon: <Youtube className="w-4 h-4" /> },
  ];

  return (
    <footer id="contact" className="bg-zinc-950 text-zinc-400 py-20 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white font-mono text-xs font-bold tracking-tighter">
                RJ
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase">
                Generators
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-zinc-400">
              Your trusted dealer for the sale and purchase of generators. We buy all makes and models and sell quality-checked, certified units backed by warranty.
            </p>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs font-mono">Directory</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">Generators For Sale</Link></li>
              <li><Link href="/sell" className="hover:text-blue-400 transition-colors">Sell Your Generator</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Valuation & Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs font-mono">Headquarters</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Ranchorline, Gazderabad Marwari Line Near Bangi Masjid, Karachi, South</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>+92 323 3287874</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>+92 322 8195965</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>zehakmujeeb@icloud.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs font-mono">Operations</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="font-bold text-zinc-300 mb-1">Buying & Sales Desk</div>
                <div>Mon - Fri: 08:00 - 18:00</div>
              </li>
              <li>
                <div className="font-bold text-zinc-300 mb-1">Collections & Support</div>
                <div className="font-bold text-blue-400">24/7/365 Available</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 text-xs font-medium text-zinc-500 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1">
            <p>&copy; {new Date().getFullYear()} RJ Generators. All deals secured.</p>
            <p className="text-black">
              <a
                href="https://k-h-tech-sol-production.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered By &quot;K&amp;H TECH SOL&quot;
              </a>
            </p>
          </div>
          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#"
                  aria-label={social.name}
                  title={`${social.name} — ${social.handle}`}
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors"
                >
                  {social.icon}
                  <span>{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

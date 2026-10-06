"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface HeaderProps {
  theme?: "dark" | "light";
}

interface NavItem {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
}

export function Header({ theme = "light" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkBg = theme === "dark" && !isScrolled && !mobileMenuOpen;

  const navLinks: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      children: [
        { name: "Buy Generators", href: "/products" },
        { name: "Sell to Us", href: "/sell" },
        { name: "Rent Generators", href: "/rent" },
        { name: "Repair & Maintenance", href: "/repair" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  const whatsappUrl = buildWhatsAppUrl("Connect with our representative on whatsapp to get a quote for generator.");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? "py-3 bg-white"
          : isScrolled
          ? "py-3 bg-white/90 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group z-50" onClick={() => setMobileMenuOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/RJ-Logo.png"
              alt="RJ Generator"
              className="h-40 lg:h-32 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop & Tablet Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 text-sm font-medium transition-all hover:-translate-y-0.5 duration-200 ${
                      isDarkBg ? "text-white/80 hover:text-white" : "text-zinc-600 hover:text-zinc-900"
                    }`}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-4 w-64 bg-white border border-zinc-200 shadow-xl shadow-zinc-900/5"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setServicesOpen(false)}
                            className="block px-6 py-4 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 hover:text-blue-600 border-b border-zinc-100 last:border-b-0 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href!}
                  className={`text-sm font-medium transition-all hover:-translate-y-0.5 duration-200 ${
                    isDarkBg ? "text-white/80 hover:text-white" : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all flex items-center gap-2 ${
                isDarkBg
                  ? "bg-white text-zinc-900 hover:bg-zinc-100"
                  : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-md hover:shadow-xl hover:shadow-zinc-900/10"
              }`}
            >
              Buy or Sell <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden relative w-10 h-10 flex items-center justify-center -mr-2 z-50 rounded-full transition-colors ${
              isDarkBg ? "text-white hover:bg-white/10" : "text-zinc-900 hover:bg-zinc-100"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-end justify-center gap-[5px] w-5 h-5">
              <span className={`block h-[2px] rounded-full transition-all duration-300 bg-current ${mobileMenuOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"}`} />
              <span className={`block h-[2px] rounded-full transition-all duration-300 bg-current ${mobileMenuOpen ? "w-5 opacity-0 translate-x-2" : "w-4"}`} />
              <span className={`block h-[2px] rounded-full transition-all duration-300 bg-current ${mobileMenuOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-3"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 flex flex-col overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link.children ? (
                    <>
                      <button
                        className="text-4xl font-bold tracking-tight text-zinc-900 flex items-center justify-between w-full group"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        aria-expanded={mobileServicesOpen}
                      >
                        {link.name}
                        <ChevronDown className={`w-8 h-8 text-zinc-200 group-hover:text-blue-600 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 ml-4 border-l border-zinc-200 flex flex-col gap-4 pl-6">
                              {link.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="text-2xl font-bold text-zinc-700 hover:text-blue-600 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href!}
                      className="text-4xl font-bold tracking-tight text-zinc-900 flex items-center justify-between group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                      <ArrowRight className="w-8 h-8 text-zinc-200 group-hover:text-blue-600 transition-colors group-hover:translate-x-2" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-auto mb-12 pt-10"
            >
              <div className="w-full h-px bg-zinc-100 mb-8" />
              <div className="flex flex-col gap-4">
                <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Get in touch</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full font-bold transition-all active:scale-[0.98] shadow-lg shadow-blue-600/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Buy or Sell <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


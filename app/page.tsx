"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Shield, Zap, Wrench, Hexagon, Activity, Cpu, Database, Anchor, Factory, Network, CheckCircle2, Cog } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { HeroSlider } from "@/components/hero-slider";
import { motion } from "motion/react";
import reapir_maintanence from "@/public/images/Repair_and_maintanance.jpeg";
import Instant_Cash_Payment from "@/public/images/Instant_Cash_Payment.jpeg";

import { FaqAccordion } from "@/components/faq-accordion";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Home() {
  const whatsappUrl = buildWhatsAppUrl("Connect with our representative on whatsapp to get a quote for generator.");

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-zinc-900 selection:bg-blue-500/3">
      <Header theme="dark" />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <HeroSlider />
            {/* Dark gradient overlay for perfect white text legibility against photos */}
            <div className="absolute inset-0 bg-zinc-950/5" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 pt-32 pb-12 lg:pt-40 lg:pb-24">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-12 h-0.5 bg-blue-500"></span>
                <span className="font-mono text-sm tracking-widest uppercase text-blue-400 font-bold">
                  Generator Sale & Purchase
                </span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
              >
                Rent, Buy, sell and trade generators. Fast and fair.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-zinc-300 mb-10 leading-relaxed max-w-lg"
              >
                RJ Generators is your trusted dealer for new and used industrial generators. 
                Sell your old unit at the best market price, or buy quality-checked, certified generators backed by warranty.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/sell"
                  className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  Rent a Generator <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex justify-center items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  Buy Generators
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Reach / Trusted By */}
        <section className="border-b border-zinc-200 bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest font-bold">Trusted by Buyers & Sellers Worldwide</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-2 font-bold text-xl text-zinc-800 tracking-tight">
                <Hexagon className="w-8 h-8 text-blue-600" /> APEX
              </div>
              <div className="flex items-center gap-2 font-bold text-xl text-zinc-800 tracking-tight">
                <Activity className="w-8 h-8 text-blue-600" /> MEDCORP
              </div>
              <div className="flex items-center gap-2 font-bold text-xl text-zinc-800 tracking-tight">
                <Cpu className="w-8 h-8 text-blue-600" /> SYNTHEX
              </div>
              <div className="flex items-center gap-2 font-bold text-xl text-zinc-800 tracking-tight">
                <Database className="w-8 h-8 text-blue-600" /> DATANET
              </div>
              <div className="flex items-center gap-2 font-bold text-xl text-zinc-800 tracking-tight">
                <Anchor className="w-8 h-8 text-blue-600" /> MARITIME
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs / Features */}
        <section className="border-b border-zinc-200 bg-zinc-950 py-24 lg:py-32 text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-12 h-0.5 bg-blue-500"></span>
                    <span className="font-mono text-sm tracking-widest uppercase text-blue-400 font-bold">
                      Our Services
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">A better way to buy and sell generators.</h2>
                  <p className="text-lg text-zinc-400 leading-relaxed mb-8">Whether you are upgrading, downsizing, or equipping a facility from scratch, our dealership makes the process transparent, fast, and completely hassle-free.</p>
                  <Link
                    href="/sell"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-blue-400 transition-colors"
                  >
                    Get a Free Valuation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:bg-zinc-800/50 transition-colors">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src="/images/technician-engineering-2.jpg" alt="Quality-checked generator stock" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                    </div>
                    <div className="p-8 sm:p-10">
                      <Shield className="w-8 h-8 text-blue-500 mb-8" />
                      <h3 className="text-2xl font-bold mb-4">Quality-Checked Stock</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        Every generator we sell passes a rigorous 200-point inspection and load test. You buy with complete confidence, backed by our written warranty.
                      </p>
                    </div>
                  </div>
                  <div className="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:bg-zinc-800/50 transition-colors sm:translate-y-12">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src="/images/business-handshake.jpg" alt="Generator ready for valuation" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                    </div>
                    <div className="p-8 sm:p-10">
                      <Zap className="w-8 h-8 text-blue-500 mb-8" />
                      <h3 className="text-2xl font-bold mb-4">Fair Market Valuation</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        Get a transparent, market-based valuation for your generator within hours. No pressure, no hidden fees — just a fair price based on condition and demand.
                      </p>
                    </div>
                  </div>
                  <div className="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:bg-zinc-800/50 transition-colors">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={Instant_Cash_Payment} alt="Generators we buy for instant cash" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                    </div>
                    <div className="p-8 sm:p-10">
                      <Network className="w-8 h-8 text-blue-500 mb-8" />
                      <h3 className="text-2xl font-bold mb-4">Instant Cash Payment</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        We buy all makes and models, from portable units to 3000kVA industrial systems. Payment is made on the spot at collection — no waiting, no hassle.
                      </p>
                    </div>
                  </div>
                  <div className="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:bg-zinc-800/50 transition-colors sm:translate-y-12">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src="/images/hero-industrial-3.png" alt="Trade-in upgrade generator" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                    </div>
                    <div className="p-8 sm:p-10">
                      <Wrench className="w-8 h-8 text-blue-500 mb-8" />
                      <h3 className="text-2xl font-bold mb-4">Trade-In & Upgrades</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        Upgrade to a newer, more efficient unit and we will deduct the value of your old generator from the price. One phone call handles everything.
                      </p>
                    </div>
                  </div>
                  <div className="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:bg-zinc-800/50 transition-colors">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={reapir_maintanence} alt="Generator repair and maintenance services" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                    </div>
                    <div className="p-8 sm:p-10">
                      <Cog className="w-8 h-8 text-blue-500 mb-8" />
                      <h3 className="text-2xl font-bold mb-4">Repair & Maintenance</h3>
                      <p className="text-zinc-400 leading-relaxed">
                        Complete repair and maintenance services — servicing, troubleshooting, painting, and breakdown support. Rental units are fully covered.
                      </p>
                      <Link
                        href="/repair"
                        className="inline-flex items-center gap-2 mt-6 text-sm font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Showcase Teaser */}
        <section className="relative py-24 lg:py-32 bg-zinc-950 border-b border-zinc-200 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/400KVA.jpeg" alt="Generators in stock" fill sizes="100vw" className="object-cover opacity-25" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/70 to-zinc-950/90"></div>
          </div>
          <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6 text-white">Generators Available for Sale</h2>
            <p className="text-zinc-300 text-lg mb-10 leading-relaxed">
              Browse our current stock of new and refurbished generators — from portable units to heavy-duty industrial systems. Every unit is inspected, certified, and ready to run.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-sm font-bold uppercase tracking-wider transition-colors shadow-xl"
            >
              Browse Stock Directory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 lg:py-32 bg-zinc-950 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Trusted by buyers and sellers.</h2>
              <p className="text-lg text-zinc-400">Hear from facility managers and plant owners who buy and sell generators through RJ Generators.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-zinc-900 border border-zinc-800 p-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="flex gap-1 text-blue-500 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <blockquote className="text-xl text-zinc-300 leading-relaxed mb-8 relative z-10">
                  &quot;I sold my old 500kVA unit through RJ Generators. The valuation was fair, collection was free, and I was paid on the spot. The whole process took less than a week.&quot;
                </blockquote>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Sarah Chen" fill sizes="(max-width: 768px) 100vw, 48px" className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold">Hafsa Qasim</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-widest font-mono">Plant Owner</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-zinc-900 border border-zinc-800 p-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="flex gap-1 text-blue-500 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <blockquote className="text-xl text-zinc-300 leading-relaxed mb-8 relative z-10">
                  &quot;We bought a refurbished heavy-duty unit at nearly half the cost of new. It arrived inspected, certified, and load-tested — it has run flawlessly for two years straight.&quot;
                </blockquote>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Marcus Johnson" fill sizes="(max-width: 768px) 100vw, 48px" className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold">Hamza Khan</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-widest font-mono">Facility Director</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-zinc-200">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Generators We Buy & Sell</h2>
                <p className="text-zinc-500 text-lg">We trade all makes and models — from portable units to heavy-duty industrial systems.</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Diesel Generators", desc: "All makes and models from 5kVA to 3000kVA, new or used.", icon: <Database className="w-6 h-6" />, image: "/images/Diesel-Generators.png" },
                { title: "Portable & Mobile Units", desc: "Towable and containerized generators for construction and events.", icon: <Activity className="w-6 h-6" />, image: "/images/Portable-Mobile-Units.png" },
                { title: "Gas & Dual-Fuel Units", desc: "Natural gas, LPG, and biogas generators with clean output.", icon: <Factory className="w-6 h-6" />, image: "/images/Gas-Dual-Fuel-Units.png" },
                { title: "Industrial & Marine", desc: "Heavy-duty, marine-grade, and custom-engineered systems.", icon: <Network className="w-6 h-6" />, image: "/images/Industrial-Marine.png" }
              ].map((industry, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all group flex flex-col h-full overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={industry.image} alt={industry.title} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="w-12 h-12 bg-white shadow-sm border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900 group-hover:text-blue-600 transition-colors -mt-12 relative z-10">
                      {industry.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{industry.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{industry.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance & Support */}
        <section className="py-24 lg:py-32 bg-zinc-50 border-t border-zinc-200">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-0.5 bg-blue-600"></span>
                  <span className="font-mono text-sm tracking-widest uppercase text-blue-600 font-bold">
                    How It Works
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Sell in minutes. Buy with confidence.</h2>
                <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                  Selling a generator has never been easier. Send us the details of your unit, receive a fair valuation, and we handle collection and payment — or upgrade through a simple trade-in.
                </p>
                <ul className="space-y-6">
                  {[
                    "Send Us Photos, Make & Model Details",
                    "Get an Instant Market-Based Valuation",
                    "Free Collection & Same-Day Payment",
                    "Trade-In Credit Toward Your Next Unit"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-semibold text-zinc-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-zinc-200">
                <Image 
                  src="/images/Sell-Steps.jpeg" 
                  alt="Technician inspecting a generator during valuation" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw" 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
                <div className="absolute bottom-8 left-8 bg-white p-6 shadow-xl max-w-xs">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">Same-Day</div>
                      <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Payment on Collection</div>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 font-medium">Free collection across the country with instant cash settlement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-zinc-600">Common questions about buying, selling, and valuing generators.</p>
            </div>
            <FaqAccordion />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-24 lg:py-32">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Ready to buy or sell?</h2>
            <p className="text-blue-100 text-lg mb-10">
              Whether you are upgrading your plant or letting go of an idle generator, our team will give you the fairest price and the fastest turnaround.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-blue-900 px-10 py-5 text-sm font-bold uppercase tracking-wider transition-colors shadow-xl shadow-blue-900/20"
            >
              Start Your Inquiry
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp phoneNumber={WHATSAPP_NUMBER} />
    </div>
  );
}

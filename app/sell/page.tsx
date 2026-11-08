"use client";

import { useState } from "react";
import { CalendarClock, MessageSquare, Truck, Wrench, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { motion } from "motion/react";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function RentPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    output: "",
    usage: "",
    duration: "",
    startDate: "",
    location: "",
    details: "",
  });

  const updateField = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = [
      "GENERATOR RENTAL — NEW INQUIRY",
      "------------------------------",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Capacity needed (kVA): ${form.output}`,
      `Use: ${form.usage}`,
      `Rental duration: ${form.duration}`,
      `Start date: ${form.startDate}`,
      `Site location: ${form.location}`,
      `Details: ${form.details}`,
    ]
      .filter((line) => !line.endsWith(": "))
      .join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors";
  const labelClass = "block text-sm font-bold text-zinc-900";

  const rentalTypes = [
    { title: "Diesel Generators", desc: "From 5kVA to 3000kVA for factories, sites and backup power." },
    { title: "Portable & Mobile Units", desc: "Towable and containerized generators for construction and events." },
    { title: "Gas & Dual-Fuel Units", desc: "Natural gas, LPG, and biogas generators." },
    { title: "Industrial & Marine", desc: "Heavy-duty, marine-grade, and custom-engineered systems." },
  ];

  const steps = [
    { icon: <MessageSquare className="w-6 h-6" />, title: "Tell Us What You Need", desc: "Share the capacity (kVA), location and how long you need the generator." },
    { icon: <CalendarClock className="w-6 h-6" />, title: "Get A Quote", desc: "We reply with availability and rental pricing for your dates." },
    { icon: <Truck className="w-6 h-6" />, title: "Delivery To Your Site", desc: "The generator is delivered and set up where you need it." },
    { icon: <Wrench className="w-6 h-6" />, title: "Support While You Rent", desc: "Servicing and breakdown support are covered for rental units." },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-zinc-900 selection:bg-blue-500/30">
      <Header theme="dark" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/100KVA.jpeg"
              alt="Generator available for rent"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-zinc-950/40" />
          </div>
          <div className="container mx-auto px-6 relative z-10 pt-32 pb-12 lg:pt-40 lg:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-0.5 bg-blue-500"></span>
              <span className="font-mono text-sm tracking-widest uppercase text-blue-400 font-bold">
                Generator Rental
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Rent a generator. <span className="text-blue-400">Power on, fast.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-300 max-w-2xl leading-relaxed mb-10"
            >
              Industrial and portable generators on rent for projects, events, factories and backup power.
              Tell us your capacity and dates, and we will send you availability and a quote.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#rent-form"
                className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Get A Rental Quote
              </a>
              <a
                href={buildWhatsAppUrl("Hi, I want to rent a generator. Please share details and pricing.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Chat On WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* What We Rent */}
        <section className="py-24 lg:py-32 bg-white border-b border-zinc-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="lg:sticky lg:top-32">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-12 h-0.5 bg-blue-600"></span>
                    <span className="font-mono text-sm tracking-widest uppercase text-blue-600 font-bold">
                      What We Rent
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">The right generator for the job.</h2>
                  <p className="text-lg text-zinc-500 leading-relaxed">
                    From small portable units to large industrial systems, rent by the day, week or month. Not sure what capacity you need? Tell us your load and we will help you choose.
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="grid sm:grid-cols-2 gap-6">
                  {rentalTypes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all group p-10"
                    >
                      <div className="w-12 h-12 bg-white shadow-sm border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900 group-hover:text-blue-600 transition-colors">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                      <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 lg:py-32 bg-zinc-950 text-white border-b border-zinc-200">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500"></span>
                <span className="font-mono text-sm tracking-widest uppercase text-blue-400 font-bold">
                  How Renting Works
                </span>
                <span className="w-12 h-0.5 bg-blue-500"></span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Renting is simple.</h2>
              <p className="text-lg text-zinc-400">
                Four steps from your first message to power on site.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-zinc-900 border border-zinc-800 p-10 relative overflow-hidden group hover:border-blue-500/50 transition-colors"
                >
                  <div className="absolute top-6 right-6 font-mono text-4xl font-bold text-zinc-800 group-hover:text-blue-600/30 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-8">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Form */}
        <section id="rent-form" className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-0.5 bg-blue-600"></span>
                  <span className="font-mono text-sm tracking-widest uppercase text-blue-600 font-bold">
                    Rental Quote
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">Tell us what you need.</h2>
                <p className="text-lg text-zinc-500 leading-relaxed mb-10">
                  Fill in your requirement and hit submit. Your inquiry opens directly in WhatsApp, where our team will confirm availability and pricing.
                </p>
                <ul className="space-y-5">
                  {[
                    "Daily, weekly and monthly rentals",
                    "Industrial and portable units",
                    "Servicing and breakdown support included",
                    "Rent now, buy later if you prefer",
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

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-zinc-50 p-8 lg:p-12 border border-zinc-200"
              >
                <h3 className="text-2xl font-bold mb-8">Rent A Generator</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input required type="text" id="name" value={form.name} onChange={updateField("name")} className={inputClass} placeholder="Your name" />
                    </div>
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label htmlFor="phone" className={labelClass}>Phone *</label>
                      <input required type="tel" id="phone" value={form.phone} onChange={updateField("phone")} className={inputClass} placeholder="Your phone number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input type="email" id="email" value={form.email} onChange={updateField("email")} className={inputClass} placeholder="you@company.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label htmlFor="output" className={labelClass}>Capacity Needed (kVA) *</label>
                      <input required type="text" id="output" value={form.output} onChange={updateField("output")} className={inputClass} placeholder="e.g. 100 (or not sure)" />
                    </div>
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label htmlFor="usage" className={labelClass}>Use *</label>
                      <select required id="usage" value={form.usage} onChange={updateField("usage")} className={inputClass}>
                        <option value="">Select...</option>
                        <option>Event / Wedding</option>
                        <option>Construction Site</option>
                        <option>Factory / Industrial</option>
                        <option>Office / Backup Power</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label htmlFor="duration" className={labelClass}>Rental Duration *</label>
                      <input required type="text" id="duration" value={form.duration} onChange={updateField("duration")} className={inputClass} placeholder="e.g. 3 days, 2 months" />
                    </div>
                    <div className="space-y-2 col-span-2 sm:col-span-1">
                      <label htmlFor="startDate" className={labelClass}>Start Date</label>
                      <input type="date" id="startDate" value={form.startDate} onChange={updateField("startDate")} className={inputClass} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className={labelClass}>Site Location *</label>
                    <input required type="text" id="location" value={form.location} onChange={updateField("location")} className={inputClass} placeholder="City, area" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="details" className={labelClass}>Additional Details</label>
                    <textarea id="details" rows={4} value={form.details} onChange={updateField("details")} className={inputClass} placeholder="Single or three phase, hours per day, anything else we should know."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors">
                    Submit On WhatsApp
                  </button>
                  <p className="text-xs text-zinc-500 text-center mt-4">
                    Submitting opens WhatsApp with your details pre-filled — no account needed.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white py-24">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Need a generator today?</h2>
            <p className="text-blue-100 text-lg mb-10">
              Message us your capacity, location and dates on WhatsApp and we will reply with availability and a quote.
            </p>
            <a
              href={buildWhatsAppUrl("Hi, I want to rent a generator. Please share details and pricing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-blue-900 px-10 py-5 text-sm font-bold uppercase tracking-wider transition-colors shadow-xl shadow-blue-900/20"
            >
              Chat With The Rental Team
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp phoneNumber={WHATSAPP_NUMBER} />
    </div>
  );
}
"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { motion } from "motion/react";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "I Want to Sell a Generator",
    message: "",
  });

  const updateField = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = [
      "NEW INQUIRY FROM WEBSITE",
      "------------------------",
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Email: ${form.email}`,
      `Subject: ${form.subject}`,
      `Message: ${form.message}`,
    ]
      .filter((line) => !line.endsWith(": ") && !line.endsWith(":"))
      .join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-zinc-900 selection:bg-blue-500/30">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <section className="container mx-auto px-6 mb-16 border-b border-zinc-200 pb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-0.5 bg-blue-600"></span>
            <span className="font-mono text-sm tracking-widest uppercase text-blue-600 font-bold">
              Contact & Inquiries
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Get in touch.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 max-w-2xl text-lg leading-relaxed"
          >
            Whether you want to sell a generator, buy one, request a valuation, or make a general inquiry, our buying and sales teams are ready to assist.
          </motion.p>
        </section>

        <section className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-12"
            >
                <div>
                  <h2 className="text-2xl font-bold mb-8">Global Headquarters</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Address</h3>
                        <p className="text-zinc-600 text-sm leading-relaxed">Ranchorline, Gazderabad Marwari Line<br />Near Bangi Masjid, Karachi, South</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Phone</h3>
                        <p className="text-zinc-600 text-sm">Rent: +92 323 3287874</p>
                        <p className="text-zinc-600 text-sm">Support: +92 322 8195965</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-zinc-600 text-sm">zehakmujeeb@icloud.com</p>
                        <p className="text-zinc-600 text-sm">zehakmujeeb@icloud.com</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-900 text-white p-8">
                  <h2 className="text-xl font-bold mb-6">Operating Hours</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold mb-1">Buying & Sales Desk</h3>
                        <p className="text-zinc-400 text-sm">Monday - Friday: 08:00 - 18:00 (EST)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold mb-1 text-blue-400">Collections & Support</h3>
                        <p className="text-zinc-400 text-sm">Available 24/7/365</p>
                      </div>
                    </li>
                  </ul>
                </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-50 p-8 lg:p-12 border border-zinc-200"
            >
              <h2 className="text-2xl font-bold mb-8">Send an Inquiry</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <label htmlFor="firstName" className="block text-sm font-bold text-zinc-900">First Name *</label>
                    <input required type="text" id="firstName" value={form.firstName} onChange={updateField("firstName")} className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <label htmlFor="lastName" className="block text-sm font-bold text-zinc-900">Last Name *</label>
                    <input required type="text" id="lastName" value={form.lastName} onChange={updateField("lastName")} className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-zinc-900">Company Email *</label>
                  <input required type="email" id="email" value={form.email} onChange={updateField("email")} className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-bold text-zinc-900">Subject *</label>
                  <select required id="subject" value={form.subject} onChange={updateField("subject")} className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors">
                    <option>I Want to Sell a Generator</option>
                    <option>I Want to Buy a Generator</option>
                    <option>Request a Free Valuation</option>
                    <option>Trade-In / Upgrade Inquiry</option>
                    <option>Parts & Service Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-zinc-900">Message</label>
                  <textarea id="message" rows={5} value={form.message} onChange={updateField("message")} className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="Tell us about the generator you want to buy or sell (make, model, kVA, condition)"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors">
                  Submit Inquiry On WhatsApp
                </button>
                <p className="text-xs text-zinc-500 text-center mt-4">
                  Your inquiry opens directly in WhatsApp with your details pre-filled. For immediate assistance, call our buying and sales line.
                </p>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp phoneNumber={WHATSAPP_NUMBER} />
    </div>
  );
}

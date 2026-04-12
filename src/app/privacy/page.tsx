"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, Shield, Globe, Lock } from "lucide-react";

export default function PrivacyPage() {
  const effectiveDate = "April 12, 2026";

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-16 leading-none">
            Privacy <br /> <span className="color-orange">Policy</span>
          </h1>
          
          <div className="space-y-16 text-zinc-400">
            
            <section className="bg-zinc-900/30 p-8 rounded-3xl border border-zinc-900 flex justify-between items-center">
                <div>
                  <p className="text-white text-lg font-black uppercase tracking-[0.2em] mb-1">Company Name</p>
                  <p className="text-orange font-bold text-xl italic leading-none">PSV Freelance Forge</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Effective Date</p>
                  <p className="text-white font-bold text-sm tracking-widest uppercase">{effectiveDate}</p>
                </div>
            </section>

            <div className="flex flex-col gap-16">
                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">1. Information We Collect</h2>
                    <p className="text-white font-bold text-xs uppercase tracking-widest mb-4">A. Personal Information</p>
                    <ul className="space-y-2 list-disc list-inside mb-8">
                        <li>Name & Email address</li>
                        <li>Phone number</li>
                        <li>Business details (if applicable)</li>
                    </ul>
                    <p className="text-white font-bold text-xs uppercase tracking-widest mb-4">B. Non-Personal Information</p>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>IP address & Browser type</li>
                        <li>Device information</li>
                        <li>Usage data (pages visited, session duration)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">2. How We Use Information</h2>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Deliver and manage our services</li>
                        <li>Communicate project updates</li>
                        <li>Improve platform user experience</li>
                        <li>Process payments and invoices</li>
                        <li>Send promotional communications</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">3. Cookies & Tracking</h2>
                    <p className="mb-4">We use cookies to enhance website performance, remember user preferences, and analyze traffic behavior. You can disable cookies through your browser settings.</p>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">4. Data Sharing</h2>
                    <p className="mb-4">We do not sell personal data. We may share data with trusted service providers (hosting, payment gateways) or legal authorities when required by law.</p>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">5. Data Security</h2>
                    <div className="flex items-start gap-4">
                        <Lock className="text-orange w-8 h-8 shrink-0 mt-1" />
                        <p className="leading-relaxed italic text-zinc-300">We implement industry-standard security measures to protect your data. However, no system can be completely secure.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">6. Data Retention</h2>
                    <p className="leading-relaxed">We retain your data only as long as necessary for business operations and legal compliance purposes.</p>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">7. Your Rights</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {["Access Data", "Request Corrections", "Request Deletion", "Opt-out"].map((right) => (
                            <div key={right} className="p-4 rounded-xl border border-zinc-900 bg-zinc-950 text-center">
                                <p className="text-xs font-bold text-white uppercase tracking-widest">{right}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <section className="pt-16 border-t border-zinc-900">
                <h2 className="text-white font-black text-xl uppercase tracking-widest mb-10">Verification & Contact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                     <div className="flex items-center gap-4">
                        <Send className="text-orange w-5 h-5" />
                        <span className="text-sm font-bold text-white">support@psvfreelanceforge.in</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <Globe className="text-orange w-5 h-5" />
                        <span className="text-sm font-bold text-white">psvfreelanceforge.in</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <Shield className="text-orange w-5 h-5" />
                        <span className="text-sm font-bold text-white">Children&apos;s Policy: 18+</span>
                     </div>
                </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

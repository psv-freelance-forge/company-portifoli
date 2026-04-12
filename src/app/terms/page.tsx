"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, Shield, Globe } from "lucide-react";

export default function TermsPage() {
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
            Terms & <br /> <span className="color-orange">Conditions</span>
          </h1>
          
          <div className="space-y-16 text-zinc-400">
            
            <section className="bg-zinc-900/30 p-8 rounded-3xl border border-zinc-900">
                <p className="text-white text-lg font-medium italic border-l-4 border-orange pl-6">
                    Company Name: PSV Freelance Forge
                </p>
            </section>

            <div className="flex flex-col gap-16">
                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">1. Acceptance of Terms</h2>
                    <p className="leading-relaxed">By accessing or using the PSV Freelance Forge web application (“Service”), you agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our Service.</p>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">2. Services Overview</h2>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Web development</li>
                        <li>Mobile application development</li>
                        <li>Cloud services</li>
                        <li>Integrations</li>
                        <li>Web scraping</li>
                        <li>Digital solutions and consulting</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">3. Use of the Service</h2>
                    <p className="mb-4 text-zinc-300 font-bold">You must not:</p>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Violate any laws or regulations</li>
                        <li>Attempt unauthorized access to our systems</li>
                        <li>Disrupt or interfere with the Service</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">4. User Accounts</h2>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>You are responsible for maintaining account confidentiality.</li>
                        <li>All information provided must be accurate and up to date.</li>
                        <li>We reserve the right to suspend or terminate accounts for violations.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">5. Project Engagement & Payments</h2>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>All project scopes, timelines, and costs will be agreed upon before starting.</li>
                        <li>Payments must be made as per agreed milestones.</li>
                        <li>Delays in payment may result in project suspension.</li>
                        <li>Fees are non-refundable unless explicitly stated.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">6. Intellectual Property</h2>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>All content, code, and deliverables remain property of PSV Freelance Forge until full payment is received.</li>
                        <li>Upon full payment, ownership of deliverables is transferred unless otherwise agreed.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">7. Third-Party Tools</h2>
                    <p className="leading-relaxed">We may use third-party services (hosting, APIs, analytics). We are not responsible for their availability or policies.</p>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">8. Limitation of Liability</h2>
                    <p className="mb-4 text-zinc-300 font-bold">We shall not be liable for:</p>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Indirect or consequential damages</li>
                        <li>Loss of data, revenue, or business</li>
                        <li>Delays caused by third-party services</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">9. Termination</h2>
                    <p className="leading-relaxed">We reserve the right to terminate or suspend services if terms are violated, payments are missed, or misuse is detected.</p>
                </section>

                <section>
                    <h2 className="text-white font-black text-xl uppercase tracking-widest mb-6 border-b border-zinc-900 pb-4">10. Changes to Terms</h2>
                    <p className="leading-relaxed">We may update these Terms at any time. Continued use of the Service implies acceptance of the updated terms.</p>
                </section>
            </div>

            <section className="pt-16 border-t border-zinc-900">
                <h2 className="text-white font-black text-xl uppercase tracking-widest mb-10">Contact & Legal</h2>
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
                        <span className="text-sm font-bold text-white">Governing Law: India</span>
                     </div>
                </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

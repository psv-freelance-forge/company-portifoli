"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Send, 
  Sparkles, 
  Compass, 
  Cpu, 
  Zap, 
  Users, 
  Layers,
  ChevronDown,
  Clock
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);
  const [openIndex, setOpenIndex] = useState<number>(0);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-orange/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] bg-orange/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange font-bold text-xs uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-2/3"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 mb-8">
              <span className="text-2xl">{service.icon}</span>
              <span className="text-orange font-bold text-xs uppercase tracking-[0.2em]">Service Insight</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-10">
              {service.title.split(' ')[0]} <br /> 
              <span className="color-orange">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed border-l-4 border-orange/30 pl-8 max-w-3xl">
              {service.overview}
            </p>
          </motion.div>

          {/* Effort Dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/3 w-full"
          >
            <div className="p-8 rounded-[3rem] bg-zinc-950/50 border border-zinc-900 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 blur-[60px] pointer-events-none" />
              <h3 className="text-white font-black uppercase text-sm tracking-widest mb-8 flex items-center gap-3">
                <Layers className="text-orange w-4 h-4" /> Project Specs
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <h5 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Resource Team</h5>
                    <p className="text-white font-bold">{service.effort.team}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-900">
                  <h5 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-4">Core Deliverables</h5>
                  <ul className="space-y-3">
                    {service.effort.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white text-sm font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/contact"
                  className="w-full py-4 rounded-2xl bg-orange text-white font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.97] transition-all mt-4"
                >
                  Initiate Project <Send className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Approach Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Our <span className="color-orange">Approach</span>
              </h2>
              <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mt-2">Strategic Methodology</p>
            </motion.div>
            <Compass className="text-orange w-12 h-12 opacity-20 hidden md:block" />
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-zinc-900 border-t border-zinc-900">
            {service.approach.map((step, idx) => {
              const [title, description] = step.split(' – ');
              const isOpen = openIndex === idx;
              
              return (
                <div key={idx} className="group">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between py-8 text-left transition-colors"
                  >
                    <div className="flex items-center gap-8">
                       <h4 className={`text-xl md:text-2xl font-bold uppercase tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                        {title}
                      </h4>
                    </div>
                    <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange' : 'text-zinc-700'}`}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-4">
                          <p className="text-zinc-400 text-lg font-medium leading-relaxed max-w-2xl">
                            {description || step}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Execution Strategy Section */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="p-12 md:p-20 rounded-[4rem] bg-zinc-950 border border-zinc-900 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 blur-[120px] rounded-full -mr-64 -mt-64" />
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mb-8">
                <Cpu className="text-orange w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                Execution <br /> <span className="color-orange">Strategy</span>
              </h2>
              <p className="text-zinc-500 text-lg font-medium">
                Optimizing for impact through high-tech precision.
              </p>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {service.strategy.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 rounded-3xl bg-black/40 border border-zinc-900 hover:border-orange/20 transition-all group">
                  <div className="shrink-0">
                    <Zap className="text-orange w-5 h-5 group-hover:scale-125 transition-transform" />
                  </div>
                  <span className="text-white font-bold text-sm leading-tight uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Back Link */}
        <div className="mt-24 text-center">
           <Link 
            href="/services" 
            className="px-12 py-5 rounded-full border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-500 transition-all font-black text-xs uppercase tracking-widest inline-flex items-center gap-4"
          >
            Explore More Capabilities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Missing icon import helper
function ArrowRight(props: any) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
}

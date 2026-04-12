"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/servicesData";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-black relative border-y border-zinc-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/5 blur-[100px] rounded-full -ml-40 -mb-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="color-orange font-bold text-xs md:text-sm tracking-[0.4em] uppercase mb-6 block">Our Expertise</span>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.9] uppercase italic tracking-tighter">
              Forging <br /> <span className="color-orange">Digital</span> Engines.
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl max-w-sm font-light leading-relaxed italic"
          >
            Beyond websites. We engineer end-to-end digital solutions that accelerate growth and redefine user experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <motion.div 
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-zinc-950/50 border border-zinc-900 backdrop-blur-sm transition-all duration-500 hover:border-orange hover:shadow-[0_0_30px_rgba(255,140,0,0.2)] hover:bg-zinc-900/30 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-4xl mb-8 border border-zinc-800 group-hover:border-orange/50 transition-colors shadow-inner grayscale group-hover:grayscale-0">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-orange transition-colors">
                {service.title}
              </h3>
              
              <p className="text-zinc-500 leading-relaxed font-medium mb-8 line-clamp-2 text-sm italic overflow-hidden">
                {service.fullDescription}
              </p>

              <div className="mt-auto pt-6 border-t border-zinc-900/50">
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest group/link hover:text-orange transition-all active:scale-95"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

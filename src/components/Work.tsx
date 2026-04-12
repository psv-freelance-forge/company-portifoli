"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Work() {
  const steps = [
    { title: "Requirements", color: "bg-orange shadow-[0_10px_30px_-5px_#FF8C0055]", textColor: "text-white", desc: "Define project scope, Stakeholder interviews, User Research, Requirements gathering, Kick-off meeting" },
    { title: "Analysis", color: "bg-zinc-900 border border-orange/40 shadow-[0_10px_30px_-5px_#333]", textColor: "text-orange", desc: "Current state analysis, Gap analysis, Technical feasibility, Data modeling" },
    { title: "Design", color: "bg-orange shadow-[0_10px_30px_-5px_#FF8C0055]", textColor: "text-white", desc: "High-level design, Design review, Design revisions, Stakeholder approval" },
    { title: "Implementation", color: "bg-zinc-900 border border-orange/40 shadow-[0_10px_30px_-5px_#333]", textColor: "text-orange", desc: "Dev phase 1, Review, Dev phase 2, Review, Final integration" },
    { title: "Testing", color: "bg-orange shadow-[0_10px_30px_-5px_#FF8C0055]", textColor: "text-white", desc: "Functional testing, Performance testing, Bug fixing, Security audit" },
    { title: "Delivery", color: "bg-zinc-900 border border-orange/40 shadow-[0_10px_30px_-5px_#333]", textColor: "text-orange", desc: "Cloud hosting, Domain & SSL, CI/CD pipelines, Final Deployment" },
    { title: "Maintenance", color: "bg-orange shadow-[0_10px_30px_-5px_#FF8C0055]", textColor: "text-white", desc: "Continuous monitoring, Updates, Bug fixes, Support" },
  ];

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="work" className="py-24 md:py-32 overflow-x-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="color-orange font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-6 block">The Methodology</span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase mb-8">
              How We <span className="color-orange">Work</span> at
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-xl font-light italic">
              Structured precision for digital excellence.
            </p>
            <p className="mt-6 text-zinc-500 text-base md:text-lg leading-relaxed max-w-xl font-light">
              We don&apos;t just build; we engineer with purpose. By combining technical rigor with creative vision, our workflow ensures that every line of code translates into measurable business value and a superior user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-zinc-900/30 p-8 md:p-12 rounded-[2.5rem] border border-zinc-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 blur-[100px] pointer-events-none" />
            <h3 className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-4">
              <span className="text-3xl">🚀</span> Our Approach
            </h3>
            <div className="space-y-4">
              {[
                { title: "Client-first mindset", desc: "Every decision is driven by your unique business goals." },
                { title: "Agile & iterative development", desc: "We deliver value in rapid cycles, adapting to feedback instantly." },
                { title: "Scalable architecture", desc: "Systems built to handle growth and future technical migrations." },
                { title: "Transparent communication", desc: "Direct access to developers and clear progress tracking." }
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-6 p-6 rounded-2xl bg-black/40 border border-zinc-800 hover:border-orange/40 transition-all group"
                >
                  <span className="text-orange font-black text-2xl group-hover:scale-110 transition-transform">0{idx + 1}</span>
                  <div>
                    <h4 className="text-white font-black uppercase text-sm tracking-widest mb-1">{point.title}</h4>
                    <p className="text-zinc-500 text-xs font-medium leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Colorful Waterfall Diagram Section */}
        <div className="mt-10 relative py-10">
          <div className="mb-16 text-center">
            <h3 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-2">WorkFlow</h3>
            <p className="text-zinc-500 font-bold text-xl md:text-3xl italic leading-none">(Plan Driven)</p>
          </div>

          <div className="relative space-y-24 md:space-y-32">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="relative"
              >
                {/* Stepped Positioning */}
                <div
                  className="flex flex-col md:flex-row items-start"
                  style={{
                    paddingLeft: mounted && window.innerWidth > 768 ? `${idx * 10}%` : '0',
                  }}
                >
                  <div className="group relative w-full md:w-[350px] lg:w-[450px]">
                    {/* Arrow Shape with dynamic colors */}
                    <div
                      className={`relative ${step.color} py-6 px-12 ${step.textColor} font-black text-xl md:text-2xl uppercase tracking-[0.2em] transform transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1`}
                      style={{
                        clipPath: "polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%)",
                        marginLeft: "-20px"
                      }}
                    >
                      <span className="relative z-10">{step.title}</span>
                      {/* Sub-glow for Zinc arrows */}
                      {!step.color.includes('orange') && (
                        <div className="absolute inset-0 bg-orange/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>

                    {/* Bullets with synced color */}
                    <div className="mt-10 pl-12 border-l-2 border-zinc-900 group-hover:border-orange transition-colors duration-500">
                      <ul className="space-y-4">
                        {step.desc.split(", ").map((bullet, bIdx) => (
                          <li key={bIdx} className="text-zinc-500 text-xs md:text-sm font-black tracking-[0.15em] uppercase flex items-center gap-4 group-hover:text-zinc-200 transition-colors">
                            <div className={`w-2 h-2 rounded-full shrink-0 ${step.color.includes('orange') ? 'bg-orange' : 'bg-zinc-700'} group-hover:scale-125 transition-transform`} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-zinc-900 pt-24 pb-20">
          <div className="p-10 rounded-[3rem] bg-zinc-900/40 border border-zinc-800 hover:border-orange/30 transition-colors group">
            <h3 className="text-2xl font-black text-white mb-8 uppercase flex items-center gap-4">
              <span className="text-3xl">📊</span> Project Logic
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-black/40 border border-zinc-800/40 hover:bg-orange/5 transition-all">
                <h5 className="text-orange font-black text-xs uppercase tracking-widest mb-4">Integrity</h5>
                <p className="text-zinc-500 text-sm font-medium italic">Validated architecture at every milestone.</p>
              </div>
              <div className="p-8 rounded-2xl bg-black/40 border border-zinc-800/40 hover:bg-orange/5 transition-all">
                <h5 className="text-orange font-black text-xs uppercase tracking-widest mb-4">Precision</h5>
                <p className="text-zinc-500 text-sm font-medium italic">Phase-gate system for quality control.</p>
              </div>
            </div>
          </div>

          <div className="p-10 rounded-[3rem] bg-orange text-white flex flex-col justify-center items-center text-center group relative overflow-hidden transition-transform active:scale-[0.98] shadow-[0_30px_60px_-15px_rgba(255,140,0,0.4)]">
            <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none" />
            <h3 className="text-4xl font-black mb-4 uppercase">Let&apos;s Build</h3>
            <p className="text-white font-bold max-w-sm mb-8 leading-relaxed italic opacity-95">Ready to see our workflow process in action for your next project?</p>
            <button className="px-12 py-5 rounded-full bg-white color-orange font-bold text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

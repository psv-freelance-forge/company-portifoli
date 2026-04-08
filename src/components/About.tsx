"use client";

import { motion, Variants } from "framer-motion";
import { 
  CheckCircle2, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Layers, 
  Search, 
  DraftingCompass, 
  Palette, 
  Code2, 
  Zap, 
  Ship, 
  Settings2,
  Users2,
  BarChart3,
  ShieldCheck,
  AppWindow,
  Cpu
} from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const steps = [
    { title: "Requirement Understanding", icon: Search, desc: "We begin by understanding your vision, goals, and requirements in detail including business objectives and technical expectations." },
    { title: "Planning & Architecture", icon: Cpu, desc: "Designing a solid foundation: system architecture, technology selection, database design, and scalability planning." },
    { title: "UI/UX Design", icon: Palette, desc: "Creating intuitive interfaces: wireframes, prototypes, user-friendly layouts, and responsive designs." },
    { title: "Development", icon: Code2, desc: "Bringing design to life using clean coding standards, modular development, and modern tech stacks." },
    { title: "Testing & QA", icon: ShieldCheck, desc: "Ensuring perfection: functional testing, performance audits, and thorough bug fixing before delivery." },
    { title: "Deployment", icon: Ship, desc: "Professional setup: cloud hosting, SSL configuration, and robust CI/CD pipelines." },
    { title: "Support & Maintenance", icon: Settings2, desc: "Continuous monitoring, updates, and dedicated technical support after delivery." }
  ];

  return (
    <section id="about" className="pt-24 pb-48 bg-black overflow-hidden relative">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-orange/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[5%] w-[30rem] h-[30rem] bg-orange/5 blur-[100px] rounded-full" />
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Header & Intro */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-32">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1"
          >
            <motion.span 
              variants={itemLeft}
              className="color-orange font-bold text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 block"
            >
              Our Story
            </motion.span>
            
            <motion.h2 
              variants={itemLeft}
              className="text-4xl md:text-7xl font-black text-white leading-tight mb-12 uppercase italic"
            >
              ABOUT <span className="color-orange">PSV FREELANCE</span> FORGE
            </motion.h2>

            <div className="space-y-8 text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
              <motion.p variants={itemLeft}>
                PSV Freelance Forge was founded with a clear vision — to build a future where technology empowers ideas, and opportunities are accessible to everyone. What started as a collaboration between three passionate individuals has grown into a dedicated freelancing platform focused on delivering high-quality digital solutions.
              </motion.p>
              
              <motion.p variants={itemRight}>
                At its core, PSV Freelance Forge is driven by the belief that great ideas deserve strong execution. The founders came together with diverse skills in development, design, and modern technologies, aiming to create a space where innovation meets practicality.
              </motion.p>

              <motion.div 
                variants={itemLeft}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
              >
                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm group hover:border-orange/30 transition-colors">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 color-orange" /> Wide Specialization
                  </h4>
                  <p className="text-zinc-500 text-sm">Web & Mobile Apps, Backend Systems, UI/UX, and AI-powered automation.</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm group hover:border-orange/30 transition-colors">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Users2 className="w-5 h-5 color-orange" /> Freelance Network
                  </h4>
                  <p className="text-zinc-500 text-sm">A growing hub for talented professionals to collaborate and grow.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 w-full lg:sticky lg:top-32"
          >
            <div className="grid gap-8">
              <motion.div 
                whileHover={{ y: -5, x: 5 }}
                className="p-8 md:p-10 rounded-[2.5rem] border border-zinc-900 bg-zinc-900/20 backdrop-blur-sm relative group overflow-hidden cursor-default transition-all duration-500 hover:border-orange/30 shadow-2xl shadow-orange/5"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange/10 blur-[80px] -mr-24 -mt-24 group-hover:bg-orange/20 transition-all duration-700" />
                <h3 className="text-3xl font-black text-white mb-6 uppercase flex items-center gap-4">
                  <span className="p-3 bg-orange/10 rounded-2xl block">🚀</span>
                  Our Mission
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                  To deliver scalable and innovative digital solutions while empowering freelancers and businesses to grow together.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, x: 5 }}
                className="p-8 md:p-10 rounded-[2.5rem] border border-zinc-900 bg-zinc-900/20 backdrop-blur-sm relative group overflow-hidden cursor-default transition-all duration-500 hover:border-white/10"
              >
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 blur-[80px] -ml-24 -mb-24 group-hover:bg-white/10 transition-all duration-700" />
                <h3 className="text-3xl font-black text-white mb-6 uppercase flex items-center gap-4">
                  <span className="p-3 bg-white/5 rounded-2xl block">🌍</span>
                  Our Vision
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                  To become a trusted global platform for freelancing, technology services, and intelligent solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* --- HOW WE WORK SECTION --- */}
        <div className="mt-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="color-orange font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Operational Excellence</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase mb-6 italic">
              How We <span className="color-orange">Work</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-3xl mx-auto font-light">
              We follow a structured, transparent, and client-focused approach to ensure every project is delivered with quality, scalability, and precision.
            </p>
          </motion.div>

          {/* Our Approach Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {[
              { title: "Client-first mindset", icon: Target, delay: 0 },
              { title: "Agile & iterative", icon: TrendingUp, delay: 0.1 },
              { title: "Scalable architecture", icon: Layers, delay: 0.2 },
              { title: "Total Transparency", icon: Lightbulb, delay: 0.3 }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-orange/20 transition-all group"
              >
                <item.icon className="w-10 h-10 color-orange mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold text-xl uppercase italic leading-tight">{item.title}</h4>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="mb-48 relative">
            {/* Timeline Line */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-orange via-zinc-800 to-transparent -translate-x-1/2" />
            
            <div className="space-y-24 relative">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex items-start md:items-center gap-8 md:gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Text Content */}
                  <div className={`flex-1 pt-2 md:pt-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase italic">
                        {step.title}
                      </h3>
                      <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-black border-2 border-orange flex items-center justify-center shadow-[0_0_20px_rgba(255,140,0,0.2)] group hover:scale-110 transition-transform cursor-default">
                      <step.icon className="w-7 h-7 color-orange" />
                      <div className="absolute -inset-2 bg-orange/5 rounded-full blur-md -z-10 group-hover:bg-orange/10 transition-all" />
                    </div>
                  </div>

                  {/* Spacer for MD screens to keep text on one side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Management & Collaboration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-3xl font-black text-white uppercase italic mb-8 flex items-center gap-4">
                  <span className="p-3 bg-orange/10 rounded-xl"><BarChart3 className="w-7 h-7 color-orange" /></span>
                  Project Management
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "Transparent Communication",
                    "Agile Methodology",
                    "Scalable Development",
                    "Defined Timelines",
                    "Regular Progress Tracking",
                    "Clean Ownership"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-zinc-400 group">
                      <div className="w-5 h-5 rounded-full border border-orange/50 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                        <CheckCircle2 className="w-3 h-3 color-orange" />
                      </div>
                      <span className="text-sm font-medium tracking-tight group-hover:text-white transition-colors">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10 rounded-[2.5rem] bg-linear-to-br from-zinc-900/50 to-black border border-zinc-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 blur-[60px] pointer-events-none group-hover:bg-orange/10 transition-colors" />
                <h3 className="text-2xl font-black text-white uppercase italic mb-4 flex items-center gap-4">
                  <Users2 className="w-6 h-6 color-orange" />
                  Collaboration Model
                </h3>
                <p className="text-zinc-500 leading-relaxed font-light">
                  We work closely with our clients as partners, focusing on feedback-driven development, flexible engagement, and building long-term collaborations that foster mutual growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-zinc-900/40 backdrop-blur-xl rounded-[3.5rem] p-10 md:p-12 border border-zinc-800 relative z-10">
                <h3 className="text-3xl font-black text-white uppercase italic mb-10">
                  Why Our Process <span className="color-orange">Works</span>
                </h3>
                <ul className="space-y-8">
                  {[
                    { t: "Reduces Risks", d: "Early identification and mitigation of technical hurdles." },
                    { t: "Improves Efficiency", d: "Streamlined workflows that save time and resources." },
                    { t: "High-Quality Delivery", d: "Rigorous testing ensuring robust, production-ready code." },
                    { t: "Builds Long-term Trust", d: "Transparency and reliability at the core of every project." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-orange/10 flex items-center justify-center shrink-0 border border-orange/20">
                        <span className="color-orange font-bold text-lg">{i+1}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1 uppercase italic tracking-wide">{item.t}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed font-light">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange/5 blur-[150px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, Variants } from "framer-motion";

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

  return (
    <section id="about" className="py-24 md:py-32 bg-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#FF8C0005_0,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
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
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 uppercase"
            >
              About <span className="color-orange">PSV Freelance Forge</span>
            </motion.h2>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
              <motion.p variants={itemLeft}>
                PSV Freelance Forge was founded with a clear vision — to build a future where technology empowers ideas, and opportunities are accessible to everyone. What started as a collaboration between three passionate individuals has grown into a dedicated freelancing platform focused on delivering high-quality digital solutions.
              </motion.p>
              
              <motion.p variants={itemRight}>
                At its core, PSV Freelance Forge is driven by the belief that great ideas deserve strong execution. The founders came together with diverse skills in development, design, and modern technologies, aiming to create a space where innovation meets practicality. Their goal was not just to provide services, but to build scalable, reliable, and impactful solutions for clients across industries.
              </motion.p>
              
              <motion.p variants={itemLeft}>
                We specialize in a wide range of services including web and mobile application development, backend systems, UI/UX design, and AI-powered solutions such as chatbots and automation tools. Alongside this, we focus on modern infrastructure technologies to ensure performance, scalability, and reliability in everything we build.
              </motion.p>
              
              <motion.p variants={itemRight}>
                Beyond delivering projects, PSV Freelance Forge is also a growing network for freelancers. We aim to create opportunities for talented individuals to collaborate, contribute, and grow in a dynamic environment. By connecting skilled professionals with real-world projects, we are building a community that thrives on innovation and continuous learning.
              </motion.p>
              
              <motion.p variants={itemLeft}>
                Our journey is just beginning, but our mission is strong — to simplify technology, empower businesses, and create a future where digital solutions are smarter, faster, and more accessible.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <div className="grid gap-8">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 md:p-10 rounded-[2rem] border border-zinc-900 bg-zinc-900/20 backdrop-blur-sm relative group overflow-hidden cursor-default transition-colors hover:border-orange/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 blur-[50px] -mr-16 -mt-16 group-hover:bg-orange/30 transition-all duration-700" />
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 flex items-center gap-4">
                  <motion.span 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-3xl"
                  >
                    🚀
                  </motion.span> 
                  Our Mission
                </h3>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium group-hover:text-zinc-400 transition-colors">
                  To deliver scalable and innovative digital solutions while empowering freelancers and businesses to grow together.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 md:p-10 rounded-[2rem] border border-zinc-900 bg-zinc-900/20 backdrop-blur-sm relative group overflow-hidden cursor-default transition-colors hover:border-white/10"
              >
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-[50px] -ml-16 -mb-16 group-hover:bg-white/15 transition-all duration-700" />
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 flex items-center gap-4">
                  <motion.span 
                     animate={{ rotate: [0, 5, -5, 0] }}
                     transition={{ duration: 4, repeat: Infinity }}
                    className="text-3xl"
                  >
                    🌍
                  </motion.span> 
                  Our Vision
                </h3>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium group-hover:text-zinc-400 transition-colors">
                  To become a trusted global platform for freelancing, technology services, and intelligent solutions.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-[1px] rounded-3xl bg-linear-to-r from-orange/50 via-zinc-800 to-zinc-900"
              >
                <div className="bg-zinc-950 rounded-[inherit] p-8 text-center relative overflow-hidden group">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-transparent via-orange/5 to-transparent skew-x-[-20deg]"
                  />
                  <p className="text-white font-black text-xl mb-2">Connected Community</p>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">Thriving on innovation</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

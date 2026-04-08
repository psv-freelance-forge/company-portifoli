"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  MessageSquare, 
  Smartphone, 
  Sparkles, 
  Terminal, 
  Cloud,
  Share2,
  BrainCircuit,
  DatabaseZap,
  Bot
} from "lucide-react";

const techStack = [
  {
    category: "Frontend Technologies",
    icon: Globe,
    groups: [
      { name: "Frameworks / Libraries", items: ["React", "Next.js", "Vue.js", "Angular", "Backbone.js"] },
      { name: "Styling", items: ["Tailwind CSS"] },
      { name: "Languages", items: ["TypeScript"] },
      { name: "Data Visualization", items: ["Chart.js", "Recharts", "D3.js"] }
    ]
  },
  {
    category: "Backend Technologies",
    icon: Terminal,
    groups: [
      { name: "Node.js Ecosystem", items: ["Node.js", "NestJS"] },
      { name: "Python Frameworks", items: ["Flask", "Django", "FastAPI"] },
      { name: "Other Backend Languages", items: ["Java", "Go", "PHP", ".NET"] }
    ]
  },
  {
    category: "Databases & Storage",
    icon: Database,
    groups: [
      { name: "NoSQL", items: ["MongoDB", "Firebase"] },
      { name: "SQL", items: ["PostgreSQL"] },
      { name: "Caching", items: ["Redis"] },
      { name: "Search Engine", items: ["Elasticsearch"] }
    ]
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    groups: [
      { name: "Infrastructure", items: ["AWS", "Azure", "GCP (Google Cloud Platform)"] }
    ]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    groups: [
      { name: "Cross-platform", items: ["React Native", "Flutter", "Ionic"] },
      { name: "Native", items: ["Swift (iOS)", "Kotlin (Android)"] }
    ]
  },
  {
    category: "AI / Machine Learning",
    icon: BrainCircuit,
    groups: [
      { name: "Frameworks / Libraries", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain"] }
    ]
  },
  {
    category: "Data Engineering",
    icon: DatabaseZap,
    groups: [
      { name: "Languages / Tools", items: ["Python", "SQL", "Spark"] }
    ]
  },
  {
    category: "Messaging & Streaming",
    icon: Share2,
    groups: [
      { name: "Streaming", items: ["Kafka"] }
    ]
  },
  {
    category: "AI Tools / Platforms",
    icon: Bot,
    groups: [
      { name: "Platforms", items: ["ChatGPT", "Hugging Face"] }
    ]
  },
  {
    category: "Misc / Others",
    icon: Layers,
    groups: [
      { name: "Specialized", items: ["Tamarind"] }
    ]
  }
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 md:py-48 bg-black overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-[50rem] h-[50rem] bg-orange/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[40rem] h-[40rem] bg-orange/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="color-orange font-bold text-sm tracking-[0.5em] mb-6 uppercase block">
              Architectural Excellence
            </span>
            <h2 className="text-5xl md:text-9xl font-black text-white leading-[0.9] uppercase italic tracking-tighter mb-12">
              OUR <br /> <span className="color-orange">TECH</span> STACK
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="text-zinc-500 max-w-2xl text-xl font-light leading-relaxed">
              We leverage a diverse and powerful ecosystem of modern technologies to build scalable, high-performance digital solutions that drive innovation.
            </p>
            <div className="h-[1px] flex-1 bg-zinc-900 mx-12 hidden md:block mb-4" />
          </motion.div>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 gap-12">
          {techStack.map((cat, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIdx * 0.05 }}
              className="group p-8 md:p-16 rounded-[4rem] bg-zinc-950/40 border border-zinc-900 relative overflow-hidden active:scale-[0.99] transition-transform"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex flex-col lg:flex-row lg:items-center gap-12 md:gap-24 relative z-10">
                {/* Category Identity */}
                <div className="lg:w-1/4">
                  <div className="bg-zinc-900 border border-zinc-800 w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 group-hover:border-orange/50 group-hover:shadow-[0_0_30px_rgba(255,140,0,0.2)] transition-all duration-500">
                    <cat.icon className="w-10 h-10 color-orange group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic leading-none group-hover:text-orange transition-colors">
                    {cat.category}
                  </h3>
                </div>

                {/* Subgroups & Items */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                  {cat.groups.map((group, groupIdx) => (
                    <div key={groupIdx} className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="h-[2px] w-8 bg-orange/20" />
                        <h4 className="text-xs tracking-[0.4em] font-black text-zinc-600 uppercase">
                          {group.name}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {group.items.map((item, itemIdx) => (
                          <motion.span 
                            key={itemIdx}
                            whileHover={{ 
                              scale: 1.05, 
                              backgroundColor: "rgba(255,140,0,0.1)", 
                              borderColor: "rgba(255,140,0,0.3)",
                              color: "white" 
                            }}
                            className="px-5 py-2.5 rounded-2xl bg-black border border-zinc-800 text-zinc-400 text-xs md:text-sm font-bold transition-all cursor-default backdrop-blur-sm"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-48 p-12 md:p-24 rounded-[5rem] bg-linear-to-br from-zinc-900 via-black to-zinc-950 border border-zinc-800 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 color-orange mx-auto mb-10" />
            <h4 className="text-zinc-500 font-black text-sm tracking-[0.4em] uppercase mb-8">Adaptive Learning</h4>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic leading-tight max-w-5xl mx-auto">
              Mastering the <span className="color-orange">Tools of Tomorrow</span> to solve the challenges of today.
            </p>
          </div>
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #FF8C00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </motion.div>
      </div>
    </section>
  );
}

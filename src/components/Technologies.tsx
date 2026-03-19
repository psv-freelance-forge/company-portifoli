"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "🚀 Frontend Technologies",
    groups: [
      { name: "Frameworks / Libraries", items: ["React", "Next.js", "Vue.js", "Angular", "Backbone.js"] },
      { name: "Styling", items: ["Tailwind CSS"] },
      { name: "Languages", items: ["TypeScript"] },
      { name: "Data Visualization", items: ["Chart.js", "Recharts", "D3.js"] }
    ]
  },
  {
    category: "🧠 Backend Technologies",
    groups: [
      { name: "Node.js Ecosystem", items: ["Node.js", "NestJS"] },
      { name: "Python Frameworks", items: ["Flask", "Django", "FastAPI"] },
      { name: "Other Backend Languages", items: ["Java", "Go", "PHP", ".NET"] }
    ]
  },
  {
    category: "🗄️ Databases & Storage",
    groups: [
      { name: "NoSQL", items: ["MongoDB", "Firebase"] },
      { name: "SQL", items: ["PostgreSQL"] },
      { name: "Caching", items: ["Redis"] },
      { name: "Search Engine", items: ["Elasticsearch"] }
    ]
  },
  {
    category: "🔄 Messaging & Streaming",
    groups: [
      { name: "Messaging", items: ["Kafka"] }
    ]
  },
  {
    category: "☁️ Cloud Platforms",
    groups: [
      { name: "Platforms", items: ["AWS", "Azure", "GCP (Google Cloud Platform)"] }
    ]
  },
  {
    category: "📱 Mobile Development",
    groups: [
      { name: "Cross-platform", items: ["React Native", "Flutter", "Ionic"] },
      { name: "Native", items: ["Swift (iOS)", "Kotlin (Android)"] }
    ]
  },
  {
    category: "🤖 AI / Machine Learning",
    groups: [
      { name: "Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain"] }
    ]
  },
  {
    category: "📊 Data Engineering",
    groups: [
      { name: "Languages / Tools", items: ["Python", "SQL", "Spark"] }
    ]
  },
  {
    category: "🧩 AI Tools / Platforms",
    groups: [
      { name: "Platforms", items: ["ChatGPT", "Hugging Face"] }
    ]
  },
  {
    category: "⚙️ Misc / Others",
    groups: [
      { name: "Frameworks", items: ["Tamarind"] }
    ]
  }
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 md:py-32 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="color-orange font-bold text-xs md:text-sm tracking-[0.5em] mb-4 uppercase block"
          >
            The Engine Room
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter"
          >
            Cutting-edge <br /> <span className="color-orange">Toolstack</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-zinc-500 mt-8 max-w-2xl text-lg md:text-xl font-light italic"
          >
             Empowering digital futures with a robust, scalable, and modern technology ecosystem.
          </motion.p>
        </div>

        <div className="space-y-12">
          {techStack.map((cat, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="p-8 md:p-16 rounded-[4rem] bg-zinc-900/30 border border-zinc-900 group relative overflow-hidden"
            >
              {/* Animated Glow on hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col lg:flex-row lg:items-start md:gap-24">
                 <div className="lg:w-1/3 mb-10 lg:mb-0">
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter group-hover:text-orange transition-colors">
                       {cat.category}
                    </h3>
                 </div>

                 <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
                   {cat.groups.map((group, gIdx) => (
                     <div key={gIdx} className="space-y-6">
                       <h4 className="text-xs tracking-[0.4em] font-black text-zinc-600 uppercase mb-4 border-l-2 border-orange/20 pl-4">
                          {group.name}
                       </h4>
                       <div className="flex flex-wrap gap-3">
                         {group.items.map((item, iIdx) => (
                           <motion.span 
                             key={iIdx}
                             whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 140, 0, 0.1)", borderColor: "rgba(255, 140, 0, 0.4)" }}
                             className="px-5 py-2.5 rounded-2xl bg-black/40 border border-zinc-800 text-zinc-400 text-xs md:text-sm font-bold transition-all cursor-default"
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

        {/* Global Tech Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[4rem] bg-linear-to-br from-zinc-900 to-zinc-950 border border-zinc-800 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
             <h4 className="text-zinc-500 font-black text-xs md:text-sm tracking-[0.5em] uppercase mb-8">Continuous Integration</h4>
             <p className="text-2xl md:text-4xl font-black text-white uppercase italic max-w-4xl mx-auto leading-relaxed">
               &quot;We constantly evolve our stack to integrate <span className="color-orange">emerging technologies</span> and ensure your solution stays ahead of the curve.&quot;
             </p>
          </div>
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #FF8C00 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </motion.div>
      </div>
    </section>
  );
}

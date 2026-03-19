export default function Services() {
  const services = [
    { title: "Web Architecture", desc: "Building scalable, high-speed frontends with React and Next.js.", icon: "⚡" },
    { title: "UI/UX Design", desc: "Crafting intuitive, high-converting interfaces that users love.", icon: "🎨" },
    { title: "Custom Solutions", desc: "Bespoke software tailored to your unique business workflow.", icon: "🛠️" }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-950/50 relative border-y border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 md:mb-20">
          <div className="max-w-xl">
            <span className="color-orange font-bold text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">Elevating brands through robust tech.</h2>
          </div>
          <p className="text-zinc-500 text-base md:text-lg max-w-sm">
            We don&apos;t just build websites; we create digital engines that drive growth and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800/80 transition-all hover:bg-zinc-900/50 hover:border-orange/30 group">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-medium">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

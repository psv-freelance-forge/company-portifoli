export default function Work() {
  const projects = [
    {
      title: "Modern Commerce",
      category: "Development & Design",
      tags: ["NEXT.JS", "TAILWIND"],
      color: "bg-zinc-800"
    },
    {
      title: "Crypto Analytics",
      category: "Custom Dashboards",
      tags: ["WEB3", "D3.JS"],
      color: "bg-zinc-700"
    }
  ];

  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase">Selected <span className="color-orange">Projects</span></h2>
          <p className="text-zinc-500 text-lg max-w-2xl font-medium">A glimpse into the digital futures we've helped create.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
             <div key={i} className="group relative overflow-hidden rounded-[3rem] bg-zinc-900 border border-zinc-800 aspect-video md:aspect-4/5 lg:aspect-video cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-x-8 bottom-8 z-20 transition-transform duration-500 group-hover:-translate-y-4">
                   <h4 className="text-white text-3xl font-black mb-2">{project.title}</h4>
                   <p className="text-zinc-400 font-bold text-sm tracking-widest uppercase mb-6">{project.category}</p>
                   <div className="flex gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full border border-zinc-700 bg-white/5 text-white text-xs font-bold">{tag}</span>
                      ))}
                   </div>
                </div>
                <div className={`absolute inset-0 scale-105 group-hover:scale-100 transition-transform duration-1000 ${project.color}`} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

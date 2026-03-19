"use client";
import ShapeGrid from "./ui/ShapeGrid";

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id.toLowerCase());
    if (section && (window as any).lenis) {
      (window as any).lenis.scrollTo(section, { offset: -80 });
    } else if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0">
        <ShapeGrid 
          speed={0.1}
          squareSize={40}
          direction='diagonal'
          borderColor='#39a2a2'
          hoverFillColor='#000000'
          shape='square'
          hoverTrailAmount={0}
        />
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-orange/10 blur-[150px] -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px] -ml-40 -mb-40 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
       
        
        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white uppercase max-w-5xl animate-fade-in">
          We Forge <br />
          <span className="color-orange">Digital Excellence</span>
        </h1>

         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md mb-8 animate-fade-in">
          <span className="text-white font-bold text-[30px] tracking-[0.3em] uppercase">From Idea To Impact</span>
        </div>
        
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-12 font-light animate-fade-in-delayed">
          Designing high-impact digital products with performance, scalability, and precision at the core.
        </p>

    
        
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-delayed">
          <a 
            href="#work" 
            onClick={(e) => handleNavClick(e, "work")}
            className="px-8 py-3.5 rounded-2xl bg-orange text-white font-black text-base transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(255,140,0,0.4)]"
          >
            View Showcase
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-8 py-3.5 rounded-2xl border border-zinc-700 bg-zinc-900/50 backdrop-blur-md text-white font-black text-base transition-all hover:bg-zinc-800 hover:border-zinc-500"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

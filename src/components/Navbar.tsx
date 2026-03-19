"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? "bg-black/80 backdrop-blur-xl border-zinc-800 py-4" : "bg-transparent border-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center group cursor-pointer">
          <div className="relative w-20 h-12 transition-all">
            <Image
              src="/images/Main-logo.jfif"
              alt="Freelance Forge Logo"
              fill
              className="object-contain object-left group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-xl tracking-tight">Freelance<span className="color-orange">Forge</span></span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Work', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleNavClick(e, item)}
              className="text-zinc-400 hover:text-white font-medium transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, "contact")}
          className="px-6 py-2.5 rounded-full border border-zinc-700 bg-zinc-800/40 text-white font-semibold transition-all hover:bg-white hover:text-[#FF8C00] hover:border-white active:scale-95 shadow-lg"
        >
          Start a Project
        </a>
      </div>
    </nav>
  );
}

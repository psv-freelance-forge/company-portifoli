"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsMenuOpen(false);
    
    // If it's a hash link and we're on the home page, scroll smoothly
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("#", "").toLowerCase();
      const section = document.getElementById(id);
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const windowAny = window as any;
      if (section && windowAny.lenis) {
        windowAny.lenis.scrollTo(section, { offset: -80 });
      } else if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Technologies", href: "/technologies" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled || pathname !== "/"
            ? "bg-black/80 backdrop-blur-xl border-zinc-800 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link 
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center group cursor-pointer"
          >
            <div className="relative w-16 h-10 md:w-20 md:h-12 transition-all">
              <Image
                src="/images/main-logo.jpg"
                alt="Freelance Forge Logo"
                fill
                className="object-contain object-left group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                Freelance<span className="color-orange">Forge</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-medium transition-colors relative group ${
                  pathname === item.href ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-orange transition-all ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className="hidden md:block px-6 py-2.5 rounded-full border border-zinc-700 bg-zinc-800/40 text-white font-semibold transition-all hover:bg-white hover:text-[#FF8C00] hover:border-white active:scale-95 shadow-lg"
            >
              Start a Project
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex items-center justify-center p-2.5 text-white bg-zinc-800/40 rounded-full border border-zinc-700 cursor-pointer hover:bg-zinc-700/60 transition-colors"
              aria-label="Open Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] z-70 bg-zinc-950 border-r border-zinc-900 md:hidden"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-2">
                    <div className="relative w-12 h-8">
                      <Image
                        src="/images/main-logo.jpg"
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-white font-bold text-lg">
                      Freelance<span className="color-orange">Forge</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`text-lg font-bold transition-all ${
                        pathname === item.href ? "text-orange" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link 
                    href="/contact"
                    onClick={(e) => handleNavClick(e, "/contact")}
                    className="flex items-center justify-between w-full p-4 rounded-2xl bg-orange text-white font-black group"
                  >
                    Start a Project
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

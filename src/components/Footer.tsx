"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 md:pt-40 pb-12 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6 font-sans">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* 1. Brand & Socials */}
          <div className="flex flex-col gap-10">
            <div className="relative w-40 h-10 opacity-100">
              <Image
                src="/images/main-logo.jpg"
                alt="Freelance Forge Logo"
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
            <p className="text-white text-sm font-medium leading-relaxed max-w-[280px]">
              Crafting high-performance digital solutions with precision engineering and creative passion.
            </p>
            <div className="flex gap-4 text-white">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Our Services (Moved to 2nd) */}
          <div>
            <h5 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Capabilities</h5>
            <ul className="space-y-4">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div>
            <h5 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Quick Links</h5>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Work", href: "/work" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact & Newsletter */}
          <div className="flex flex-col gap-10">
            <div>
              <h5 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Get in Touch</h5>
              <a 
                href="mailto:support@psvfreelanceforge.in" 
                className="text-white font-black text-lg break-words underline decoration-zinc-800 underline-offset-8"
              >
                support@psvfreelanceforge.in
              </a>
            </div>
            
            <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <p className="text-white font-black text-xs uppercase mb-6">Stay Forge-Ahead</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-black/40 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none w-full"
                />
                <button className="bg-orange p-2 rounded-xl text-white">
                    <Github size={18} className="opacity-0 w-0 h-0" /> {/* Spacer */}
                    <span className="text-[10px] font-black uppercase">Go</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <span className="text-white font-bold text-[10px] tracking-widest uppercase">
              &copy; 2026 PSV Freelance Forge. All Rights Reserved.
            </span>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-white font-bold text-[10px] tracking-widest uppercase transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white font-bold text-[10px] tracking-widest uppercase transition-colors">Terms and conditions</Link>
          </div>
          <p className="text-white font-bold text-[10px] tracking-widest uppercase text-center order-first md:order-last">
            Digitally Engineered in PSV
          </p>
        </div>
      </div>
    </footer>
  );
}

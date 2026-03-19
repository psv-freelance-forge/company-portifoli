"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="pt-32 pb-16 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 items-start mb-32 border-b border-zinc-900 pb-20">
           <div className="max-w-2xl">
              <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] mb-12 uppercase">Ready to <br /> <span className="color-orange">Forge?</span></h2>
              <p className="text-zinc-500 text-2xl font-light mb-12">Let's build something that matters. Reach out for a consultation.</p>
              <div className="flex flex-col gap-4">
                 <a href="mailto:hello@freelanceforge.com" className="text-white text-4xl md:text-5xl font-black hover:color-orange transition-colors wrap-break-word">hello@freelanceforge.com</a>
                 <div className="flex gap-8 mt-6">
                    {['Twitter', 'Instagram', 'Dribbble', 'GitHub'].map(s => (
                      <a key={s} href="#" className="text-zinc-600 hover:text-white font-bold tracking-widest uppercase text-sm">{s}</a>
                    ))}
                 </div>
              </div>
           </div>
           
           <div className="w-full lg:w-[400px] p-10 rounded-[3rem] bg-zinc-900 border border-zinc-800">
              <h5 className="text-white font-black text-2xl mb-8">Newsletter</h5>
              <p className="text-zinc-500 mb-8 font-medium">Get curated insights and project updates directly in your inbox.</p>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                 <input type="email" placeholder="Your Email" className="bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange transition-all" />
                 <button type="submit" className="w-full py-4 rounded-2xl bg-orange text-white font-black hover:brightness-110 active:scale-95 transition-all">Subscribe</button>
              </form>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
              <div className="relative w-24 h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                 <Image
                    src="/images/Main-logo.jfif"
                    alt="Freelance Forge Logo"
                    fill
                    className="object-contain object-left"
                 />
              </div>
              <span className="text-zinc-600 font-bold text-sm tracking-widest uppercase">&copy; 2024 Freelance Forge Portfolio</span>
           </div>
           <p className="text-zinc-700 font-bold text-xs tracking-widest uppercase">Engineered with Precision & Passion</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="pt-24 md:pt-32 pb-12 md:pb-16 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-16 items-start mb-24 md:mb-32 border-b border-zinc-900 pb-16 md:pb-20">
          <div className="max-w-4xl">
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black text-white leading-tight md:leading-[0.8] mb-8 md:mb-12 uppercase">
              Ready to <br /> <span className="color-orange">Forge?</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-2xl font-light mb-8 md:mb-12 max-w-2xl">
              Let&apos;s build something that matters. Reach out for a consultation.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@freelanceforge.com"
                className="text-2xl sm:text-4xl md:text-5xl font-black text-white hover:text-orange transition-colors break-words"
              >
               support@psvfreelanceforge.in
              </a>
              <div className="flex flex-wrap gap-x-8 gap-y-4 mt-6">
                {["Twitter", "Instagram", "Dribbble", "GitHub"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-zinc-600 hover:text-white font-bold tracking-widest uppercase text-xs md:text-sm"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[400px] p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-zinc-900 border border-zinc-800">
            <h5 className="text-white font-black text-xl md:text-2xl mb-6 md:mb-8">
              Newsletter
            </h5>
            <p className="text-zinc-500 mb-6 md:mb-8 text-sm md:text-base font-medium leading-relaxed">
              Get curated insights and project updates directly in your inbox.
            </p>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange transition-all text-sm md:text-base"
              />
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-orange text-white font-black hover:brightness-110 active:scale-95 transition-all text-sm md:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <div className="relative w-24 h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <Image
                src="/images/main-logo.jpg"
                alt="Freelance Forge Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-zinc-600 font-bold text-[10px] md:text-xs tracking-widest uppercase">
              &copy; 2024 Freelance Forge Portfolio
            </span>
          </div>
          <p className="text-zinc-700 font-bold text-[10px] md:text-xs tracking-widest uppercase text-center">
            Engineered with Precision & Passion
          </p>
        </div>
      </div>
    </footer>
  );
}

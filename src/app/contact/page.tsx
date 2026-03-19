export default function ContactPage() {
  return (
    <div className="py-40 bg-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-9xl font-black text-white uppercase mb-12">
          Let&apos;s <span className="color-orange underline decoration-[8px] underline-offset-[16px]">Forge</span>
        </h1>
        <p className="text-zinc-500 text-2xl md:text-4xl max-w-4xl mx-auto font-light leading-relaxed">
          Ready to turn your idea into impact? Drop us a line and let&apos;s build something extraordinary.
        </p>
        <div className="mt-20 flex flex-col items-center gap-8">
          <a
            href="mailto:hello@freelanceforge.com"
            className="text-white text-3xl md:text-6xl font-black hover:text-orange transition-colors break-words"
          >
           support@psvfreelanceforge.in
          </a>
          <button className="px-12 py-6 rounded-2xl bg-orange text-white font-black text-xl hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(255,140,0,0.4)] transition-all">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
}

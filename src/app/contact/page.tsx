"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    project: "",
    message: ""
  });

  const inputClasses = (id: string) => `
    w-full bg-transparent border-2 border-zinc-800 rounded-2xl px-6 py-5 
    text-white outline-none transition-all duration-300
    ${focused === id ? 'border-orange shadow-[0_0_20px_rgba(255,140,0,0.1)]' : 'hover:border-zinc-700'}
    ${status === "loading" ? 'opacity-50 pointer-events-none' : ''}
    placeholder:text-zinc-600
  `;

  const labelClasses = (id: string) => `
    block text-xs font-black uppercase tracking-widest mb-3 ml-2
    ${focused === id ? 'text-orange' : 'text-zinc-500'}
    transition-colors duration-300
  `;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          project: formData.project,
          message: formData.message
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstname: "", lastname: "", email: "", project: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40rem] h-[40rem] bg-orange/5 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-orange/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 space-y-12"
          >
            <div>
              <span className="color-orange font-bold text-sm tracking-[0.5em] mb-6 uppercase block">
                Initiate Contact
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic leading-[0.9] tracking-tighter mb-8">
                Let&apos;s <br /> <span className="color-orange">Forge</span> <br /> Impact.
              </h1>
              <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-md">
                Ready to transform your vision into a scalable digital reality? Reach out and let&apos;s build the future together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-orange/50 transition-colors">
                  <Mail className="w-6 h-6 color-orange" />
                </div>
                <div>
                  <p className="text-zinc-600 text-xs font-black uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-white font-bold group-hover:text-orange transition-colors">support@psvfreelanceforge.in</p>
                </div>
              </div>


              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-orange/50 transition-colors">
                  <MapPin className="w-6 h-6 color-orange" />
                </div>
                <div>
                  <p className="text-zinc-600 text-xs font-black uppercase tracking-widest mb-1">Global Base</p>
                  <p className="text-white font-bold italic">Remote-first | Worldwide</p>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <div className="p-[1px] rounded-3xl bg-linear-to-r from-orange/50 onto-transparent w-fit">
                <div className="px-8 py-6 rounded-[inherit] bg-zinc-950 backdrop-blur-sm">
                  <p className="text-white font-black text-lg">Response time: &lt; 24h</p>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest">Guaranteed expert feedback</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-3/5 w-full"
          >
            <div className="relative">
              <form 
                onSubmit={handleSubmit}
                className="p-8 md:p-12 rounded-[3.5rem] bg-zinc-950/50 border border-zinc-900 backdrop-blur-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 blur-[100px] pointer-events-none group-hover:bg-orange/10 transition-all duration-700" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className={labelClasses('firstname')}>First Name</label>
                    <input 
                      required
                      type="text" 
                      id="firstname"
                      placeholder="John" 
                      className={inputClasses('firstname')}
                      value={formData.firstname}
                      onChange={(e) => setFormData({...formData, firstname: e.target.value})}
                      onFocus={() => setFocused('firstname')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className={labelClasses('lastname')}>Last Name</label>
                    <input 
                      required
                      type="text" 
                      id="lastname"
                      placeholder="Doe" 
                      className={inputClasses('lastname')}
                      value={formData.lastname}
                      onChange={(e) => setFormData({...formData, lastname: e.target.value})}
                      onFocus={() => setFocused('lastname')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-2">
                    <label htmlFor="email" className={labelClasses('email')}>Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="email"
                      placeholder="john@example.com" 
                      className={inputClasses('email')}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project" className={labelClasses('project')}>Project Category</label>
                    <input 
                      required
                      type="text" 
                      id="project"
                      placeholder="Web / App / Cloud" 
                      className={inputClasses('project')}
                      value={formData.project}
                      onChange={(e) => setFormData({...formData, project: e.target.value})}
                      onFocus={() => setFocused('project')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-12">
                  <label htmlFor="message" className={labelClasses('message')}>Project Details</label>
                  <textarea 
                    required
                    id="message"
                    placeholder="Tell us about your project or vision..." 
                    rows={4}
                    className={`${inputClasses('message')} resize-none`}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <motion.button 
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full bg-orange py-6 rounded-2xl flex items-center justify-center gap-4 group/btn overflow-hidden relative ${status === "loading" ? "brightness-75 cursor-not-allowed" : ""}`}
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-[-20deg]" />
                  <span className="text-white font-black text-xl uppercase tracking-widest relative z-10">
                    {status === "loading" ? "Forging Connection..." : "Submit Forging Request"}
                  </span>
                  {status !== "loading" && <Send className="w-6 h-6 text-white relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                </motion.button>
              </form>

              {/* Success/Error Overlays */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-50 rounded-[3.5rem] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                  >
                    <CheckCircle2 className="text-orange w-24 h-24 mb-8" />
                    <h3 className="text-4xl font-black text-white uppercase italic mb-4">Transmission Successful</h3>
                    <p className="text-zinc-400 text-lg max-w-sm mb-12 font-medium">Your request has been forged. Our experts will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="px-8 py-4 rounded-xl border border-zinc-800 text-zinc-500 hover:text-white transition-colors uppercase font-black text-xs tracking-widest"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-50 rounded-[3.5rem] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                  >
                    <AlertCircle className="text-red-500 w-24 h-24 mb-8" />
                    <h3 className="text-4xl font-black text-white uppercase italic mb-4">Transmission Failed</h3>
                    <p className="text-zinc-400 text-lg max-w-sm mb-12 font-medium">The forge is temporarily down. Please try again or email us directly.</p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="px-8 py-4 rounded-xl border border-zinc-800 text-zinc-500 hover:text-white transition-colors uppercase font-black text-xs tracking-widest"
                    >
                      Try Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

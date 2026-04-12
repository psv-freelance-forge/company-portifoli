"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[400px] z-[100]"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 blur-[60px] pointer-events-none" />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 text-zinc-600 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange/10 flex items-center justify-center shrink-0">
                <Cookie className="text-orange w-6 h-6" />
              </div>
              <div className="pt-1">
                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1">Cookie Excellence</h4>
                <p className="text-zinc-500 text-xs font-medium leading-relaxed italic">
                  We use cookies and caching to optimize your site experience and performance.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleAccept}
                className="w-full py-4 rounded-2xl bg-orange text-white font-black text-xs uppercase tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Accept All
              </button>
              <Link
                href="/privacy"
                className="text-center text-zinc-600 hover:text-white font-bold text-[10px] uppercase tracking-widest py-2 transition-colors"
              >
                Learn More in Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

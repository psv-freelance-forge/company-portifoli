"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, User, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import { io } from "socket.io-client";

// Initialize socket (assuming same host)
const socket = typeof window !== "undefined" ? io({
  reconnectionAttempts: 5,
  timeout: 10000,
  transports: ["polling", "websocket"],
  path: "/socket.io/"
}) : null;

type Message = {
  role: "user" | "bot" | "support";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "bot",
  content: "Welcome to the Forge. I am your digital assistant. How can I help you accelerate your vision today?"
};

const QUICK_ACTIONS = [
  { label: "Explore Services", value: "services" },
  { label: "Book Consultation", value: "contact" },
  { label: "Our Tech Stack", value: "tech" }
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (socket) {
      socket.on("support-reply", (data: { user: string, message: string }) => {
        setMessages(prev => [...prev, { 
          role: "support", 
          content: data.message 
        }]);
      });

      return () => {
        socket.off("support-reply");
      };
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleAction = async (action: typeof QUICK_ACTIONS[0]) => {
    setMessages(prev => [...prev, { role: "user", content: action.label }]);
    
    // Send to Zoho Cliq
    try {
      await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ 
          text: `Quick Action: ${action.label}`,
          url: window.location.href,
          sessionId: socket?.id
        })
      });
    } catch (e) { console.error(e); }

    // Bot responses
    setTimeout(() => {
      let botContent = "";
      switch (action.value) {
        case "services":
          botContent = "We specialize in Web, App, Cloud, and AI solutions. You can explore our full capabilities in the Services section.";
          break;
        case "contact":
          botContent = "Ready to forge? Our team responds within 24 hours. You can initiate a request on our Contact page.";
          break;
        case "tech":
          botContent = "We build with modern engines: React, Next.js, Node.js, and Cloud-native architectures for maximum performance.";
          break;
        default:
          botContent = "Processing your request...";
      }
      setMessages(prev => [...prev, { role: "bot", content: botContent }]);
    }, 600);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages(prev => [...prev, { role: "user", content: userText }]);
    setInput("");

    // Send to Zoho Cliq via Proxy
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          text: userText,
          url: window.location.href,
          sessionId: socket?.id
        })
      });
      
      if (!res.ok) throw new Error();
      // We don't need a bot mock if support will reply, but we'll keep it for immediate feedback
    } catch (err) {
      setMessages(prev => [...prev, { 
        role: "bot", 
        content: "I'm having trouble connecting to the support line. Please use the Contact form for urgent requests." 
      }]);
    }
  };

  // Helper for message UI
  const getAvatar = (role: Message["role"]) => {
    if (role === "user") return <User className="text-orange w-4 h-4" />;
    if (role === "support") return <Sparkles className="text-orange w-4 h-4" />;
    return <Bot className="text-zinc-500 w-4 h-4" />;
  };

  const getBubbleStyle = (role: Message["role"]) => {
    if (role === "user") return "bg-orange text-white font-bold rounded-tr-none";
    if (role === "support") return "bg-zinc-800 text-white font-bold rounded-tl-none border border-orange/30";
    return "bg-zinc-900 text-zinc-300 font-medium rounded-tl-none border border-zinc-800/50";
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-zinc-950 border border-zinc-900 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-zinc-900 bg-zinc-900/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center">
                  <Sparkles className="text-orange w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-widest">Forge Assistant</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Systems Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Content */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${
                      msg.role === 'user' ? 'bg-orange/10' : 'bg-zinc-900 border border-zinc-800'
                    }`}>
                      {getAvatar(msg.role)}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${getBubbleStyle(msg.role)}`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick Actions (only if last message is from bot) */}
              {messages[messages.length - 1].role === "bot" && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action.value}
                      onClick={() => handleAction(action)}
                      className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-500 hover:text-orange hover:border-orange transition-all text-xs font-bold uppercase tracking-tight"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Input */}
            <form 
              onSubmit={handleSend}
              className="p-6 border-t border-zinc-900 bg-zinc-900/20"
            >
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask the Forge..." 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-orange transition-all pr-12"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-orange hover:scale-110 transition-transform"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-orange flex items-center justify-center shadow-[0_15px_35px_rgba(255,140,0,0.3)] group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-[-20deg]" />
        {isOpen ? <X className="text-white w-7 h-7" /> : <MessageSquare className="text-white w-7 h-7" />}
      </motion.button>
    </div>
  );
}

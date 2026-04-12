"use client";

import { useState } from "react";
import { Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      
      if (res.ok) {
        if (data.role === "admin") {
          router.push("/hq-admin");
        } else {
          router.push("/hq-support");
        }
      } else {
        alert(data.error);
      }
    } catch (e) {
      console.error(e);
      alert("System error during authentication");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 text-white font-sans">
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-zinc-900 border border-zinc-800 p-8 rounded-3xl text-center">
        <Shield className="w-12 h-12 text-orange mx-auto mb-6" />
        <h2 className="text-2xl font-black uppercase tracking-widest mb-2">HQ Network</h2>
        <p className="text-zinc-500 mb-8 font-medium">Verify your credentials</p>
        
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Corporate Email"
          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange mb-4 text-center"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Passcode"
          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange mb-6 text-center"
        />
        
        <button type="submit" disabled={loading} className="w-full bg-orange text-white font-bold py-3 rounded-xl uppercase tracking-widest hover:bg-orange/80 transition-colors disabled:opacity-50">
          {loading ? "Authenticating..." : "Login"}
        </button>
      </form>
    </div>
  );
}

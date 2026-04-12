"use client";

import { useState, Suspense } from "react";
import { Shield } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function AcceptInviteContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobileNumber: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return alert("Invalid invite link. Token missing.");
    
    setLoading(true);
    try {
      const res = await fetch("/api/auth/accept-invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, ...formData })
      });
      const data = await res.json();
      if (res.ok) {
        alert("Setup complete! Redirecting to login...");
        router.push("/login");
      } else {
        alert(data.error);
      }
    } catch (e) {
      console.error(e);
      alert("System error during setup");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <Shield className="w-12 h-12 text-orange mx-auto mb-6" />
        <h2 className="text-2xl font-black text-white uppercase tracking-widest">Accept HQ Invitation</h2>
        <p className="text-zinc-500 mt-2 text-sm">Configure your personal profile details to gain access</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="First Name" required
          onChange={e => setFormData({...formData, firstName: e.target.value})}
          className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange" />
        <input type="text" placeholder="Last Name" required
          onChange={e => setFormData({...formData, lastName: e.target.value})}
          className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange" />
      </div>

      <input type="text" placeholder="Mobile Number" required
        onChange={e => setFormData({...formData, mobileNumber: e.target.value})}
        className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange mb-4" />
      
      <input type="text" placeholder="Billing / Office Address" required
        onChange={e => setFormData({...formData, address: e.target.value})}
        className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange mb-4" />

      <div className="border-t border-zinc-800 my-6 pt-6">
        <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-4">Security</p>
        <input type="password" placeholder="Create Secure Password" required
          onChange={e => setFormData({...formData, password: e.target.value})}
          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange mb-8" />
      </div>

      <button type="submit" disabled={loading} className="w-full bg-orange text-white font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-orange/80 transition-colors disabled:opacity-50">
        {loading ? "Processing..." : "Complete Setup"}
      </button>
    </form>
  );
}

export default function AcceptInvite() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 text-white font-sans">
      <Suspense fallback={<div>Loading Configuration...</div>}>
        <AcceptInviteContent />
      </Suspense>
    </div>
  );
}

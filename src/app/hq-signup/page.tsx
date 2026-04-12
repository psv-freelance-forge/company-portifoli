"use client";

import { useState } from "react";
import { Shield } from "lucide-react";
import Link from "next/link";

export default function HQSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    mobileNumber: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white text-center">
        <Shield className="w-16 h-16 text-orange mb-6" />
        <h2 className="text-3xl font-black uppercase tracking-widest mb-4">Verification Sent</h2>
        <p className="text-zinc-500 mb-8 max-w-sm">
          Please check your inbox ({formData.email}) for the verification secure link to activate your Master Admin platform access.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 font-sans">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <Shield className="w-12 h-12 text-orange mx-auto mb-6" />
          <h2 className="text-2xl font-black text-white uppercase tracking-widest">Master Admin Initialization</h2>
          <p className="text-zinc-500 mt-2 text-sm">Create the root account for the HQ Portal</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="First Name" required
            onChange={e => setFormData({...formData, firstName: e.target.value})}
            className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange" />
          <input type="text" placeholder="Last Name" required
            onChange={e => setFormData({...formData, lastName: e.target.value})}
            className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange" />
        </div>

        <input type="email" placeholder="Corporate Email" required
          onChange={e => setFormData({...formData, email: e.target.value})}
          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange mb-4" />
        
        <input type="password" placeholder="Secure Password" required
          onChange={e => setFormData({...formData, password: e.target.value})}
          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange mb-4" />

        <input type="text" placeholder="Mobile Number" required
          onChange={e => setFormData({...formData, mobileNumber: e.target.value})}
          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange mb-4" />
        
        <input type="text" placeholder="Billing / Office Address" required
          onChange={e => setFormData({...formData, address: e.target.value})}
          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange mb-8" />

        <button type="submit" disabled={loading} className="w-full bg-orange text-white font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-orange/80 transition-colors disabled:opacity-50">
          {loading ? "Processing..." : "Initialize Profile"}
        </button>

        <p className="text-center mt-6 text-zinc-500 text-sm">
          Already verified? <Link href="/login" className="text-orange hover:underline">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

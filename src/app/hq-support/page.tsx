"use client";

import { useState, useEffect } from "react";
import { Shield, MessagesSquare, Send, Activity, LogOut, Settings, Key } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HQSupport() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"chat" | "settings">("chat");

  const [sessions, setSessions] = useState<any[]>([]);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const [profile, setProfile] = useState<any>({});
  const [otp, setOtp] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      if (activeTab === "chat") fetchChats();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const fetchData = async () => {
    try {
      const resP = await fetch("/api/auth/me");
      const dataP = await resP.json();
      
      if (dataP.user) {
        if (dataP.user.role !== "support" && dataP.user.role !== "admin") return router.push("/login");
        setProfile(dataP.user);
      }
      fetchChats();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchChats = async () => {
    const res = await fetch("/api/admin/chats");
    const data = await res.json();
    if (data.chats) setSessions(data.chats);
  };

  const handleSignOut = () => {
    document.cookie = "hq_auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };

  // Chat
  const handleReplyChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedSession) return;
    try {
      await fetch("/api/admin/reply-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: selectedSession, message: replyText })
      });
      setReplyText("");
      fetchChats();
    } catch (e) {
      console.error(e);
    }
  };

  // Profile Management
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/me", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: profile.firstName,
          lastName: profile.lastName,
          address: profile.address,
          mobileNumber: profile.mobileNumber
        })
      });
      if (res.ok) alert("Profile updated!");
    } catch {
      alert("Update failed");
    }
  };

  const handleRequestOtp = async () => {
    const res = await fetch("/api/auth/request-otp", { method: "POST" });
    if (res.ok) {
      setOtpSent(true);
      alert("OTP Sent to your email!");
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp, newPassword })
    });
    const data = await res.json();
    if (res.ok) {
      alert("Password changed successfully");
      setOtpSent(false);
      setOtp("");
      setNewPassword("");
    } else {
      alert(data.error);
    }
  };

  const handleDirectPasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/update-password", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentPassword, newPassword })
    });
    const data = await res.json();
    if (res.ok) {
      alert("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
    } else {
      alert(data.error);
    }
  };

  const activeSessionDetails = sessions.find(s => s.sessionId === selectedSession);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <div className="w-full md:w-64 border-r border-zinc-800 p-6 flex flex-col bg-zinc-950/50">
        <div className="flex items-center gap-3 mb-12">
          <Shield className="w-8 h-8 text-blue-500" />
          <h1 className="font-black text-xl uppercase tracking-widest text-blue-500">Support HQ</h1>
        </div>

        <nav className="space-y-2 flex-1">
          <button onClick={() => { setActiveTab("chat"); fetchChats(); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'chat' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:bg-zinc-900'}`}>
            <MessagesSquare size={18} /><span className="font-bold text-sm">Live Support</span>
          </button>
          <button onClick={() => setActiveTab("settings")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:bg-zinc-900'}`}>
            <Settings size={18} /><span className="font-bold text-sm">My Profile</span>
          </button>
        </nav>

        <button onClick={handleSignOut} className="mt-auto flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-white transition-colors">
          <LogOut size={18} /><span className="font-bold text-sm">Sign Out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-12 h-screen overflow-y-auto">
        {activeTab === "chat" && (
          <div className="max-w-6xl mx-auto h-full flex flex-col items-start gap-8 lg:flex-row">
            <div className="w-full lg:w-1/3 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-black mb-6 uppercase flex items-center gap-3"><Activity className="text-blue-500" /> Open Chats</h2>
              <div className="space-y-3">
                {sessions.map(s => (
                  <button key={s.sessionId} onClick={() => setSelectedSession(s.sessionId)} className={`w-full text-left p-4 rounded-xl border transition-all ${selectedSession === s.sessionId ? 'bg-blue-500/10 border-blue-500' : 'bg-black border-zinc-800 hover:border-zinc-700'}`}>
                    <p className="font-bold text-sm truncate">User ID: {s.sessionId.substring(0, 8)}</p>
                    <p className="text-xs text-zinc-500 mt-1">Msg Count: {s.messages.length}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full lg:flex-1 h-[80vh] bg-zinc-900/30 border border-zinc-800 rounded-3xl flex flex-col relative overflow-hidden">
              {!activeSessionDetails ? (
                <div className="m-auto text-zinc-500 font-medium flex flex-col items-center"><MessagesSquare className="w-12 h-12 mb-4 opacity-20" /> Select a session.</div>
              ) : (
                <>
                  <div className="p-6 border-b border-zinc-800 bg-zinc-900/80">
                    <h3 className="font-black text-white uppercase text-sm">Session {activeSessionDetails.sessionId.substring(0,8)}</h3>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {activeSessionDetails.messages.map((m:any, i:number) => (
                      <div key={i} className={`flex ${m.role === 'support' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-4 rounded-2xl max-w-[80%] text-sm ${m.role === 'support' ? 'bg-blue-600 text-white rounded-tr-none' : m.role === 'bot' ? 'bg-zinc-800 text-zinc-300 rounded-tl-none' : 'bg-black border border-zinc-800 text-white rounded-tl-none'}`}>
                          <p className="text-[10px] uppercase font-black opacity-50 mb-1">{m.role}</p>
                          <p className="whitespace-pre-wrap">{m.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleReplyChat} className="p-4 border-t border-zinc-800 bg-zinc-950 flex relative">
                    <input type="text" value={replyText} onChange={e => setReplyText(e.target.value)} placeholder="Type reply to client..." className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white pr-12 focus:outline-none focus:border-blue-500" />
                    <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:scale-110 p-3"><Send size={18} /></button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === "settings" && (
           <div className="max-w-2xl mx-auto space-y-8">
             <h2 className="text-3xl font-black uppercase flex items-center gap-3"><Settings className="text-blue-500" /> Support Configuration</h2>
             
             <form onSubmit={handleProfileUpdate} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
               <h3 className="text-lg font-bold mb-6 border-b border-zinc-800 pb-2">Personal Data</h3>
               <div className="grid grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="First Name" value={profile.firstName || ''} onChange={e => setProfile({...profile, firstName: e.target.value})} className="bg-black border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500" />
                  <input type="text" placeholder="Last Name" value={profile.lastName || ''} onChange={e => setProfile({...profile, lastName: e.target.value})} className="bg-black border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500" />
               </div>
               <input type="text" placeholder="Billing / Office Address" value={profile.address || ''} onChange={e => setProfile({...profile, address: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-blue-500" />
               <input type="text" placeholder="Mobile Number" value={profile.mobileNumber || ''} onChange={e => setProfile({...profile, mobileNumber: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-8 focus:outline-none focus:border-blue-500" />
               <button type="submit" className="bg-white text-black font-bold py-3 px-8 rounded-xl uppercase hover:bg-blue-600 hover:text-white transition-colors">Save Details</button>
             </form>

             <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
               <h3 className="text-lg font-bold mb-6 border-b border-zinc-800 pb-2 flex items-center gap-2"><Key size={18}/> Security</h3>
               
               <form onSubmit={handleDirectPasswordChange} className="mb-8 border-b border-zinc-800 pb-8">
                 <h4 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-widest">Update Password</h4>
                 <input type="password" required placeholder="Current Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-blue-500 text-white" />
                 <input type="password" required placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:border-blue-500 text-white" />
                 <button type="submit" className="bg-white text-black font-bold py-3 px-8 rounded-xl uppercase hover:bg-blue-600 hover:text-white transition-colors">Update Local Password</button>
               </form>

               {!otpSent ? (
                 <button onClick={handleRequestOtp} className="w-full bg-black border border-zinc-800 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-colors uppercase tracking-widest text-sm">Forgot / Need Secure Passcode Reset via Email?</button>
               ) : (
                 <form onSubmit={handlePasswordChange}>
                   <h4 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-widest">Email Verification Sent</h4>
                   <input type="text" required placeholder="6-Digit OTP from Email" value={otp} onChange={e => setOtp(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-blue-500 text-center tracking-[0.5em] font-mono text-lg text-white" />
                   <input type="password" required placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:border-blue-500 text-center text-white" />
                   <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl uppercase">Update Secure Passcode</button>
                 </form>
               )}
             </div>
           </div>
        )}
      </div>
    </div>
  );
}

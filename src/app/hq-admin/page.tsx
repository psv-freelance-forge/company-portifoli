"use client";

import { useState, useEffect } from "react";
import { Shield, MessagesSquare, Users, Mail, Send, Activity, LogOut, Settings, UserPlus, Key } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HQAdmin() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"contacts" | "chat" | "settings" | "invites" | "users">("contacts");

  const [contacts, setContacts] = useState<any[]>([]);
  const [sessions, setSessions] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [expandedContact, setExpandedContact] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [contactReplyText, setContactReplyText] = useState<{ [key: string]: string }>({});

  const [profile, setProfile] = useState<any>({});
  const [otp, setOtp] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("support");

  useEffect(() => {
    fetchData();
    if (activeTab === "users") fetchUsers();
    const interval = setInterval(() => {
      if (activeTab === "chat") fetchChats();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const fetchData = async () => {
    try {
      const [resC, resP] = await Promise.all([
        fetch("/api/admin/contacts"),
        fetch("/api/auth/me")
      ]);
      const dataC = await resC.json();
      const dataP = await resP.json();
      
      if (dataC.contacts) setContacts(dataC.contacts);
      if (dataP.user) {
        if (dataP.user.role !== "admin") return router.push("/login");
        setProfile(dataP.user);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchChats = async () => {
    const res = await fetch("/api/admin/chats");
    const data = await res.json();
    if (data.chats) setSessions(data.chats);
  };

  const fetchUsers = async () => {
    const res = await fetch("/api/admin/users");
    const data = await res.json();
    if (data.users) setUsers(data.users);
  };

  const handleSignOut = () => {
    document.cookie = "hq_auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };

  // User Management
  const handleUserToggle = async (userId: string, currentStatus: boolean) => {
    const res = await fetch("/api/admin/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, disabled: !currentStatus })
    });
    if (res.ok) fetchUsers();
    else alert((await res.json()).error);
  };

  const handleResetPassword = async (userId: string) => {
    if (!confirm("Are you sure you want to forcibly reset this user's password? An email will be sent immediately.")) return;
    const res = await fetch("/api/admin/users/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId })
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  // Contacts
  const handleContactReply = async (contactId: string) => {
    const text = contactReplyText[contactId];
    if (!text) return;
    try {
      await fetch("/api/admin/reply-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contactId, replyText: text })
      });
      alert("Reply sent successfully to user and support addresses.");
      setContactReplyText({ ...contactReplyText, [contactId]: "" });
      fetchData();
    } catch {
      alert("Failed to send reply");
    }
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

  // Invite
  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/invite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: inviteEmail, role: inviteRole })
    });
    const data = await res.json();
    if (res.ok) {
      alert("Invite sent!");
      setInviteEmail("");
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
          <Shield className="w-8 h-8 text-orange" />
          <h1 className="font-black text-xl uppercase tracking-widest">Admin HQ</h1>
        </div>

        <nav className="space-y-2 flex-1">
          <button onClick={() => setActiveTab("contacts")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'contacts' ? 'bg-orange text-white' : 'text-zinc-400 hover:bg-zinc-900'}`}>
            <Users size={18} /><span className="font-bold text-sm">Lead Forms</span>
          </button>
          <button onClick={() => { setActiveTab("chat"); fetchChats(); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'chat' ? 'bg-orange text-white' : 'text-zinc-400 hover:bg-zinc-900'}`}>
            <MessagesSquare size={18} /><span className="font-bold text-sm">Live Support</span>
          </button>
          <button onClick={() => setActiveTab("invites")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'invites' ? 'bg-orange text-white' : 'text-zinc-400 hover:bg-zinc-900'}`}>
            <UserPlus size={18} /><span className="font-bold text-sm">Team Invites</span>
          </button>
          <button onClick={() => setActiveTab("users")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'users' ? 'bg-orange text-white' : 'text-zinc-400 hover:bg-zinc-900'}`}>
            <Shield size={18} /><span className="font-bold text-sm">Operatives</span>
          </button>
          <button onClick={() => setActiveTab("settings")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-orange text-white' : 'text-zinc-400 hover:bg-zinc-900'}`}>
            <Settings size={18} /><span className="font-bold text-sm">My Profile</span>
          </button>
        </nav>

        <button onClick={handleSignOut} className="mt-auto flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-white transition-colors">
          <LogOut size={18} /><span className="font-bold text-sm">Sign Out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-12 h-screen overflow-y-auto">
        {activeTab === "contacts" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8 uppercase flex items-center gap-3"><Users className="text-orange" /> Form Submissions</h2>
            <div className="space-y-6">
              {contacts.map(c => (
                <div key={c._id} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl transition-all cursor-pointer" onClick={(e) => { if ((e.target as HTMLElement).tagName !== "INPUT" && (e.target as HTMLElement).tagName !== "BUTTON") setExpandedContact(expandedContact === c._id ? null : c._id) }}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{c.name}</h3>
                      <p className="text-orange font-medium text-sm">{c.email}</p>
                    </div>
                    <span className="text-xs text-zinc-500 bg-black px-3 py-1 rounded-full border border-zinc-800">
                      {new Date(c.createdAt).toLocaleDateString()} {c.replied && <span className="text-green-500 ml-2">✓ Replied</span>}
                    </span>
                  </div>
                  
                  <div className="bg-black/50 p-4 rounded-xl mb-4">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-2">Subject: {c.project}</p>
                    <p className="text-sm font-medium leading-relaxed">{c.message}</p>
                  </div>

                  {expandedContact === c._id && (
                    <div className="mt-6 border-t border-zinc-800 pt-6 cursor-default">
                      <h4 className="text-xs uppercase tracking-widest font-black text-zinc-500 mb-4">Thread History</h4>
                      
                      <div className="space-y-4 mb-6">
                        {c.responses && c.responses.map((r: any, i: number) => (
                           <div key={i} className="flex justify-end">
                             <div className="bg-orange/10 border border-orange/20 p-4 rounded-2xl rounded-tr-none max-w-[80%]">
                               <div className="flex justify-between items-center mb-2 gap-4">
                                 <span className="text-[10px] uppercase font-black text-orange">{r.senderDetails}</span>
                                 <span className="text-[10px] text-zinc-500">{new Date(r.sentAt).toLocaleString()}</span>
                               </div>
                               <p className="text-sm text-zinc-300 whitespace-pre-wrap">{r.text}</p>
                             </div>
                           </div>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Type reply to client email..." 
                          value={contactReplyText[c._id] || ""}
                          onChange={e => setContactReplyText({...contactReplyText, [c._id]: e.target.value})}
                          className="flex-1 bg-black border border-zinc-800 rounded-xl px-4 text-sm text-white focus:border-orange focus:outline-none"
                        />
                        <button onClick={() => handleContactReply(c._id)} className="bg-white text-black font-bold px-5 py-3 rounded-xl text-sm hover:bg-orange hover:text-white transition-colors flex items-center gap-2">
                          <Send size={16} /> Send Email
                        </button>
                      </div>
                    </div>
                  )}
                  {expandedContact !== c._id && (
                     <p className="text-xs text-center text-zinc-500 mt-2 hover:text-orange transition-colors">Click to expand thread...</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "chat" && (
          /* Copied Live Chat Structure from Previous Implementation */
          <div className="max-w-6xl mx-auto h-full flex flex-col items-start gap-8 lg:flex-row">
            <div className="w-full lg:w-1/3 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-black mb-6 uppercase flex items-center gap-3"><Activity className="text-orange" /> Open Chats</h2>
              <div className="space-y-3">
                {sessions.map(s => (
                  <button key={s.sessionId} onClick={() => setSelectedSession(s.sessionId)} className={`w-full text-left p-4 rounded-xl border transition-all ${selectedSession === s.sessionId ? 'bg-orange/10 border-orange' : 'bg-black border-zinc-800 hover:border-zinc-700'}`}>
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
                        <div className={`p-4 rounded-2xl max-w-[80%] text-sm ${m.role === 'support' ? 'bg-orange text-white rounded-tr-none' : m.role === 'bot' ? 'bg-zinc-800 text-zinc-300 rounded-tl-none' : 'bg-black border border-zinc-800 text-white rounded-tl-none'}`}>
                          <p className="text-[10px] uppercase font-black opacity-50 mb-1">{m.role}</p>
                          <p className="whitespace-pre-wrap">{m.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleReplyChat} className="p-4 border-t border-zinc-800 bg-zinc-950 flex relative">
                    <input type="text" value={replyText} onChange={e => setReplyText(e.target.value)} placeholder="Type reply to client..." className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white pr-12 focus:outline-none focus:border-orange" />
                    <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-orange hover:scale-110 p-3"><Send size={18} /></button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === "invites" && (
           <div className="max-w-2xl mx-auto">
             <h2 className="text-3xl font-black mb-8 uppercase flex items-center gap-3"><UserPlus className="text-orange" /> Team Invites</h2>
             <form onSubmit={handleInvite} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
               <input type="email" placeholder="Email Address" required value={inviteEmail} onChange={e => setInviteEmail(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white mb-4 focus:outline-none focus:border-orange" />
               <select value={inviteRole} onChange={e => setInviteRole(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white mb-8 focus:outline-none focus:border-orange">
                 <option value="support">Support Engineer</option>
                 <option value="admin">Administrator</option>
               </select>
               <button type="submit" className="w-full bg-orange text-white font-bold py-3 rounded-xl uppercase tracking-widest hover:bg-orange/80">Dispatch Secure Invite</button>
             </form>
           </div>
        )}

        {activeTab === "settings" && (
           <div className="max-w-2xl mx-auto space-y-8">
             <h2 className="text-3xl font-black uppercase flex items-center gap-3"><Settings className="text-orange" /> Profile Configuration</h2>
             
             <form onSubmit={handleProfileUpdate} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
               <h3 className="text-lg font-bold mb-6 border-b border-zinc-800 pb-2">Personal Data</h3>
               <div className="grid grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="First Name" value={profile.firstName || ''} onChange={e => setProfile({...profile, firstName: e.target.value})} className="bg-black border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-orange" />
                  <input type="text" placeholder="Last Name" value={profile.lastName || ''} onChange={e => setProfile({...profile, lastName: e.target.value})} className="bg-black border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-orange" />
               </div>
               <input type="text" placeholder="Billing / Office Address" value={profile.address || ''} onChange={e => setProfile({...profile, address: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-orange" />
               <input type="text" placeholder="Mobile Number" value={profile.mobileNumber || ''} onChange={e => setProfile({...profile, mobileNumber: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-8 focus:outline-none focus:border-orange" />
               <button type="submit" className="bg-white text-black font-bold py-3 px-8 rounded-xl uppercase hover:bg-orange hover:text-white transition-colors">Save Details</button>
             </form>

             <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
               <h3 className="text-lg font-bold mb-6 border-b border-zinc-800 pb-2 flex items-center gap-2"><Key size={18}/> Security</h3>
               
               <form onSubmit={handleDirectPasswordChange} className="mb-8 border-b border-zinc-800 pb-8">
                 <h4 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-widest">Update Password</h4>
                 <input type="password" required placeholder="Current Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-orange text-white" />
                 <input type="password" required placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:border-orange text-white" />
                 <button type="submit" className="bg-white text-black font-bold py-3 px-8 rounded-xl uppercase hover:bg-orange hover:text-white transition-colors">Update Local Password</button>
               </form>

               {!otpSent ? (
                 <button onClick={handleRequestOtp} className="w-full bg-black border border-zinc-800 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-colors uppercase tracking-widest text-sm">Forgot / Need Secure Passcode Reset via Email?</button>
               ) : (
                 <form onSubmit={handlePasswordChange}>
                   <h4 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-widest">Email Verification Sent</h4>
                   <input type="text" required placeholder="6-Digit OTP from Email" value={otp} onChange={e => setOtp(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-orange text-center tracking-[0.5em] font-mono text-lg text-white" />
                   <input type="password" required placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:border-orange text-center text-white" />
                   <button type="submit" className="w-full bg-orange text-white font-bold py-3 rounded-xl uppercase">Update Secure Passcode</button>
                 </form>
               )}
             </div>
           </div>
        )}

        {activeTab === "users" && (
           <div className="max-w-5xl mx-auto space-y-6">
             <h2 className="text-3xl font-black mb-8 uppercase flex items-center gap-3"><Shield className="text-orange" /> Network Operatives</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {users.map(u => (
                 <div key={u._id} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl relative overflow-hidden">
                   {u.disabled && <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] uppercase font-black px-3 py-1 rounded-bl-xl">Deactivated</div>}
                   <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-zinc-800 text-orange font-bold text-xl uppercase">
                       {u.firstName.charAt(0)}{u.lastName.charAt(0)}
                     </div>
                     <div>
                       <h3 className="font-black text-lg">{u.firstName} {u.lastName} <span className="opacity-50 font-normal text-sm">({u.role})</span></h3>
                       <p className="text-xs text-zinc-500">{u.email}</p>
                     </div>
                   </div>
                   <div className="flex gap-3 mt-6 border-t border-zinc-800 pt-4">
                     <button onClick={() => handleUserToggle(u._id, u.disabled)} className={`flex-1 font-bold py-2 rounded-xl text-xs uppercase tracking-widest ${u.disabled ? 'bg-green-600/20 text-green-500 hover:bg-green-600 hover:text-white' : 'bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white'} transition-colors`}>
                       {u.disabled ? "Restore Access" : "Disable Access"}
                     </button>
                     <button onClick={() => handleResetPassword(u._id)} className="flex-1 bg-black border border-zinc-800 text-zinc-400 font-bold py-2 rounded-xl text-xs uppercase hover:border-orange hover:text-orange transition-colors">
                       Revert Passcode
                     </button>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        )}
      </div>
    </div>
  );
}

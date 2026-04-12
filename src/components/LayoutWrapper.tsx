"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import CookieConsent from "@/components/CookieConsent";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide global elements on portal and auth routes
  const isPortalRoute = pathname.startsWith("/hq-") || 
                        pathname.startsWith("/login") || 
                        pathname.startsWith("/accept-invite");

  return (
    <>
      {!isPortalRoute && <Navbar />}
      {children}
      {!isPortalRoute && <Footer />}
      {!isPortalRoute && <ChatBot />}
      {!isPortalRoute && <CookieConsent />}
    </>
  );
}

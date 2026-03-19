import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black font-sans text-silver selection:bg-orange/30 selection:text-white">
      <main>
        <Hero />
        <Services />
        <Work />
      </main>
    </div>
  );
}

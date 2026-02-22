import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Dark Mode Toggle Placeholder or Hint */}
      <div className="fixed bottom-4 right-4 z-50">
        <p className="text-[10px] text-slate-400 opacity-50">
          Try system dark mode to see adaptive styles.
        </p>
      </div>
    </main>
  );
}

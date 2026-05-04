import { useState } from "react";
import { IntroScreen } from "@/components/hydration/IntroScreen";
import { CardsScreen } from "@/components/hydration/CardsScreen";
import { CompletionScreen } from "@/components/hydration/CompletionScreen";

type Step = "intro" | "cards" | "done";

const Index = () => {
  const [step, setStep] = useState<Step>("intro");

  return (
    <div className="min-h-screen w-full bg-gradient-soft md:flex md:items-center md:justify-center md:p-8">
      {/* Decorative web-view background only visible on larger screens */}
      <div className="pointer-events-none fixed inset-0 hidden overflow-hidden md:block">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute left-1/3 top-10 h-64 w-64 rounded-full bg-primary-glow/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full">
        <div key={step} className="h-full animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          {step === "intro" && <IntroScreen onStart={() => setStep("cards")} />}
          {step === "cards" && <CardsScreen onDone={() => setStep("done")} />}
          {step === "done" && <CompletionScreen onRestart={() => setStep("intro")} />}
        </div>
      </div>
    </div>
  );
};

export default Index;

import { useState } from "react";
import { IntroScreen } from "@/components/hydration/IntroScreen";
import { CardsScreen } from "@/components/hydration/CardsScreen";
import { CompletionScreen } from "@/components/hydration/CompletionScreen";

type Step = "intro" | "cards" | "done";

const Index = () => {
  const [step, setStep] = useState<Step>("intro");

  return (
    <main key={step} className="animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
      {step === "intro" && <IntroScreen onStart={() => setStep("cards")} />}
      {step === "cards" && <CardsScreen onDone={() => setStep("done")} />}
      {step === "done" && <CompletionScreen onRestart={() => setStep("intro")} />}
    </main>
  );
};

export default Index;

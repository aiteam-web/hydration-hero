import { Button } from "@/components/ui/button";
import { Droplets, ArrowRight, X } from "lucide-react";

interface Props {
  onStart: () => void;
}

export const IntroScreen = ({ onStart }: Props) => {
  const handleExit = () => {
    if (window.history.length > 1) window.history.back();
  };

  return (
    <div className="relative min-h-screen md:min-h-full md:h-full overflow-hidden bg-gradient-hero text-primary-foreground">
      {/* Floating bubbles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[12%] h-20 w-20 rounded-full bg-primary-glow/30 blur-2xl animate-float" />
        <div className="absolute right-[10%] top-[22%] h-24 w-24 rounded-full bg-white/15 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[18%] left-[15%] h-32 w-32 rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute right-[8%] bottom-[12%] h-16 w-16 rounded-full bg-white/20 blur-xl animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Back / exit button */}
      <button
        onClick={handleExit}
        aria-label="Exit activity"
        className="absolute left-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/30 text-white transition-smooth hover:bg-white/25 active:scale-95"
      >
        <X className="h-5 w-5" strokeWidth={2} />
      </button>

      <div className="relative z-10 mx-auto flex min-h-screen md:min-h-full md:h-full max-w-md flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/30 animate-float shadow-glow">
          <Droplets className="h-12 w-12 text-white" strokeWidth={1.5} />
        </div>

        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-white/80 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          A Mindful Exercise
        </p>

        <h1 className="mb-5 font-display text-[2.5rem] font-semibold leading-[1.05] tracking-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.25s' }}>
          Hydration & <br />
          <span className="italic text-primary-glow">Urinary Health</span>
        </h1>

        <p className="mb-10 max-w-sm text-[15px] leading-relaxed text-white/90 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Staying hydrated is one of the simplest and most powerful things you can do for your urinary health. This exercise builds awareness of your daily water intake.
        </p>

        <Button
          onClick={onStart}
          size="lg"
          className="group h-14 w-full max-w-xs rounded-full bg-white text-primary-deep hover:bg-white/95 shadow-soft animate-fade-in-up opacity-0 text-base font-semibold"
          style={{ animationDelay: '0.55s' }}
        >
          Let's Begin
          <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>

        <div className="mt-12 flex gap-2 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
          <span className="h-1.5 w-8 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
};

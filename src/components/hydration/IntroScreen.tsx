import { Button } from "@/components/ui/button";
import { Droplets, ArrowRight } from "lucide-react";

interface Props {
  onStart: () => void;
}

export const IntroScreen = ({ onStart }: Props) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-hero text-primary-foreground">
      {/* Floating bubbles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] h-24 w-24 rounded-full bg-primary-glow/30 blur-2xl animate-float" />
        <div className="absolute right-[12%] top-[25%] h-32 w-32 rounded-full bg-white/15 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[18%] left-[20%] h-40 w-40 rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute right-[8%] bottom-[10%] h-20 w-20 rounded-full bg-white/20 blur-xl animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-10 flex h-28 w-28 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/30 animate-float shadow-glow">
          <Droplets className="h-14 w-14 text-white" strokeWidth={1.5} />
        </div>

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/80 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          A Mindful Exercise
        </p>

        <h1 className="mb-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.25s' }}>
          Hydration & <br />
          <span className="italic text-primary-glow">Urinary Health</span>
        </h1>

        <p className="mb-12 max-w-md text-base leading-relaxed text-white/90 md:text-lg animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Staying hydrated is one of the simplest and most powerful things you can do for your urinary health. This exercise helps you build awareness around your daily water intake and its impact on your body.
        </p>

        <Button
          onClick={onStart}
          size="lg"
          className="group h-14 rounded-full bg-white px-8 text-primary-deep hover:bg-white/95 shadow-soft animate-fade-in-up opacity-0 text-base font-semibold"
          style={{ animationDelay: '0.55s' }}
        >
          Let's Begin
          <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>

        <div className="mt-16 flex gap-2 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
          <span className="h-1.5 w-8 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { CheckCircle2, Bell, GlassWater, Home } from "lucide-react";

interface Props {
  onRestart: () => void;
}

const tips = [
  { icon: Bell, text: "Set a reminder on your phone to drink water every 2 hours." },
  { icon: GlassWater, text: "Carry a reusable water bottle with you throughout the day." },
];

export const CompletionScreen = ({ onRestart }: Props) => {
  return (
    <div className="min-h-screen md:min-h-full md:h-full bg-gradient-soft">
      <div className="mx-auto flex min-h-screen md:min-h-full md:h-full max-w-md flex-col items-center justify-center px-6 py-12 text-center">
        <div className="relative mb-8 animate-fade-in-up opacity-0">
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl animate-float" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-hero shadow-glow">
            <CheckCircle2 className="h-12 w-12 text-white" strokeWidth={1.5} />
          </div>
        </div>

        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          Exercise Complete
        </p>

        <h2 className="mb-5 font-display text-[2.75rem] font-semibold leading-tight tracking-tight text-primary-deep animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          Keep It <span className="italic text-primary">Up!</span>
        </h2>

        <p className="mb-10 max-w-md text-base leading-relaxed text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          Hydration is a daily habit, not a one-time fix. Every glass of water you drink is an investment in your urinary and overall health. Well done for checking in today.
        </p>

        <div className="mb-12 grid w-full max-w-md gap-3 animate-fade-in-up opacity-0" style={{ animationDelay: '0.45s' }}>
          {tips.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl bg-card p-5 text-left shadow-soft ring-1 ring-primary/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="text-sm leading-relaxed text-primary-deep">{text}</p>
            </div>
          ))}
        </div>

        <Button
          onClick={onRestart}
          size="lg"
          className="h-14 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary-deep shadow-soft animate-fade-in-up opacity-0 text-base font-semibold"
          style={{ animationDelay: '0.6s' }}
        >
          <Home className="mr-1 h-5 w-5" /> Back to Home
        </Button>
      </div>
    </div>
  );
};

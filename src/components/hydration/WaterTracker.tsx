import { useState } from "react";
import { GlassWater } from "lucide-react";

interface Props {
  count: number;
  setCount: (n: number) => void;
}

const TOTAL = 8;

export const WaterTracker = ({ count, setCount }: Props) => {
  const [ripples, setRipples] = useState<Record<number, number>>({});

  const handleTap = (idx: number) => {
    const newCount = idx < count ? idx : idx + 1;
    setCount(newCount);
    setRipples((r) => ({ ...r, [idx]: Date.now() }));
  };

  const message =
    count === 0
      ? "Tap a glass to log your first sip"
      : count < TOTAL
      ? `${count} of ${TOTAL} glasses — keep going!`
      : `${count} of ${TOTAL} — great job today!`;

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {Array.from({ length: TOTAL }).map((_, i) => {
          const filled = i < count;
          return (
            <button
              key={i}
              onClick={() => handleTap(i)}
              className="group relative flex h-20 w-14 items-end justify-center overflow-hidden rounded-b-2xl rounded-t-md border-2 border-primary/30 bg-secondary/40 transition-smooth hover:border-primary hover:scale-105 sm:h-24 sm:w-16"
              aria-label={`Glass ${i + 1}`}
            >
              {filled && (
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-water animate-fill-up">
                  <div className="absolute inset-x-0 top-0 h-1 bg-white/40 animate-shimmer" />
                </div>
              )}
              {ripples[i] && (
                <span
                  key={ripples[i]}
                  className="absolute inset-0 rounded-full bg-primary-glow/40 animate-ripple"
                />
              )}
              <GlassWater
                className={`relative z-10 mb-2 h-6 w-6 transition-colors ${
                  filled ? "text-white" : "text-primary/50"
                }`}
                strokeWidth={1.5}
              />
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <div className="font-display text-3xl font-semibold text-primary-deep">
          {count}<span className="text-primary/40"> / {TOTAL}</span>
        </div>
        <p className="mt-2 text-sm font-medium text-muted-foreground">{message}</p>
      </div>
    </div>
  );
};

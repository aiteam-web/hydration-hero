import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Droplet, Clock, Apple, Activity } from "lucide-react";
import { WaterTracker } from "./WaterTracker";

interface Props {
  onDone: () => void;
}

const cards = [
  {
    icon: Droplet,
    eyebrow: "Card 01",
    title: "How Much Water Do You Need?",
    body: "Most adults need 6 to 8 glasses of water per day. Your needs may be higher if you exercise, live in a hot climate, or are pregnant.",
    highlight: "If your urine is pale yellow, you're well hydrated.",
  },
  {
    icon: Clock,
    eyebrow: "Card 02",
    title: "Spread It Through the Day",
    body: "Drinking all your water at once isn't effective. Sip steadily — start with a glass in the morning, have one with each meal, and keep a bottle nearby as a reminder.",
    highlight: "Steady sips beat one big gulp.",
  },
  {
    icon: Apple,
    eyebrow: "Card 03",
    title: "Foods That Help You Hydrate",
    body: "About 20% of your daily water intake comes from food. Cucumbers, watermelon, oranges, and leafy greens are rich in water and support urinary health naturally.",
    highlight: "Eat your water, too.",
  },
  {
    icon: Activity,
    eyebrow: "Card 04 · Interactive",
    title: "Track Your Intake Today",
    body: "Let's see how you're doing today. Log how many glasses of water you've had so far.",
  },
];

export const CardsScreen = ({ onDone }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" });
  const [selected, setSelected] = useState(0);
  const [glasses, setGlasses] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSel = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSel);
    onSel();
  }, [emblaApi]);

  const isLast = selected === cards.length - 1;

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-10 pt-10 sm:px-6">
        <header className="mb-6 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Step 02 · Learn & Reflect
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-primary-deep md:text-4xl">
            Hydration Habits for a <span className="italic text-primary">Healthy Urinary System</span>
          </h2>
        </header>

        {/* Progress dots */}
        <div className="mx-auto mb-6 flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-smooth ${
                i === selected ? "w-8 bg-primary" : "w-1.5 bg-primary/25"
              }`}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        {/* Carousel */}
        <div className="overflow-hidden flex-1" ref={emblaRef}>
          <div className="flex">
            {cards.map((card, i) => {
              const Icon = card.icon;
              const isInteractive = i === cards.length - 1;
              return (
                <div key={i} className="min-w-0 flex-[0_0_100%] px-2 sm:px-4">
                  <div className="mx-auto flex min-h-[460px] max-w-xl flex-col rounded-3xl bg-gradient-card p-8 shadow-card ring-1 ring-primary/5 sm:p-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary/70">
                      {card.eyebrow}
                    </p>
                    <h3 className="mb-4 font-display text-2xl font-semibold leading-snug text-primary-deep sm:text-3xl">
                      {card.title}
                    </h3>
                    <p className="mb-5 text-base leading-relaxed text-muted-foreground">
                      {card.body}
                    </p>
                    {card.highlight && (
                      <div className="mb-6 rounded-2xl bg-secondary/70 px-5 py-4 text-sm font-medium text-primary-deep">
                        💧 {card.highlight}
                      </div>
                    )}
                    {isInteractive && (
                      <div className="mt-4">
                        <WaterTracker count={glasses} setCount={setGlasses} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nav */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={selected === 0}
            className="rounded-full text-primary-deep disabled:opacity-30"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Back
          </Button>

          {isLast ? (
            <Button
              onClick={onDone}
              size="lg"
              className="h-12 rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary-deep shadow-soft"
            >
              Done <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={() => emblaApi?.scrollNext()}
              size="lg"
              className="h-12 rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary-deep shadow-soft"
            >
              Next <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

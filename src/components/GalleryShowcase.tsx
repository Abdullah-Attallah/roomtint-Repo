import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const EXAMPLES = [
  { name: "Living Room", color: "#C4956A", colorName: "Warm Terracotta", before: "/gallery/living-before.jpg", after: "/gallery/living-after.jpg" },
  { name: "Bedroom", color: "#98D8C8", colorName: "Sage Green", before: "/gallery/bedroom-before.jpg", after: "/gallery/bedroom-after.jpg" },
  { name: "Kitchen", color: "#16213E", colorName: "Deep Navy", before: "/gallery/kitchen-before.jpg", after: "/gallery/kitchen-after.jpg" },
  { name: "Bathroom", color: "#E6E6FA", colorName: "Soft Lavender", before: "/gallery/bathroom-before.jpg", after: "/gallery/bathroom-after.jpg" },
];

const GalleryShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const example = EXAMPLES[activeIndex];

  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          See the Transformation
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Drag the slider to compare before & after — only the walls change.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex items-center gap-3 justify-center flex-wrap">
          {EXAMPLES.map((ex, i) => (
            <button
              key={ex.name}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                i === activeIndex
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {ex.name}
            </button>
          ))}
        </div>

        <BeforeAfterSlider beforeImage={example.before} afterImage={example.after} />

        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: example.color }} />
          <span className="text-sm text-muted-foreground">
            {example.colorName} <span className="font-mono uppercase">{example.color}</span>
          </span>
        </div>

        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setActiveIndex((i) => (i - 1 + EXAMPLES.length) % EXAMPLES.length)}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setActiveIndex((i) => (i + 1) % EXAMPLES.length)}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;

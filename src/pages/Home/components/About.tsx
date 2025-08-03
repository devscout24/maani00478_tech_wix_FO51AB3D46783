import assets from "@/assets";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">About us</h2>
      <div className="space-y-2">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="p-2 rounded-xl bg-accent flex items-center gap-4"
          >
            <img
              src={assets.image.BannerThree}
              alt="banner"
              className={cn(
                "w-40 h-full rounded-xl",
                i === 0 ? "block" : "hidden"
              )}
            />
            <div className="space-y-2">
              <h4 className="text-xl font-bold">Quality</h4>
              <h6 className="text-[0.75rem]">A Holistic Concept</h6>
              <p className="text-[0.6rem] text-muted-foreground">
                A holistic travel experience — built with care, detail, and
                passion. Every journey meets the highest standards.
              </p>
            </div>
            <img
              src={assets.image.BannerThree}
              alt="banner"
              className={cn(
                "w-40 h-full rounded-xl",
                i === 1 ? "block" : "hidden"
              )}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

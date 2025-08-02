import MainNav from "@/components/MainNav";
import BadgeIcon from "@/assets/svgs/image 9.svg?react";
import ArrowIcon from "@/assets/icons/arrow-right-01-stroke-sharp 1.svg?react";
import assets from "@/assets";

export default function HomePage() {
  return (
    <section>
      <MainNav />
      <div className="bg-secondary p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BadgeIcon className="size-12" />
          <h4 className="text-secondary-foreground text-lg font-bold">
            Senior Traveler | 1.10%
          </h4>
        </div>
        <ArrowIcon className="size-8 text-secondary-foreground" />
      </div>

      <div>
        <img src={assets.image.BannerOne} alt="banner" />
      </div>

      <div className="p-4">
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
                className="w-40 h-full rounded-xl"
              />
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Quality</h4>
                <h6>A Holistic Concept</h6>
                <p className="text-sm text-muted-foreground">
                  A holistic travel experience — built with care, detail, and
                  passion. Every journey meets the highest standards.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

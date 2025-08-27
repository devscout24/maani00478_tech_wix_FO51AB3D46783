import assets from "@/assets";
import { cn } from "@/lib/utils";

export function About() {
  const travelContent = [
    {
      title: "Plan",
      // subtitle: "A Holistic Concept",
      description:
        "We are a travel company dedicated to creating unforgettable journeys. From tailored trips to seamless bookings, we help you explore the world with comfort, trust, and ease.",
      image: assets.image.AboutOne,
    },
    {
      title: "Team",
      // subtitle: "All-Encompassing Approach",
      description:
        "We are a passionate team of travel experts dedicated to crafting seamless and unforgettable journeys for every traveler.",
      image: assets.image.AboutTwo,
    },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">About us</h2>
      <div className="space-y-2">
        {travelContent.map((item, i) => (
          <div
            key={i}
            className="p-2 rounded-xl bg-accent flex items-center gap-4"
          >
            <img
              src={travelContent[0].image}
              alt="banner"
              className={cn(
                "w-40 h-32 rounded-xl",
                i === 0 ? "block" : "hidden"
              )}
            />
            <div className="space-y-2">
              <h4 className="text-xl font-bold">{item.title}</h4>
              {/* <h6 className="text-[0.75rem]">{item.subtitle}</h6> */}
              <p className="text-[0.6rem] text-muted-foreground">
                {item.description}
              </p>
            </div>
            <img
              src={travelContent[1].image}
              alt="banner"
              className={cn(
                "w-40 h-32 rounded-xl",
                i === 1 ? "block" : "hidden"
              )}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

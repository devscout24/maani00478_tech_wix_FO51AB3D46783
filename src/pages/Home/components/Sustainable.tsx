import BadgeIcon2 from "@/assets/svgs/Frame-1.svg?react";

export function Sustainable() {
  const lastminuteEthicalCode = [
    {
      id: 1,
      title: "Lastminute",
      content:
        "We have our own code of ethics, honesty, tolerance and coexistence of cultures.",
      emphasis: "ETHICAL CODE",
    },
    {
      id: 2,
      title: "Lastminute",
      content:
        "A portion of the value of your trip will be donated to the Lastminute foundation.",
      emphasis: "FOUNDATION A WORLD",
    },
    {
      id: 3,
      title: "A WORLD",
      content: "We compensate 100% of our CO2 footprint",
      emphasis: "WITHOUT POLLUTION",
    },
    {
      id: 4,
      title: "OUR",
      content:
        "Tourism allows us to know, understand and learn from other cultures. We believe in diversity.",
      emphasis: "VALUES POLLUTION",
    },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">SUSTAINABLE Tourism</h2>

      <div className="space-y-4">
        {lastminuteEthicalCode.map((item) => (
          <div key={item.id} className="w-full border rounded-2xl p-4">
            <div className="w-fit p-4 rounded-full border">
              <BadgeIcon2 className="size-6" />
            </div>

            <div className="mt-6">
              <h4>{item.title}</h4>
              <h2>
                <span className="font-semibold text-xl">
                  {item.emphasis.split(" ")[0]}
                </span>
                <span className="ml-2">
                  {item.emphasis
                    .split(" ")
                    .slice(1, item.emphasis.length - 1)
                    .join(" ")}
                </span>
              </h2>
              <p className="text-[0.875rem]">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

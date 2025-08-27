import assets from "@/assets";

export function Travel() {
  const mockTours = [
    {
      id: 1,
      city: "LONDON",
      image: assets.image.LondonImage,
    },
    {
      id: 2,
      city: "ROME",
      image: assets.image.RomeImage,
    },
    {
      id: 3,
      city: "MADRID",
      image: assets.image.MadridImage,
    },
    {
      id: 4,
      city: "AUSTRALIA",
      image: assets.image.AustraliaImage,
    },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Travel with us</h2>

      <div className="grid grid-cols-2 gap-2">
        {mockTours.map((item) => (
          <div key={item.id} className="w-full group relative overflow-hidden">
            <div>
              <img
                src={item.image}
                alt="banner"
                className="w-full h-48 object-cover backdrop duration-1000 group-hover:scale-150"
              />
            </div>
            <h2 className="w-96 h-48 bg-gray-900/40 backdrop-sepia-50 text-2xl text-white font-extrabold absolute top-0 left-0 p-2">
              {item.city}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

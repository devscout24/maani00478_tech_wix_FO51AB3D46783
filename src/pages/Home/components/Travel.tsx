export function Travel() {
  const mockTours = [
    {
      id: 1,
      city: "LONDON",
      includes: "WE INCLUDE",
      description: "SIGHTSEEING TOUR with bcd guide",
      landmarks: "Parliament, the River Thames, The",
    },
    {
      id: 2,
      city: "ROME",
      includes: "WE INCLUDE",
      description: "SIGHTSEEING TOUR with bcd guide",
      landmarks: "Parliament, the River Thames, The",
    },
    {
      id: 3,
      city: "MADRID",
      includes: "WE INCLUDE",
      description: "SIGHTSEEING TOUR with bcd guide",
      landmarks: "Parliament, the River Thames, The",
    },
    {
      id: 4,
      city: "LONDON",
      includes: "WE INCLUDE",
      description: "SIGHTSEEING TOUR with bcd guide",
      landmarks: "Parliament, the River Thames, The",
    },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Travel with us</h2>

      <div className="grid grid-cols-2 gap-2">
        {mockTours.map((item) => (
          <div
            key={item.id}
            className="space-y-[4.75rem] bg-[url(/c0b798a738816956c0e4fb3cc2bdda58d52f7102.png)] bg-no-repeat bg-center bg-origin-border"
          >
            <h2 className="text-2xl text-white font-semibold p-2">
              {item.city}
            </h2>

            <div className="p-2 bg-clip-padding backdrop-filter backdrop-blur-xs">
              <h4 className="text-white font-semibold">{item.includes}</h4>
              <p className="text-[0.5rem] text-white">{item.description}</p>
              <p className="text-[0.5rem] text-white">{item.landmarks}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

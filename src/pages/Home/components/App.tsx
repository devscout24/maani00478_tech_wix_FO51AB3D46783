import assets from "@/assets";

export function App() {
  return (
    <section className="p-4 bg-linear-to-r from-[#254184CC] to-[#F2007DCC] flex items-center gap-1">
      <div className="w-full">
        <h4 className="text-[0.75rem] text-white font-semibold">
          Your world of travel, all in one app.
        </h4>
        <p className="text-[0.375rem] text-white mt-2 mb-4">
          Explore hundreds of guided tours across Europe, Asia, and the Americas
          — all organized by one of the world’s leading travel agencies. Plan
          your journey, view itineraries, and stay updated in real time.
        </p>
        <img
          src={assets.image.BannerFourteen}
          alt="banner"
          className="w-[9.5rem]"
        />
      </div>
      <img
        src={assets.image.BannerTwelve}
        alt="banner"
        className="w-[7.6875rem]"
      />
    </section>
  );
}

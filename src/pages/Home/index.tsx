import assets from "@/assets";
import MainNav from "@/components/MainNav";
import { About, App, Hero, Sustainable, Travel } from "./components";

export default function HomePage() {
  return (
    <section>
      <MainNav />
      <div className="space-y-6">
        <Hero />
        <About />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Did you know that lastminute has tours in other languages?
          </h2>
          <img src={assets.image.BannerThirteen} alt="banner" />
        </div>
        <Travel />
        <App />
        <Sustainable />
        {/* <Footer /> */}
      </div>
    </section>
  );
}

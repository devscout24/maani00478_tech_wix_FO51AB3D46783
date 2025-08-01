import assets from "@/assets";
import Logo from "@/assets/svgs/logo.svg?react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function AuthPage() {
  const navigate = useNavigate();

  return (
    <section className="section-container relative min-h-screen">
      <img
        src={assets.image.BannerOne}
        alt="banner image"
        className="w-full h-[28rem] object-cover"
      />
      <div className="w-full p-4 bg-white rounded-t-2xl absolute top-[25rem]">
        <Logo className="w-[14.5rem] h-[3.5rem] mx-auto" />
        <h2 className="text-2xl font-bold mt-6 mb-4">
          Last Minutes Travel <br /> Solutions
        </h2>
        <p>
          Each travel market has its unique challenges, whether it is classic
          tour operators, airlines, cruise providers or theme parks &
          attractions. We provide one highly adaptive tour operating system for
          every demand, helping you to optimize existing and new business
          processes.
        </p>
        <div className="mt-8 flex items-center gap-2.5">
          <Button className="flex-1" onClick={() => navigate("/auth/login")}>
            LOG IN
          </Button>
          <Button className="flex-1" onClick={() => navigate("/auth/signup")}>
            SIGN UP
          </Button>
        </div>
      </div>
    </section>
  );
}

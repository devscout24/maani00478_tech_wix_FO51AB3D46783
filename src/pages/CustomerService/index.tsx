import assets from "@/assets";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function CustomerService() {
  const navigate = useNavigate();

  return (
    <section className="p-4">
      <div>
        <div className="flex items-center">
          <ArrowLeftIcon className="size-8" onClick={() => navigate("/")} />
          <h4 className="w-full text-[.8rem] font-semibold text-center">
            Support
          </h4>
        </div>
      </div>

      <div className="mt-20">
        <img
          src={assets.image.BannerFour}
          alt="banner-img"
          className="w-full mx-auto"
        />
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Support</h2>
          <p className="text-xl">Having a problem? Contact us now</p>
          <p className="text-xs text-muted-foreground">
            Customer Service Operation Time:
          </p>
          <Button className="w-full">Direct To Whatsapp</Button>
        </div>
      </div>
    </section>
  );
}

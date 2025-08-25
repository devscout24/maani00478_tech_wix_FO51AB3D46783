import assets from "@/assets";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function CustomerService() {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    // Format the phone number by removing any non-digit characters except the '+'
    const formattedNumber = import.meta.env.VITE_CLIENT_WHATSAPP.replace(
      /[^\d+]/g,
      ""
    );

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedNumber}`;

    // Open the URL in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="p-4">
      <div>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full group"
            onClick={() => navigate("/")}
          >
            <ArrowLeftIcon className="size-6 duration-500 group-hover:scale-125 group-hover:text-primary" />
          </Button>
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
          <Button className="w-full" onClick={handleWhatsAppClick}>
            Direct To Whatsapp
          </Button>
        </div>
      </div>
    </section>
  );
}

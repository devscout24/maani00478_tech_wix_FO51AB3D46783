import assets from "@/assets";
import ArrowIcon from "@/assets/icons/arrow-right-01-stroke-sharp 1.svg?react";
import BadgeIcon1 from "@/assets/svgs/image 18.svg?react";
import BadgeIcon2 from "@/assets/svgs/image 9.svg?react";
import BadgeIcon3 from "@/assets/svgs/image 19.svg?react";
import BadgeIcon4 from "@/assets/svgs/image 20.svg?react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section>
      <div className="bg-secondary p-4 flex items-center justify-between relative">
        <div className="flex items-center gap-4">
          <BadgeIcon2 className="size-12" />
          <h4 className="text-secondary-foreground text-lg font-bold">
            Senior Traveler | 1.10%
          </h4>
        </div>

        <ArrowIcon
          className={cn(
            "size-8 text-secondary-foreground cursor-pointer duration-500",
            open ? "rotate-180" : "rotate-0"
          )}
          onClick={() => setOpen(!open)}
        />

        <div
          className={cn(
            "absolute p-4 top-20 right-0 left-0 bg-secondary text-white font-bold grid grid-cols-2 gap-12 duration-500 origin-top",
            open ? "scale-y-100" : "scale-y-0"
          )}
        >
          <div>
            <BadgeIcon1 className="size-12" />
            <p>Normal Traveler</p>
          </div>

          <div className="relative">
            <div className="w-fit text-xs text-green-600 border border-green-600 p-1 rounded-full absolute right-0">
              Current
            </div>
            <BadgeIcon2 className="size-12" />
            <p>Senior Traveler</p>
          </div>

          <div>
            <BadgeIcon3 className="size-12" />
            <p>Diamond Traveler</p>
          </div>

          <div>
            <BadgeIcon4 className="size-12" />
            <p>Platinum Traveler</p>
          </div>
        </div>
      </div>

      <div>
        <img src={assets.image.BannerOne} alt="banner" />
      </div>
    </section>
  );
}

import assets from "@/assets";
import ArrowIcon from "@/assets/icons/arrow-right-01-stroke-sharp 1.svg?react";
import BadgeIcon1 from "@/assets/svgs/image 18.svg?react";
import BadgeIcon2 from "@/assets/svgs/image 9.svg?react";
import BadgeIcon3 from "@/assets/svgs/image 19.svg?react";
import BadgeIcon4 from "@/assets/svgs/image 20.svg?react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import useCurrentUser from "@/hooks/useCurrentUser";

export function Hero() {
  const [open, setOpen] = useState<boolean>(false);
  const currentUser = useCurrentUser();

  const LevelBadge = () => (
    <div className="w-fit text-xs text-green-600 border border-green-600 px-2.5 py-1 rounded-full absolute right-0">
      Current
    </div>
  );

  const Header = ({ levelId }: { levelId: number | null }) => (
    <div className="flex items-center gap-4">
      {levelId === null || levelId === 1 ? (
        <BadgeIcon1 className="size-12" />
      ) : levelId === 2 ? (
        <BadgeIcon2 className="size-12" />
      ) : levelId === 3 ? (
        <BadgeIcon3 className="size-12" />
      ) : levelId === 4 ? (
        <BadgeIcon4 className="size-12" />
      ) : (
        <></>
      )}
      <h4 className="text-secondary-foreground text-lg font-bold">
        {levelId === null || levelId === 1
          ? "Normal Traveler | 1.00%"
          : levelId === 2
          ? "Senior Traveler | 4.50%"
          : levelId === 3
          ? "Diamond Traveler | 10.05%"
          : levelId === 4
          ? "Platinum Traveler | 57.00%"
          : "Normal Traveler"}
      </h4>
    </div>
  );

  return (
    <section>
      <div className="bg-secondary p-4 flex items-center justify-between relative">
        <Header levelId={currentUser?.level_id as number | null} />
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
          <div className="relative">
            {currentUser?.level_id === null || currentUser?.level_id === 1 ? (
              <LevelBadge />
            ) : (
              <></>
            )}
            <BadgeIcon1 className="size-12" />
            <p>Normal Traveler</p>
          </div>

          <div className="relative">
            {currentUser?.level_id === 2 ? <LevelBadge /> : <></>}
            <BadgeIcon2 className="size-12" />
            <p>Senior Traveler</p>
          </div>

          <div className="relative">
            {currentUser?.level_id === 3 ? <LevelBadge /> : <></>}
            <BadgeIcon3 className="size-12" />
            <p>Diamond Traveler</p>
          </div>

          <div className="relative">
            {currentUser?.level_id === 4 ? <LevelBadge /> : <></>}
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

import assets from "@/assets";
import ArrowIcon from "@/assets/icons/arrow-right-01-stroke-sharp 1.svg?react";
import BadgeIcon1 from "@/assets/svgs/image 18.svg?react";
import BadgeIcon2 from "@/assets/svgs/image 9.svg?react";
import BadgeIcon3 from "@/assets/svgs/image 19.svg?react";
import BadgeIcon4 from "@/assets/svgs/image 20.svg?react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useGetLevelsQuery } from "@/redux/api/endpoints/levels.api";
import { useMyInfoQuery } from "@/redux/api/endpoints/auth.api";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import type { TUserInfo } from "@/types";

type TCommissionLevel = {
  id: number;
  name: string;
  normal_commission: string;
  special_commission: string;
  target_deals: number;
};

export function Hero() {
  const [open, setOpen] = useState<boolean>(false);

  const {
    data: levels,
    isLoading: isLevelsLoading,
    isFetching: isLevelsFetching,
  } = useGetLevelsQuery({});

  const {
    data: myInfo,
    isLoading: isLoadingMyInfo,
    isFetching: isFetchingMyInfo,
  } = useMyInfoQuery({});

  const currentUserData: TUserInfo = myInfo?.data;

  const currentLevel: TCommissionLevel | undefined = levels?.data.find(
    (level: TCommissionLevel) => level.id === currentUserData?.level_id
  )?.normal_commission;

  console.log("currentLevel", currentLevel);

  const LevelBadge = () => (
    <div className="w-fit text-xs text-green-600 border border-green-600 px-2.5 py-1 rounded-full absolute right-0">
      Current
    </div>
  );

  const Header = ({
    levelId,
    level,
    dealCompletionPercentage,
  }: {
    levelId: number;
    level: string;
    dealCompletionPercentage: number;
  }) => (
    <div className="flex items-center gap-4">
      {levelId === 1 ? (
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
        {level} Traveler | {dealCompletionPercentage.toFixed(2)}%
      </h4>
    </div>
  );

  return (
    <section>
      <div className="bg-secondary p-4 relative">
        {isLoadingMyInfo ||
        isFetchingMyInfo ||
        isLevelsLoading ||
        isLevelsFetching ? (
          <Skeleton className="h-12 w-full" />
        ) : (
          <div className="flex items-center justify-between">
            <Header
              levelId={currentUserData?.level_id as number}
              dealCompletionPercentage={currentLevel ? Number(currentLevel) : 0}
              level={
                levels?.data?.find(
                  (level: TCommissionLevel) =>
                    level.id === currentUserData?.level_id
                )?.name as string
              }
            />
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
              onClick={() => setOpen(!open)}
            >
              <ArrowIcon
                className={cn(
                  "size-8 text-secondary-foreground cursor-pointer duration-500",
                  open ? "rotate-180" : "rotate-0"
                )}
              />
            </Button>
          </div>
        )}

        <div
          className={cn(
            "absolute p-4 top-20 right-0 left-0 bg-secondary text-white font-bold grid grid-cols-2 gap-12 duration-500 origin-top",
            open ? "scale-y-100" : "scale-y-0"
          )}
        >
          {levels?.data?.map((level: TCommissionLevel) => (
            <div key={level.id} className="relative">
              {currentUserData?.level_id === level.id ? <LevelBadge /> : <></>}
              {level.id === 1 ? (
                <BadgeIcon1 className="size-12" />
              ) : level.id === 2 ? (
                <BadgeIcon2 className="size-12" />
              ) : level.id === 3 ? (
                <BadgeIcon3 className="size-12" />
              ) : level.id === 4 ? (
                <BadgeIcon4 className="size-12" />
              ) : (
                <></>
              )}
              <p>{level.name} Traveler</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <img src={assets.image.BannerOne} alt="banner" />
      </div>
    </section>
  );
}

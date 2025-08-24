import assets from "@/assets";
import Logo from "@/assets/svgs/logo.svg?react";
import { useMyInfoQuery } from "@/redux/api/endpoints/auth.api";
import type { TUserInfo } from "@/types";
import { Skeleton } from "../ui/skeleton";

export default function BalanceCard() {
  const {
    data: myInfo,
    isLoading: isLoadingMyInfo,
    isFetching: isFetchingMyInfo,
  } = useMyInfoQuery({});

  const currentUserData: TUserInfo = myInfo?.data;

  return (
    <section>
      <div className="w-full h-fit relative">
        <img
          src={assets.image.BannerFifteen}
          alt="banner-img"
          className="w-full"
        />
        <div className="m-4 absolute top-0 right-0 left-0 bottom-0 flex flex-col text-white">
          <Logo className="w-[8.375rem] h-[2rem]" />
          <div className="mt-auto">
            <p className="text-accent-foreground text-xs">Account Balance</p>
            <p className="text-xl font-semibold">
              {isLoadingMyInfo || isFetchingMyInfo ? (
                <Skeleton className="w-28 h-7" />
              ) : (
                <p>{currentUserData?.balance || 0.0}</p>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

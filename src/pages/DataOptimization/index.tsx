import { useNavigate } from "react-router";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import TaskOneIcon from "@/assets/icons/task-01-solid-standard 1.svg?react";
import TaskTwoIcon from "@/assets/icons/task-done-01-solid-standard 1.svg?react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import TravelCard, { type TTravelCard } from "./components/TravelCard";
import { usePackagesQuery } from "@/redux/api/endpoints/package.api";
import assets from "@/assets";
import { useMyInfoQuery } from "@/redux/api/endpoints/auth.api";

export default function DataOptimization() {
  const navigate = useNavigate();
  const { data: packageData, isLoading: packageLoading } = usePackagesQuery({});
  const { data: myInfoData, isLoading: myInfoLoading } = useMyInfoQuery({});

  return (
    <section>
      {myInfoLoading ? (
        <div className="bg-[url('/5ddf0e72cdce0348d1fe9ef0089661f4adb9c140.png')]">
          <div className="p-4">
            <div className="flex items-center text-white">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full group"
                onClick={() => navigate("/")}
              >
                <ArrowLeftIcon className="size-6 duration-500 group-hover:scale-125 group-hover:text-primary" />
              </Button>
              <h4 className="w-full text-[.8rem] font-semibold text-center -ml-10">
                Data Optimization
              </h4>
            </div>
          </div>

          <div className="p-4 text-white flex items-center justify-around">
            <div className="text-center space-y-2">
              <Skeleton className="h-3 w-24 mx-auto" />
              <Skeleton className="h-6 w-16 mx-auto" />
              <Skeleton className="h-6 w-20 mx-auto" />
            </div>

            <Skeleton className="w-[1px] h-[7.125rem]" />

            <div className="text-center space-y-2">
              <Skeleton className="h-3 w-24 mx-auto" />
              <Skeleton className="h-6 w-16 mx-auto" />
              <Skeleton className="h-6 w-20 mx-auto" />
            </div>
          </div>

          <div className="p-4 text-white space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="w-full h-2 rounded-full" />
          </div>

          <div className="p-4 w-full flex items-center gap-4">
            <div className="flex-1 bg-white p-4 rounded-2xl space-y-4">
              <Skeleton className="size-10 rounded-full" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-8" />
            </div>

            <div className="flex-1 bg-white p-4 rounded-2xl space-y-4">
              <Skeleton className="size-10 rounded-full" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-8" />
            </div>
          </div>

          <div className="p-4">
            <Skeleton className="w-full h-10 rounded-md" />
          </div>

          <div className="w-full h-5 bg-white rounded-t-2xl" />
        </div>
      ) : (
        <div className="bg-[url('/5ddf0e72cdce0348d1fe9ef0089661f4adb9c140.png')]">
          <div className="p-4">
            <div className="flex items-center text-white">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full group"
                onClick={() => navigate("/")}
              >
                <ArrowLeftIcon className="size-6 duration-500 group-hover:scale-125 group-hover:text-primary" />
              </Button>
              <h4 className="w-full text-[.8rem] font-semibold text-center -ml-10">
                Data Optimization
              </h4>
            </div>
          </div>

          <div className="p-4 text-white flex items-center justify-around">
            <div className="text-center">
              <h4 className="text-[.8rem] font-semibold">Account Balance</h4>
              <h2 className="text-2xl font-semibold">USDC</h2>
              <h2 className="text-2xl font-semibold">
                {Number(myInfoData?.data?.balance).toFixed(2)}
              </h2>
            </div>

            <hr className="bg-white/35 w-[1px] h-[7.125rem]" />

            <div className="text-center">
              <h4 className="text-[.8rem] font-semibold">Commission</h4>
              <h2 className="text-2xl font-semibold">USDC</h2>
              <h2 className="text-2xl font-semibold">
                {Number(myInfoData?.data?.commission).toFixed(2)}
              </h2>
            </div>
          </div>

          <div className="p-4 text-white space-y-2">
            <div className="flex items-center justify-between">
              <p>Current Progress</p>
              <p>{myInfoData?.data?.targetDealCompletionPercentage}/100</p>
            </div>
            <Progress
              value={myInfoData?.data?.targetDealCompletionPercentage}
            />
          </div>

          <div className="p-4 w-full flex items-center gap-4">
            <div className="flex-1 bg-white p-4 rounded-2xl space-y-2">
              <div className="w-fit p-4 rounded-full bg-primary/10 text-primary">
                <TaskOneIcon className="size-6" />
              </div>
              <p>Total Journey</p>
              <p className="font-semibold">{myInfoData?.data?.journeys}</p>
            </div>

            <div className="flex-1 bg-white p-4 rounded-2xl space-y-2">
              <div className="w-fit p-4 rounded-full bg-primary/10 text-primary">
                <TaskTwoIcon className="size-6" />
              </div>
              <p>Visited Journey</p>
              <p className="font-semibold">
                {myInfoData?.data?.deals_completed}
              </p>
            </div>
          </div>

          <div className="p-4">
            <Button
              className="w-full"
              onClick={() => navigate("/submit-review")}
            >
              Reserve Journey
            </Button>
          </div>

          <div className="w-full h-5 bg-white rounded-t-2xl" />
        </div>
      )}

      <div className="w-full p-4">
        <h4 className="font-semibold">Trending Destination</h4>
        <p>Discover tours that is overwhelming by tourist</p>

        <div className="space-y-6 mt-4">
          {packageLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <TravelCard key={`loading-${index}`} isLoading={true} />
            ))
          ) : packageData?.data.length === 0 ? (
            <div className="mt-20">
              <img
                src={assets.image.Oops}
                alt="Oops"
                className="w-28 mx-auto"
              />
              <h1 className="text-center">No data found.</h1>
            </div>
          ) : packageData?.data ? (
            packageData.data.map((item: TTravelCard) => (
              <TravelCard key={item.id} payload={item} />
            ))
          ) : (
            <div className="mt-20">
              <img
                src={assets.image.Oops}
                alt="Oops"
                className="w-28 mx-auto"
              />
              <h1 className="text-center">No data found.</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

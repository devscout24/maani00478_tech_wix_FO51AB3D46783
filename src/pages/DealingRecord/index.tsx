import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router";
import DealingCard, { type TDealingCard } from "./components/DealingCard";
import { useState } from "react";
import { useDealRecordsQuery } from "@/redux/api/endpoints/order.api";
import assets from "@/assets";
import { Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DealingRecord() {
  const navigate = useNavigate();
  const [dealStatus, setDealStatus] = useState<"all" | "pending" | "completed">(
    "all"
  );

  const { data, isLoading, isFetching, isError, error } =
    useDealRecordsQuery(dealStatus);
  const recordData: TDealingCard[] = data?.data;
  const recordError =
    error && "data" in error ? (error.data as { message: string }) : undefined;

  return (
    <section className="p-4 space-y-8">
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
            Dealing Record
          </h4>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all" onClick={() => setDealStatus("all")}>
            All
          </TabsTrigger>
          <TabsTrigger value="pending" onClick={() => setDealStatus("pending")}>
            Pending
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            onClick={() => setDealStatus("completed")}
          >
            Completed
          </TabsTrigger>
        </TabsList>

        {isError ? (
          <div className="h-96 w-full flex flex-col justify-center items-center">
            <img src={assets.image.Oops} alt="Oops" className="w-28" />
            <p className="font-semibold">
              {recordError?.message || "Something went wrong"}
            </p>
          </div>
        ) : (
          <></>
        )}

        <TabsContent value="all">
          <div className="space-y-4">
            {isLoading || isFetching ? (
              Array.from({ length: 10 }).map((_, index) => (
                <DealingCard key={`loading-${index}`} isLoading={true} />
              ))
            ) : recordData.length === 0 ? (
              <div className="flex flex-col items-center justify-center mt-36 text-muted-foreground">
                <Package2 className="size-16" />
                <p>No Data Found.</p>
              </div>
            ) : (
              recordData?.map((item, i) => (
                <DealingCard
                  key={i}
                  payload={item}
                  isLoading={isLoading || isFetching}
                />
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <div className="space-y-4">
            {isLoading || isFetching ? (
              Array.from({ length: 10 }).map((_, index) => (
                <DealingCard key={`loading-${index}`} isLoading={true} />
              ))
            ) : recordData.length === 0 ? (
              <div className="flex flex-col items-center justify-center mt-36 text-muted-foreground">
                <Package2 className="size-16" />
                <p>No Data Found.</p>
              </div>
            ) : (
              recordData?.map((item, i) => (
                <DealingCard
                  key={i}
                  payload={item}
                  isLoading={isLoading || isFetching}
                />
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="space-y-4">
            {isLoading || isFetching ? (
              Array.from({ length: 10 }).map((_, index) => (
                <DealingCard key={`loading-${index}`} isLoading={true} />
              ))
            ) : recordData.length === 0 ? (
              <div className="flex flex-col items-center justify-center mt-36 text-muted-foreground">
                <Package2 className="size-16" />
                <p>No Data Found.</p>
              </div>
            ) : (
              recordData?.map((item, i) => (
                <DealingCard
                  key={i}
                  payload={item}
                  isLoading={isLoading || isFetching}
                />
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

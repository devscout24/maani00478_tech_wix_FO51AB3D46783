import { useNavigate } from "react-router";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import CreditIcon from "@/assets/icons/credit-card-solid-rounded 1.svg?react";
import { Badge } from "@/components/ui/badge";
import assets from "@/assets";
import { Button } from "@/components/ui/button";
import { useWithdrawalRecordsQuery } from "@/redux/api/endpoints/withdrawal.api";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type TTransaction = {
  id: number;
  username: string;
  status: string;
  amount: number;
  created_at: string;
};

const CardLoader = () => {
  return (
    <div className="p-2.5 bg-muted flex items-center gap-4 rounded-xl">
      <div className="p-4 bg-white rounded-full">
        <Skeleton className="size-6" />
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="w-1/2 space-y-2.5">
          <h4>
            <Skeleton className="w-full h-4" />
          </h4>
          <p>
            <Skeleton className="w-full h-2" />
          </p>
        </div>

        <div className="flex flex-col space-y-2.5">
          <Skeleton className="w-8 h-4 rounded-full" />
          <h2>
            <Skeleton className="w-full h-6" />
          </h2>
        </div>
      </div>
    </div>
  );
};

const Card = ({ payload }: { payload?: TTransaction }) => {
  return (
    <div className="p-2.5 bg-muted flex items-center gap-4 rounded-xl">
      <div className="p-4 bg-white rounded-full">
        <CreditIcon className="size-6 text-primary" />
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="space-y-2.5">
          <h4 className="font-semibold">{payload?.username}</h4>
          <p className="text-xs text-muted-foreground">
            {/* <span>{payload?.date}</span>{" "} */}
            <span>{payload?.created_at}</span>
          </p>
        </div>

        <div className="flex flex-col space-y-2.5">
          <Badge className="ml-auto">{payload?.status}</Badge>
          <h2 className="text-xl font-semibold">{payload?.amount}</h2>
        </div>
      </div>
    </div>
  );
};

export default function WithdrawalHistory() {
  const navigate = useNavigate();
  const [withdrawalStatus, setWithdrawalStatus] = useState<
    "all" | "pending" | "approved"
  >("all");

  const {
    data: depositsData,
    isLoading,
    isFetching,
    error,
    isError,
  } = useWithdrawalRecordsQuery(withdrawalStatus);

  const depositsError =
    error && "data" in error ? (error.data as { message: string }) : undefined;

  if (isError) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <img src={assets.image.Oops} alt="Oops" className="w-28" />
        <p className="font-semibold">{depositsError?.message}</p>
        <Button className="mt-4" onClick={() => window.history.back()}>
          Back to Previous
        </Button>
      </div>
    );
  }

  return (
    <section className="p-4 space-y-6">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full group"
          onClick={() => navigate("/withdrawal")}
        >
          <ArrowLeftIcon className="size-6 duration-500 group-hover:scale-125 group-hover:text-primary" />
        </Button>
        <h4 className="w-full text-[.8rem] font-semibold text-center -ml-10">
          Withdrawals History
        </h4>
      </div>

      <div className="w-full rounded-xl p-4 bg-muted space-y-4">
        <p className="text-muted-foreground text-xs">Total Added This Month</p>
        <h4 className="text-2xl font-semibold">
          USDC {depositsData?.data?.thisMonthDepositesAmount}
        </h4>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all" onClick={() => setWithdrawalStatus("all")}>
            All
          </TabsTrigger>
          <TabsTrigger
            value="pending"
            onClick={() => setWithdrawalStatus("pending")}
          >
            <span className="text-nowrap">Pending</span>
          </TabsTrigger>
          <TabsTrigger
            value="success"
            onClick={() => setWithdrawalStatus("approved")}
          >
            Success
          </TabsTrigger>
        </TabsList>

        {isError ? (
          <div className="h-96 w-full flex flex-col justify-center items-center">
            <img src={assets.image.Oops} alt="Oops" className="w-28" />
            <p className="font-semibold">
              {depositsError?.message || "Something went wrong"}
            </p>
          </div>
        ) : (
          <></>
        )}

        <TabsContent value="all">
          <div className="space-y-4">
            {isLoading || isFetching ? (
              Array.from({ length: 10 }).map((_, index) => (
                <CardLoader key={index} />
              ))
            ) : depositsData?.data?.length === 0 ? (
              <div className="flex flex-col items-center justify-center mt-36 text-muted-foreground">
                <Package2 className="size-16" />
                <p>No Data Found.</p>
              </div>
            ) : (
              depositsData?.data?.records.map((item: TTransaction) => (
                <Card key={item.id} payload={item} />
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <div className="space-y-4">
            {isLoading || isFetching ? (
              Array.from({ length: 10 }).map((_, index) => (
                <CardLoader key={index} />
              ))
            ) : depositsData?.data?.length === 0 ? (
              <div className="flex flex-col items-center justify-center mt-36 text-muted-foreground">
                <Package2 className="size-16" />
                <p>No Data Found.</p>
              </div>
            ) : (
              depositsData?.data?.records.map((item: TTransaction) => (
                <Card key={item.id} payload={item} />
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="success">
          <div className="space-y-4">
            {isLoading || isFetching ? (
              Array.from({ length: 10 }).map((_, index) => (
                <CardLoader key={index} />
              ))
            ) : depositsData?.data?.length === 0 ? (
              <div className="flex flex-col items-center justify-center mt-36 text-muted-foreground">
                <Package2 className="size-16" />
                <p>No Data Found.</p>
              </div>
            ) : (
              depositsData?.data?.records.map((item: TTransaction) => (
                <Card key={item.id} payload={item} />
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

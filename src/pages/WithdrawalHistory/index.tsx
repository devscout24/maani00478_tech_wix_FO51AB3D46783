import { useNavigate } from "react-router";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import CreditIcon from "@/assets/icons/credit-card-solid-rounded 1.svg?react";
import { Badge } from "@/components/ui/badge";
import assets from "@/assets";
import { Button } from "@/components/ui/button";
import { useWithdrawalRecordsQuery } from "@/redux/api/endpoints/withdrawal.api";

type TTransaction = {
  id: number;
  username: string;
  status: string;
  amount: number;
  created_at: string;
};

export default function WithdrawalHistory() {
  const navigate = useNavigate();

  const {
    data: depositsData,
    isLoading,
    isFetching,
    error,
    isError,
  } = useWithdrawalRecordsQuery({});

  const depositsError =
    error && "data" in error ? (error.data as { message: string }) : undefined;

  if (isLoading || isFetching) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

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

      <div>
        <h4 className="font-semibold">All Transactions</h4>
        <div className="space-y-4 mt-2">
          {depositsData?.data?.records.map((item: TTransaction) => (
            <div
              key={item.id}
              className="p-2.5 bg-muted flex items-center gap-4 rounded-xl"
            >
              <div className="p-4 bg-white rounded-full">
                <CreditIcon className="size-6 text-primary" />
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="space-y-2.5">
                  <h4 className="font-semibold">{item.username}</h4>
                  <p className="text-xs text-muted-foreground">
                    {/* <span>{item.date}</span>{" "} */}
                    <span>{item.created_at}</span>
                  </p>
                </div>

                <div className="flex flex-col space-y-2.5">
                  <Badge className="ml-auto">{item.status}</Badge>
                  <h2 className="text-xl font-semibold">{item.amount}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

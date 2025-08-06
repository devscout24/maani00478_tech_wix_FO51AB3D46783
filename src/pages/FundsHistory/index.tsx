import { useNavigate } from "react-router";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import CreditIcon from "@/assets/icons/credit-card-solid-rounded 1.svg?react";
import { Badge } from "@/components/ui/badge";

export default function FundsHistory() {
  const navigate = useNavigate();
  const allTransactions = [
    {
      id: 1,
      username: "Zara14",
      status: "Successful",
      date: "Mar 30",
      time: "20:00",
      currency: "USDC",
      amount: 4324.41,
    },
    {
      id: 2,
      username: "Zara14",
      status: "Pending",
      date: "Apr 01",
      time: "18:30",
      currency: "USDC",
      amount: 1250.0,
    },
    {
      id: 3,
      username: "Zara14",
      status: "Failed",
      date: "Apr 02",
      time: "19:15",
      currency: "USDC",
      amount: 0.0,
    },
    {
      id: 4,
      username: "Zara14",
      status: "Successful",
      date: "Apr 03",
      time: "17:45",
      currency: "USDC",
      amount: 3750.8,
    },
    {
      id: 5,
      username: "Zara14",
      status: "Successful",
      date: "Apr 04",
      time: "16:10",
      currency: "USDC",
      amount: 5100.5,
    },
    {
      id: 6,
      username: "Zara14",
      status: "Successful",
      date: "Mar 28",
      time: "14:20",
      currency: "USDC",
      amount: 2150.0,
    },
    {
      id: 7,
      username: "Zara14",
      status: "Failed",
      date: "Mar 29",
      time: "09:45",
      currency: "USDC",
      amount: 0.0,
    },
    {
      id: 8,
      username: "Zara14",
      status: "Successful",
      date: "Apr 05",
      time: "12:30",
      currency: "USDC",
      amount: 6200.75,
    },
    {
      id: 9,
      username: "Zara14",
      status: "Pending",
      date: "Apr 06",
      time: "21:15",
      currency: "USDC",
      amount: 800.25,
    },
    {
      id: 10,
      username: "Zara14",
      status: "Successful",
      date: "Apr 07",
      time: "11:50",
      currency: "USDC",
      amount: 4500.0,
    },
  ];

  return (
    <section className="p-4 space-y-6">
      <div className="flex items-center">
        <ArrowLeftIcon
          className="size-8"
          onClick={() => navigate("/deposit")}
        />
        <h4 className="w-full text-[.8rem] font-semibold text-center">
          Funds History
        </h4>
      </div>

      <div className="w-full rounded-xl p-4 bg-muted space-y-4">
        <p className="text-muted-foreground text-xs">Total Added This Month</p>
        <h4 className="text-2xl font-semibold">USDC 4,324.41</h4>
      </div>

      <div>
        <h4 className="font-semibold">All Transactions</h4>
        <div className="space-y-4 mt-2">
          {allTransactions.map((item) => (
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
                    <span>{item.date}</span>{" "}
                    <span className="ml-2">{item.time}</span>
                  </p>
                </div>

                <div className="flex flex-col space-y-2.5">
                  <Badge className="ml-auto">{item.status}</Badge>
                  <h2 className="text-xl font-semibold">
                    {item.currency} {item.amount}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import TransactionIcon from "@/assets/icons/transaction-history-stroke-standard 1.svg?react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import WithdrawalMethod from "./components/WithdrawalMethod";
import { toast } from "sonner";
import { useWithdrawalRequestMutation } from "@/redux/api/endpoints/withdrawal.api";
import BalanceCard from "@/components/BalanceCard";

export default function Withdrawal() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);
  const withdrawPasswordRef = useRef<HTMLInputElement>(null);

  const [makeDeal, { isLoading, isSuccess }] = useWithdrawalRequestMutation();

  const handleMakeDeal = async () => {
    if (
      amount > 0 &&
      withdrawPasswordRef.current &&
      withdrawPasswordRef.current.value
    ) {
      try {
        const res = await makeDeal({
          amount,
          withdrawal_password: withdrawPasswordRef.current.value,
        }).unwrap();

        toast.success(res.message);
      } catch (error) {
        toast.error(
          (error as { data?: { message?: string } })?.data?.message ||
            "Something went wrong."
        );
      }
    } else {
      toast.error("Please fill all the fields.");
    }
  };

  // Handle input change
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setAmount(value);
  };

  return (
    <section className="p-4 space-y-4">
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
          Withdrawal
        </h4>
        <TransactionIcon
          className="size-8"
          onClick={() => navigate("/withdrawal-history")}
        />
      </div>

      <BalanceCard />

      <WithdrawalMethod />

      <div className="space-y-2 mt-8">
        <Label className="font-semibold">Withdrawal Amount</Label>
        <Input
          placeholder="USDC 0.00"
          value={amount > 0 ? amount.toString() : ""}
          onChange={handleAmountChange}
          type="number"
        />
      </div>

      <div className="space-y-4 mt-8">
        <p className="text-accent-foreground text-center">OR QUICK ACTION</p>
        <div className="grid grid-cols-3 gap-4">
          {[50, 100, 600, 900, 800, 700].map((n) => (
            <Button
              key={n}
              className="p-6 border rounded-xl border-border bg-transparent text-muted-foreground font-semibold hover:bg-primary/30"
              onClick={() => setAmount(n)}
            >
              {n}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2 mt-8">
        <Label className="font-semibold">Withdrawal Password</Label>
        <Input
          placeholder="Password"
          type="password"
          ref={withdrawPasswordRef}
        />
      </div>

      <div>
        <Button
          className="w-full"
          disabled={isLoading || isSuccess}
          onClick={handleMakeDeal}
        >
          Confirm
        </Button>
      </div>
    </section>
  );
}

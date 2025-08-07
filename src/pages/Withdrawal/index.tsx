import assets from "@/assets";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import CopyIcon from "@/assets/icons/copy-01-stroke-rounded 1.svg?react";
import Logo from "@/assets/svgs/logo.svg?react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Withdrawal() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(0);

  return (
    <section className="p-4 space-y-4">
      <div className="flex items-center">
        <ArrowLeftIcon className="size-8" onClick={() => navigate("/")} />
        <h4 className="w-full text-[.8rem] font-semibold text-center">
          Withdrawal
        </h4>
      </div>

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
            <p className="text-xl font-semibold">USDC 12,000</p>
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-8">
        <h4 className="font-semibold">Withdrawal Method</h4>
        <div className="bg-accent px-6 py-4 rounded-xl">
          <div className="font-semibold flex items-center justify-between text-muted-foreground">
            {["Zara14", "USDT", "TRC20"].map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <Input className="bg-white" />
            <Button size="icon" variant="ghost" className="p-0">
              <CopyIcon className="text-muted-foreground size-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-8">
        <Label className="font-semibold">Withdrawal Amount</Label>
        <Input
          placeholder="USDC 0.00"
          defaultValue={amount !== 0 ? amount : undefined}
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
        <Input placeholder="Password" type="password" />
      </div>

      <div>
        <Button className="w-full">Confirm</Button>
      </div>
    </section>
  );
}

import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { useNavigate } from "react-router";
import Logo from "@/assets/svgs/logo.svg?react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function WalletInfo() {
  const navigate = useNavigate();
  return (
    <section className="p-4 space-y-4">
      <div className="flex items-center">
        <ArrowLeftIcon className="size-8" onClick={() => navigate("/")} />
        <h4 className="w-full text-[.8rem] font-semibold text-center">
          Add Wallet
        </h4>
      </div>

      <div className="w-full bg-white rounded-t-2xl">
        <Logo className="w-[10rem] h-[2rem] text-primary" />
        <h2 className="text-xl font-bold mt-6">Link Wallet</h2>
        <p className="text-xs text-muted-foreground">
          Link your crypto wallet to make withdrawal easier
        </p>
      </div>

      <div>
        <div className="space-y-2 mt-8">
          <Label>Full Name</Label>
          <Input placeholder="Full Name" />
        </div>

        <div className="space-y-2 mt-8">
          <Label>Wallet Address</Label>
          <Input placeholder="Wallet Address" />
        </div>

        <div className="space-y-2 mt-8">
          <Label>Phone Number</Label>
          <Input placeholder="Phone Number" />
        </div>

        <div className="space-y-2.5 mt-8">
          <Label>Currency</Label>
          <RadioGroup
            defaultValue="USDT"
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value="USDT" id="r1" />
              <Label htmlFor="r1">USDT</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="USDC" id="r2" />
              <Label htmlFor="r2">USDC</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="ETH" id="r3" />
              <Label htmlFor="r3">ETH</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="BTC" id="r3" />
              <Label htmlFor="r3">BTC</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2 mt-8">
          <Label>Network</Label>
          <RadioGroup
            defaultValue="TRC20"
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value="TRC20" id="t1" />
              <Label htmlFor="t1">TRC20</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="ERC20" id="t2" />
              <Label htmlFor="t2">ERC20</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="Bitcoin" id="t3" />
              <Label htmlFor="t3">Bitcoin</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <Button className="w-full mt-4">Add Method</Button>
    </section>
  );
}

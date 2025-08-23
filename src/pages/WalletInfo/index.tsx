import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { useNavigate } from "react-router";
import Logo from "@/assets/svgs/logo.svg?react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useStoreWalletInfoMutation } from "@/redux/api/endpoints/wallet.api";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  receipt_address: z.string().min(8),
  cryptocurrency: z.string(),
  network: z.string(),
  phone: z.string(),
});

export default function WalletInfo() {
  const navigate = useNavigate();
  const [storeWalletInfo, { isLoading }] = useStoreWalletInfoMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      receipt_address: "",
      cryptocurrency: "",
      network: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await storeWalletInfo(values).unwrap();
      console.log("res", res);
      toast.success(res.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  }

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

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="receipt_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wallet Address</FormLabel>
                <FormControl>
                  <Input placeholder="Wallet Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cryptocurrency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Currency</FormLabel>
                <FormControl>
                  <RadioGroup
                    defaultValue="USDT"
                    className="flex items-center justify-between"
                    {...field}
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
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="network"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Network</FormLabel>
                <FormControl>
                  <RadioGroup
                    defaultValue="TRC20"
                    className="flex items-center justify-between"
                    {...field}
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
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-4" disabled={isLoading}>
            Add Method
          </Button>
        </form>
      </Form>
    </section>
  );
}

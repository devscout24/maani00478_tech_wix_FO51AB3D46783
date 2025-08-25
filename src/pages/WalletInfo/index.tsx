import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { useNavigate } from "react-router";
import Logo from "@/assets/svgs/logo.svg?react";
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
      toast.success(res.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  }

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
              <FormItem className="space-y-3">
                <FormLabel>Currency</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex justify-between items-center"
                  >
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="USDT" />
                      </FormControl>
                      <FormLabel className="font-normal">USDT</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="USDC" />
                      </FormControl>
                      <FormLabel className="font-normal">USDC</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="ETH" />
                      </FormControl>
                      <FormLabel className="font-normal">ETH</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="BTC" />
                      </FormControl>
                      <FormLabel className="font-normal">BTC</FormLabel>
                    </FormItem>
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
              <FormItem className="space-y-3">
                <FormLabel>Network</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex justify-between items-center"
                  >
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="TRC20" />
                      </FormControl>
                      <FormLabel className="font-normal">TRC20</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="ERC20" />
                      </FormControl>
                      <FormLabel className="font-normal">ERC20</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="Bitcoin" />
                      </FormControl>
                      <FormLabel className="font-normal">Bitcoin</FormLabel>
                    </FormItem>
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

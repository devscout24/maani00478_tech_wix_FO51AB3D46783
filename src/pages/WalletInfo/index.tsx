import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { useNavigate } from "react-router";
import Logo from "@/assets/svgs/logo.svg?react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useGetWalletInfoQuery,
  useStoreWalletInfoMutation,
} from "@/redux/api/endpoints/wallet.api";
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
import { useEffect } from "react";

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
  const {
    data: walletInfo,
    isLoading: walletInfoLoading,
    isFetching: walletInfoFetching,
  } = useGetWalletInfoQuery({});

  console.log("walletInfo", walletInfo);

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

  // Set form values when walletInfo data is available
  useEffect(() => {
    if (walletInfo?.data) {
      form.setValue("name", walletInfo.data.name || "");
      form.setValue("receipt_address", walletInfo.data.receipt_address || "");
      form.setValue("cryptocurrency", walletInfo.data.cryptocurrency || "");
      form.setValue("network", walletInfo.data.network || "");
      form.setValue("phone", walletInfo.data.phone || "");
    }
  }, [walletInfo, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await storeWalletInfo(values).unwrap();
      toast.success(res.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  }

  const hasWalletData =
    walletInfo?.data && Object.keys(walletInfo.data).length > 0;
  const isLoadingData = walletInfoFetching || walletInfoLoading;

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
        <h4 className="w-full text-[.8rem] font-semibold text-center -ml-10">
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
                  {isLoadingData ? (
                    <Skeleton className="h-10 w-full" />
                  ) : (
                    <Input
                      placeholder="Full Name"
                      {...field}
                      disabled={hasWalletData}
                    />
                  )}
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
                  {isLoadingData ? (
                    <Skeleton className="h-10 w-full" />
                  ) : (
                    <Input
                      placeholder="Wallet Address"
                      {...field}
                      disabled={hasWalletData}
                    />
                  )}
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
                  {isLoadingData ? (
                    <Skeleton className="h-10 w-full" />
                  ) : (
                    <Input
                      placeholder="Phone Number"
                      {...field}
                      disabled={hasWalletData}
                    />
                  )}
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
                  {isLoadingData ? (
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-16" />
                    </div>
                  ) : (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex justify-between items-center"
                      disabled={hasWalletData}
                    >
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem
                            value="USDT"
                            disabled={hasWalletData}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">USDT</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem
                            value="USDC"
                            disabled={hasWalletData}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">USDC</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem
                            value="ETH"
                            disabled={hasWalletData}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">ETH</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem
                            value="BTC"
                            disabled={hasWalletData}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">BTC</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  )}
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
                  {isLoadingData ? (
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                  ) : (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex justify-between items-center"
                      disabled={hasWalletData}
                    >
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem
                            value="TRC20"
                            disabled={hasWalletData}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">TRC20</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem
                            value="ERC20"
                            disabled={hasWalletData}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">ERC20</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem
                            value="Bitcoin"
                            disabled={hasWalletData}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">Bitcoin</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isLoadingData ? (
            <Skeleton className="h-10 w-full" />
          ) : (
            <Button
              type="submit"
              className="w-full mt-4"
              disabled={isLoading || hasWalletData}
            >
              {hasWalletData ? "Wallet Already Added" : "Add Method"}
            </Button>
          )}
        </form>
      </Form>
    </section>
  );
}

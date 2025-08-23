import { useNavigate } from "react-router";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import MoneyIcon from "@/assets/icons/money-03-solid-rounded 1.svg?react";
import SaveMoneyIcon from "@/assets/icons/save-money-dollar-solid-sharp 1.svg?react";
import StarIcon from "@/assets/icons/star-solid-standard 1.svg?react";
import ArrowIcon from "@/assets/icons/arrow-right-01-stroke-sharp 1.svg?react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useReserveJourneyPackageQuery } from "@/redux/api/endpoints/package.api";
import assets from "@/assets";

type TPackage = {
  id: number;
  title: string;
  image: string;
  price: number;
  commission: number;
  duration: number;
};

export default function SubmitReview() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [review, setReview] = useState<string | null>(null);

  const { data, error, isLoading, isFetching, isError } =
    useReserveJourneyPackageQuery({});
  const packageData: TPackage = data?.data;
  const packageError =
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
        <p className="font-semibold">{packageError?.message}</p>
        <Button className="mt-4" onClick={() => window.history.back()}>
          Back to Previous
        </Button>
      </div>
    );
  }

  console.log("packageData", packageData);

  return (
    <section>
      <div
        className={`h-[26.5rem] bg-[url('/6325f1608554d61735ca3a8c60436e4b5f7424f11.png')] bg-cover bg-center flex flex-col`}
      >
        {/* <img src={packageData?.image} alt="banner" /> */}
        <div className="p-4 text-white">
          <ArrowLeftIcon
            className="size-8"
            onClick={() => navigate("/data-optimization")}
          />
        </div>
        <div className="w-full h-5 bg-white rounded-t-2xl mt-auto" />
      </div>

      <div className="p-4">
        <p className="w-fit ml-auto text-primary font-semibold -mt-6">
          USDC {packageData?.price}
        </p>

        <h4 className="text-xl font-semibold">{packageData?.title}</h4>
      </div>

      <div className="flex items-center gap-4 p-4">
        <div className="w-full bg-muted p-4 rounded-xl space-y-2">
          <MoneyIcon className="size-6 text-primary" />
          <p className="text-xs text-muted-foreground">Total Price</p>
          <p className="font-semibold">USDC {packageData?.price}</p>
        </div>

        <div className="w-full bg-muted p-4 rounded-xl space-y-2">
          <SaveMoneyIcon className="size-6 text-primary" />
          <p className="text-xs text-muted-foreground">Commissions</p>
          <p className="font-semibold">USDC {packageData?.commission}</p>
        </div>
      </div>

      <div className="p-4 flex items-center justify-between">
        <p className="font-semibold">Rating</p>
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="text-primary" />
          ))}
        </div>
      </div>

      <div className="p-4">
        <p className="font-semibold mb-2">Give Comment</p>
        <Collapsible className="bg-muted rounded-xl">
          <CollapsibleTrigger className="w-full" onClick={() => setOpen(!open)}>
            <div className="w-full flex items-center justify-between p-2">
              <p>Comment Good Reviews</p>
              <ArrowIcon
                className={cn(
                  "size-8 cursor-pointer duration-500",
                  open ? "rotate-180" : "rotate-0"
                )}
                onClick={() => setOpen(!open)}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4">
            <div className={cn("space-y-4", review ? "hidden" : "block")}>
              {[
                "Nice Service..!",
                "Apprised Your Service.",
                "Super helpful and easy to use. Loved the interface!",
                "Exactly what I was looking for. Works perfectly",
                "Very user-friendly. Highly recommend this app!",
                "Excellent features and clean design. Keep it up!",
              ].map((item) => (
                <div
                  key={item}
                  className="text-[0.875rem] p-2 bg-accent hover:bg-accent/50 rounded-xl cursor-pointer"
                  onClick={() => setReview(item)}
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              className={cn(
                "text-[0.875rem] p-2 bg-accent hover:bg-accent/50 rounded-xl cursor-pointer",
                review ? "block" : "hidden"
              )}
            >
              {review}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="p-4">
        <Button className="w-full">Submit</Button>
      </div>
    </section>
  );
}

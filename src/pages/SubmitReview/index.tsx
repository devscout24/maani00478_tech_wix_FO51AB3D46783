import { useNavigate } from "react-router";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import MoneyIcon from "@/assets/icons/money-03-solid-rounded 1.svg?react";
import SaveMoneyIcon from "@/assets/icons/save-money-dollar-solid-sharp 1.svg?react";
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
import Rating from "@/components/Rating";
import { toast } from "sonner";
import { useMakeDealMutation } from "@/redux/api/endpoints/order.api";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  const [rating, setRating] = useState<number>(0);

  const reviews = [
    "This package covered everything from flights to hotel and even daily tours, such a stress-free way to travel!",
    "I loved how affordable this package was compared to booking things separately. Totally worth it!",
    "The itinerary was perfectly planned, enough sightseeing but also enough free time to relax.",
    "Highly recommend this travel package for families! The kids enjoyed every activity.",
    "Our guide was amazing, very knowledgeable, and made the whole experience unforgettable.",
    "This was the smoothest trip I’ve ever had, airport pickup, hotel check-in, tours, everything was handled.",
    "Perfect for honeymooners! The romantic dinner and beach resort stay were highlights of the trip.",
    "I appreciated the comfortable transport and well-organized day trips. No stress, just fun.",
    "We got to see hidden gems we would never find on our own, such a unique experience!",
    "Excellent value for money. I’ll definitely book with this company again for my next vacation.",
  ];

  const { data, error, isLoading, isFetching, isError } =
    useReserveJourneyPackageQuery({});
  const packageData: TPackage = data?.data;
  const packageError =
    error && "data" in error ? (error.data as { message: string }) : undefined;

  const [
    makeDeal,
    { isLoading: isMakingDealLoading, isError: isDealError, error: dealError },
  ] = useMakeDealMutation();

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

  const handleSubmit = async () => {
    if (!review || rating === 0) {
      toast.error("Please give a review and rating.");
      return;
    }

    try {
      const res = await makeDeal({
        package_id: packageData?.id,
        review,
        rating,
      }).unwrap();

      if (isDealError) {
        toast.error(
          (res &&
            "data" in res &&
            (res.data as { message?: string })?.message) ||
            "Something went wrong."
        );
        return;
      }
      toast.success(res?.message);
      navigate("/data-optimization");
    } catch {
      toast.error(
        (dealError &&
          "data" in dealError &&
          (dealError.data as { message?: string })?.message) ||
          "Something went wrong."
      );
    }
  };

  return (
    <section className="relative">
      <div
        // className={`h-[26.5rem] bg-[url('/6325f1608554d61735ca3a8c60436e4b5f7424f11.png')] bg-cover bg-center flex flex-col`}
        className={`h-[26.5rem] flex flex-col relative`}
      >
        <div className="h-[30rem]">
          <img
            src={packageData?.image}
            alt="banner"
            className="w-full h-full bg-center bg-cover"
          />
        </div>
        <div className="p-4 text-white absolute">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full group"
            onClick={() => navigate("/data-optimization")}
          >
            <ArrowLeftIcon className="size-6 duration-500 group-hover:scale-125 group-hover:text-primary" />
          </Button>
        </div>
        <div className="w-full h-5 bg-white rounded-t-2xl mt-auto" />
      </div>

      <div className="bg-white absolute right-0 left-0 top-[22rem] rounded-t-3xl">
        <ScrollArea className="h-[calc(100vh-22rem)]">
          <div className="p-4">
            <p className="w-fit ml-auto text-primary font-semibold">
              USDC {packageData?.price.toFixed(2)}
            </p>

            <h4 className="text-xl font-semibold">{packageData?.title}</h4>
          </div>

          <div className="flex items-center gap-4 p-4">
            <div className="w-full bg-muted p-4 rounded-xl space-y-2">
              <MoneyIcon className="size-6 text-primary" />
              <p className="text-xs text-muted-foreground">Total Price</p>
              <p className="font-semibold">
                USDC {packageData?.price.toFixed(2)}
              </p>
            </div>

            <div className="w-full bg-muted p-4 rounded-xl space-y-2">
              <SaveMoneyIcon className="size-6 text-primary" />
              <p className="text-xs text-muted-foreground">Commissions</p>
              <p className="font-semibold">
                USDC {packageData?.commission.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between">
            <p className="font-semibold">Rating</p>
            <div className="flex items-center gap-2">
              <Rating rating={rating} setRating={setRating} />
            </div>
          </div>

          <div className="p-4">
            <p className="font-semibold mb-2">Give Comment</p>
            <Collapsible className="bg-muted rounded-xl">
              <CollapsibleTrigger
                className="w-full"
                onClick={() => setOpen(!open)}
              >
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
                  {reviews.map((item) => (
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
            <Button
              className="w-full"
              onClick={handleSubmit}
              disabled={!review || !rating || isMakingDealLoading}
            >
              Submit
            </Button>
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}

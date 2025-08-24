import assets from "@/assets";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import MoneyIcon from "@/assets/icons/money-03-solid-rounded 1.svg?react";
import SaveMoneyIcon from "@/assets/icons/save-money-dollar-solid-sharp 1.svg?react";
import { useState } from "react";

export type TDealingCard = {
  id: number;
  deal_id: string;
  package_id: number;
  deal_number: number;
  amount: string;
  user_commision: string;
  status: "pending" | "completed";
  package_title: string;
  package_duration: number;
  package_price: number;
  package_image: string;
};

export default function DealingCard({
  payload,
  isLoading = false,
}: {
  payload?: TDealingCard;
  isLoading?: boolean;
}) {
  const {
    amount,
    user_commision,
    package_image,
    package_title,
    package_duration,
    package_price,
    status,
  } = payload || {};

  // State to track if image failed to load
  const [imageError, setImageError] = useState(false);

  // Function to handle image loading errors
  const handleImageError = () => {
    setImageError(true);
  };

  if (isLoading) {
    return (
      <section>
        <Card className="p-0 border-0 overflow-hidden shadow-xl">
          <div className="relative">
            <Skeleton className="w-full min-h-[15rem]" />
            <div className="w-full flex items-end justify-between p-4 absolute bottom-0">
              <Skeleton className="h-6 w-20 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-12 ml-auto" />
                <Skeleton className="h-4 w-16 ml-auto" />
              </div>
            </div>
          </div>
          <CardContent className="pb-2.5 px-2.5 space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-20" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-full bg-muted p-4 rounded-xl space-y-2">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-4 w-20" />
              </div>

              <div className="w-full bg-muted p-4 rounded-xl space-y-2">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section>
      <Card className="p-0 border-0 overflow-hidden shadow-xl">
        <div className="relative">
          <img
            src={
              imageError || !package_image
                ? assets.image.Default
                : package_image
            }
            alt="banner"
            className="w-full min-h-[15rem]"
            onError={handleImageError}
          />
          <div className="w-full flex items-end justify-between p-4 absolute bottom-0">
            <Badge
              variant={status === "pending" ? "inProcess" : "complete"}
              className="uppercase"
            >
              {status}
            </Badge>
          </div>
        </div>
        <CardContent className="pb-2.5 px-2.5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">{package_title}</h3>
              <p className="text-accent-foreground">{package_duration} days</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-accent-foreground text-end">
                Price
              </p>
              <p className="font-semibold text-end">USDC {amount}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-full bg-muted p-4 rounded-xl space-y-2">
              <MoneyIcon className="size-6 text-primary" />
              <p className="text-xs text-muted-foreground">Total Price</p>
              <p className="font-semibold">USDC {package_price}</p>
            </div>

            <div className="w-full bg-muted p-4 rounded-xl space-y-2">
              <SaveMoneyIcon className="size-6 text-primary" />
              <p className="text-xs text-muted-foreground">Commissions</p>
              <p className="font-semibold">USDC {user_commision}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

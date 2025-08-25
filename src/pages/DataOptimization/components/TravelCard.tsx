import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import StarIcon from "@/assets/icons/star-solid-standard 1.svg?react";
import FrameIcon from "@/assets/svgs/Frame.svg?react";
import assets from "@/assets";
import { useState } from "react";

export type TTravelCard = {
  id: number;
  title: string;
  duration: string;
  rating?: number;
  reviews?: string;
  description: string;
  price: number;
  image: string;
};

export default function TravelCard({
  payload,
  isLoading = false,
}: {
  payload?: TTravelCard;
  isLoading?: boolean;
}) {
  // Extract properties from payload only if it exists
  const {
    title,
    duration,
    rating = 5,
    reviews = 204,
    description,
    price,
    image,
  } = payload || {};
  // State to track if image failed to load
  const [imageError, setImageError] = useState(false);

  // Function to handle image loading errors
  const handleImageError = () => {
    setImageError(true);
  };

  if (isLoading) {
    return (
      <Card className="p-0 border-0 overflow-hidden shadow-xl relative">
        <div className="absolute right-6 p-2 rounded-b-xl bg-white/50 ">
          <Skeleton className="size-10 rounded-full" />
        </div>
        <Skeleton className="w-full h-72" />
        <CardContent className="pb-4 space-y-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-3/4" />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="w-4 h-4 rounded-full" />
              ))}
            </div>
            <Skeleton className="h-4 w-10" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-6 w-20" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="p-0 border-0 overflow-hidden shadow-xl relative">
      <div className="absolute right-6 p-2 rounded-b-xl bg-white/50 ">
        <FrameIcon className="size-10" />
      </div>
      <img
        src={imageError || !image ? assets.image.Default : image}
        alt="banner"
        className="w-full h-72"
        onError={handleImageError}
      />
      <CardContent className="pb-4 space-y-1">
        {duration && (
          <p className="text-accent-foreground">{duration} Days Tours</p>
        )}
        {title && <h3 className="text-xl font-semibold">{title}</h3>}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <StarIcon key={i} className="text-primary" />
            ))}
          </div>
          {reviews && <p>{reviews}</p>}
        </div>
        <div className="flex items-center justify-between">
          {description && (
            <p className="text-accent-foreground line-clamp-1 text-[0.75rem]">
              {description}
            </p>
          )}
          {price && (
            <p className="text-primary font-semibold flex items-center">
              USDC <span className="ml-2">{price.toFixed(2)}</span>
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

import { useNavigate } from "react-router";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import TaskOneIcon from "@/assets/icons/task-01-solid-standard 1.svg?react";
import TaskTwoIcon from "@/assets/icons/task-done-01-solid-standard 1.svg?react";
import StarIcon from "@/assets/icons/star-solid-standard 1.svg?react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import assets from "@/assets";

export default function DataOptimization() {
  const navigate = useNavigate();
  const mockData = [
    {
      id: 1,
      title: "8 Days Tours",
      subtitle: "Hanoi Tour Package",
      rating: 5,
      reviews: "201 Reviews",
      description: "Fully Inclusive of Tour & Flights",
      price: 6990,
    },
    {
      id: 2,
      title: "7 Days Tours",
      subtitle: "Da Nang Adventure",
      rating: 5,
      reviews: "178 Reviews",
      description: "All-Inclusive Package with Flights",
      price: 6490,
    },
    {
      id: 3,
      title: "10 Days Tours",
      subtitle: "Saigon Explorer",
      rating: 4,
      reviews: "145 Reviews",
      description: "Tour, Flights & Accommodation Included",
      price: 7890,
    },
    {
      id: 4,
      title: "5 Days Tours",
      subtitle: "Halong Bay Cruise",
      rating: 5,
      reviews: "232 Reviews",
      description: "Luxury Cruise & Flights Package",
      price: 5490,
    },
    {
      id: 5,
      title: "6 Days Tours",
      subtitle: "Sapa Trekking Tour",
      rating: 4,
      reviews: "112 Reviews",
      description: "All-Inclusive Mountain Adventure",
      price: 5990,
    },
    {
      id: 6,
      title: "9 Days Tours",
      subtitle: "Vietnam Heritage Tour",
      rating: 5,
      reviews: "189 Reviews",
      description: "Cultural Tour with Flight Options",
      price: 7290,
    },
    {
      id: 7,
      title: "12 Days Tours",
      subtitle: "Vietnam Grand Tour",
      rating: 4,
      reviews: "97 Reviews",
      description: "Comprehensive Country Exploration",
      price: 8990,
    },
    {
      id: 8,
      title: "4 Days Tours",
      subtitle: "Ninh Binh Escape",
      rating: 5,
      reviews: "156 Reviews",
      description: "Short Getaway with Flights Included",
      price: 4490,
    },
    {
      id: 9,
      title: "14 Days Tours",
      subtitle: "Vietnam & Cambodia Tour",
      rating: 4,
      reviews: "84 Reviews",
      description: "Two Country Adventure Package",
      price: 10990,
    },
    {
      id: 10,
      title: "5 Days Tours",
      subtitle: "Phu Quoc Island Retreat",
      rating: 5,
      reviews: "203 Reviews",
      description: "Beach Vacation with Flights",
      price: 5790,
    },
  ];

  type TTravelCard = {
    title: string;
    subtitle: string;
    rating: number;
    reviews: string;
    description: string;
    price: number;
  };
  const TravelCard = ({
    title,
    subtitle,
    rating,
    reviews,
    description,
    price,
  }: TTravelCard) => (
    <Card className="p-0 border-0 overflow-hidden shadow-xl">
      <img src={assets.image.BannerTwo} alt="banner" className="w-full" />
      <CardContent className="pb-4 space-y-1">
        <p className="text-accent-foreground">{title}</p>
        <h3 className="text-xl font-semibold">{subtitle}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <StarIcon key={i} className="text-primary" />
            ))}
          </div>
          <p>{reviews}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-accent-foreground line-clamp-1 text-[0.75rem]">
            {description}
          </p>
          <p className="text-primary font-semibold flex items-center">
            USDC <p className="ml-2">{price.toFixed(2)}</p>
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section>
      <div className="bg-[url(src/assets/images/5ddf0e72cdce0348d1fe9ef0089661f4adb9c140.png)]">
        <div className="p-4">
          <div className="flex items-center text-white">
            <ArrowLeftIcon className="size-8" onClick={() => navigate("/")} />
            <h4 className="w-full text-[.8rem] font-semibold text-center">
              Data Optimization
            </h4>
          </div>
        </div>

        <div className="p-4 text-white flex items-center justify-around">
          <div className="text-center">
            <h4 className="text-[.8rem] font-semibold">Account Balance</h4>
            <h2 className="text-2xl font-semibold">USDC</h2>
            <h2 className="text-2xl font-semibold">0.00</h2>
          </div>

          <hr className="bg-white/35 w-[1px] h-[7.125rem]" />

          <div className="text-center">
            <h4 className="text-[.8rem] font-semibold">Commission</h4>
            <h2 className="text-2xl font-semibold">USDC</h2>
            <h2 className="text-2xl font-semibold">467.05</h2>
          </div>
        </div>

        <div className="p-4 text-white space-y-2">
          <div className="flex items-center justify-between">
            <p>Current Progress</p>
            <p>20/45</p>
          </div>
          <Progress value={55} />
        </div>

        <div className="p-4 w-full flex items-center gap-4">
          <div className="flex-1 bg-white p-4 rounded-2xl space-y-2">
            <div className="w-fit p-4 rounded-full bg-primary/35 text-primary">
              <TaskOneIcon className="size-6" />
            </div>
            <p>Total Journey</p>
            <p className="font-semibold">45</p>
          </div>

          <div className="flex-1 bg-white p-4 rounded-2xl space-y-2">
            <div className="w-fit p-4 rounded-full bg-primary/35 text-primary">
              <TaskTwoIcon className="size-6" />
            </div>
            <p>Visited Journey</p>
            <p className="font-semibold">40</p>
          </div>
        </div>

        <div className="p-4">
          <Button className="w-full">Reserve Journey</Button>
        </div>

        <div className="w-full h-5 bg-white rounded-t-2xl" />
      </div>

      <div className="w-full p-4">
        <h4 className="font-semibold">Trending Destination</h4>
        <p>Discover tours that is overwhelming by tourist</p>

        <div className="space-y-6 mt-4">
          {mockData.map((item) => (
            <TravelCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              rating={item.rating}
              reviews={item.reviews}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import assets from "@/assets";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import MoneyIcon from "@/assets/icons/money-03-solid-rounded 1.svg?react";
import SaveMoneyIcon from "@/assets/icons/save-money-dollar-solid-sharp 1.svg?react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router";

export default function DealingRecord() {
  const navigate = useNavigate();

  return (
    <section className="p-4 space-y-8">
      <div>
        <div className="flex items-center">
          <ArrowLeftIcon className="size-8" onClick={() => navigate("/")} />
          <h4 className="w-full text-[.8rem] font-semibold text-center">
            Dealing Record
          </h4>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-4">
            {[...Array(10)].map((_, i) => (
              <Card key={i} className="p-0 border-0 overflow-hidden shadow-xl">
                <div className="relative">
                  <img
                    src={assets.image.BannerTwo}
                    alt="banner"
                    className="w-full h-[10rem]"
                  />
                  <div className="w-full flex items-end justify-between p-4 absolute top-24">
                    <Badge>Complete</Badge>
                    <div className="text-white">
                      <p className="text-xs font-semibold text-end">Price</p>
                      <p className="font-semibold">USDC 6990.00</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pb-2.5 px-2.5 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Hanoi Tour Package
                    </h3>
                    <p className="text-accent-foreground">
                      2025-03-30 20:03:05
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-full bg-muted p-4 rounded-xl space-y-2">
                      <MoneyIcon className="size-6 text-primary" />
                      <p className="text-xs text-muted-foreground">
                        Total Price
                      </p>
                      <p className="font-semibold">USDC 6990.00</p>
                    </div>

                    <div className="w-full bg-muted p-4 rounded-xl space-y-2">
                      <SaveMoneyIcon className="size-6 text-primary" />
                      <p className="text-xs text-muted-foreground">
                        Commissions
                      </p>
                      <p className="font-semibold">USDC 6990.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <Card key={i} className="p-0 border-0 overflow-hidden shadow-xl">
                <div className="relative">
                  <img
                    src={assets.image.BannerTwo}
                    alt="banner"
                    className="w-full h-[10rem]"
                  />
                  <div className="w-full flex items-end justify-between p-4 absolute top-24">
                    <Badge>Complete</Badge>
                    <div className="text-white">
                      <p className="text-xs font-semibold text-end">Price</p>
                      <p className="font-semibold">USDC 6990.00</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pb-2.5 px-2.5 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Hanoi Tour Package
                    </h3>
                    <p className="text-accent-foreground">
                      2025-03-30 20:03:05
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-full bg-muted p-4 rounded-xl space-y-2">
                      <MoneyIcon className="size-6 text-primary" />
                      <p className="text-xs text-muted-foreground">
                        Total Price
                      </p>
                      <p className="font-semibold">USDC 6990.00</p>
                    </div>

                    <div className="w-full bg-muted p-4 rounded-xl space-y-2">
                      <SaveMoneyIcon className="size-6 text-primary" />
                      <p className="text-xs text-muted-foreground">
                        Commissions
                      </p>
                      <p className="font-semibold">USDC 6990.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="p-0 border-0 overflow-hidden shadow-xl">
                <div className="relative">
                  <img
                    src={assets.image.BannerTwo}
                    alt="banner"
                    className="w-full h-[10rem]"
                  />
                  <div className="w-full flex items-end justify-between p-4 absolute top-24">
                    <Badge>Complete</Badge>
                    <div className="text-white">
                      <p className="text-xs font-semibold text-end">Price</p>
                      <p className="font-semibold">USDC 6990.00</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pb-2.5 px-2.5 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Hanoi Tour Package
                    </h3>
                    <p className="text-accent-foreground">
                      2025-03-30 20:03:05
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-full bg-muted p-4 rounded-xl space-y-2">
                      <MoneyIcon className="size-6 text-primary" />
                      <p className="text-xs text-muted-foreground">
                        Total Price
                      </p>
                      <p className="font-semibold">USDC 6990.00</p>
                    </div>

                    <div className="w-full bg-muted p-4 rounded-xl space-y-2">
                      <SaveMoneyIcon className="size-6 text-primary" />
                      <p className="text-xs text-muted-foreground">
                        Commissions
                      </p>
                      <p className="font-semibold">USDC 6990.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

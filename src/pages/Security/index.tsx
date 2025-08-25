import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { useNavigate } from "react-router";
import Logo from "@/assets/svgs/logo.svg?react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Security() {
  const navigate = useNavigate();

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
          Security Center
        </h4>
      </div>

      <div className="w-full bg-white rounded-t-2xl">
        <Logo className="w-[10rem] h-[2rem] text-primary" />
        <h2 className="text-xl font-bold mt-6">Security Center</h2>
        <p className="text-xs text-muted-foreground">
          Securo your account with strong crooentiol
        </p>
      </div>

      <Tabs defaultValue="SecurityPIN">
        <TabsList>
          <TabsTrigger value="SecurityPIN" className="text-xs">
            Security PIN
          </TabsTrigger>
          <TabsTrigger value="WithdrawalPIN" className="text-xs">
            Withdrawal PIN
          </TabsTrigger>
        </TabsList>

        <TabsContent value="SecurityPIN">
          <div>
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input placeholder="Current Password" />
            </div>

            <div className="space-y-2 mt-4">
              <Label>New Password</Label>
              <Input placeholder="New Password" />
            </div>

            <div className="space-y-2 mt-4">
              <Label>Confirm New Password</Label>
              <Input placeholder="Confirm New Password" />
            </div>
          </div>

          <Button className="w-full mt-4">Confirm</Button>
        </TabsContent>

        <TabsContent value="WithdrawalPIN">
          <div>
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input placeholder="Current Password" />
            </div>

            <div className="space-y-2 mt-4">
              <Label>New Password</Label>
              <Input placeholder="New Password" />
            </div>

            <div className="space-y-2 mt-4">
              <Label>Confirm New Password</Label>
              <Input placeholder="Confirm New Password" />
            </div>
          </div>

          <Button className="w-full mt-4">Confirm</Button>
        </TabsContent>
      </Tabs>
    </section>
  );
}

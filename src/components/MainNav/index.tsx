import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { XIcon } from "lucide-react";
import { useState } from "react";
import { Separator } from "../ui/separator";
import Logo from "@/assets/svgs/logo.svg?react";
import MenuIcon from "@/assets/icons/menu-square-solid-standard 1.svg?react";
import UserIcon from "@/assets/icons/user-solid-rounded 1.svg?react";
import AnalyticsIcon from "@/assets/icons/analytics-up-solid-rounded 1.svg?react";
import MoneyExchangeIcon from "@/assets/icons/money-exchange-03-solid-standard 1.svg?react";
import MoneySendIcon from "@/assets/icons/money-send-01-solid-standard 1.svg?react";
import WalletIcon from "@/assets/icons/wallet-01-solid-standard 1.svg?react";
import InformationIcon from "@/assets/icons/information-circle-solid-rounded 1.svg?react";
import NoteIcon from "@/assets/icons/note-01-solid-standard 1.svg?react";
import UserGroupIcon from "@/assets/icons/user-group-solid-rounded 1.svg?react";
import HelpIcon from "@/assets/icons/help-circle-solid-standard 1.svg?react";
import SecurityCheckIcon from "@/assets/icons/security-check-solid-standard 1.svg?react";
import CustomerIcon from "@/assets/icons/customer-service-01-solid-standard 1.svg?react";
import LogoutIcon from "@/assets/icons/logout-03-solid-standard 1.svg?react";
import { Button } from "../ui/button";

export default function MainNav() {
  const [open, setOpen] = useState<boolean>(false);

  const navList = [
    {
      path: "/",
      title: "My Profile",
      icon: <UserIcon />,
    },
    {
      path: "/",
      title: "Data Optimizations",
      icon: <AnalyticsIcon />,
    },
    {
      path: "/",
      title: "Dealing Records",
      icon: <MoneyExchangeIcon />,
    },
    {
      path: "/",
      title: "Deposit",
      icon: <MoneySendIcon />,
    },
    {
      path: "/",
      title: "Withdrawal",
      icon: <MoneySendIcon />,
    },
    {
      path: "/",
      title: "Wallet Info",
      icon: <WalletIcon />,
    },
    {
      path: "/",
      title: "About Us",
      icon: <InformationIcon />,
    },
    {
      path: "/",
      title: "Term and Conditions",
      icon: <NoteIcon />,
    },
    {
      path: "/",
      title: "Agent Mode",
      icon: <UserGroupIcon />,
    },
    {
      path: "/",
      title: "FAQs",
      icon: <HelpIcon />,
    },
    {
      path: "/",
      title: "Security",
      icon: <SecurityCheckIcon />,
    },
    {
      path: "/",
      title: "Customer Service",
      icon: <CustomerIcon />,
    },
    {
      path: "/",
      title: "Logout Account",
      icon: <LogoutIcon />,
    },
  ];

  return (
    <nav className="w-full bg-primary flex items-center justify-between p-4 text-white">
      <Logo className="w-[8.375rem] h-[2rem]" />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <MenuIcon className="size-6" />
        </SheetTrigger>
        <SheetContent className="p-4">
          <SheetTitle className="text-2xl text-muted-foreground font-bold flex items-center justify-between">
            <h4>Menu</h4>
            <XIcon className="size-6" onClick={() => setOpen(!open)} />
          </SheetTitle>

          <Separator />

          <SheetDescription>
            {navList.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                className="w-full hover:bg-accent text-right"
              >
                <div className="w-full flex items-center gap-2 py-10">
                  {item.icon} {item.title}
                </div>
              </Button>
            ))}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

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
import { useNavigate } from "react-router";
import { useAppDispatch } from "@/redux/hooks";
import { removeUserInfo } from "@/redux/slices/authSlice";
import { useMemberLogoutMutation } from "@/redux/api/endpoints/auth.api";
import { toast } from "sonner";

export default function MainNav() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [logoutMember] = useMemberLogoutMutation();

  const navList = [
    {
      path: "/my-profile",
      title: "My Profile",
      icon: <UserIcon />,
    },
    {
      path: "/data-optimization",
      title: "Data Optimizations",
      icon: <AnalyticsIcon />,
    },
    {
      path: "/dealing-records",
      title: "Dealing Records",
      icon: <MoneyExchangeIcon />,
    },
    {
      path: "/deposit",
      title: "Deposit",
      icon: <MoneySendIcon />,
    },
    {
      path: "/withdrawal",
      title: "Withdrawal",
      icon: <MoneySendIcon />,
    },
    {
      path: "/wallet-info",
      title: "Wallet Info",
      icon: <WalletIcon />,
    },
    {
      path: "/about-us",
      title: "About Us",
      icon: <InformationIcon />,
    },
    {
      path: "/term-and-conditions",
      title: "Term and Conditions",
      icon: <NoteIcon />,
    },
    {
      path: "/agent-mode",
      title: "Agent Mode",
      icon: <UserGroupIcon />,
    },
    {
      path: "/faqs",
      title: "FAQs",
      icon: <HelpIcon />,
    },
    {
      path: "/security",
      title: "Security",
      icon: <SecurityCheckIcon />,
    },
    {
      path: "/customer-service",
      title: "Customer Service",
      icon: <CustomerIcon />,
    },
  ];

  const handelLogout = async () => {
    const res = await logoutMember({}).unwrap();
    toast.success(res.message);
    dispatch(removeUserInfo());
    navigate("/auth");
  };

  return (
    <nav className="w-full bg-primary flex items-center justify-between p-4 text-white">
      <Logo className="w-[8.375rem] h-[2rem]" />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:text-white"
            onClick={() => navigate("/")}
          >
            <MenuIcon className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-4">
          <SheetTitle className="text-2xl text-muted-foreground font-bold flex items-center justify-between">
            <span>Menu</span>
            <XIcon className="size-6" onClick={() => setOpen(!open)} />
          </SheetTitle>

          <Separator />

          <SheetDescription>
            {navList.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                className="w-full group hover:bg-accent text-right"
                onClick={() => navigate(item.path)}
              >
                <div className="w-full flex items-center gap-2 py-10 duration-500 group-hover:translate-x-6 group-hover:text-primary">
                  {item.icon} {item.title}
                </div>
              </Button>
            ))}
            <Button
              variant="ghost"
              className="w-full group hover:bg-accent text-right"
              onClick={handelLogout}
            >
              <div className="w-full flex items-center gap-2 py-10 duration-500 group-hover:translate-x-6 group-hover:text-primary">
                <LogoutIcon /> Logout Account
              </div>
            </Button>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

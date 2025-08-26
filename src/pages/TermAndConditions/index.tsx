import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function TermAndConditions() {
  const navigate = useNavigate();
  const mockData = [
    "All journey tasks must be completed before withdrawing or resetting your account.",
    "Only one account can be registered per phone number.",
    "Please don't re-bind the same wallet address to different account to reserve journey. We will freeze the following accounts if found.",
    "Please don't share your account password and withdrawal password to anyone. Our platform will not be held responsible for any losses caused.",
    "Legal action will be taken in the event of inappropriate use of the account.",
    "Kindly confirm the recharge address with customer service before transferring funds.",
    "If the deposit is made to the wrong deposit address, the platform will not take any responsibility.",
    "A balance of less than 100 USDT is not allowed to start journey tasks, members should ensure that they have a balance of 100 USDT before starting a journey tasks.",
    "Platform minimum recharge is 10 USDT, any amount less than 10 USDT will not be verified.",
    "Once member has started a journey tasks, it must be completed within 7 day, if not possible within 7 day, please inform customer service as soon as possible.",
    "Bank withdraw is only available for Expert member or above.",
  ];

  return (
    <section className="p-4 space-y-6">
      <div>
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
            Terms & Condition
          </h4>
        </div>
      </div>

      <div className="text-[0.875rem] space-y-6">
        {mockData.map((item, i) => (
          <p key={i}>
            {i + 1}. {item}
          </p>
        ))}
        <p>
          Dear member, kindly read carefully for our Rules Description, thank
          you for your cooperation.
        </p>
        <p className="text-center">
          Copyright © 2025 lastminute - All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

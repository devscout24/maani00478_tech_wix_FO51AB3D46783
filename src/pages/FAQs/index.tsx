import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { useNavigate } from "react-router";

export default function FAQs() {
  const navigate = useNavigate();

  return (
    <section className="p-4 space-y-6">
      <div>
        <div className="flex items-center">
          <ArrowLeftIcon className="size-8" onClick={() => navigate("/")} />
          <h4 className="w-full text-[.8rem] font-semibold text-center">
            Agent Mode
          </h4>
        </div>
      </div>

      <div className="text-[0.875rem] space-y-6">
        <p>
          Notice : Please DO NOT bind the same wallet info for different
          accounts, if it is detected by the system the account ID will be
          frozen.⚠️
        </p>

        <p>
          Personal multi-account acceptance data will lead to the suspension of
          the merchant's store, affecting the merchant's credibility and
          invalidating sales data. The platform prohibits the same bank card
          bound to multiple accounts, please DO NOT use individual
          multi-account, a card bound to multiple accounts, will all lead to
          funds freeze up to 180 days or account permanently blocked for future
          processing!
        </p>

        <p>
          The platform is designed to prevent people from maliciously laundering
          money or cashing out a number of inappropriate behaviors.
        </p>

        <p>Frequently Asked Questions (FAQ)</p>

        <p>1. Recharge Process</p>

        <p>
          To recharge, you only need to recharge from the home page. The
          following steps is the recharge
        </p>

        <p>A. Click on the "Deposit or Live Chat" button</p>

        <p>B. Contact the Live Chat to get the recharge details.</p>

        <p>
          C. After transferring the money according to the account provided by
          the platform's customer service, make sure to take a screenshot of the
          successful transfer to the account.
        </p>

        <p>
          D. To ensure that the recharge is made quickly, please make sure that
          the person's name or wallet address and the amount you are
          transferring is the same as the one provided. If you encounter any
          unsolvable problems during the recharge process, please contact the
          customer service recharge department in time. Due to the high amount
          of information, please make sure to confirm the account card number or
          wallet address of this platform carefully before recharging. The
          platform occasionally changes the account number.
        </p>

        <p>
          E. If you have any questions, please click on the platform's online
          customer service for a consultation.
        </p>

        <p>
          2. Start Of The Journey After completing your personal information.
          After you recharged your account, you may start reservation, click
          "Data Optimization" to redirect to the relevant page to "Reserve
          Journey". Patiently wait for the system to reserve an order, submit
          the order once submission pop up to complete the tasks. Complete
          35(Normal promoter) submissions per day to perform withdrawal.
        </p>

        <p>
          3. Withdrawal Before making a withdrawal, kindly bind your withdrawal
          information in the platform. Before proceed, the withdrawal agents
          must complete the 35(Normal promoter) submissions requirement. During
          the working hours of the platform, you can withdraw your money in home
          page's "Withdraw" interface. Click the "Withdrawal" button after
          entering the amount you want to withdraw and enter your withdraw
          password to withdraw. The specific arrival time is subject to the
          bank.
        </p>

        <p>
          4.Platform agent mode Platform users can become Platform Agents by
          referring new members and receive additional dynamic rewards. The
          reward is 23% of the daily commission for direct referrals.
        </p>

        <p>
          5. Submission Time The platform operates from 11:00 to 23:00 daily and
          users can accept data during the platform's operating hours.
        </p>

        <p>
          (Note: For any further clarification, kindly contact our Live Chat
          customer service.)
        </p>
      </div>
    </section>
  );
}

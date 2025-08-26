import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function AgentMode() {
  const navigate = useNavigate();

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
            Agent Mode
          </h4>
        </div>
      </div>

      <div className="text-[0.875rem] space-y-6">
        <p>
          Platform users can invite others to become agents of the platform
          through the invitation code and become your downline, as the senior
          you can take a percentage of your downline's commission, the
          commission earned by the senior will be directly returned to the
          senior's platform account, or team report.
        </p>

        <p>Our agents receive 23% of the reward of their subordinates</p>

        <p>
          Notes: <br /> All Agents/Downlines on the platform will receive a
          percentage of the rewards from the platform, and developing a team
          will not affect the rewards of any Agents/Downlines.
        </p>
      </div>
    </section>
  );
}

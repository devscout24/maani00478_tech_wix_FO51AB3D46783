import assets from "@/assets";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { Button } from "@/components/ui/button";
import {
  useMemberLogoutMutation,
  useMyInfoQuery,
} from "@/redux/api/endpoints/auth.api";
import type { TUserInfo } from "@/types";
import { useNavigate } from "react-router";
import BadgeIcon1 from "@/assets/svgs/image 18.svg?react";
import BadgeIcon2 from "@/assets/svgs/image 9.svg?react";
import BadgeIcon3 from "@/assets/svgs/image 19.svg?react";
import BadgeIcon4 from "@/assets/svgs/image 20.svg?react";
import { useEffect, useRef, useState } from "react";
import { copyTextToClipboardWithToast } from "@/utils/copyTextToClipboard";
import { toast } from "sonner";
import CopyIcon from "@/assets/icons/copy-01-stroke-rounded 1.svg?react";
import { CheckCheck } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { removeUserInfo } from "@/redux/slices/authSlice";
import { Progress } from "@/components/ui/progress";

export default function MyProfile() {
  const clipboardRef = useRef<HTMLInputElement>(null);
  const [isCopy, setCopy] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  // State to track if image failed to load
  const [imageError, setImageError] = useState(false);

  // Function to handle image loading errors
  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }
  }, [isCopy]);

  const navigate = useNavigate();
  const { data, isLoading, isFetching, isError, error } = useMyInfoQuery({});
  const [logoutMember] = useMemberLogoutMutation();

  const myInfo: TUserInfo = data?.data;

  if (isLoading || isFetching) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <img src={assets.image.Oops} alt="Oops" className="w-28" />
        <p className="font-semibold">
          {error && "data" in error
            ? (error.data as { message: string }).message
            : "Something went wrong."}
        </p>
        <Button className="mt-4" onClick={() => window.history.back()}>
          Back to Previous
        </Button>
      </div>
    );
  }

  const handleCopyClick = () => {
    if (clipboardRef.current && clipboardRef.current.value) {
      copyTextToClipboardWithToast(clipboardRef.current.value, toast);
      setCopy(true);
    } else {
      toast.error("No text to copy");
    }
  };

  const handelLogout = async () => {
    const res = await logoutMember({}).unwrap();
    toast.success(res.message);
    dispatch(removeUserInfo());
    navigate("/auth");
  };

  return (
    <section>
      <div className="p-4">
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
            My Profile
          </h4>
        </div>
      </div>

      <div className="p-4 flex flex-col items-center space-x-4 mt-12">
        <img
          src={
            imageError || !myInfo?.avatar
              ? assets.image.Default
              : myInfo?.avatar
          }
          alt="user-image"
          className="size-40 rounded-full"
          onError={handleImageError}
        />

        <div className="flex items-center gap-4 mt-4">
          <h4 className="text-2xl font-semibold">{myInfo?.name}</h4>
          <div>
            {myInfo?.level_id === 1 ? (
              <BadgeIcon1 className="size-12" />
            ) : myInfo?.level_id === 2 ? (
              <BadgeIcon2 className="size-12" />
            ) : myInfo?.level_id === 3 ? (
              <BadgeIcon3 className="size-12" />
            ) : myInfo?.level_id === 4 ? (
              <BadgeIcon4 className="size-12" />
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="text-primary flex items-center gap-4">
          <h4>
            Invitation Code:{" "}
            <span ref={clipboardRef}>
              {myInfo?.invitation_code || "Nothing"}
            </span>
          </h4>
          <Button
            size="icon"
            variant="ghost"
            className="p-0"
            onClick={handleCopyClick}
          >
            {isCopy ? (
              <CheckCheck className="size-6" />
            ) : (
              <CopyIcon className="size-6" />
            )}
          </Button>
        </div>

        <div className="w-full my-4 mx-6">
          <Progress
            value={myInfo?.targetDealCompletionPercentage}
            className="bg-accent w-full"
          />
          <p className="text-right text-muted-foreground">
            {myInfo?.targetDealCompletionPercentage}/100
          </p>
        </div>

        <div className="w-full p-4 flex items-center justify-around">
          <div className="text-center">
            <h4 className="text-[.8rem] font-semibold">Account Balance</h4>
            <h2 className="text-2xl font-semibold">USDC</h2>
            <h2 className="text-2xl font-semibold">
              {Number(myInfo?.balance).toFixed(2)}
            </h2>
          </div>

          <hr className="bg-white/35 w-[1px] h-[7.125rem]" />

          <div className="text-center">
            <h4 className="text-[.8rem] font-semibold">Commission</h4>
            <h2 className="text-2xl font-semibold">USDC</h2>
            <h2 className="text-2xl font-semibold">
              {Number(myInfo?.commission).toFixed(2)}
            </h2>
          </div>
        </div>

        <Button className="w-full mt-2" onClick={handelLogout}>
          Log Out
        </Button>
      </div>
    </section>
  );
}

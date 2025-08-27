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
import { CheckCheck, Edit } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { removeUserInfo } from "@/redux/slices/authSlice";
import { Progress } from "@/components/ui/progress";
import DialogWrapper from "@/components/DialogContents";
import EditProfileImage from "./components/EditProfileImage";
import EditUseName from "./components/EditUseName";

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
    if (clipboardRef.current && clipboardRef.current.textContent) {
      copyTextToClipboardWithToast(clipboardRef.current.textContent, toast);
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
    <section className="relative">
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

      <img src="./Union.png" alt="banner" className="w-full h-full mt-20" />
      <div className="bg-[#ECF3F6] h-[7.4rem]"></div>

      <div className="w-full h-full py-4 px-8 flex flex-col items-center absolute top-[9.5rem]">
        <div className="relative">
          <img
            src={
              imageError || !myInfo?.avatar
                ? assets.image.AvatarPlaceholder
                : myInfo?.avatar
            }
            alt="user-image"
            className="size-[7.75rem] rounded-full ml-1.5"
            onError={handleImageError}
          />

          <DialogWrapper
            dialogKey="editProfile"
            trigger={
              <Button
                variant="ghost"
                size="icon"
                className="p-0 rounded-full absolute bottom-0 right-0"
              >
                <Edit className="size-6 text-accent-foreground" />
              </Button>
            }
            content={<EditProfileImage dialogKey="editProfile" />}
          />
        </div>

        <div className="flex items-center gap-4 mt-6">
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
          <h4 className="text-4xl font-semibold">{myInfo?.name}</h4>
          <DialogWrapper
            dialogKey="editUserName"
            trigger={
              <Button variant="ghost" size="icon" className="p-0 rounded-full">
                <Edit className="size-6 text-accent-foreground" />
              </Button>
            }
            content={<EditUseName dialogKey="editUserName" />}
          />
        </div>

        <div className="text-muted-foreground flex items-center my-6">
          <h4>
            Invitation Code:{" "}
            <span ref={clipboardRef}>
              {myInfo?.invitation_code || "no invitation code"}
            </span>
          </h4>
          {myInfo?.invitation_code && (
            <Button
              size="icon"
              variant="ghost"
              className="p-0"
              onClick={handleCopyClick}
            >
              {isCopy ? (
                <CheckCheck className="size-5" />
              ) : (
                <CopyIcon className="size-5" />
              )}
            </Button>
          )}
        </div>

        <div className="w-full mb-4 mx-6">
          <Progress
            value={myInfo?.targetDealCompletionPercentage}
            className="bg-accent w-full"
          />
          <p className="text-right text-muted-foreground">
            {myInfo?.targetDealCompletionPercentage}/100
          </p>
        </div>

        <div className="w-full space-y-4">
          <div className="[background:linear-gradient(85deg,#041A2F_2.28%,#153B5D_96.76%)] text-secondary-foreground p-8 rounded-2xl flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">USDC</h2>
              <h4 className="text-[.8rem] font-semibold">Account Balance</h4>
            </div>
            <h2 className="text-2xl font-semibold">
              {Number(myInfo?.balance).toFixed(2)}
            </h2>
          </div>

          <div className="[background:linear-gradient(105deg,#FDC81C_-7.84%,#F3007E_60.27%)] text-secondary-foreground p-8 rounded-2xl flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">USDC</h2>
              <h4 className="text-[.8rem] font-semibold">Commission</h4>
            </div>
            <h2 className="text-2xl font-semibold">
              {Number(myInfo?.commission).toFixed(2)}
            </h2>
          </div>
        </div>

        <Button
          variant="secondary"
          className="w-full mt-12"
          onClick={handelLogout}
        >
          Log Out
        </Button>
      </div>
    </section>
  );
}

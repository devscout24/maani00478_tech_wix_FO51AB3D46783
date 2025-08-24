import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetWalletInfoQuery } from "@/redux/api/endpoints/wallet.api";
import { copyTextToClipboardWithToast } from "@/utils/copyTextToClipboard";
import { CheckCheck } from "lucide-react";
import CopyIcon from "@/assets/icons/copy-01-stroke-rounded 1.svg?react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function WithdrawalMethod() {
  const clipboardRef = useRef<HTMLInputElement>(null);
  const [isCopy, setCopy] = useState<boolean>(false);

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }
  }, [isCopy]);

  const {
    data: walletInfoRes,
    isLoading: isWalletInfoLoading,
    isFetching: isWalletInfoFetching,
    // isError: isWalletInfoError,
    // error: walletInfoError,
  } = useGetWalletInfoQuery({});

  const handleCopyClick = () => {
    if (clipboardRef.current && clipboardRef.current.value) {
      copyTextToClipboardWithToast(clipboardRef.current.value, toast);
      setCopy(true);
    } else {
      toast.error("No text to copy");
    }
  };
  return (
    <section>
      <div className="space-y-2 mt-8">
        <h4 className="font-semibold">Withdrawal Method</h4>
        {isWalletInfoLoading || isWalletInfoFetching ? (
          <div className="space-y-2">
            <Skeleton className="h-[6.5rem] w-full rounded-xl" />
          </div>
        ) : (
          <div className="bg-accent px-6 py-4 rounded-xl">
            <div className="font-semibold flex items-center justify-between text-muted-foreground">
              {[
                walletInfoRes?.data?.name,
                walletInfoRes?.data?.cryptocurrency,
                walletInfoRes?.data?.network,
              ].map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Input
                className="bg-white"
                value={walletInfoRes?.data?.receipt_address}
                readOnly
                ref={clipboardRef}
              />
              <Button
                size="icon"
                variant="ghost"
                className="p-0"
                onClick={handleCopyClick}
              >
                {isCopy ? (
                  <CheckCheck className="text-primary size-6" />
                ) : (
                  <CopyIcon className="text-muted-foreground size-6" />
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

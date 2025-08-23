import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Eye } from "lucide-react";
import ViewOffIcon from "@/assets/icons/view-off-solid-rounded 1.svg?react";
import { useMemberRegisterMutation } from "@/redux/api/endpoints/auth.api";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { useAppDispatch } from "@/redux/hooks";
// import { storeUserInfo } from "@/redux/slices/authSlice";

// export type TUser = {
//   name: string;
//   phone: string;
//   email: string;
//   password: string;
//   password_confirmation: string;
//   payment_password: string;
//   invitation_code: string | null;
// };

const formSchema = z.object({
  name: z.string().min(2).max(50),
  password: z.string().min(8),
  password_confirmation: z.string().min(8),
  payment_password: z.string(),
  phone: z.string(),
  invitation_code: z.string(),
  email: z.email(),
});

export default function Signup() {
  const [open, setOpen] = useState<boolean>(false);
  const [openPay, setOpenPay] = useState<boolean>(false);
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const [memberRegister, { isLoading, isSuccess }] =
    useMemberRegisterMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      password: "",
      password_confirmation: "",
      payment_password: "",
      phone: "",
      invitation_code: undefined,
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await memberRegister(values).unwrap();
      // dispatch(storeUserInfo(user.data.token));
      toast.success("Signup successful. Please login.");
      navigate("/auth");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Login Failed.", error.message);
    }
  }

  return (
    <section>
      <ScrollArea className="h-[65vh] py-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter your user name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="invitation_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invitation Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter invitation code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={open ? "text" : "password"}
                        placeholder="Enter login password"
                        {...field}
                      />
                      <div
                        className="absolute top-1.5 right-4"
                        onClick={() => setOpen(!open)}
                      >
                        {open ? <Eye /> : <ViewOffIcon className="size-6" />}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={open ? "text" : "password"}
                        placeholder="Confirm your password"
                        {...field}
                      />
                      <div
                        className="absolute top-1.5 right-4"
                        onClick={() => setOpen(!open)}
                      >
                        {open ? <Eye /> : <ViewOffIcon className="size-6" />}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="payment_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Withdraw Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={openPay ? "text" : "password"}
                        placeholder="Enter withdraw password"
                        {...field}
                      />
                      <div
                        className="absolute top-1.5 right-4"
                        onClick={() => setOpenPay(!openPay)}
                      >
                        {openPay ? <Eye /> : <ViewOffIcon className="size-6" />}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="w-full"
              type="submit"
              disabled={isLoading || isSuccess}
            >
              REGISTER NOW
            </Button>
          </form>
        </Form>
      </ScrollArea>
    </section>
  );
}

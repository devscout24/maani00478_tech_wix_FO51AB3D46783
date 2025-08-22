import { useState } from "react";
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
import ViewOffIcon from "@/assets/icons/view-off-solid-rounded 1.svg?react";
import { Eye } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useAppDispatch } from "@/redux/hooks";
import { storeUserInfo } from "@/redux/slices/authSlice";
import { useMemberLoginMutation } from "@/redux/api/endpoints/auth.api";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8),
});

export default function Login() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [memberLogin, { isLoading, isSuccess }] = useMemberLoginMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user = await memberLogin(values).unwrap();
      console.log(user);
      dispatch(storeUserInfo(user.data.token));
      toast.success(user.message);
      navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.success("Login Failed.", error.message);
    }
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter your email" {...field} />
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
                      placeholder="Please enter your password"
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

          <Button
            className="w-full"
            type="submit"
            disabled={isLoading || isSuccess}
          >
            LOG IN
          </Button>
        </form>
      </Form>
    </section>
  );
}

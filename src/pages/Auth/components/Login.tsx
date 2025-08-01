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

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8),
});

export default function Login() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    dispatch(storeUserInfo("user-login-token"));
    toast.success("Login successful.");
    navigate("/");
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter your user name" {...field} />
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

          <Button className="w-full" type="submit">
            LOG IN
          </Button>
        </form>
      </Form>
    </section>
  );
}

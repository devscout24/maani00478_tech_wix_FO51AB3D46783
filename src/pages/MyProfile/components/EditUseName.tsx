import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMemberUpdateMutation } from "@/redux/api/endpoints/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import { closeDialog } from "@/redux/slices/dialogSlice";
import { convertObjectToFormData } from "@/utils/convertToFormData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "User name must be at least 2 characters.",
  }),
});

export default function EditUseName({ dialogKey }: { dialogKey: string }) {
  const dispatch = useAppDispatch();
  const [memberUpdate, { isLoading }] = useMemberUpdateMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = convertObjectToFormData(values);
      const res = await memberUpdate(formData).unwrap();
      if (res.status) {
        toast.success(res.message);
        dispatch(closeDialog(dialogKey));
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log("error", error);
      const acceptError = error as { data?: { message: string } };
      toast.error(
        acceptError && "data" in acceptError
          ? (acceptError.data as { message: string }).message
          : "Something went wrong."
      );
    }
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Update your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}

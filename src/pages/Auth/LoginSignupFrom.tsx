import { useLocation, useNavigate } from "react-router";
import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import Logo from "@/assets/svgs/logo.svg?react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function LoginSignupFrom() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <section className="section-container h-screen p-4">
      <ArrowLeftIcon className="size-8" onClick={() => navigate("/auth")} />
      <Logo className="w-[14.5rem] h-[3.5rem] my-6 text-primary" />
      <h3 className="text-xl font-bold">Get Started now</h3>
      <p>Create an account or log in to explore about our app</p>

      <Tabs
        defaultValue={
          (pathname.endsWith("/login") && "login") ||
          (pathname.endsWith("/signup") && "signup") ||
          ""
        }
        className="w-full mt-6"
      >
        <TabsList>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Login />
        </TabsContent>

        <TabsContent value="signup">
          <Signup />
        </TabsContent>
      </Tabs>
    </section>
  );
}

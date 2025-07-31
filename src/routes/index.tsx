import { createBrowserRouter } from "react-router";
import Layouts from "@/layouts";
import NotFoundPage from "@/pages/NotFoundPage";
import HomePage from "@/pages/Home";
import App from "@/App";
import AuthPage from "@/pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
    ],
  },
]);

export default router;

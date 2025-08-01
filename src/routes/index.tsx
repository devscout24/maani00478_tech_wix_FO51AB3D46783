import { createBrowserRouter } from "react-router";
import Layouts from "@/layouts";
import NotFoundPage from "@/pages/NotFoundPage";
import HomePage from "@/pages/Home";
import AuthPage from "@/pages/Auth";
import LoginSignupFrom from "@/pages/Auth/LoginSignupFrom";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layouts />
      </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    children: [
      { index: true, element: <AuthPage /> },
      { path: "/auth/login", element: <LoginSignupFrom /> },
      { path: "/auth/signup", element: <LoginSignupFrom /> },
    ],
  },
]);

export default router;

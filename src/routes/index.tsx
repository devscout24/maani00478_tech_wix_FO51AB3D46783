import { createBrowserRouter } from "react-router";
import Layouts from "@/layouts";
import NotFoundPage from "@/pages/NotFoundPage";
import HomePage from "@/pages/Home";
import AuthPage from "@/pages/Auth";
import LoginSignupFrom from "@/pages/Auth/LoginSignupFrom";
// import ProtectedRoute from "./ProtectedRoute";
import DataOptimization from "@/pages/DataOptimization";
import SubmitReview from "@/pages/SubmitReview";
import DealingRecord from "@/pages/DealingRecord";
import Deposit from "@/pages/Deposit";
import FundsHistory from "@/pages/FundsHistory";
import Withdrawal from "@/pages/Withdrawal";
import WalletInfo from "@/pages/WalletInfo";
import Security from "@/pages/Security";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoute>
      <Layouts />
      // </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: (
          // <ProtectedRoute>
          <HomePage />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/data-optimization",
        element: <DataOptimization />,
      },
      {
        path: "/submit-review",
        element: <SubmitReview />,
      },
      {
        path: "/dealing-records",
        element: <DealingRecord />,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/funds-history",
        element: <FundsHistory />,
      },
      {
        path: "/withdrawal",
        element: <Withdrawal />,
      },
      {
        path: "/wallet-info",
        element: <WalletInfo />,
      },
      {
        path: "/security",
        element: <Security />,
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

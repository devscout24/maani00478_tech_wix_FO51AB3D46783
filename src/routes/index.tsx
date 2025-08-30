import { createBrowserRouter } from "react-router-dom";
import Layouts from "@/layouts";
import ProtectedRoute from "./ProtectedRoute";
import React from "react";

const HomePage = React.lazy(() => import("@/pages/Home"));
const AuthPage = React.lazy(() => import("@/pages/Auth"));
const LoginSignupFrom = React.lazy(
  () => import("@/pages/Auth/LoginSignupFrom")
);
const DataOptimization = React.lazy(() => import("@/pages/DataOptimization"));
const SubmitReview = React.lazy(() => import("@/pages/SubmitReview"));
const DealingRecord = React.lazy(() => import("@/pages/DealingRecord"));
const Deposit = React.lazy(() => import("@/pages/Deposit"));
const FundsHistory = React.lazy(() => import("@/pages/FundsHistory"));
const Withdrawal = React.lazy(() => import("@/pages/Withdrawal"));
const WalletInfo = React.lazy(() => import("@/pages/WalletInfo"));
const Security = React.lazy(() => import("@/pages/Security"));
const CustomerService = React.lazy(() => import("@/pages/CustomerService"));
const TermAndConditions = React.lazy(() => import("@/pages/TermAndConditions"));
const AgentMode = React.lazy(() => import("@/pages/AgentMode"));
const FAQs = React.lazy(() => import("@/pages/FAQs"));
const AboutUs = React.lazy(() => import("@/pages/AboutUs"));
const MyProfile = React.lazy(() => import("@/pages/MyProfile"));
const WithdrawalHistory = React.lazy(() => import("@/pages/WithdrawalHistory"));
const NotFoundPage = React.lazy(() => import("@/pages/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layouts />
      </ProtectedRoute>
    ),
    errorElement: React.createElement(NotFoundPage),
    children: [
      { index: true, element: React.createElement(HomePage) },
      { path: "/my-profile", element: React.createElement(MyProfile) },
      {
        path: "/data-optimization",
        element: React.createElement(DataOptimization),
      },
      { path: "/submit-review", element: React.createElement(SubmitReview) },
      { path: "/dealing-records", element: React.createElement(DealingRecord) },
      { path: "/deposit", element: React.createElement(Deposit) },
      { path: "/funds-history", element: React.createElement(FundsHistory) },
      { path: "/withdrawal", element: React.createElement(Withdrawal) },
      {
        path: "/withdrawal-history",
        element: React.createElement(WithdrawalHistory),
      },
      { path: "/wallet-info", element: React.createElement(WalletInfo) },
      { path: "/security", element: React.createElement(Security) },
      {
        path: "/customer-service",
        element: React.createElement(CustomerService),
      },
      {
        path: "/term-and-conditions",
        element: React.createElement(TermAndConditions),
      },
      { path: "/agent-mode", element: React.createElement(AgentMode) },
      { path: "/faqs", element: React.createElement(FAQs) },
      { path: "/about-us", element: React.createElement(AboutUs) },
    ],
  },
  {
    path: "/auth",
    children: [
      { index: true, element: React.createElement(AuthPage) },
      { path: "/auth/login", element: React.createElement(LoginSignupFrom) },
      { path: "/auth/signup", element: React.createElement(LoginSignupFrom) },
    ],
  },
]);

export default router;

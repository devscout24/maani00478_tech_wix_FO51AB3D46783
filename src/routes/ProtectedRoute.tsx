import useCurrentUser from "@/hooks/useCurrentUser";
import { useMyInfoQuery } from "@/redux/api/endpoints/auth.api";
import { Navigate } from "react-router";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = useCurrentUser();

  const { data: myInfo } = useMyInfoQuery({});

  if (!currentUser || myInfo?.data?.status === "inactive") {
    return <Navigate to="/auth" replace={true} />;
  }

  return <>{children}</>;
}

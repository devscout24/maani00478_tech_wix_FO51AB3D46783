import useCurrentUser from "@/hooks/useCurrentUser";
import { useMyInfoQuery } from "@/redux/api/endpoints/auth.api";
import { Navigate } from "react-router";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = useCurrentUser();

  const { data: myInfo, isLoading } = useMyInfoQuery({});

  if (isLoading) {
    return (
      <div className="section-container h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (!currentUser || !myInfo) {
    return <Navigate to="/auth" replace={true} />;
  }

  return <>{children}</>;
}

import { Outlet, Navigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { Loader2 } from "lucide-react";

export default function ProtectedLayout() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-brand-dark" />
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
}
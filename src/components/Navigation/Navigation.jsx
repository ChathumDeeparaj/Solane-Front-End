import { Link } from "react-router";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { BarChart3, Sun } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="px-6 md:px-12 py-4 flex justify-between items-center bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 backdrop-blur-sm border-b border-purple-900/50">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex justify-center items-center shadow-lg shadow-cyan-500/30">
          <Sun className="w-5 h-5 text-white" />
        </div>
        <span className="font-[Inter] text-xl font-bold text-white">Solane</span>
      </Link>

      <div className="flex items-center gap-6">
        <SignedIn>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-4 py-2 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors shadow-lg shadow-cyan-500/10"
          >
            <BarChart3 className="w-4 h-4" />
            <span className="font-[Inter] text-sm font-medium hidden sm:inline">Dashboard</span>
          </Link>
        </SignedIn>
        <div className="flex items-center gap-3">
          <SignedOut>
            <Button asChild className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0">
              <Link to="/sign-in">
                Sign In
              </Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0">
              <Link to="/sign-up">
                Sign Up
              </Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <div className="ring-2 ring-purple-500/50 rounded-full">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
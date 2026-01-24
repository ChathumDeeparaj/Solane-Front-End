import { Outlet } from "react-router";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="p-4 w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
          <SidebarTrigger className="block text-white" />
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
}
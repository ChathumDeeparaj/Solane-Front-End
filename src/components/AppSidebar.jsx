import { ChartLine, LayoutDashboard, TriangleAlert, FileText, Sun } from "lucide-react";
import { Link } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useLocation } from "react-router";
import { cn } from "@/lib/utils";
import SolaneLogo from "./Navigation/Solane-Logo.png";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    title: "Anomalies",
    url: "/dashboard/anomalies",
    icon: <TriangleAlert className="w-5 h-5" />,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: <ChartLine className="w-5 h-5" />,
  },
  {
    title: "Invoices",
    url: "/dashboard/invoices",
    icon: <FileText className="w-5 h-5" />,
  },
];

const SideBarTab = ({ item }) => {
  let location = useLocation();
  let isActive = location.pathname === item.url;

  return (
    <SidebarMenuItem key={item.url}>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className={cn(
          "rounded-xl transition-all duration-200 py-3 px-4",
          "hover:bg-purple-500/20 hover:text-white",
          "data-[active=true]:bg-gradient-to-r data-[active=true]:from-purple-600 data-[active=true]:to-cyan-500",
          "data-[active=true]:text-white data-[active=true]:shadow-lg data-[active=true]:shadow-purple-500/25"
        )}
      >
        <Link to={item.url} className="flex items-center gap-3">
          {item.icon}
          <span className="font-medium">{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0">
      <SidebarContent className="bg-gradient-to-b from-slate-900 via-purple-950/50 to-slate-900">
        <SidebarGroup>
          <SidebarGroupLabel className="h-auto py-6 px-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex justify-center items-center overflow-hidden shrink-0 shadow-lg shadow-cyan-500/30">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Solane
              </span>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-2">
            <SidebarMenu className="mt-4 space-y-2">
              {items.map((item) => (
                <SideBarTab key={item.url} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar >
  );
}
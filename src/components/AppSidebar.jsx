import { ChartLine, LayoutDashboard, TriangleAlert, FileText } from "lucide-react";
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
    icon: <LayoutDashboard className="w-8 h-8" size={32} />,
  },
  {
    title: "Anomalies",
    url: "/dashboard/anomalies",
    icon: <TriangleAlert className="w-8 h-8" size={32} />,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: <ChartLine className="w-8 h-8" size={32} />,
  },
  {
    title: "Invoices",
    url: "/dashboard/invoices",
    icon: <FileText className="w-8 h-8" size={32} />,
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
        className="hover:bg-brand-light/20 hover:text-brand-dark data-[active=true]:bg-brand-dark data-[active=true]:text-white"
      >
        <Link
          to={item.url}
        >
          {item.icon}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="h-auto py-4">
            <Link to="/" className="flex items-center gap-3">
              <div
                className={
                  "w-10 h-10 rounded-full  flex justify-center items-center overflow-hidden shrink-0"
                }
              >
                <img
                  src={SolaneLogo}
                  alt="Solane Logo"
                  className="w-full h-full object-cover scale-300"
                />
              </div>
              <span className="text-3xl font-bold text-foreground">Solane</span>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-4 text">
              {items.map((item) => (
                <SideBarTab key={item.url} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

import {
  LayoutDashboard,
  Building2,
  Users,
  BarChart3,
  DollarSign,
  FolderOpen,
  Calendar,
  Briefcase,
  MessageSquare,
  Settings,
  TrendingUp,
  FileText,
  UserCheck,
  Plus,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { url } from "inspector";

const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Company Performance", url: "/companyperformance", icon: TrendingUp },
  {title: "Recruitment" , url: "/recruitment", icon: Users },
  { title: "Departments", url: "/departments", icon: Building2 },
  {
    title: "Employees",
    url: "/employees",
    icon: Users,
    children: [
      { title: "Add New Employee", url: "/register", icon: Plus },

      { title: "Employee List", url: "/employees/list", icon: Users },
    ],
  },
  {title: "Project Status", url: "/projectstatus", icon: FolderOpen },
  { title: "Payroll Management", url: "/payroll", icon: DollarSign },
  { title: "Attendance Reports", url: "/attendance", icon: UserCheck },
  { title: "Leave Management", url: "/leave", icon: Calendar },
  { title: "Asset Management", url: "/assetmanagement", icon: Briefcase },
  { title: "Messages", url: "/messages", icon: MessageSquare },
];

const quickActions = [
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const isActive = (path?: string) => currentPath === path;

  const getNavClasses = (active: boolean) =>
    active
      ? "bg-violet-800 text-white font-medium scale-100"
      : "text-gray-600 hover:bg-violet-700 hover:text-blue-600 hover:scale-105 active:scale-95";

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300`} collapsible="icon">
      <SidebarContent className="bg-white border-r border-gray-200 min-h-screen overflow-y-auto scrollbar-hide">
        {/* Main Navigation */}
        <SidebarGroup className="mt-4">
          <SidebarGroupLabel
            className={`${collapsed ? "sr-only" : ""} text-xs font-semibold text-gray-500 uppercase tracking-wider px-4`}
          >
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="h-10"
                      onClick={() =>
                        item.children
                          ? setOpenSubmenu(openSubmenu === item.title ? null : item.title)
                          : undefined
                      }
                    >
                      <NavLink
                        to={item.url || "#"}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 transform ${getNavClasses(
                          isActive(item.url)
                        )}`}
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        {!collapsed && <span className="truncate">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* Submenu Items */}
                  {!collapsed &&
                    item.children &&
                    openSubmenu === item.title && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.children.map((subItem) => (
                          <SidebarMenuItem key={subItem.title}>
                            <SidebarMenuButton asChild className="h-9">
                              <NavLink
                                to={subItem.url}
                                className={`flex items-center gap-2 px-2 py-1 rounded-md text-sm transition-all duration-200 transform ${getNavClasses(
                                  isActive(subItem.url)
                                )}`}
                              >
                                {subItem.icon && <subItem.icon className="h-4 w-4" />}
                                <span>{subItem.title}</span>
                              </NavLink>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Actions */}
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel
            className={`${collapsed ? "sr-only" : ""} text-xs font-semibold text-gray-500 uppercase tracking-wider px-4`}
          >
            Quick Actions
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {quickActions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink
                      to={item.url}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 transform ${getNavClasses(
                        isActive(item.url)
                      )}`}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

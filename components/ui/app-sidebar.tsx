"use client";

import * as React from "react";
import {
  ChartNoAxesColumnIncreasing,
  Compass,
  List,
  UserRoundPen,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "./new-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Logo from "../../public/logo.png";

const user = {
  name: "Bongani",
  email: "bonganishubeaz@gmail.com",
  avatar: "/avatars/shadcn.jpg",
};

const teams = [
  {
    name: "Tnses",
    logo: Logo,
    plan: "Non Profit Organisation",
  },
];

const guestRoutes = [
  { title: "Browse courses", url: "/browse", icon: Compass },
  { title: "My courses", url: "/home", icon: List },
  { title: "Profile", url: "/profile", icon: UserRoundPen },
];

const teacherRoutes = [
  { title: "Courses", url: "/teacher/courses", icon: List },
  {
    title: "Analytics",
    url: "/teacher/analytics",
    icon: ChartNoAxesColumnIncreasing,
  },
  { title: "Profile", url: "/teacher/profile", icon: UserRoundPen },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes("/teacher");
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border-b border-sidebar-border/60">
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={routes} label={isTeacherPage ? "Manage" : "Learn"} />
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border/60">
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

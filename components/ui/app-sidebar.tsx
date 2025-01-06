"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartNoAxesColumnIncreasing,
  Command,
  Compass,
  Frame,
  GalleryVerticalEnd,
  List,
  LogOut,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav.projects";
import { NavUser } from "./new-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SignOutButton, UserButton,  } from "@clerk/nextjs";
import SidebarRoutes from "@/app/(dashboard)/_components/sidebar-routes";
import { usePathname } from "next/navigation";
import Logo from "../../public/logo.png";
import { Button } from "./button";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Ads",
      logo: Logo,
      plan: "Non Profit Organisation",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  NavMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  guestRoutes: [
    {
      title: "Browse courses",
      url: "/browse",
      icon: Compass,
      items: [
        {
          title: "None",
          url: "#",
        },
      ],
    },
    {
      title: "My courses",
      url: "/home",
      icon: List,
      items: [
        {
          title: "None",
          url: "#",
        },
      ],
    },
  ],
  teacherRoutes: [
    {
      title: "Courses",
      url: "/teacher/courses",
      icon: List,
      items: [
        {
          title: "None",
          url: "#",
        },
      ],
    },
    {
      title: "Analytics",
      url: "/teacher/analytics",
      icon: ChartNoAxesColumnIncreasing,
      items: [
        {
          title: "None",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes("/teacher");
  const routes = isTeacherPage ? data.teacherRoutes : data.guestRoutes;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={routes} />
        {/* <NavProjects projects={routes} /> */}
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2">
          <Button size="sm" variant="outline" className="w-auto">
            <LogOut className="h-4 w-4" />
            <SignOutButton />
          </Button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

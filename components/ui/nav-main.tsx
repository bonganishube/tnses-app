"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon | undefined
    isActive?: boolean | undefined
    items?: {
      title: string
      url: string | undefined
    }[]
  }[]
}) {

  const pathname = usePathname();
  const router = useRouter();

  // Helper function to check if the current path is active for an item
  const isItemActive = (url: string) => {
    return pathname === url || pathname?.startsWith(`${url}/`);
  }

  const onClick = (url: string) => {
    router.push(url);
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton 
                  tooltip={item.title} 
                  onClick={() => onClick(item.url)}
                  className={cn(
                    "default",
                    isItemActive(item.url) && "text-primaryColor bg-primaryColor/20 hover:bg-primaryColor/20 hover:text-primaryColor"
                  )}
                >
                  {item.icon && (
                    <item.icon className={cn(
                      "default",
                      isItemActive(item.url) && "text-primaryColor"
                    )} />
                  )}
                  <a href={item.url}>{item.title}</a>
                  {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                </SidebarMenuButton>
              </CollapsibleTrigger>
            
              {/* <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent> */}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

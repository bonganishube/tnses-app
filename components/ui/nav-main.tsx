"use client"

import { type LucideIcon } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavMain({
  items,
  label = "Dashboard",
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon | undefined
  }[]
  label?: string
}) {
  const pathname = usePathname()

  const isItemActive = (url: string) =>
    pathname === url || pathname?.startsWith(`${url}/`)

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-tertiary text-[0.7rem] tracking-[0.14em] text-muted-foreground">
        {label.toUpperCase()}
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const active = isItemActive(item.url)

          return (
            <SidebarMenuItem key={item.title}>
              {/* asChild so the row renders as a single <a>. It previously
                  nested an <a> inside the button, which is invalid DOM. */}
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                isActive={active}
                className={cn(
                  "gap-3 rounded-lg font-medium transition-colors",
                  active &&
                    "bg-primaryColor/10 text-primaryColor hover:bg-primaryColor/15 hover:text-primaryColor data-[active=true]:bg-primaryColor/10 data-[active=true]:text-primaryColor"
                )}
              >
                <Link href={item.url}>
                  {item.icon && (
                    <item.icon
                      className={cn(
                        "shrink-0 transition-colors",
                        active ? "text-primaryColor" : "text-muted-foreground"
                      )}
                    />
                  )}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

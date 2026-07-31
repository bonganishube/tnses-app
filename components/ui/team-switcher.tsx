"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

/**
 * Brand lockup at the top of the dashboard sidebar. There is only ever one
 * "team", so this is a link home rather than a switcher.
 */
export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: any
    plan: string
  }[]
}) {
  const activeTeam = teams[0]

  if (!activeTeam) return null

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          size="lg"
          className="hover:bg-transparent active:bg-transparent"
        >
          <Link href="/home">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
              <Image src={activeTeam.logo} alt="" className="rounded-[5px]" />
            </div>
            <div className="grid text-left leading-tight">
              <span className="truncate font-tertiary text-lg tracking-wide text-secondaryColor">
                {activeTeam.name}
              </span>
              <span className="truncate text-[0.7rem] text-muted-foreground">
                {activeTeam.plan}
              </span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

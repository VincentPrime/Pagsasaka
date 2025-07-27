"use client"

import Image from "next/image"
import * as React from "react"
import { LayoutDashboard } from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"

// import { NavUser } from "./nav-user"

// This is sample data.
const data = {
 
  navMain: [
    {
      title: "Dashboard",
      url: "/Admindashboard",
      icon: "/dashboard.png",
    },
    {
      title: "Riderlist",
      url: "/Riderlist",
      icon: "/motorbike.png",
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Image 
            src="/Plant.png"
            alt="picrture"
            width={70}
            height={70}
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
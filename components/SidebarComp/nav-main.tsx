"use client"

import { LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon | string
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.url} className="flex items-center gap-4 text-white font-bold my-5">
                {typeof item.icon === "string" ? (
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                ) : (
                  item.icon && <item.icon size={20} />
                )}
                <span className="text-2xl">{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

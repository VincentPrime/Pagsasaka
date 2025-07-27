"use client"


import SplitText from "@/components/animations/SplitText"
import { AppSidebar } from "@/components/SidebarComp/app-sidebar"
import { SheetDemo } from "@/components/Sidebarsettings/side-bar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Riderlist() {


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-[#285A19] text-white flex justify-between px-5 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem >
                  <BreadcrumbPage>
                      <SplitText
                        text="Welcome to Admin list"
                        className="text-2xl font-extrabold text-center text-white"
                      />
                  </BreadcrumbPage>
                   
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SheetDemo />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        
        <Card>
       
        </Card>
          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

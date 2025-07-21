import { AppSidebar } from "@/components/SidebarComp/app-sidebar"
import { SheetDemo } from "@/components/Sidebarsettings/side-bar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Image from "next/image"

export default function Admindashboard() {
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
                  <BreadcrumbPage className="text-white font-extrabold text-2xl">Welcome to Admin Dashboard</BreadcrumbPage>
                   
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SheetDemo />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2 mt-4">
            <Card>
                <CardHeader>
                    TOTAL RIDERS
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    TOTAL RIDERS
                </CardHeader>
                <CardContent className="flex justify-between">
                        <h1>
                            6
                        </h1>

                        <Image
                        src="/farmer.png"
                        alt=""
                        width={70}
                        height={70}
                        />

                </CardContent>
            </Card>
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

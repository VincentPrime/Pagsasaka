"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CircleUser, Lock } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Editprofile } from "@/components/Sidebarsettings/Editprofile"
import {Changepassword} from "@/components/Sidebarsettings/Changepassword"

export function SheetDemo() {
  const [view, setView] = useState<"menu" | "editProfile" | "changePassword">("menu")

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative w-fit">
          <Image
            src="/images/baby.jpeg"
            alt="baby"
            width={50}
            height={50}
            className="rounded-full border cursor-pointer"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="items-center mt-10 pb-10 border-b-2 border-dotted">
          <Image
            src="/images/baby.jpeg"
            alt="baby"
            width={100}
            height={100}
            className="rounded-full border"
          />
          <SheetTitle>Maxene Dionisio</SheetTitle>
          <SheetDescription>Maxenedionisio@.com</SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-6 px-4 pt-4">
          {view === "menu" && (
            <>
              <div
                onClick={() => setView("editProfile")}
                className="p-2 hover:bg-[#cfcfcf] rounded-xl cursor-pointer flex gap-2 items-center"
              >
                <CircleUser />
                Edit Profile
              </div>
              <div 
              onClick={() => setView("changePassword")}
              className="p-2 hover:bg-[#cfcfcf] rounded-xl cursor-pointer flex gap-2 items-center">
                <Lock />
                Change Password
              </div>
            </>
          )}

          {view === "editProfile" && (
            <div>
              <Editprofile />
              <Button
                variant="secondary"
                onClick={() => setView("menu")}
                className="mt-4 cursor-pointer"
              >
                Back
              </Button>
            </div>
          )}

          {view === "changePassword" && (
            <div>
              <Changepassword />
              <Button
                variant="secondary"
                onClick={() => setView("menu")}
                className="mt-4 cursor-pointer"
              >
                Back
              </Button>
            </div>
          )}
        </div>

        {view === "menu" && (
          <SheetFooter>
            <Button>
              <Link href="/Landingpage">Logout</Link>
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

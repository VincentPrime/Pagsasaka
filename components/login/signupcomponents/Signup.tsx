"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) { 

  const [showPassword, setShowPassword] = useState(false)
  const [showRepassword, setShowRepassword] = useState(false)

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold">Create an Account</CardTitle>
         
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6 text-white">
    
              <div className="grid gap-6">
                <div className="flex gap-2">
                    <div className="grid gap-3">
                    <Label htmlFor="email">*Firstname</Label>
                    <Input
                        id="email"
                        type="email"
                        required
                        placeholder="Firstname"
                    />
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="email">*Lastname</Label>
                    <Input
                        id="email"
                        type="email"
                        required
                        placeholder="Lastname"
                    />
                    </div>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="email">Middle Name</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="OPTIONAL"
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="email">*Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="PHONENUMBER / USERNAME / EMAIL"
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="email">E-Wallet number</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="PHONENUMBER / USERNAME / EMAIL"
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="email">*Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="PHONENUMBER / USERNAME / EMAIL"
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">*Password</Label>
                  </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="pr-10"
                        placeholder="Password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                </div>


                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">*Re-Password</Label>
                  </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showRepassword ? "text" : "password"}
                        required
                        className="pr-10"
                        placeholder="Re-Enter Password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRepassword(!showRepassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                      >
                        {showRepassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                </div>

                  
                <Button type="submit" className="w-full">
                  Continue
                </Button>
              </div>
              
              
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="*:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 text-white">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}

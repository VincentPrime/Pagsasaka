"use client"

import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Card, CardContent,CardHeader,CardTitle,} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) { 

  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const [Adminmail, setAdminmail] = useState("")
  const [AdminPass, setAdminpass] = useState("")



  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold">LOG IN</CardTitle>
         
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6 text-white">
    
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Number / Username / Email"
                    required
                    className="py-5"
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline text-blue-400"
                    >
                      Forgot your password?
                    </a>
                  </div>
                   <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="pr-10 py-5"
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
                <Button className="w-full" >
                  Login
                </Button>
              </div>
              
            
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/Signupform")}
                  className="underline underline-offset-4 text-blue-400 hover:text-blue-300"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-white *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}

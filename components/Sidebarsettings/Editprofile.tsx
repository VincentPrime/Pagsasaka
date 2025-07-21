import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Editprofile({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6")} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Firstname</Label>
                <Input
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Middle Initial</Label>
                <Input
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Lastname</Label>
                <Input
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="text">Email</Label>
                </div>
                <Input id="password" type="text" required />
              </div>
               <div className="grid gap-3">
                <Label htmlFor="email">Number</Label>
                <Input
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full cursor-pointer">
                  SAVE
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

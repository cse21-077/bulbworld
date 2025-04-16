"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, BrainCircuit, Home, LightbulbIcon, LogOut, Settings, Users2, Trophy, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/components/sidebar-provider"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function Sidebar() {
  const pathname = usePathname()
  const { isOpen } = useSidebar()

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r bg-background transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="border-b p-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3qdyNbRPlG7RKaYZZkTep1DJgb2Y76.png"
              alt="The Bulb World Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold tracking-tight text-primary">THE BULB WORLD</h3>
            <p className="text-xs text-muted-foreground">Innovation Hub</p>
          </div>
        </div>
      </div>
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          <Link href="/dashboard">
            <Button variant={pathname === "/dashboard" ? "secondary" : "ghost"} className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/ideas">
            <Button variant={pathname === "/dashboard/ideas" ? "secondary" : "ghost"} className="w-full justify-start">
              <LightbulbIcon className="mr-2 h-4 w-4" />
              Innovation Ideas
              <Badge className="ml-auto bg-secondary text-secondary-foreground">12</Badge>
            </Button>
          </Link>
          <Link href="/dashboard/submit">
            <Button variant={pathname === "/dashboard/submit" ? "secondary" : "ghost"} className="w-full justify-start">
              <BrainCircuit className="mr-2 h-4 w-4" />
              Submit Idea
            </Button>
          </Link>
          <Link href="/dashboard/collaboration">
            <Button
              variant={pathname === "/dashboard/collaboration" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Users2 className="mr-2 h-4 w-4" />
              Collaboration Boards
              <Badge className="ml-auto bg-secondary text-secondary-foreground">3</Badge>
            </Button>
          </Link>
          <Link href="/dashboard/training">
            <Button
              variant={pathname === "/dashboard/training" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Training Videos
              <Badge className="ml-auto bg-secondary text-secondary-foreground">5</Badge>
            </Button>
          </Link>
          <Link href="/dashboard/knowledge">
            <Button
              variant={pathname === "/dashboard/knowledge" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Knowledge Archive
            </Button>
          </Link>
        </div>
        <div className="mt-6">
          <h4 className="mb-2 px-4 text-xs font-semibold uppercase text-muted-foreground">Leaderboard</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 rounded-md px-3 py-2 bg-muted/50">
              <Avatar className="h-7 w-7">
                <AvatarImage src="/placeholder-user.jpg" alt="Top Innovator" />
                <AvatarFallback className="text-xs">KM</AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <p className="text-sm font-medium">Kea Molefe</p>
                <p className="text-xs text-muted-foreground">120 points</p>
              </div>
              <Trophy className="h-4 w-4 text-secondary" />
            </div>
            <div className="flex items-center gap-3 rounded-md px-3 py-2">
              <Avatar className="h-7 w-7">
                <AvatarImage src="/placeholder-user.jpg" alt="Second Place" />
                <AvatarFallback className="text-xs">TM</AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <p className="text-sm font-medium">Thabo Moyo</p>
                <p className="text-xs text-muted-foreground">95 points</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-md px-3 py-2">
              <Avatar className="h-7 w-7">
                <AvatarImage src="/placeholder-user.jpg" alt="Third Place" />
                <AvatarFallback className="text-xs">LN</AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <p className="text-sm font-medium">Lesedi Ndlovu</p>
                <p className="text-xs text-muted-foreground">87 points</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 ml-auto">
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </div>
    </aside>
  )
}

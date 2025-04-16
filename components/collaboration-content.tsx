"use client"

import { useState } from "react"
import { Calendar, ChevronDown, Filter, MessageSquare, Plus, Search, Users2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const collaborationBoards = [
  {
    id: 1,
    title: "Rural Electrification Project",
    description: "Developing solar-powered LED solutions for rural areas with limited grid access",
    status: "active",
    progress: 65,
    members: [
      { name: "Kea Molefe", avatar: "/placeholder-user.jpg", initials: "KM" },
      { name: "Thabo Moyo", avatar: "/placeholder-user.jpg", initials: "TM" },
      { name: "Lesedi Ndlovu", avatar: "/placeholder-user.jpg", initials: "LN" },
      { name: "Naledi Kgosi", avatar: "/placeholder-user.jpg", initials: "NK" },
      { name: "Boitumelo Tau", avatar: "/placeholder-user.jpg", initials: "BT" },
    ],
    tasks: 12,
    completedTasks: 8,
    comments: 24,
    dueDate: "Dec 15, 2023",
    department: "Product Development",
    createdDate: "2 months ago",
  },
  {
    id: 2,
    title: "Smart Office Lighting",
    description: "Motion-sensing energy-efficient lighting solutions for corporate clients",
    status: "active",
    progress: 42,
    members: [
      { name: "Kea Molefe", avatar: "/placeholder-user.jpg", initials: "KM" },
      { name: "Boitumelo Tau", avatar: "/placeholder-user.jpg", initials: "BT" },
      { name: "Mpho Khumalo", avatar: "/placeholder-user.jpg", initials: "MK" },
    ],
    tasks: 8,
    completedTasks: 3,
    comments: 15,
    dueDate: "Jan 30, 2024",
    department: "Technology",
    createdDate: "3 weeks ago",
  },
  {
    id: 3,
    title: "Emergency Lighting Improvement",
    description: "Enhancing battery life and brightness for emergency lighting products",
    status: "completed",
    progress: 100,
    members: [
      { name: "Lesedi Ndlovu", avatar: "/placeholder-user.jpg", initials: "LN" },
      { name: "Thabo Moyo", avatar: "/placeholder-user.jpg", initials: "TM" },
      { name: "Kea Molefe", avatar: "/placeholder-user.jpg", initials: "KM" },
    ],
    tasks: 10,
    completedTasks: 10,
    comments: 32,
    dueDate: "Oct 15, 2023",
    department: "Engineering",
    createdDate: "3 months ago",
  },
]

export function CollaborationContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  const filteredBoards = collaborationBoards.filter((board) => {
    const matchesSearch =
      board.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      board.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || board.status === statusFilter
    const matchesDepartment = departmentFilter === "all" || board.department === departmentFilter

    return matchesSearch && matchesStatus && matchesDepartment
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Collaboration Boards</h1>
          <p className="text-muted-foreground">Work together with your team on innovation projects</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              New Collaboration
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Create New Collaboration Board</DialogTitle>
              <DialogDescription>
                Set up a new collaboration space for your team to work on an innovation project
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Board Title</Label>
                <Input id="title" placeholder="Enter a title for your collaboration board" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the purpose and goals of this collaboration" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Product Development">Product Development</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Operations">Operations</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="members">Team Members</Label>
                <Select>
                  <SelectTrigger id="members">
                    <SelectValue placeholder="Add team members" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="thabo">Thabo Moyo</SelectItem>
                    <SelectItem value="lesedi">Lesedi Ndlovu</SelectItem>
                    <SelectItem value="naledi">Naledi Kgosi</SelectItem>
                    <SelectItem value="boitumelo">Boitumelo Tau</SelectItem>
                    <SelectItem value="mpho">Mpho Khumalo</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex -space-x-2 mt-2">
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>KM</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" type="date" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Create Board</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search collaboration boards..."
            className="pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Status
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setStatusFilter("all")}>All Statuses</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("active")}>Active</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("completed")}>Completed</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Department
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by Department</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setDepartmentFilter("all")}>All Departments</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Product Development")}>
                  Product Development
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Technology")}>Technology</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Engineering")}>Engineering</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Operations")}>Operations</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Marketing")}>Marketing</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="all">All Boards ({collaborationBoards.length})</TabsTrigger>
          <TabsTrigger value="active">
            Active ({collaborationBoards.filter((b) => b.status === "active").length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({collaborationBoards.filter((b) => b.status === "completed").length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredBoards.map((board) => (
              <Card key={board.id} className="flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{board.title}</CardTitle>
                    <Badge
                      className={
                        board.status === "active" ? "bg-primary text-primary-foreground" : "bg-green-100 text-green-800"
                      }
                    >
                      {board.status === "active" ? "Active" : "Completed"}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">{board.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Progress</span>
                        <span>{board.progress}%</span>
                      </div>
                      <Progress value={board.progress} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {board.members.slice(0, 4).map((member, index) => (
                          <Avatar key={index} className="border-2 border-background h-7 w-7">
                            <AvatarFallback>{member.initials}</AvatarFallback>
                          </Avatar>
                        ))}
                        {board.members.length > 4 && (
                          <Avatar className="border-2 border-background h-7 w-7">
                            <AvatarFallback>+{board.members.length - 4}</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{board.comments}</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <Users2 className="h-3 w-3 text-muted-foreground" />
                        <span>{board.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span>Due: {board.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3">
                  <Button variant="outline" className="w-full">
                    Open Board
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredBoards
              .filter((board) => board.status === "active")
              .map((board) => (
                <Card key={board.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{board.title}</CardTitle>
                      <Badge className="bg-primary text-primary-foreground">Active</Badge>
                    </div>
                    <CardDescription className="line-clamp-2">{board.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>{board.progress}%</span>
                        </div>
                        <Progress value={board.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {board.members.slice(0, 4).map((member, index) => (
                            <Avatar key={index} className="border-2 border-background h-7 w-7">
                              <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                          ))}
                          {board.members.length > 4 && (
                            <Avatar className="border-2 border-background h-7 w-7">
                              <AvatarFallback>+{board.members.length - 4}</AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            <span>{board.comments}</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          <Users2 className="h-3 w-3 text-muted-foreground" />
                          <span>{board.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span>Due: {board.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3">
                    <Button variant="outline" className="w-full">
                      Open Board
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredBoards
              .filter((board) => board.status === "completed")
              .map((board) => (
                <Card key={board.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{board.title}</CardTitle>
                      <Badge className="bg-green-100 text-green-800">Completed</Badge>
                    </div>
                    <CardDescription className="line-clamp-2">{board.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>{board.progress}%</span>
                        </div>
                        <Progress value={board.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {board.members.slice(0, 4).map((member, index) => (
                            <Avatar key={index} className="border-2 border-background h-7 w-7">
                              <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                          ))}
                          {board.members.length > 4 && (
                            <Avatar className="border-2 border-background h-7 w-7">
                              <AvatarFallback>+{board.members.length - 4}</AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            <span>{board.comments}</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          <Users2 className="h-3 w-3 text-muted-foreground" />
                          <span>{board.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span>Due: {board.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3">
                    <Button variant="outline" className="w-full">
                      View Results
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

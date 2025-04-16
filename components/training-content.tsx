"use client"

import { useState } from "react"
import { BookOpen, ChevronDown, Clock, Filter, Play, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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

const trainingVideos = [
  {
    id: 1,
    title: "Advanced LED Manufacturing Techniques",
    description: "Learn about the latest manufacturing processes for our energy-efficient bulbs",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xRqC8HSAfBloOOP8UQk2WwVLf0Y23u.png",
    duration: "45 mins",
    instructor: "Dr. Kgomotso Pule",
    category: "Manufacturing",
    dateAdded: "3 days ago",
    progress: 0,
    isNew: true,
  },
  {
    id: 2,
    title: "Solar Integration with LED Products",
    description: "Comprehensive guide on integrating solar panels with our LED lighting solutions",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vdGJgqt7YOkZXtj7UpWtmQyv7waYg9.png",
    duration: "60 mins",
    instructor: "Eng. Thabo Moyo",
    category: "Product Development",
    dateAdded: "1 week ago",
    progress: 75,
    isNew: false,
  },
  {
    id: 3,
    title: "Energy Efficiency Standards in Southern Africa",
    description: "Overview of energy efficiency regulations and standards across the region",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZPhxFjfMnkd4JJLU0d5HtxGPUyAxLH.png",
    duration: "30 mins",
    instructor: "Naledi Kgosi",
    category: "Compliance",
    dateAdded: "2 weeks ago",
    progress: 100,
    isNew: false,
  },
  {
    id: 4,
    title: "Smart Lighting Systems Installation",
    description: "Step-by-step guide to installing and configuring smart lighting systems",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DlagBBnxHAWXpGUFBkNJi1vF9q856Y.png",
    duration: "90 mins",
    instructor: "Eng. Lesedi Ndlovu",
    category: "Installation",
    dateAdded: "3 weeks ago",
    progress: 25,
    isNew: false,
  },
  {
    id: 5,
    title: "Marketing LED Products in Rural Communities",
    description: "Strategies for effective marketing and education in rural areas",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7h8tB5ur0casJ0vjH0e7pk4Hb1DBql.png",
    duration: "40 mins",
    instructor: "Boitumelo Tau",
    category: "Marketing",
    dateAdded: "1 month ago",
    progress: 0,
    isNew: false,
  },
]

export function TrainingContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredVideos = trainingVideos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || video.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Training Videos</h1>
          <p className="text-muted-foreground">Enhance your skills with our curated training content</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search training videos..."
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
                Category
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setCategoryFilter("all")}>All Categories</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("Manufacturing")}>Manufacturing</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("Product Development")}>
                  Product Development
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("Compliance")}>Compliance</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("Installation")}>Installation</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("Marketing")}>Marketing</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
          <TabsTrigger value="all">All Videos ({trainingVideos.length})</TabsTrigger>
          <TabsTrigger value="in-progress">
            In Progress ({trainingVideos.filter((v) => v.progress > 0 && v.progress < 100).length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({trainingVideos.filter((v) => v.progress === 100).length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="flex flex-col overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  {video.isNew && (
                    <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">NEW</Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{video.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{video.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{video.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{video.category}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3 flex flex-col gap-2">
                  <div className="w-full flex justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>{video.progress}%</span>
                  </div>
                  <Progress value={video.progress} className="h-2" />
                  <Button variant="outline" className="w-full mt-2">
                    {video.progress === 0
                      ? "Start Training"
                      : video.progress === 100
                        ? "Review Again"
                        : "Continue Training"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="in-progress" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos
              .filter((v) => v.progress > 0 && v.progress < 100)
              .map((video) => (
                <Card key={video.id} className="flex flex-col overflow-hidden">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                      <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{video.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{video.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{video.category}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex flex-col gap-2">
                    <div className="w-full flex justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{video.progress}%</span>
                    </div>
                    <Progress value={video.progress} className="h-2" />
                    <Button variant="outline" className="w-full mt-2">
                      Continue Training
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos
              .filter((v) => v.progress === 100)
              .map((video) => (
                <Card key={video.id} className="flex flex-col overflow-hidden">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                      <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{video.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{video.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{video.category}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex flex-col gap-2">
                    <div className="w-full flex justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{video.progress}%</span>
                    </div>
                    <Progress value={video.progress} className="h-2" />
                    <Button variant="outline" className="w-full mt-2">
                      Review Again
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

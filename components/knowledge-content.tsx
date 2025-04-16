"use client"

import { useState } from "react"
import { BarChart3, BookOpen, ChevronDown, Download, FileText, Filter, Search, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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

const knowledgeResources = [
  {
    id: 1,
    title: "LED Efficiency Comparison",
    description:
      "Research data on energy efficiency across product lines, including comparative analysis of power consumption and light output.",
    type: "research",
    format: "pdf",
    author: "Dr. Kgomotso Pule",
    department: "Engineering",
    dateAdded: "2 weeks ago",
    views: 124,
    downloads: 45,
    tags: ["efficiency", "research", "product-comparison"],
  },
  {
    id: 2,
    title: "Solar Integration Guide",
    description:
      "Technical documentation for integrating solar panels with LED lighting systems, including wiring diagrams and component specifications.",
    type: "technical",
    format: "pdf",
    author: "Eng. Thabo Moyo",
    department: "Product Development",
    dateAdded: "1 month ago",
    views: 98,
    downloads: 62,
    tags: ["solar", "technical", "installation"],
  },
  {
    id: 3,
    title: "Market Analysis: Southern Africa",
    description:
      "Comprehensive market research on lighting trends and opportunities across Southern African countries, with focus on rural electrification.",
    type: "market",
    format: "pptx",
    author: "Naledi Kgosi",
    department: "Marketing",
    dateAdded: "3 weeks ago",
    views: 156,
    downloads: 87,
    tags: ["market", "research", "southern-africa"],
  },
  {
    id: 4,
    title: "Emergency Lighting Standards",
    description:
      "Documentation of regulatory requirements and industry standards for emergency lighting products in Botswana and neighboring countries.",
    type: "compliance",
    format: "pdf",
    author: "Lesedi Ndlovu",
    department: "Compliance",
    dateAdded: "2 months ago",
    views: 76,
    downloads: 34,
    tags: ["compliance", "standards", "emergency-lighting"],
  },
  {
    id: 5,
    title: "Smart Lighting Technology Overview",
    description:
      "Introduction to IoT-enabled lighting solutions, including wireless control systems and integration with home automation platforms.",
    type: "technical",
    format: "pdf",
    author: "Kea Molefe",
    department: "Technology",
    dateAdded: "1 week ago",
    views: 112,
    downloads: 28,
    tags: ["smart-lighting", "IoT", "technology"],
  },
  {
    id: 6,
    title: "Rural Electrification Case Study",
    description:
      "Case study of successful LED lighting implementation in off-grid rural communities, including impact assessment and lessons learned.",
    type: "case-study",
    format: "docx",
    author: "Boitumelo Tau",
    department: "Operations",
    dateAdded: "1 month ago",
    views: 89,
    downloads: 41,
    tags: ["case-study", "rural", "implementation"],
  },
]

export function KnowledgeContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  const filteredResources = knowledgeResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesType = typeFilter === "all" || resource.type === typeFilter
    const matchesDepartment = departmentFilter === "all" || resource.department === departmentFilter

    return matchesSearch && matchesType && matchesDepartment
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "research":
        return <BarChart3 className="h-4 w-4" />
      case "technical":
        return <FileText className="h-4 w-4" />
      case "market":
        return <BarChart3 className="h-4 w-4" />
      case "compliance":
        return <BookOpen className="h-4 w-4" />
      case "case-study":
        return <FileText className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getFormatBadge = (format: string) => {
    switch (format) {
      case "pdf":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200">
            PDF
          </Badge>
        )
      case "pptx":
        return (
          <Badge variant="outline" className="bg-orange-50 text-orange-800 border-orange-200">
            PPTX
          </Badge>
        )
      case "docx":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
            DOCX
          </Badge>
        )
      default:
        return <Badge variant="outline">{format.toUpperCase()}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Knowledge Archive</h1>
          <p className="text-muted-foreground">Access research, documentation, and resources for innovation</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search knowledge resources..."
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
                Type
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setTypeFilter("all")}>All Types</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTypeFilter("research")}>Research</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTypeFilter("technical")}>Technical</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTypeFilter("market")}>Market</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTypeFilter("compliance")}>Compliance</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTypeFilter("case-study")}>Case Study</DropdownMenuItem>
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
                <DropdownMenuItem onClick={() => setDepartmentFilter("Engineering")}>Engineering</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Product Development")}>
                  Product Development
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Technology")}>Technology</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Marketing")}>Marketing</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Compliance")}>Compliance</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Operations")}>Operations</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-5 md:w-auto md:inline-flex">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="market">Market</TabsTrigger>
          <TabsTrigger value="case-study">Case Studies</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-2">{getTypeIcon(resource.type)}</div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                    {getFormatBadge(resource.format)}
                  </div>
                  <CardDescription className="mt-2 line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Author:</span>
                      <span>{resource.author}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Department:</span>
                      <span>{resource.department}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Added:</span>
                      <span>{resource.dateAdded}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {resource.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3 flex justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{resource.views} views</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="research" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources
              .filter((r) => r.type === "research")
              .map((resource) => (
                <Card key={resource.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-2">{getTypeIcon(resource.type)}</div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      {getFormatBadge(resource.format)}
                    </div>
                    <CardDescription className="mt-2 line-clamp-2">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Author:</span>
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Department:</span>
                        <span>{resource.department}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Added:</span>
                        <span>{resource.dateAdded}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {resource.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{resource.views} views</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="technical" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources
              .filter((r) => r.type === "technical")
              .map((resource) => (
                <Card key={resource.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-2">{getTypeIcon(resource.type)}</div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      {getFormatBadge(resource.format)}
                    </div>
                    <CardDescription className="mt-2 line-clamp-2">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Author:</span>
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Department:</span>
                        <span>{resource.department}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Added:</span>
                        <span>{resource.dateAdded}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {resource.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{resource.views} views</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="market" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources
              .filter((r) => r.type === "market")
              .map((resource) => (
                <Card key={resource.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-2">{getTypeIcon(resource.type)}</div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      {getFormatBadge(resource.format)}
                    </div>
                    <CardDescription className="mt-2 line-clamp-2">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Author:</span>
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Department:</span>
                        <span>{resource.department}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Added:</span>
                        <span>{resource.dateAdded}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {resource.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{resource.views} views</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="case-study" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources
              .filter((r) => r.type === "case-study")
              .map((resource) => (
                <Card key={resource.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-2">{getTypeIcon(resource.type)}</div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                      {getFormatBadge(resource.format)}
                    </div>
                    <CardDescription className="mt-2 line-clamp-2">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Author:</span>
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Department:</span>
                        <span>{resource.department}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Added:</span>
                        <span>{resource.dateAdded}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {resource.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{resource.views} views</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

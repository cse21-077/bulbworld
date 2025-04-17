"use client"

import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react"
import { ArrowUpDown, ChevronDown, Filter, LightbulbIcon, MessageSquare, Search, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
import Link from "next/link"
import { db } from "@/lib/firebase"; // Import Firestore
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { formatDistanceToNow } from 'date-fns';

// Add this interface near the top of the file
interface Idea {
  id: string | number;
  title: string;
  description: string;
  status: string;
  department: string;
  submittedBy: string;
  submittedDate: string | Date | { seconds: number; nanoseconds: number };
  votes: number;
  comments: number;
  tags: string[];
}

const dummyIdeas = [
  {
    id: 1,
    title: "Solar-Powered LED Street Lights",
    description:
      "Integrating solar panels with our LED street lights to reduce grid dependency and provide lighting in areas with unreliable electricity. This would be particularly beneficial for rural areas in Botswana.",
    status: "approved",
    department: "Product Development",
    submittedBy: "Thabo Moyo",
    submittedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    votes: 24,
    comments: 8,
    tags: ["solar", "street lights", "rural"],
  },
  {
    id: 2,
    title: "Smart Home Lighting App Integration",
    description:
      "Developing a mobile app to control our smart LED bulbs remotely, allowing users to adjust brightness, color, and set schedules. This would position us as a tech-forward lighting company in Southern Africa.",
    status: "in-review",
    department: "Technology",
    submittedBy: "Kea Molefe",
    submittedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
    votes: 18,
    comments: 5,
    tags: ["app", "smart home", "IoT"],
  },
  {
    id: 3,
    title: "Extended Battery Life for Emergency Lights",
    description:
      "Improving battery efficiency to extend emergency lighting from 9 to 12 hours during power outages, which are common in many parts of Botswana and neighboring countries.",
    status: "implemented",
    department: "Engineering",
    submittedBy: "Lesedi Ndlovu",
    submittedDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000), // 3 weeks ago
    votes: 32,
    comments: 12,
    tags: ["battery", "emergency", "power outage"],
  },
  {
    id: 4,
    title: "Eco-Friendly Packaging Initiative",
    description:
      "Transitioning to biodegradable packaging materials for all our LED products to reduce environmental impact and align with global sustainability trends.",
    status: "approved",
    department: "Operations",
    submittedBy: "Naledi Kgosi",
    submittedDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 1 month ago
    votes: 15,
    comments: 6,
    tags: ["eco-friendly", "packaging", "sustainability"],
  },
  {
    id: 5,
    title: "LED Educational Outreach Program",
    description:
      "Creating educational materials and workshops for schools to teach students about energy efficiency and LED technology, building brand awareness and contributing to community development.",
    status: "in-review",
    department: "Marketing",
    submittedBy: "Boitumelo Tau",
    submittedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 2 weeks ago
    votes: 12,
    comments: 4,
    tags: ["education", "community", "outreach"],
  },
  {
    id: 6,
    title: "Customizable LED Displays for Businesses",
    description:
      "Developing programmable LED display signs for businesses that can be easily customized through a simple interface, targeting the growing commercial sector in Botswana and Southern Africa.",
    status: "in-review",
    department: "Product Development",
    submittedBy: "Kea Molefe",
    submittedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    votes: 9,
    comments: 3,
    tags: ["business", "display", "commercial"],
  },
]

export function IdeasContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [ideas, setIdeas] = useState<Idea[]>([...dummyIdeas]); // Initialize with dummy ideas

  useEffect(() => {
    const fetchIdeas = async () => {
      const ideasCollectionRef = collection(db, "ideas");
      const q = query(ideasCollectionRef, orderBy("submittedDate", "desc"));

      try {
        const querySnapshot = await getDocs(q);
        const firestoreIdeas = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || '',
            description: data.description || '',
            status: data.status || '',
            department: data.department || '',
            submittedBy: data.submittedBy || '',
            submittedDate: data.submittedDate || new Date(),
            votes: data.votes || 0,
            comments: data.comments || 0,
            tags: data.tags || [],
          } as Idea;
        });
        setIdeas([...dummyIdeas, ...firestoreIdeas]);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    fetchIdeas();
  }, []);

  const filteredIdeas = ideas.filter((idea) => {
    const matchesSearch =
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (idea.tags && idea.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase())));

    const matchesStatus = statusFilter === "all" || idea.status === statusFilter
    const matchesDepartment = departmentFilter === "all" || idea.department === departmentFilter

    return matchesSearch && matchesStatus && matchesDepartment
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Approved</Badge>
      case "in-review":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In Review</Badge>
      case "implemented":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Implemented</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const formatDate = (date: string | Date | { seconds: number; nanoseconds: number }) => {
    try {
      if (typeof date === 'string') {
        return formatDistanceToNow(new Date(date), { addSuffix: true });
      } else if (date instanceof Date) {
        return formatDistanceToNow(date, { addSuffix: true });
      } else if (date && 'seconds' in date) {
        // Handle Firestore Timestamp
        return formatDistanceToNow(new Date(date.seconds * 1000), { addSuffix: true });
      }
      return 'unknown';
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'unknown';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Innovation Ideas</h1>
          <p className="text-muted-foreground">Browse, vote, and comment on ideas from across the company</p>
        </div>
        <Link href="/dashboard/submit">
          <Button className="bg-primary hover:bg-primary/90">
            <LightbulbIcon className="mr-2 h-4 w-4" />
            Submit New Idea
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search ideas by title, description, or tags..."
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
                <DropdownMenuItem onClick={() => setStatusFilter("approved")}>Approved</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("in-review")}>In Review</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("implemented")}>Implemented</DropdownMenuItem>
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
          <Button variant="outline" className="flex gap-2">
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex">
          <TabsTrigger value="all">All Ideas ({ideas.length})</TabsTrigger>
          <TabsTrigger value="approved">Approved ({ideas.filter((i) => i.status === "approved").length})</TabsTrigger>
          <TabsTrigger value="in-review">
            In Review ({ideas.filter((i) => i.status === "in-review").length})
          </TabsTrigger>
          <TabsTrigger value="implemented">
            Implemented ({ideas.filter((i) => i.status === "implemented").length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredIdeas.map((idea) => (
              <Card key={idea.id} className="flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{idea.title}</CardTitle>
                    {getStatusBadge(idea.status)}
                  </div>
                  <CardDescription className="flex items-center gap-2 text-xs">
                    <span>{idea.department}</span>
                    <span>•</span>
                    <span>Submitted {formatDate(idea.submittedDate)}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-4">{idea.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {idea.tags && Array.isArray(idea.tags) && idea.tags.map((tag: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3 flex justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">
                        {idea.submittedBy
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs">{idea.submittedBy}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="sr-only">Like</span>
                    </Button>
                    <span className="text-xs text-muted-foreground">{idea.votes}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MessageSquare className="h-4 w-4" />
                      <span className="sr-only">Comment</span>
                    </Button>
                    <span className="text-xs text-muted-foreground">{idea.comments}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="approved" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredIdeas
              .filter((idea) => idea.status === "approved")
              .map((idea) => (
                <Card key={idea.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{idea.title}</CardTitle>
                      {getStatusBadge(idea.status)}
                    </div>
                    <CardDescription className="flex items-center gap-2 text-xs">
                      <span>{idea.department}</span>
                      <span>•</span>
                      <span>Submitted {formatDate(idea.submittedDate)}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-4">{idea.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {idea.tags && Array.isArray(idea.tags) && idea.tags.map((tag: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">
                          {idea.submittedBy
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs">{idea.submittedBy}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <span className="text-xs text-muted-foreground">{idea.votes}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MessageSquare className="h-4 w-4" />
                        <span className="sr-only">Comment</span>
                      </Button>
                      <span className="text-xs text-muted-foreground">{idea.comments}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="in-review" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredIdeas
              .filter((idea) => idea.status === "in-review")
              .map((idea) => (
                <Card key={idea.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{idea.title}</CardTitle>
                      {getStatusBadge(idea.status)}
                    </div>
                    <CardDescription className="flex items-center gap-2 text-xs">
                      <span>{idea.department}</span>
                      <span>•</span>
                      <span>Submitted {formatDate(idea.submittedDate)}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-4">{idea.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {idea.tags && Array.isArray(idea.tags) && idea.tags.map((tag: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">
                          {idea.submittedBy
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs">{idea.submittedBy}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <span className="text-xs text-muted-foreground">{idea.votes}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MessageSquare className="h-4 w-4" />
                        <span className="sr-only">Comment</span>
                      </Button>
                      <span className="text-xs text-muted-foreground">{idea.comments}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="implemented" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredIdeas
              .filter((idea) => idea.status === "implemented")
              .map((idea) => (
                <Card key={idea.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{idea.title}</CardTitle>
                      {getStatusBadge(idea.status)}
                    </div>
                    <CardDescription className="flex items-center gap-2 text-xs">
                      <span>{idea.department}</span>
                      <span>•</span>
                      <span>Submitted {formatDate(idea.submittedDate)}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-4">{idea.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {idea.tags && Array.isArray(idea.tags) && idea.tags.map((tag: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">
                          {idea.submittedBy
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs">{idea.submittedBy}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <span className="text-xs text-muted-foreground">{idea.votes}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MessageSquare className="h-4 w-4" />
                        <span className="sr-only">Comment</span>
                      </Button>
                      <span className="text-xs text-muted-foreground">{idea.comments}</span>
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

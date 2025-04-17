"use client"

import { useState, useEffect } from "react"; // Import useState and useEffect
import { BarChart3, BookOpen, BrainCircuit, ChevronRight, LightbulbIcon, ThumbsUp, Trophy, Users2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { auth } from "@/lib/firebase"; // Import Firebase auth

export function DashboardContent() {
  const [userName, setUserName] = useState<string | null>("Kea"); // Initialize with a default name
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If the user is logged in, get their name from Firebase
        let name = user.displayName;
        if (!name && user.email) {
          name = user.email.split("@")[0]; // Extract username from email
        }
        setUserName(name || "User"); // Use extracted name or "User" as default
      } else {
        // If the user is not logged in, set the name to null
        setUserName(null);
      }
    });

    // Unsubscribe from the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {userName}!</h1>
          <p className="text-muted-foreground">Track your innovation journey and collaborate with your team.</p>
        </div>
        <Link href="/dashboard/submit">
          <Button className="bg-primary hover:bg-primary/90">
            <LightbulbIcon className="mr-2 h-4 w-4" />
            Submit New Idea
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Ideas</CardTitle>
            <LightbulbIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">3 approved, 2 in review, 2 implemented</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Collaboration Boards</CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 active, 1 completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Innovation Points</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-muted-foreground">Ranked #1 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Training Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <Progress value={85} className="h-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Innovation Ideas</CardTitle>
            <CardDescription>Latest ideas submitted across departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary/20 p-2">
                  <LightbulbIcon className="h-4 w-4 text-secondary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Solar-Powered LED Street Lights</p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Approved</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Integrating solar panels with our LED street lights to reduce grid dependency
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Submitted by: Thabo Moyo</span>
                    <span>2 days ago</span>
                    <span className="flex items-center">
                      <ThumbsUp className="mr-1 h-3 w-3" /> 24
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary/20 p-2">
                  <LightbulbIcon className="h-4 w-4 text-secondary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Smart Home Lighting App Integration</p>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In Review</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Developing a mobile app to control our smart LED bulbs remotely
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Submitted by: Kea Molefe</span>
                    <span>1 week ago</span>
                    <span className="flex items-center">
                      <ThumbsUp className="mr-1 h-3 w-3" /> 18
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary/20 p-2">
                  <LightbulbIcon className="h-4 w-4 text-secondary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Extended Battery Life for Emergency Lights</p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Implemented</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Improving battery efficiency to extend emergency lighting from 9 to 12 hours
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Submitted by: Lesedi Ndlovu</span>
                    <span>3 weeks ago</span>
                    <span className="flex items-center">
                      <ThumbsUp className="mr-1 h-3 w-3" /> 32
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/ideas">
              <Button variant="outline" className="w-full">
                View All Ideas
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Active Collaborations</CardTitle>
            <CardDescription>Teams working on innovation projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Rural Electrification Project</h4>
                  <Badge className="bg-primary text-primary-foreground">Active</Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Developing solar-powered LED solutions for rural areas
                </p>
                <div className="mt-3 flex -space-x-2">
                  <Avatar className="border-2 border-background h-7 w-7">
                    <AvatarFallback>KM</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-7 w-7">
                    <AvatarFallback>TM</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-7 w-7">
                    <AvatarFallback>LN</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-7 w-7">
                    <AvatarFallback>+2</AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2 mt-1" />
                </div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Smart Office Lighting</h4>
                  <Badge className="bg-primary text-primary-foreground">Active</Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Motion-sensing energy-efficient lighting for corporate clients
                </p>
                <div className="mt-3 flex -space-x-2">
                  <Avatar className="border-2 border-background h-7 w-7">
                    <AvatarFallback>KM</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-7 w-7">
                    <AvatarFallback>BT</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-7 w-7">
                    <AvatarFallback>+3</AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>42%</span>
                  </div>
                  <Progress value={42} className="h-2 mt-1" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/collaboration">
              <Button variant="outline" className="w-full">
                View All Collaborations
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Latest Training</CardTitle>
            <CardDescription>Recently added training videos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg overflow-hidden border">
              <div className="aspect-video bg-muted relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xRqC8HSAfBloOOP8UQk2WwVLf0Y23u.png"
                  alt="LED Training"
                  className="object-cover w-full h-full opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-primary/90 p-3">
                    <BookOpen className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-medium">Advanced LED Manufacturing Techniques</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Learn about the latest manufacturing processes for our energy-efficient bulbs
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span>Duration: 45 mins</span>
                  <span>Added: 3 days ago</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/training">
              <Button variant="outline" className="w-full">
                View All Training
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Innovation Stats</CardTitle>
            <CardDescription>Your contribution metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Ideas Submitted</p>
                <p className="text-2xl font-bold">7</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <BrainCircuit className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Ideas Implemented</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <div className="rounded-full bg-secondary/10 p-3">
                <LightbulbIcon className="h-5 w-5 text-secondary" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Collaborations</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <Users2 className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Detailed Stats
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Knowledge Archive</CardTitle>
            <CardDescription>Recently added resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">LED Efficiency Comparison</p>
                  <p className="text-xs text-muted-foreground">
                    Research data on energy efficiency across product lines
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Solar Integration Guide</p>
                  <p className="text-xs text-muted-foreground">Technical documentation for solar-powered lighting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Market Analysis: Southern Africa</p>
                  <p className="text-xs text-muted-foreground">
                    Lighting market trends and opportunities in the region
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/knowledge">
              <Button variant="outline" className="w-full">
                Browse Knowledge Base
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

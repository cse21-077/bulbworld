import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, BrainCircuit, FileText, Handshake, LightbulbIcon, Users2 } from "lucide-react"

export function QuickLinks() {
  return (
    <section id="quick-links" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Quick Links</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resources & Platforms</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Access our specialized platforms and resources designed to support our customers, partners, and team
              members.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-2">
                <LightbulbIcon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Innovation Hub</CardTitle>
              <CardDescription>
                Our collaborative platform for employees to share and develop innovative ideas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access our internal innovation management system where you can submit ideas, collaborate on projects,
                and track innovation initiatives.
              </p>
              <Link href="/login">
                <Button className="w-full group-hover:bg-primary/90 bg-primary">
                  Access Hub <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-2">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Technical documentation and resources for our products</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Find detailed specifications, installation guides, and troubleshooting information for all our LED
                lighting products.
              </p>
              <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                Browse Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-2">
                <Handshake className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Partner Portal</CardTitle>
              <CardDescription>Resources for distributors and installation partners</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access marketing materials, training resources, and order management tools designed for our distribution
                and installation partners.
              </p>
              <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                Partner Login <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-2">
                <BrainCircuit className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Training Academy</CardTitle>
              <CardDescription>Educational resources for employees and partners</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access our comprehensive training materials, including video tutorials, certification courses, and
                hands-on workshops for professional development.
              </p>
              <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-2">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Sustainability Reports</CardTitle>
              <CardDescription>Our environmental impact and sustainability initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                View our annual sustainability reports detailing our environmental initiatives, carbon footprint
                reduction efforts, and community impact projects.
              </p>
              <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                View Reports <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-2">
                <Users2 className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Careers Portal</CardTitle>
              <CardDescription>Join our team and grow your career with us</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Explore current job openings, internship opportunities, and learn about our company culture and employee
                benefits.
              </p>
              <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                Explore Careers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

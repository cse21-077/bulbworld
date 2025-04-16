import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Products</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Innovative LED Solutions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our range of energy-efficient LED lighting products designed for homes, businesses, and public
              spaces.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xRqC8HSAfBloOOP8UQk2WwVLf0Y23u.png"
                alt="LED Bulbs"
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">Popular</Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">LED Bulbs</h3>
              <p className="text-muted-foreground mb-4">
                Energy-efficient LED bulbs for residential and commercial use, available in various wattages and color
                temperatures.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vdGJgqt7YOkZXtj7UpWtmQyv7waYg9.png"
                alt="Street Lighting"
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Street Lighting</h3>
              <p className="text-muted-foreground mb-4">
                Durable, high-efficiency LED street lights designed for municipalities and public infrastructure
                projects.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZPhxFjfMnkd4JJLU0d5HtxGPUyAxLH.png"
                alt="Solar LED Solutions"
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">New</Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Solar LED Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Integrated solar-powered LED lighting systems for areas with limited or unreliable grid access.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DlagBBnxHAWXpGUFBkNJi1vF9q856Y.png"
                alt="Commercial Lighting"
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Commercial Lighting</h3>
              <p className="text-muted-foreground mb-4">
                Specialized LED lighting solutions for offices, retail spaces, and industrial environments.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7h8tB5ur0casJ0vjH0e7pk4Hb1DBql.png"
                alt="Emergency Lighting"
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Emergency Lighting</h3>
              <p className="text-muted-foreground mb-4">
                Reliable backup lighting systems with extended battery life for power outages and emergency situations.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xRqC8HSAfBloOOP8UQk2WwVLf0Y23u.png"
                alt="Smart Lighting Controls"
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">New</Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Smart Lighting Controls</h3>
              <p className="text-muted-foreground mb-4">
                IoT-enabled lighting control systems for enhanced energy efficiency and user convenience.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View Full Product Catalog
          </Button>
        </div>
      </div>
    </section>
  )
}

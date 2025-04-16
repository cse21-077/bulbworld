import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from businesses and organizations that have transformed their spaces with our LED lighting solutions.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground">GC</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Gaborone City Council</h3>
                  <p className="text-sm text-muted-foreground">Municipal Government</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                <p className="relative z-10 pl-4 italic text-muted-foreground">
                  "The Bulb World's LED street lighting has helped us reduce our energy consumption by 65% while
                  improving visibility and safety across the city. Their team provided exceptional support throughout
                  the project."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground">BM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Botswana Mining Corporation</h3>
                  <p className="text-sm text-muted-foreground">Mining Industry</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                <p className="relative z-10 pl-4 italic text-muted-foreground">
                  "We've seen significant improvements in worker safety and productivity since installing The Bulb
                  World's industrial LED lighting in our facilities. The durability and reliability of their products is
                  unmatched."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground">SR</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Serowe Rural Electrification Project</h3>
                  <p className="text-sm text-muted-foreground">Community Development</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                <p className="relative z-10 pl-4 italic text-muted-foreground">
                  "The solar LED solutions provided by The Bulb World have transformed our community. For the first
                  time, we have reliable lighting that doesn't depend on the grid, improving safety and enabling evening
                  activities."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground">RM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Riverwalk Mall</h3>
                  <p className="text-sm text-muted-foreground">Retail</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                <p className="relative z-10 pl-4 italic text-muted-foreground">
                  "The smart lighting system from The Bulb World has not only reduced our energy costs but also enhanced
                  the shopping experience for our customers. The ability to control lighting remotely has been a
                  game-changer for our operations."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

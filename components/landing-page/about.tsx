import { Award, Leaf, LightbulbIcon, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Vision & Values</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Bulb World is committed to providing high-quality, energy-efficient LED lighting solutions while
              fostering innovation and sustainable development across Africa.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <LightbulbIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Innovation</h3>
            <p className="text-center text-muted-foreground">
              We constantly strive to develop new and improved lighting technologies that meet the evolving needs of our
              customers.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Sustainability</h3>
            <p className="text-center text-muted-foreground">
              Our products are designed to minimize environmental impact while maximizing energy efficiency and
              longevity.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Quality</h3>
            <p className="text-center text-muted-foreground">
              We maintain the highest standards in our manufacturing processes to deliver reliable, durable lighting
              solutions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="rounded-full bg-primary/10 p-3">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Empowerment</h3>
            <p className="text-center text-muted-foreground">
              We are committed to creating jobs and developing skills within the communities we serve across Botswana
              and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

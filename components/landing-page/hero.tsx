import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZPhxFjfMnkd4JJLU0d5HtxGPUyAxLH.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="gradient-bg h-full w-full opacity-90 absolute inset-0"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Illuminating Africa with Sustainable LED Solutions
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-white/90 md:text-xl">
            The Bulb World is Botswana's premier LED lighting manufacturer, bringing energy-efficient and
            environmentally friendly lighting solutions to homes and businesses across Southern Africa.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/#products">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Explore Our Products
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Innovation Hub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

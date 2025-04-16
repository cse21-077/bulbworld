import { Hero } from "@/components/landing-page/hero"
import { About } from "@/components/landing-page/about"
import { Products } from "@/components/landing-page/products"
import { Testimonials } from "@/components/landing-page/testimonials"
import { QuickLinks } from "@/components/landing-page/quick-links"
import { Contact } from "@/components/landing-page/contact"
import { Footer } from "@/components/landing-page/footer"
import { Navbar } from "@/components/landing-page/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <QuickLinks />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

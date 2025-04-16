"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3qdyNbRPlG7RKaYZZkTep1DJgb2Y76.png"
              alt="The Bulb World Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="hidden font-semibold tracking-tight text-primary md:inline-block">THE BULB WORLD</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#about" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>
          <Link href="/#products" className="text-sm font-medium hover:text-primary">
            Products
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </Link>
          <Link href="/#quick-links" className="text-sm font-medium hover:text-primary">
            Quick Links
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Innovation Hub
            </Button>
          </Link>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3qdyNbRPlG7RKaYZZkTep1DJgb2Y76.png"
                  alt="The Bulb World Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-semibold tracking-tight text-primary">THE BULB WORLD</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
            <Link href="/#about" className="text-lg font-medium py-2 hover:text-primary" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/#products" className="text-lg font-medium py-2 hover:text-primary" onClick={toggleMenu}>
              Products
            </Link>
            <Link href="/#testimonials" className="text-lg font-medium py-2 hover:text-primary" onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link href="/#quick-links" className="text-lg font-medium py-2 hover:text-primary" onClick={toggleMenu}>
              Quick Links
            </Link>
            <Link href="/#contact" className="text-lg font-medium py-2 hover:text-primary" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="mt-4">
              <Link href="/login" onClick={toggleMenu}>
                <Button className="w-full bg-primary hover:bg-primary/90">Innovation Hub</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

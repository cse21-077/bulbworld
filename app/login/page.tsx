import { LoginForm } from "@/components/login-form"
import { Navbar } from "@/components/landing-page/navbar"
import { Footer } from "@/components/landing-page/footer"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <div className="flex items-center justify-center gap-2">
                <div className="relative h-10 w-10">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3qdyNbRPlG7RKaYZZkTep1DJgb2Y76.png"
                    alt="The Bulb World Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-primary">THE BULB WORLD</h2>
              </div>
            </Link>
            <h1 className="text-2xl font-bold mt-6 mb-2">Innovation Hub Login</h1>
            <p className="text-muted-foreground">
              Sign in to access the Innovation Hub.{" "}
              <Link href="/register" className="text-primary hover:underline">
                Create an account
              </Link>
            </p>
          </div>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
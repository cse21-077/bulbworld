import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions about our products or services? We're here to help.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 mt-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Headquarters</h3>
                  <p className="text-muted-foreground">
                    Plot 54321, Gaborone International Commerce Park
                    <br />
                    Gaborone, Botswana
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 mt-1">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    Sales: +267 3123 4567
                    <br />
                    Support: +267 3123 4568
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    Sales: sales@bulbworld.co.bw
                    <br />
                    Support: support@bulbworld.co.bw
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input placeholder="First Name" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Last Name" />
                </div>
              </div>
              <div className="space-y-2">
                <Input placeholder="Email" type="email" />
              </div>
              <div className="space-y-2">
                <Input placeholder="Phone Number" type="tel" />
              </div>
              <div className="space-y-2">
                <Input placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Your Message" className="min-h-[120px]" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

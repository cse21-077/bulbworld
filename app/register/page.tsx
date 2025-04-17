// filepath: app/register/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/firebase"; // Import Firebase auth
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import create user method
import Link from "next/link";
import { Navbar } from "@/components/landing-page/navbar";
import { Footer } from "@/components/landing-page/footer";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export default function CreateAccountPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [createSuccess, setCreateSuccess] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setCreateError(null); // Clear any previous errors
    try {
      // Firebase create user
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      // Set success state and redirect
      setCreateSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500); // Redirect after 1.5 seconds
    } catch (error: any) {
      // Handle Firebase errors
      console.error("Firebase create user error:", error.message);
      setCreateError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

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
            <h1 className="text-2xl font-bold mt-6 mb-2">Create Account</h1>
            <p className="text-muted-foreground">Create a new account to access the Innovation Hub</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </Form>

          {/* Error Dialog */}
          <Dialog open={createError !== null} onOpenChange={() => setCreateError(null)}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Account Creation Failed</DialogTitle>
                <DialogDescription>
                  {createError || "Failed to create account. Please try again."}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Success Dialog */}
          <Dialog open={createSuccess} onOpenChange={() => setCreateSuccess(false)}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Account Created Successfully</DialogTitle>
                <DialogDescription>
                  Your account has been created. Redirecting to dashboard...
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </main>
      <Footer />
    </div>
  );
}
"use client"

import type React from "react"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { useSidebar } from "@/components/sidebar-provider"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, isMobile } = useSidebar()

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className={`flex-1 overflow-auto transition-all duration-300 ${isOpen && !isMobile ? "ml-64" : "ml-0"}`}>
        <Header />
        <main className="p-4 md:p-6 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  )
}

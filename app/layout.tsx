"use client"

import "@/styles/globals.css"
import { useWatchTheme } from "@/context/theme"

import { cn } from "@/lib/utils"
import ThemeSwitch from "@/components/theme"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  useWatchTheme()
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn("flex min-h-screen flex-col antialiased")}
          style={{ background: "var(--semi-color-bg-1)" }}
        >
          <header
            className="h-[88px] w-full"
            style={{
              background: "var(--semi-color-fill-1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="m-auto flex h-full min-w-[768px] max-w-[1200px] items-center justify-between p-4">
              <h3 style={{ color: "var(--semi-color-primary)" }}>Wuyuan</h3>
              <ThemeSwitch />
            </div>
          </header>

          <div className="w-screen flex-1">
            <div className="m-auto h-full min-w-[768px] max-w-[1200px] p-4">
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  )
}

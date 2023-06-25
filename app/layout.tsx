"use client"

import "@/styles/globals.css"
import { useWatchTheme } from "@/context/theme"
import { cn } from "@/utils/cls"

import SearchBar from "@/components/movie/SearchBar"
import ThemeSwitch from "@/components/theme"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  useWatchTheme()

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn("flex min-h-full flex-col antialiased")}
          style={{ background: "var(--semi-color-bg-4)" }}
        >
          <header
            className="h-[88px] w-full"
            style={{
              background: "var(--semi-color-nav-bg)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="m-auto flex h-full min-w-[768px] max-w-[1200px] items-center justify-between p-4">
              <h3 style={{ color: "var(--semi-color-primary)" }}>Wuyuan</h3>
              <div className="flex flex-1 items-center justify-center px-8">
                <SearchBar />
              </div>
              <ThemeSwitch />
            </div>
          </header>

          <div className="w-full flex-1">
            <div className="m-auto h-full min-w-[768px] max-w-[1200px] p-4">
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  )
}

"use client"

import * as React from "react"
import { useTheme } from "@/context/theme"
import { IconMoon, IconSun } from "@douyinfe/semi-icons"
import { Button } from "@douyinfe/semi-ui"

import "./theme-icon.css"
import clsx from "clsx"

export function ThemeToggle() {
  const { setThemeMode, themeMode } = useTheme()

  const isDark = themeMode === "dark"

  return (
    <div
      className="relative h-4 w-4 cursor-pointer overflow-hidden rounded-full p-4"
      onClick={() => setThemeMode(isDark ? "light" : "dark")}
    >
      <IconMoon
        className={clsx("themeIcon themeIconMoon", {
          active: isDark,
        })}
        style={{ color: "rgba(var(--semi-teal-5), 1)" }}
      />
      <IconSun
        className={clsx("themeIcon themeIconSun", {
          active: !isDark,
        })}
        style={{ color: "rgba(var(--semi-orange-5), 1)" }}
      />
    </div>
  )
}

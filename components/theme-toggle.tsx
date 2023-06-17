"use client"

import * as React from "react"
import { useMemo } from "react"
import { ThemeColor, useTheme } from "@/context/theme"
import { IconMoon, IconSun } from "@douyinfe/semi-icons"
import { Badge, Radio, RadioGroup, Select, Tooltip } from "@douyinfe/semi-ui"

import "./theme-icon.css"
import clsx from "clsx"

export function ThemeToggle() {
  const { setThemeMode, themeMode } = useTheme()

  const isDark = themeMode === "dark"

  return (
    <Tooltip
      position="bottomLeft"
      trigger="hover"
      content={<ThemePrimarySelect />}
    >
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
    </Tooltip>
  )
}

function ThemePrimarySelect() {
  const { themeColor, setThemeColor } = useTheme()

  const colors = useMemo(
    () => ["blue", "indigo", "purple", "teal", "violet"],
    []
  )

  return (
    <RadioGroup
      value={themeColor}
      onChange={(e) => setThemeColor(e.target.value as ThemeColor)}
    >
      {colors.map((color) => (
        <Radio
          value={color}
          key={color}
          style={{
            border: "5px solid rgba(var(--semi-${color}-5), 1)",
            // background: `rgba(var(--semi-${color}-5), 1)`,
          }}
        ></Radio>
      ))}
    </RadioGroup>
  )
}

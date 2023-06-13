import { useMemo } from "react"
import { ThemeColor, useTheme } from "@/context/theme"
import { Badge, Select } from "@douyinfe/semi-ui"

import { ThemeToggle } from "./theme-toggle"

function ThemeSwitch() {
  const { themeColor, setThemeColor } = useTheme()

  const colors = useMemo(
    () => ["blue", "indigo", "purple", "teal", "violet"],
    []
  )
  return (
    <div className="flex items-center justify-end gap-4">
      <ThemeToggle />
      <Select
        placeholder="Select color"
        value={themeColor}
        onChange={(color) => setThemeColor(color as ThemeColor)}
      >
        {colors.map((color) => (
          <Select.Option key={color} value={color}>
            <Badge
              dot
              className="mr-2"
              style={{ background: `rgba(var(--semi-${color}-5), 1)` }}
            />
            {color}
          </Select.Option>
        ))}
      </Select>
    </div>
  )
}

export default ThemeSwitch

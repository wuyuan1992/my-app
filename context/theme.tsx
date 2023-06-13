"use client"

import { useEffect } from "react"
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

export type ThemeMode = "light" | "dark"
export type ThemeColor = "blue" | "indigo" | "purple" | "teal" | "violet"

interface ThemeState {
  themeMode: ThemeMode
  themeColor: ThemeColor
}

interface ThemeActions {
  setThemeMode: (themeMode: ThemeMode) => void
  setThemeColor: (themeColor: ThemeColor) => void
}

export const useTheme = create<ThemeState & ThemeActions>()(
  devtools(
    persist(
      (set) => ({
        themeMode: "dark",
        themeColor: "indigo",
        setThemeMode: (themeMode: ThemeMode) =>
          set((state) => ({ ...state, themeMode })),
        setThemeColor: (themeColor: ThemeColor) =>
          set((state) => ({ ...state, themeColor })),
      }),
      { name: "theme" }
    )
  )
)

export function useWatchTheme() {
  const { themeColor, themeMode } = useTheme()

  useEffect(() => {
    document.documentElement.setAttribute("data-theme-mode", themeMode)
    document.documentElement.setAttribute("data-theme-color", themeColor)
  }, [themeColor, themeMode])
}

// const Context = React.createContext(useTheme.getState())

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const store = useTheme()
//   return <Context.Provider value={store}>{children}</Context.Provider>
// }

"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      {theme === "dark" ? <Icons.Sun className="size-5" /> : <Icons.Moon className="size-5" />}
    </Button>
  )
}

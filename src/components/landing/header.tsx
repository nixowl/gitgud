import { useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { useWindowHeight } from "@/hooks/use-window-height"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

import { ToggleMenuButton } from "./toggle-menu-button"

const headerVariants = {
  initial: {
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
  },
  scrolled: {
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.25)",
    transition: { delay: 0.1 },
  },
}

export function Header() {
  const [active, setActive] = useState<string | null>(null)
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const windowHeight = useWindowHeight()

  return (
    <motion.header
      onMouseLeave={() => setActive(null)}
      className={cn(
        "fixed inset-x-0 top-0 z-20 mx-auto mt-4 flex w-[90%]  max-w-[80rem] justify-between rounded-2xl px-4 py-4 md:px-10",
        windowHeight > 20 && "border border-border bg-white/50 backdrop-blur-xl dark:bg-card/30"
      )}
      variants={headerVariants}
      initial="initial"
      animate={windowHeight > 20 ? "scrolled" : "initial"}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-medium">GitGut</h2>

      <div className="flex items-center gap-4">
        <nav className="hidden items-center justify-center gap-3 lg:flex">
          <HeaderMenuSection className="grid gap-1.5" setActive={setActive} active={active} label="Resources">
            {Array.from({ length: 4 }).map((_, i) => (
              <Button size="sm" variant="ghost" className="px-6" key={i}>
                Hello World
              </Button>
            ))}
          </HeaderMenuSection>
          <HeaderMenuSection className="grid grid-cols-2 gap-3" active={active} setActive={setActive} label="Blog">
            {Array.from({ length: 5 }).map((_, i) => (
              <HeaderImageItem
                title="amazing content"
                key={i}
                description="Hello world, I am amzing javascript developer, javascript is the best language after croatian, thank u"
              />
            ))}
          </HeaderMenuSection>
          <HeaderMenuSection className="grid gap-2" active={active} setActive={setActive} label="Pricing">
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i}>Todo pricing cards</span>
            ))}
          </HeaderMenuSection>
          <span className="font-medium">Sign In</span>
        </nav>
        <Link
          href="/sign-up"
          className={buttonVariants({
            size: "sm",
          })}
        >
          Sign Up
        </Link>
        <ToggleMenuButton onToggleMenu={() => setToggleMenu(!toggleMenu)} toggleMenu={toggleMenu} />
      </div>
    </motion.header>
  )
}

type HeaderMenuSectionProps = {
  setActive: (item: string) => void
  active: string | null
  label: string
  children?: ReactNode
  className?: string
}

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

function HeaderMenuSection({ setActive, active, label, children, className }: HeaderMenuSectionProps) {
  return (
    <div onMouseEnter={() => setActive(label)} className="relative">
      <motion.span
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {label}
      </motion.span>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === label && (
            <div className="absolute left-1/2 top-[calc(100%_+_1rem)] -translate-x-2/3">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl backdrop-blur-sm"
              >
                <motion.div layout className={cn("h-full w-max p-4", className)}>
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

type HeaderItemProps = {
  title: string
  description: string
}

function HeaderImageItem({ title, description }: HeaderItemProps) {
  return (
    <Link href={"/404"} className="flex gap-2 space-x-2">
      <Image src="/default-user.jpeg" width={100} height={100} alt={title} className="shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="max-w-[13rem] text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}

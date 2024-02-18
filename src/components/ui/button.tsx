import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Icons } from "../icons"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
       
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        default: "button-primary relative w-max rounded-lg text-[#f4f0ff] backdrop-blur-[8px] before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:size-full before:rounded-[inherit]  before:border before:border-[rgba(191,151,255,0.5)] before:transition-opacity before:duration-200 before:ease-cubic before:content-[''] after:absolute after:left-0 after:top-0 after:z-[-1] after:block after:size-full after:rounded-[inherit] after:border after:border-[rgba(191,151,255,0.6)] after:opacity-0 after:transition-opacity after:duration-200 after:ease-cubic after:content-[''] hover:before:opacity-0 hover:after:opacity-100"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type ButtonProps = {
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, isLoading, size, children, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {isLoading && <Icons.Spinner className="mr-2 size-4 animate-spin" />}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

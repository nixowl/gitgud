import Link from "next/link"
import { Icons } from "@/components/icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

export default function SignUpPage() {
  return (
    <main className="grid flex-1 place-content-center pb-12">
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "secondary",
            size: "sm",
          }),
          "absolute left-4 top-4"
        )}
      >
        <Icons.Left className="mr-2 size-4" />
        Back
      </Link>
      <div className="fixed right-4 top-4">
        <ThemeToggle />
        <p>I am just for testing here</p>
      </div>
      <div className="relative">
        <div className="absolute top-0 flex w-full justify-center">
          <div className="left-0 h-[1.5px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-slate-300 to-[rgba(17,17,17,0)] transition-all duration-1000 dark:via-slate-600" />
        </div>
        <div className="absolute bottom-0 flex w-full justify-center">
          <div className="left-0 h-[1.5px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-slate-300 to-[rgba(17,17,17,0)] transition-all duration-1000 dark:via-slate-600" />
        </div>
        <div className="grid min-w-80 rounded-md border border-border bg-card p-12 shadow-sm md:min-w-[38rem]">
          <h2 className="text-left text-2xl font-medium">GitGud</h2>
          <p className="text-muted-foreground ">Sign up to embrace new experiences</p>

          <div className="grid w-full grid-cols-3 gap-3 py-4">
            <Button variant="outline">
              <Icons.Workspace className="size-6" />
            </Button>
            <Button variant="outline">
              <Icons.Workspace className="size-6" />
            </Button>
            <Button variant="outline">
              <Icons.Workspace className="size-6" />
            </Button>
          </div>

          <div className="flex items-center gap-4 ">
            <span className="h-[1.5px] w-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-slate-300 to-[rgba(17,17,17,0)] transition-all duration-1000 dark:via-slate-700"></span>
            <span className="text-muted-foreground">or</span>
            <span className="h-[1.5px] w-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-slate-300 to-[rgba(17,17,17,0)] transition-all duration-1000 dark:via-slate-700"></span>
          </div>

          <form className="mt-2 grid gap-3">
            <div className="grid gap-2">
              <label>Username</label>
              <Input placeholder="JanaDoe" />
            </div>
            <div className="grid gap-2">
              <label>Email</label>
              <Input placeholder="janadoe@doe.com" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <label>Password</label>
                <p className="cursor-pointer text-sm text-muted-foreground hover:underline">Forgot password?</p>
              </div>
              <Input placeholder="************" />
            </div>
            <div className="grid gap-2">
              <label>Repeat Password</label>
              <Input placeholder="************" />
            </div>

            <Button className="mt-4 w-full">Sign Up</Button>
          </form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?
            <Link href="/sign-in" className="ml-1 text-foreground underline underline-offset-1">
              Sign In
            </Link>
          </p>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            By signing up, you agree to our
            <Link href="/terms" className="mx-1 text-xs text-foreground underline underline-offset-1">
              Terms of Service
            </Link>
            and
            <Link href="/privacy" className="mx-1 text-xs text-foreground underline underline-offset-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

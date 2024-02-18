import { Header } from "@/components/landing/header"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ui/theme-toggle"



export default function HomePage() {

  return (
    <>
        {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
        <div className="absolute inset-0 -z-10 size-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px] lg:bg-[size:96px_96px]">
         <div className="absolute inset-x-0 top-0 -z-10 m-auto size-[310px] rounded-full bg-primary opacity-20 blur-[100px]" />
        </div>

      <Header />
      <main className="container mx-auto mt-32 grid flex-1 gap-4 lg:mt-52">
      <Badge variant="landing">
            v0.1 version 
          </Badge>
          <div className="relative flex w-full rounded-md md:items-center md:justify-center">

      <div className=" relative z-10  mx-auto w-full max-w-7xl p-4">
        <h1 className="bg-gradient-to-t from-[#c7d2fe] to-primary bg-clip-text text-center text-4xl text-transparent lg:text-7xl">
        GitGud unique way to build <br/> your community
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-lg text-muted-foreground">
          We are a community of developers, designers and creators who are passionate about building and learning new things. Copilot has amazing imagination and creativity, Danke.
        </p>
      </div>
    </div>
          <ThemeToggle />
        {/*Array.from({ length: 100 }).map((_, i) => (
          <Button key={i} variant="destructive" size="sm" className="px-10" >
            Button
          </Button>
        )) */}

        <div className="min-h-[2000px]" />
      </main>
      <footer>footer</footer>

    </>
  )
}

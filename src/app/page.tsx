import { ThemeToggle } from "@/components/ui/themetoggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="px-4 py-2 flex items-center justify-center bg-background">
        <p className="">header</p>
      </header>
      <main className="flex-1 flex items-center justify-center mx-auto">
        <p className="text-accent-foreground">main</p>
      </main>
      <footer className="px-4 py-2 flex justify-between bg-background">
        <div className="z-50 flex size-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
          <div className="block sm:hidden">xs</div>
          <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
            sm
          </div>
          <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">
            md
          </div>
          <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
          <div className="hidden xl:block 2xl:hidden">xl</div>
          <div className="hidden 2xl:block">2xl</div>
        </div>

        <ThemeToggle />
      </footer>
    </>
  );
}

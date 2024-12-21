import { HomeIcon, File, UsersRound, LogOut } from "lucide-react";
import Link from "next/link";
import NavButton from "@/components/Header/NavButton";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ModeToggle } from "../Theme/ModeToggle";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div aria-description="left side" className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Computer Repair Shop
            </h1>
          </Link>
        </div>

        <div aria-description="right side" className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customers" icon={UsersRound} />
          <div className="ml-4">
            <ModeToggle />

            <Button
              asChild
              variant="ghost"
              title="LogOut"
              size="icon"
              className="rounded-full"
            >
              <LogoutLink>
                <LogOut />
              </LogoutLink>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

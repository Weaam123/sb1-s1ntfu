"use client"

import { Scale } from "lucide-react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { WalletConnect } from "@/components/wallet-connect"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  
  // Don't render header on login page
  if (pathname === "/login") return null

  return (
    <header className="border-b border-neutral-800 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Scale className="h-8 w-8 text-[#FFD700]" />
          <span className="font-playfair text-2xl font-bold text-white">
            Althahab<span className="text-[#FFD700]">™</span>
          </span>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  "text-neutral-300 hover:text-white hover:bg-neutral-800"
                )}
              >
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  "text-neutral-300 hover:text-white hover:bg-neutral-800"
                )}
              >
                Vault
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  "text-neutral-300 hover:text-white hover:bg-neutral-800"
                )}
              >
                Trade
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <WalletConnect />
      </div>
    </header>
  )
}
"use client"

import { useState } from "react"
import { Scale } from "lucide-react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { useConnect } from "wagmi"
import { injected } from "wagmi/connectors"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { connect, error } = useConnect()

  const handleTraditionalLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Implement your traditional login logic here
      toast.success("Login successful!")
      router.push("/")
    } catch (error) {
      toast.error("Invalid credentials")
    } finally {
      setIsLoading(false)
    }
  }

  const handleWeb3Login = async () => {
    try {
      setIsLoading(true)
      if (typeof window.ethereum === 'undefined') {
        toast.error('MetaMask not detected. Please install MetaMask first.')
        return
      }
      await connect({ 
        connector: injected(),
        chainId: 1 // Ethereum mainnet
      })
      toast.success("Wallet connected successfully!")
      router.push("/")
    } catch (err) {
      console.error('Connection error:', err)
      toast.error(error?.message || 'Failed to connect wallet')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r border-neutral-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610375461246-83df859d849d')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black to-black/50" />
        <div className="relative z-20 flex items-center gap-2">
          <Scale className="h-8 w-8 text-[#FFD700]" />
          <span className="font-playfair text-2xl font-bold">
            Althahab<span className="text-[#FFD700]">™</span>
          </span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg font-playfair">
              "The modern way to invest in gold. Secure, transparent, and efficient."
            </p>
            <footer className="text-sm">Althahab Gold Trading Platform</footer>
          </blockquote>
        </div>
      </div>
      <div className="p-4 lg:p-8 h-full flex items-center">
        <Card className="mx-auto flex w-full flex-col justify-center space-y-6 border-neutral-800 bg-black/50 sm:w-[350px] p-8">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-playfair text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to access your gold vault
            </p>
          </div>
          <form onSubmit={handleTraditionalLogin}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-neutral-800 bg-black/30"
                  disabled={isLoading}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-neutral-800 bg-black/30"
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit"
                disabled={isLoading}
                className="bg-[#FFD700] text-black hover:bg-[#FDB931]"
              >
                {isLoading ? (
                  <>
                    <Scale className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={handleWeb3Login}
            className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
          >
            {isLoading ? (
              <>
                <Scale className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <img 
                  src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
                  alt="MetaMask"
                  className="mr-2 h-4 w-4"
                />
                MetaMask
              </>
            )}
          </Button>
          <p className="px-8 text-center text-sm text-muted-foreground">
            <a 
              href="/register" 
              className="hover:text-[#FFD700] underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </a>
          </p>
        </Card>
      </div>
    </div>
  )
}
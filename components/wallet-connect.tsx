"use client"

import { useState, useEffect } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { Button } from '@/components/ui/button'
import { Loader2, Wallet } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export function WalletConnect() {
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { address, isConnected } = useAccount()
  const { connect, error } = useConnect()
  const { disconnect } = useDisconnect()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleConnect = async (type: 'metamask' | 'social') => {
    try {
      setIsLoading(true)
      if (type === 'metamask') {
        // Check if window is defined (client-side)
        if (typeof window !== 'undefined' && typeof (window as any).ethereum === 'undefined') {
          toast.error('MetaMask not detected. Please install MetaMask first.')
          return
        }
        await connect({ 
          connector: injected(),
          chainId: 1 // Ethereum mainnet
        })
        toast.success('Wallet connected successfully!')
      } else {
        toast.error('Social login coming soon')
      }
    } catch (err) {
      console.error('Connection error:', err)
      toast.error(error?.message || 'Failed to connect wallet')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDisconnect = async () => {
    try {
      await disconnect()
      toast.success('Wallet disconnected')
      router.push('/login')
    } catch (err) {
      toast.error('Error disconnecting wallet')
    }
  }

  // Don't render anything until mounted to prevent hydration errors
  if (!mounted) return null

  if (isConnected) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
          >
            <Wallet className="mr-2 h-4 w-4" />
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Wallet Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            className="flex justify-between"
            onClick={() => {
              if (address) {
                navigator.clipboard.writeText(address)
                toast.success('Address copied to clipboard')
              }
            }}
          >
            Copy Address
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => window.open(`https://etherscan.io/address/${address}`, '_blank')}
          >
            View on Etherscan
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            onClick={handleDisconnect}
            className="text-red-500 focus:text-red-500"
          >
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  if (isLoading) {
    return (
      <Button 
        disabled 
        variant="outline"
        className="border-[#FFD700] text-[#FFD700]"
      >
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Connecting...
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
        >
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem 
          onClick={() => handleConnect('metamask')}
          className="flex items-center"
        >
          <img 
            src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
            alt="MetaMask"
            className="mr-2 h-4 w-4"
          />
          MetaMask
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleConnect('social')}
          className="flex items-center"
        >
          <img 
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google"
            className="mr-2 h-4 w-4"
          />
          Login with Google
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
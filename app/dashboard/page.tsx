"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAccount } from "wagmi"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import VaultSection from "@/components/dashboard/vault-section"
import TradeSection from "@/components/dashboard/trade-section"
import { toast } from "sonner"

export default function DashboardPage() {
  const { isConnected } = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (!isConnected) {
      toast.error("Please connect your wallet first")
      router.push("/login")
    }
  }, [isConnected, router])

  if (!isConnected) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <VaultSection />
        <TradeSection />
      </div>
    </div>
  )
}
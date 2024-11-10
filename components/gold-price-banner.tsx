"use client"

import { ArrowDownIcon, ArrowUpIcon, LineChart } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function GoldPriceBanner() {
  return (
    <Card className="border-neutral-800 bg-black/50 p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-neutral-400">Gold Spot Price</h2>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-3xl font-bold text-white">$2,367.40</span>
            <span className="flex items-center text-sm font-medium text-green-500">
              <ArrowUpIcon className="h-4 w-4" />
              2.3%
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-medium text-neutral-400">24h Volume</h2>
          <div className="font-mono text-2xl font-bold text-white">$1.2B</div>
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-medium text-neutral-400">24h High</h2>
          <div className="font-mono text-2xl font-bold text-white">$2,375.80</div>
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-medium text-neutral-400">24h Low</h2>
          <div className="font-mono text-2xl font-bold text-white">$2,358.20</div>
        </div>
      </div>

      <div className="mt-6 h-[200px] w-full">
        <div className="flex h-full items-center justify-center text-neutral-500">
          <LineChart className="h-8 w-8" />
          <span className="ml-2">Price chart coming soon</span>
        </div>
      </div>
    </Card>
  )
}
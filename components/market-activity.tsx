"use client"

import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  {
    id: 1,
    type: "buy",
    amount: "500g",
    price: 31250.00,
    time: "2 minutes ago"
  },
  {
    id: 2,
    type: "sell",
    amount: "200g",
    price: 12480.00,
    time: "5 minutes ago"
  },
  {
    id: 3,
    type: "buy",
    amount: "1000g",
    price: 62500.00,
    time: "12 minutes ago"
  },
  {
    id: 4,
    type: "sell",
    amount: "400oz",
    price: 89432.80,
    time: "15 minutes ago"
  }
]

export default function MarketActivity() {
  return (
    <Card className="border-neutral-800 bg-black/50">
      <CardHeader>
        <CardTitle className="font-playfair text-2xl">Market Activity</CardTitle>
        <CardDescription>Recent trading activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between rounded-lg border border-neutral-800 bg-black/30 p-4"
            >
              <div className="flex items-center gap-3">
                {activity.type === "buy" ? (
                  <ArrowUpIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5 text-red-500" />
                )}
                <div>
                  <div className="font-medium text-white">
                    {activity.type === "buy" ? "Buy" : "Sell"} {activity.amount}
                  </div>
                  <div className="text-sm text-neutral-400">{activity.time}</div>
                </div>
              </div>
              <div className="font-mono text-lg font-bold text-white">
                ${activity.price.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
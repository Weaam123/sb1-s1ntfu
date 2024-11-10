import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TradeSection() {
  return (
    <Card className="border-neutral-800 bg-black/50">
      <CardHeader>
        <CardTitle className="font-playfair text-2xl">Trade Gold</CardTitle>
        <CardDescription>Buy and sell tokenized gold</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buy" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>
          <TabsContent value="buy" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Amount (g)</Label>
                <Input 
                  type="number" 
                  placeholder="Enter amount in grams"
                  className="border-neutral-800 bg-black/30"
                />
              </div>
              <div className="grid gap-2">
                <Label>Total Price (USD)</Label>
                <Input 
                  type="number"
                  readOnly
                  value="0.00"
                  className="border-neutral-800 bg-black/30"
                />
              </div>
              <Button 
                className="w-full bg-[#FFD700] text-black hover:bg-[#FDB931]"
              >
                Buy Gold
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="sell" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Amount (g)</Label>
                <Input 
                  type="number" 
                  placeholder="Enter amount in grams"
                  className="border-neutral-800 bg-black/30"
                />
              </div>
              <div className="grid gap-2">
                <Label>Total Price (USD)</Label>
                <Input 
                  type="number"
                  readOnly
                  value="0.00"
                  className="border-neutral-800 bg-black/30"
                />
              </div>
              <Button 
                variant="destructive"
                className="w-full"
              >
                Sell Gold
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <h3 className="mb-4 text-sm font-medium">Recent Transactions</h3>
          <div className="space-y-4">
            {[
              { type: "buy", amount: "500g", price: 31250.00, time: "2 minutes ago" },
              { type: "sell", amount: "200g", price: 12480.00, time: "5 minutes ago" },
            ].map((tx, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-neutral-800 bg-black/30 p-4"
              >
                <div className="flex items-center gap-3">
                  {tx.type === "buy" ? (
                    <ArrowUpIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <ArrowDownIcon className="h-5 w-5 text-red-500" />
                  )}
                  <div>
                    <div className="font-medium text-white">
                      {tx.type === "buy" ? "Buy" : "Sell"} {tx.amount}
                    </div>
                    <div className="text-sm text-neutral-400">{tx.time}</div>
                  </div>
                </div>
                <div className="font-mono text-lg font-bold text-white">
                  ${tx.price.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
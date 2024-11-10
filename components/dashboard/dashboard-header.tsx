import { Scale, TrendingUp, Vault } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardHeader() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="vault">Vault</TabsTrigger>
        <TabsTrigger value="trade">Trade</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-neutral-800 bg-black/50 p-6">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-[#FFD700]" />
              <div>
                <p className="text-sm text-neutral-400">Total Balance</p>
                <p className="text-2xl font-bold">$154,667.50</p>
              </div>
            </div>
          </Card>
          <Card className="border-neutral-800 bg-black/50 p-6">
            <div className="flex items-center gap-2">
              <Vault className="h-8 w-8 text-[#FFD700]" />
              <div>
                <p className="text-sm text-neutral-400">Gold Holdings</p>
                <p className="text-2xl font-bold">2.5 kg</p>
              </div>
            </div>
          </Card>
          <Card className="border-neutral-800 bg-black/50 p-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-[#FFD700]" />
              <div>
                <p className="text-sm text-neutral-400">24h Change</p>
                <p className="text-2xl font-bold text-green-500">+2.3%</p>
              </div>
            </div>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
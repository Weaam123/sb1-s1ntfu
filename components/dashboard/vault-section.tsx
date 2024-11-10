import { Shield, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const vaultItems = [
  {
    id: "HLCG-1000-001",
    weight: "1000g",
    purity: "999.9",
    location: "Dubai Gold Vault",
    value: 65234.50,
    lastAudit: "2024-03-20",
    verified: true,
  },
  {
    id: "HLCG-400-002",
    weight: "400oz",
    purity: "999.9",
    location: "Singapore Gold Vault",
    value: 89432.80,
    lastAudit: "2024-03-19",
    verified: true,
  }
]

export default function VaultSection() {
  return (
    <Card className="border-neutral-800 bg-black/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-playfair text-2xl">Secured Gold Vault</CardTitle>
          <CardDescription>Your tokenized physical gold holdings</CardDescription>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline"
              className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
            >
              Add Gold
            </Button>
          </DialogTrigger>
          <DialogContent className="border-neutral-800 bg-black/95">
            <DialogHeader>
              <DialogTitle>Add Gold to Vault</DialogTitle>
              <DialogDescription>
                Choose how you want to add gold to your vault
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <Button variant="outline" className="h-20 border-neutral-800">
                Purchase New Gold
              </Button>
              <Button variant="outline" className="h-20 border-neutral-800">
                Transfer Existing Gold
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {vaultItems.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-neutral-800 bg-black/30 p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-mono text-lg font-bold text-[#FFD700]">
                      {item.id}
                    </h3>
                    {item.verified ? (
                      <ShieldCheck className="h-5 w-5 text-green-500" />
                    ) : (
                      <Shield className="h-5 w-5 text-yellow-500" />
                    )}
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <div>
                      <span className="text-neutral-400">Weight:</span>{" "}
                      <span className="font-medium text-white">{item.weight}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Purity:</span>{" "}
                      <span className="font-medium text-white">{item.purity}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Location:</span>{" "}
                      <span className="font-medium text-white">{item.location}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Last Audit:</span>{" "}
                      <span className="font-medium text-white">{item.lastAudit}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xl font-bold text-white">
                    ${item.value.toLocaleString()}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
                  >
                    Transfer
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
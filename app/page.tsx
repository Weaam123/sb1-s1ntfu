import GoldPriceBanner from "@/components/gold-price-banner"
import VaultOverview from "@/components/vault-overview"
import MarketActivity from "@/components/market-activity"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <GoldPriceBanner />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <VaultOverview />
        <MarketActivity />
      </div>
    </div>
  )
}
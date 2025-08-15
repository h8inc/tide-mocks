import { MobileHeader } from "@/components/features/cash-flow/MobileHeader"
import { TilesGallery, defaultTiles } from "@/components/features/cash-flow/TilesGallery"
import { ToggleCard } from "@/components/features/cash-flow/ToggleCard"
import { ContentCard } from "@/components/features/cash-flow/ContentCard"

export default function CashFlowPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* iPhone Frame */}
      <div className="mx-auto max-w-sm">
        <div className="relative mx-auto">
          {/* Top Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>

          {/* Main Frame */}
          <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
            {/* Screen - Capped at 812px height with scrolling */}
            <div className="bg-background rounded-[2.5rem] overflow-hidden h-[812px]">
              {/* Scrollable Content Container */}
              <div className="h-full overflow-y-auto scrollbar-hide">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 pt-2 pb-1 text-xs font-medium text-black">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-3 bg-black rounded-sm"></div>
                      <div className="w-1 h-3 bg-black rounded-sm"></div>
                      <div className="w-1 h-3 bg-black rounded-sm"></div>
                      <div className="w-1 h-3 bg-black rounded-sm"></div>
                    </div>
                    <div className="w-4 h-2 border border-black rounded-sm"></div>
                    <span>99</span>
                  </div>
                </div>

                {/* Content */}
                {/* Mobile Header */}
                <MobileHeader />

                {/* Spacing after header */}
                <div className="h-4"></div>

                {/* Tiles Gallery */}
                <TilesGallery tiles={defaultTiles} />

                {/* Spacing after tiles gallery */}
                <div className="h-4"></div>

                {/* Toggle Card with Money Movements/Balance Tracker */}
                <ToggleCard />

                {/* Spacing after toggle card */}
                <div className="h-4"></div>

                {/* New Content Card */}
                <ContentCard />

                {/* Spacing after content card */}
                <div className="h-4"></div>

                {/* Bottom spacing for scroll */}
                <div className="h-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import React from "react"
import { MobileHeader } from "@/components/features/cash-flow/MobileHeader"
import { TilesGallery, defaultTiles } from "@/components/features/cash-flow/TilesGallery"
import { ToggleCard } from "@/components/features/cash-flow/ToggleCard"
import { ContentCard } from "@/components/features/cash-flow/ContentCard"


export default function CashFlowPage() {
  const [selectedPeriod, setSelectedPeriod] = React.useState("Aug")
  const [months] = React.useState([
    { label: "Apr", isCurrent: false, isFuture: false },
    { label: "May", isCurrent: false, isFuture: false },
    { label: "Jun", isCurrent: false, isFuture: false },
    { label: "Jul", isCurrent: false, isFuture: false },
    { label: "Aug", isCurrent: true, isFuture: false },
    { label: "Sep", isCurrent: false, isFuture: true }
  ])

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      {/* Mobile Content - Hidden on larger screens */}
      <div className="md:hidden">
        {/* Content directly on mobile */}
        <div className="px-4">
          {/* Mobile Header */}
          <MobileHeader />

          {/* Spacing after header */}
          <div className="h-2"></div>

          {/* Tiles Gallery */}
          <TilesGallery tiles={defaultTiles} />

          {/* Spacing after tiles gallery */}
          <div className="h-4"></div>

          {/* Toggle Card with Money Movements/Balance Tracker */}
          <ToggleCard selectedPeriod={selectedPeriod} onPeriodChange={setSelectedPeriod} months={months} />

          {/* Spacing after toggle card */}
          <div className="h-4"></div>

          {/* Money Movements Content Card */}
          <ContentCard selectedPeriod={selectedPeriod} months={months} />

          {/* Bottom spacing */}
          <div className="h-8"></div>
        </div>
      </div>

      {/* iPhone Frame - Hidden on mobile, shown on tablet and up */}
      <div className="hidden md:block mx-auto max-w-sm">
        <div className="relative mx-auto">
          {/* Top Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>

          {/* Main Frame */}
          <div className="relative bg-black rounded-[3rem] p-1.5 shadow-2xl">
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
                <div className="h-2"></div>

                {/* Tiles Gallery */}
                <TilesGallery tiles={defaultTiles} />

                {/* Spacing after tiles gallery */}
                <div className="h-4"></div>

                {/* Toggle Card with Money Movements/Balance Tracker */}
                <ToggleCard selectedPeriod={selectedPeriod} onPeriodChange={setSelectedPeriod} months={months} />

                {/* Spacing after toggle card */}
                <div className="h-4"></div>

                {/* Money Movements Content Card */}
                <ContentCard selectedPeriod={selectedPeriod} months={months} />

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

"use client"

import React, { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleCard() {
  const [activeTab, setActiveTab] = useState("money-movements")

  return (
    <div className="mx-4">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        {/* Toggle Group */}
        <div className="mb-6">
          <ToggleGroup
            type="single"
            value={activeTab}
            onValueChange={(value) => value && setActiveTab(value)}
            className="grid grid-cols-2 w-full"
          >
            <ToggleGroupItem
              value="money-movements"
              className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700 data-[state=on]:font-medium rounded-l-lg rounded-r-none border-r-0 transition-all duration-200"
            >
              Money movements
            </ToggleGroupItem>
            <ToggleGroupItem
              value="balance-tracker"
              className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700 data-[state=on]:font-medium rounded-l-lg rounded-r-none border-l-0 transition-all duration-200"
            >
              Balance tracker
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Content Area */}
        <div className="min-h-[8rem]">
          {activeTab === "money-movements" ? (
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-2 gap-2">
                {/* Money In Card */}
                <div className="bg-transparent rounded-xl py-4 px-2 border border-[#9FBDFF] shadow-sm flex flex-col items-center justify-center">
                  <h4 className="text-[12px] font-figtree text-[#282B3A] mb-3 text-center tracking-wide">
                    Received Money In
                  </h4>
                  <div className="space-y-3 text-center">
                    <div>
                      <div className="text-[16px] font-figtree font-semibold text-teal-600">
                        £2,500.00
                      </div>
                    </div>
                    <div className="border-t border-[#9FBDFF] pt-3">
                      <div className="text-[12px] font-figtree text-[#282B3A] mb-3 tracking-wide">
                        Expected Money In
                      </div>
                      <div className="text-[16px] font-figtree font-semibold text-teal-600">
                        £2,500.00
                      </div>
                    </div>
                  </div>
                </div>

                {/* Money Out Card */}
                <div className="bg-transparent rounded-xl py-4 px-2 border border-[#9FBDFF] shadow-sm flex flex-col items-center justify-center">
                  <h4 className="text-[12px] font-figtree text-[#282B3A] mb-3 text-center tracking-wide">
                    Paid Money Out
                  </h4>
                  <div className="space-y-3 text-center">
                    <div>
                      <div className="text-[16px] font-figtree font-semibold text-orange-600">
                        £2,500.00
                      </div>
                    </div>
                    <div className="border-t border-[#9FBDFF] pt-3">
                      <div className="text-[12px] font-figtree text-[#282B3A] mb-3 tracking-wide">
                        Expected Money Out
                      </div>
                      <div className="text-[16px] font-figtree font-semibold text-orange-600">
                        £2,500.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center text-gray-500">
                <p className="text-sm">Balance tracker content will be added here</p>
                <p className="text-xs mt-1">This will show balance tracking and projections</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

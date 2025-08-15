"use client"

import React, { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleCard() {
  const [activeTab, setActiveTab] = useState("money-movements")

  return (
    <div className="mx-4">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        {/* Toggle Group */}
        <div className="mb-4">
          <ToggleGroup
            type="single"
            value={activeTab}
            onValueChange={(value) => value && setActiveTab(value)}
            className="grid grid-cols-2 w-full"
          >
            <ToggleGroupItem
              value="money-movements"
              className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700 data-[state=on]:font-medium rounded-l-lg rounded-r-none border-r-0"
            >
              Money movements
            </ToggleGroupItem>
            <ToggleGroupItem
              value="balance-tracker"
              className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700 data-[state=on]:font-medium rounded-l-lg rounded-r-none border-l-0"
            >
              Balance tracker
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Content Area */}
        <div className="min-h-[8rem]">
          {activeTab === "money-movements" ? (
            <div className="space-y-4">
              <div className="text-center text-gray-500">
                <p className="text-sm">Money movements content will be added here</p>
                <p className="text-xs mt-1">This will show incoming and outgoing money flows</p>
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

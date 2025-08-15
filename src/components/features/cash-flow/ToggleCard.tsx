"use client"

import React, { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleCard() {
  const [activeTab, setActiveTab] = useState("money-movements")
  const [selectedPeriod, setSelectedPeriod] = useState("Aug")

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
        <div className="min-h-[12rem]">
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
                      <div className="text-[16px] font-figtree font-semibold text-teal-600 leading-tight">
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
                      <div className="text-[16px] font-figtree font-semibold text-orange-600 leading-tight">
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

              {/* Bar Chart */}
              <div className="mt-6">
                
                {/* Chart Container */}
                <div className="relative">
                  {/* Legend */}
                  <div className="flex justify-center gap-6 mb-4 text-[10px] font-figtree">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#56CCCC] rounded-sm"></div>
                      <span className="text-gray-600">Money In</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#F9AF82] rounded-sm"></div>
                      <span className="text-gray-600">Money Out</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-gray-400 rounded-sm bg-transparent"></div>
                      <span className="text-gray-600">Expected/Projected</span>
                    </div>
                  </div>

                  {/* Y-axis Labels */}
                  <div className="absolute left-0 top-0 flex flex-col justify-between text-[10px] text-gray-500 font-figtree" style={{ height: '96px', top: '44px' }}>
                    <span>£103.0K</span>
                    <span>£102.0K</span>
                    <span>£101.0K</span>
                    <span>£100.0K</span>
                  </div>

                  {/* Chart Bars */}
                  <div className="ml-12 flex items-end justify-between h-32 gap-2">
                    {/* April */}
                    <div 
                      className={`flex flex-col items-center gap-1 cursor-pointer transition-all duration-200 ${selectedPeriod === "Apr" ? "bg-gray-100 rounded-lg p-2" : ""}`}
                      onClick={() => setSelectedPeriod("Apr")}
                    >
                      <div className="flex items-end">
                        <div className="w-3 bg-teal-500 rounded-t" style={{ height: '48px' }}></div>
                        <div className="w-3 bg-[#F9AF82] rounded-t" style={{ height: '32px' }}></div>
                      </div>
                      <span className="text-[10px] text-gray-500 font-figtree">Apr</span>
                    </div>

                    {/* May */}
                    <div 
                      className={`flex flex-col items-center gap-1 cursor-pointer transition-all duration-200 ${selectedPeriod === "May" ? "bg-gray-100 rounded-lg p-2" : ""}`}
                      onClick={() => setSelectedPeriod("May")}
                    >
                      <div className="flex items-end">
                        <div className="w-3 bg-teal-500 rounded-t" style={{ height: '52px' }}></div>
                        <div className="w-3 bg-[#F9AF82] rounded-t" style={{ height: '28px' }}></div>
                      </div>
                      <span className="text-[10px] text-gray-500 font-figtree">May</span>
                    </div>

                    {/* June */}
                    <div 
                      className={`flex flex-col items-center gap-1 cursor-pointer transition-all duration-200 ${selectedPeriod === "Jun" ? "bg-gray-100 rounded-lg p-2" : ""}`}
                      onClick={() => setSelectedPeriod("Jun")}
                    >
                      <div className="flex items-end">
                        <div className="w-3 bg-teal-500 rounded-t" style={{ height: '46px' }}></div>
                        <div className="w-3 bg-[#F9AF82] rounded-t" style={{ height: '34px' }}></div>
                      </div>
                      <span className="text-[10px] text-gray-500 font-figtree">Jun</span>
                    </div>

                    {/* July */}
                    <div 
                      className={`flex flex-col items-center gap-1 cursor-pointer transition-all duration-200 ${selectedPeriod === "Jul" ? "bg-gray-100 rounded-lg p-2" : ""}`}
                      onClick={() => setSelectedPeriod("Jul")}
                    >
                      <div className="flex items-end">
                        <div className="w-3 bg-teal-500 rounded-t" style={{ height: '50px' }}></div>
                        <div className="w-3 bg-[#F9AF82] rounded-t" style={{ height: '30px' }}></div>
                      </div>
                      <span className="text-[10px] text-gray-500 font-figtree">Jul</span>
                    </div>

                    {/* August - Current period with actual and expected */}
                    <div 
                      className={`flex flex-col items-center gap-1 relative cursor-pointer transition-all duration-200 ${selectedPeriod === "Aug" ? "bg-gray-100 rounded-lg p-2" : ""}`}
                      onClick={() => setSelectedPeriod("Aug")}
                    >
                      <div className="relative z-10 flex items-end">
                        {/* Money In: Projected on top, Actual below */}
                        <div className="flex flex-col items-center">
                          <div className="w-3 border-2 border-teal-500 rounded-t bg-transparent mb-[-4px]" style={{ height: '56px' }}></div>
                          <div className="w-3 bg-teal-500 rounded-t" style={{ height: '44px' }}></div>
                        </div>
                        {/* Money Out: Projected on top, Actual below */}
                        <div className="flex flex-col items-center">
                          <div className="w-3 border-2 border-[#F9AF82] rounded-t bg-transparent mb-[-4px]" style={{ height: '36px' }}></div>
                          <div className="w-3 bg-[#F9AF82] rounded-t" style={{ height: '24px' }}></div>
                        </div>
                      </div>
                      <span className="text-[10px] text-gray-500 font-figtree relative z-10">Aug</span>
                    </div>

                    {/* September - Projected */}
                    <div 
                      className={`flex flex-col items-center gap-1 cursor-pointer transition-all duration-200 ${selectedPeriod === "Sep" ? "bg-gray-100 rounded-lg p-2" : ""}`}
                      onClick={() => setSelectedPeriod("Sep")}
                    >
                      <div className="flex items-end">
                        <div className="w-3 border-2 border-teal-500 rounded-t bg-transparent" style={{ height: '54px' }}></div>
                        <div className="w-3 border-2 border-[#F9AF82] rounded-t bg-transparent" style={{ height: '34px' }}></div>
                      </div>
                      <span className="text-[10px] text-gray-500 font-figtree">Sep</span>
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

"use client"

import React, { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Construction } from "lucide-react"

interface ToggleCardProps {
  selectedPeriod: string
  onPeriodChange: (period: string) => void
  months: Array<{ label: string; isCurrent: boolean; isFuture: boolean }>
}

export function ToggleCard({ selectedPeriod, onPeriodChange, months }: ToggleCardProps) {
  const [activeTab, setActiveTab] = useState("money-movements")
  






  const currentMonthData = months.find(m => m.isCurrent)

  // Period data that matches the bar heights (keeping existing structure for now)
  const periodData: Record<string, { moneyIn: number; moneyOut: number; expectedMoneyIn?: number; expectedMoneyOut?: number }> = {
    "Apr": { moneyIn: 48, moneyOut: 32 },
    "May": { moneyIn: 52, moneyOut: 28 },
    "Jun": { moneyIn: 46, moneyOut: 34 },
    "Jul": { moneyIn: 50, moneyOut: 30 },
    "Aug": { moneyIn: 44, moneyOut: 24, expectedMoneyIn: 56, expectedMoneyOut: 36 },
    "Sep": { moneyIn: 54, moneyOut: 34 },
    "Oct": { moneyIn: 52, moneyOut: 30 },
    "Nov": { moneyIn: 49, moneyOut: 33 },
    "Dec": { moneyIn: 55, moneyOut: 28 },
    "Jan": { moneyIn: 47, moneyOut: 31 },
    "Feb": { moneyIn: 51, moneyOut: 29 },
    "Mar": { moneyIn: 45, moneyOut: 35 }
  }

  const currentData = periodData[selectedPeriod as keyof typeof periodData] || periodData["Aug"]

  // Convert bar heights to monetary values (approximate)
  const getMoneyValue = (height: number) => {
    // Convert height to monetary value between £100K and £103K
    const baseValue = 100
    const heightRatio = height / 56 // 56px is the tallest bar
    const range = 3 // £3K range
    const value = baseValue + (heightRatio * range)
    return `£${value.toFixed(1)}K`
  }

  return (
    <div className="mx-4">
      <div className="bg-white rounded-2xl p-4 border border-[#DDE8FF]">
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
                <div className="bg-transparent rounded-2xl py-4 px-2 flex flex-col items-center justify-center h-28">
                  <h4 className="text-[12px] font-figtree text-[#282B3A] mb-0 text-center tracking-wide">
                    {selectedPeriod === currentMonthData?.label ? 'Received Money In' : 
                     months.find(m => m.label === selectedPeriod)?.isFuture ? 'Expected Money In' : 'Received Money In'}
                  </h4>
                  {selectedPeriod === currentMonthData?.label ? (
                    <div className="space-y-3 text-center">
                      <div>
                        <div className="text-[16px] font-figtree font-semibold text-teal-600 leading-tight">
                          {getMoneyValue(currentData.moneyIn)}
                        </div>
                      </div>
                      <div className="border-t border-[#9FBDFF] pt-3">
                        <div className="text-[12px] font-figtree text-[#282B3A] tracking-wide">
                          Expected Money In
                        </div>
                        <div className="text-[16px] font-figtree font-semibold text-teal-600">
                          {getMoneyValue(currentData.expectedMoneyIn || 0)}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-[16px] font-figtree font-semibold text-teal-600 leading-tight">
                        {getMoneyValue(currentData.moneyIn)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Money Out Card */}
                <div className="bg-transparent rounded-2xl py-4 px-2 flex flex-col items-center justify-center h-28">
                  <h4 className="text-[12px] font-figtree text-[#282B3A] text-center tracking-wide">
                    {selectedPeriod === currentMonthData?.label ? 'Paid Money Out' : 
                     months.find(m => m.label === selectedPeriod)?.isFuture ? 'Expected Money Out' : 'Paid Money Out'}
                  </h4>
                  {selectedPeriod === currentMonthData?.label ? (
                    <div className="space-y-3 text-center">
                      <div>
                        <div className="text-[16px] font-figtree font-semibold text-orange-600 leading-tight">
                          {getMoneyValue(currentData.moneyOut)}
                        </div>
                      </div>
                      <div className="border-t border-[#9FBDFF] pt-3">
                        <div className="text-[12px] font-figtree text-[#282B3A] tracking-wide">
                          Expected Money Out
                        </div>
                        <div className="text-[16px] font-figtree font-semibold text-orange-600">
                          {getMoneyValue(currentData.expectedMoneyOut || 0)}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-[16px] font-figtree font-semibold text-orange-600 leading-tight">
                        {getMoneyValue(currentData.moneyOut)}
                      </div>
                    </div>
                  )}
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
                    {months.map((month, index) => (
                      <div 
                        key={index}
                        className={`flex flex-col items-center gap-1 cursor-pointer transition-all duration-200 ${selectedPeriod === month.label ? "bg-gray-100 rounded-lg p-2" : ""}`}
                        onClick={() => onPeriodChange(month.label)}
                      >
                        {month.isCurrent ? (
                          // Current month: Actual + Expected stacked
                          <div className="relative z-10 flex items-end">
                            {/* Money In: Projected on top, Actual below */}
                            <div className="flex flex-col items-center">
                              <div className="w-3 border-2 border-teal-500 rounded-t bg-[#E8F9FD] mb-[-4px]" style={{ height: '56px' }}></div>
                              <div className="w-3 bg-teal-500 rounded-t" style={{ height: '44px' }}></div>
                            </div>
                            {/* Money Out: Projected on top, Actual below */}
                            <div className="flex flex-col items-center">
                              <div className="w-3 border-2 border-[#F9AF82] rounded-t bg-[#FEEAD5] mb-[-4px]" style={{ height: '36px' }}></div>
                              <div className="w-3 bg-[#F9AF82] rounded-t" style={{ height: '24px' }}></div>
                            </div>
                          </div>
                        ) : month.isFuture ? (
                          // Future month: Projected only
                          <div className="flex items-end">
                            <div className="w-3 border-2 border-teal-500 rounded-t bg-[#E8F9FD]" style={{ height: '54px' }}></div>
                            <div className="w-3 border-2 border-[#F9AF82] rounded-t bg-[#FEEAD5]" style={{ height: '34px' }}></div>
                          </div>
                        ) : (
                          // Past month: Historical only
                          <div className="flex items-end">
                            <div className="w-3 bg-teal-500 rounded-t" style={{ height: '48px' }}></div>
                            <div className="w-3 bg-[#F9AF82] rounded-t" style={{ height: '32px' }}></div>
                          </div>
                        )}
                        <span className="text-[10px] text-gray-500 font-figtree">{month.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Balance Display Section */}
              <div className="flex flex-col items-center justify-center h-28 text-center">
                <div className="text-[12px] font-figtree text-[#282B3A]">
                  Projected balance for 31st of Aug
                </div>
                <div className="text-[24px] font-figtree font-semibold text-teal-600">
                  £2,500.00
                </div>
              </div>

              {/* Chart Area - Placeholder */}
              <div className="mt-6">
                
                {/* Chart Container */}
                <div className="relative">
                  {/* Legend */}
                  <div className="flex justify-center gap-6 mb-4 text-[10px] font-figtree">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#8B5CF6] rounded-sm"></div>
                      <span className="text-gray-600">Balance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-[#8B5CF6] rounded-sm bg-transparent"></div>
                      <span className="text-gray-600">Predicted</span>
                    </div>
                  </div>

                  {/* Placeholder Chart Area */}
                  <div className="flex items-center justify-center h-32">
                    <div className="flex flex-col items-center gap-2 text-gray-500">
                      <Construction className="w-8 h-8" />
                      <span className="text-[12px] font-figtree">I am building the chart and you&apos;ll see it soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        

      </div>
    </div>
  )
}

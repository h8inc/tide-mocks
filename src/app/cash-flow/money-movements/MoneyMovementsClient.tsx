"use client"

import React from "react"
import { BackHeader } from "@/components/features/cash-flow/BackHeader"
import { StatusBar } from "@/components/features/cash-flow/StatusBar"
import { IPhoneFrame } from "@/components/features/cash-flow/IPhoneFrame"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useSearchParams } from "next/navigation"

export function MoneyMovementsClient() {
  const searchParams = useSearchParams()
  const selectedPeriod = searchParams?.get('period') || "Aug" // Default to Aug if no period specified
  
  const months = [
    { label: "Apr", isCurrent: false, isFuture: false }, // Past month
    { label: "May", isCurrent: false, isFuture: false }, // Past month
    { label: "Jun", isCurrent: false, isFuture: false }, // Past month
    { label: "Jul", isCurrent: false, isFuture: false }, // Past month
    { label: "Aug", isCurrent: true, isFuture: false },  // Current month
    { label: "Sep", isCurrent: false, isFuture: true },  // Future month
    { label: "Oct", isCurrent: false, isFuture: true }   // Future month
  ]

  // Comprehensive data structure for all months (matching ToggleCard data)
  const periodData: Record<string, { moneyIn: number; moneyOut: number; expectedMoneyIn?: number; expectedMoneyOut?: number }> = {
    "Apr": { moneyIn: 48, moneyOut: 32 },
    "May": { moneyIn: 52, moneyOut: 28 },
    "Jun": { moneyIn: 46, moneyOut: 34 },
    "Jul": { moneyIn: 50, moneyOut: 30 },
    "Aug": { moneyIn: 44, moneyOut: 24, expectedMoneyIn: 56, expectedMoneyOut: 36 },
    "Sep": { moneyIn: 54, moneyOut: 34 },
    "Oct": { moneyIn: 52, moneyOut: 30 }
  }

  // Convert bar heights to monetary values (matching ToggleCard logic)
  const getMoneyValue = (height: number) => {
    const baseValue = 100
    const heightRatio = height / 56 // 56px is the tallest bar
    const range = 3 // £3K range
    const value = baseValue + (heightRatio * range)
    return `£${value.toFixed(1)}K`
  }

  // Get current period data
  const currentData = periodData[selectedPeriod] || periodData["Aug"]
  
  const isCurrentOrProjected = months.find(m => m.label === selectedPeriod)?.isCurrent || 
                               months.find(m => m.label === selectedPeriod)?.isFuture

  return (
    <div className="min-h-screen bg-gray-100 py-1 md:py-4">
      {/* Mobile Content */}
      <div className="md:hidden">
        <div>
          <BackHeader title={`Money Movements ${selectedPeriod}`} />

          {/* Content */}
          <div className="px-4 py-4">
            {/* Conditional Projected Link - Only for current or projected months */}
            {isCurrentOrProjected && (
              <div className="mb-6">
                <Link href={`/cash-flow/projected?period=${selectedPeriod}`} className="block">
                  <div className="border border-[#DDE8FF] rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-[#E8F9FD] border border-[#56CCCC] rounded-full"></div>
                          <div className="w-3 h-3 bg-[#FEEAD5] border border-[#F9AF82] rounded-full -ml-1"></div>
                        </div>
                        <span className="text-sm font-figtree font-medium text-[#282B3A]">
                          {months.find(m => m.label === selectedPeriod)?.isCurrent ? '4 upcoming items' : '4 projected items'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-figtree font-medium text-[#282B3A]">{getMoneyValue((currentData.expectedMoneyIn || 0) + (currentData.expectedMoneyOut || 0))}</span>
                        <ChevronRight className="w-6 h-6 text-[#616371]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Full Transaction List */}
            <div className="bg-white rounded-2xl border border-[#DDE8FF] p-0 w-full">
              {/* Header Section */}
              <div className="px-4 pt-4 pb-0">
                <div className="flex flex-col items-center gap-6 w-full">
                  {/* Title */}
                  <div className="flex flex-row justify-between items-end w-full">
                    <h2 className="text-base font-figtree font-medium text-[#282B3A] flex-1">Money Movements</h2>
                  </div>
                  
                  {/* KPI Summary */}
                  <div className="w-full">
                    <p className="text-sm font-figtree font-normal text-[#2F3037]">
                      {selectedPeriod} 2025: {getMoneyValue(currentData.moneyIn - currentData.moneyOut)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Transaction List - Show different content based on month type */}
              {(() => {
                const selectedMonthData = months.find(m => m.label === selectedPeriod)
                const isHistorical = selectedMonthData?.isCurrent === false && selectedMonthData?.isFuture === false
                const isProjected = selectedMonthData?.isFuture === true
                
                if (isProjected) {
                  // For projected months, show only projected items
                  return (
                    <div className="px-4 pb-4">
                      <div className="space-y-0">
                        {/* Projected Transaction Row 1 */}
                        <div className="flex items-center justify-between py-4 border-b border-[#E4E4E7]">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-[#E8F9FD] border border-[#56CCCC] rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 bg-[#56CCCC] rounded-sm"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h3 className="text-sm font-figtree font-medium text-[#282B3A]">Expected Payment</h3>
                              <p className="text-xs font-figtree font-normal text-[#6F7281]">Projected</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-figtree font-medium text-[#282B3A]">{getMoneyValue(currentData.expectedMoneyIn || 0)}</span>
                          </div>
                        </div>

                        {/* Projected Transaction Row 2 */}
                        <div className="flex items-center justify-between py-4">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-[#FEEAD5] border border-[#F9AF82] rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 bg-[#F9AF82] rounded-sm"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h3 className="text-sm font-figtree font-medium text-[#282B3A]">Expected Expense</h3>
                              <p className="text-xs font-figtree font-normal text-[#6F7281]">Projected</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-figtree font-medium text-[#282B3A]">{getMoneyValue(currentData.expectedMoneyOut || 0)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                } else if (isHistorical) {
                  // For historical months, show historical transactions
                  return (
                    <div className="px-4 pb-4">
                      <div className="space-y-0">
                        {/* Historical Transaction Row 1 */}
                        <div className="flex items-center justify-between py-4 border-b border-[#E4E4E7]">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-[#EEE0FF] rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 bg-[#5A11B0] rounded-sm"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h3 className="text-sm font-figtree font-medium text-[#282B3A]">AMZ LTD</h3>
                              <p className="text-xs font-figtree font-normal text-[#6F7281]">Stock</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-figtree font-medium text-[#282B3A]">£1,000.40</span>
                          </div>
                        </div>

                        {/* Historical Transaction Row 2 */}
                        <div className="flex items-center justify-between py-4 border-b border-[#E4E4E7]">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-[#FEEAD5] rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 bg-[#A92518] rounded-sm"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h3 className="text-sm font-figtree font-medium text-[#282B3A]">Amazon</h3>
                              <p className="text-xs font-figtree font-normal text-[#6F7281]">Office supplies</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-figtree font-medium text-[#282B3A]">£124.40</span>
                          </div>
                        </div>

                        {/* Historical Transaction Row 3 */}
                        <div className="flex items-center justify-between py-4">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-[#E8F9FD] rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 bg-[#56CCCC] rounded-sm"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h3 className="text-sm font-figtree font-medium text-[#282B3A]">Netflix</h3>
                              <p className="text-xs font-figtree font-normal text-[#6F7281]">Subscription</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-figtree font-medium text-[#282B3A]">£15.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                } else {
                  // For current month, show both upcoming and recent transactions
                  return (
                    <div className="px-4 pb-4">
                      <div className="space-y-0">
                        {/* Transaction Row 1 */}
                        <div className="flex items-center justify-between py-4 border-b border-[#E4E4E7]">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-[#EEE0FF] rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 bg-[#5A11B0] rounded-sm"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h3 className="text-sm font-figtree font-medium text-[#282B3A]">AMZ LTD</h3>
                              <p className="text-xs font-figtree font-normal text-[#6F7281]">Stock</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-figtree font-medium text-[#282B3A]">£1,000.40</span>
                          </div>
                        </div>

                        {/* Transaction Row 2 */}
                        <div className="flex items-center justify-between py-4">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-[#FEEAD5] rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 bg-[#A92518] rounded-sm"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h3 className="text-sm font-figtree font-medium text-[#282B3A]">Amazon</h3>
                              <p className="text-xs font-figtree font-normal text-[#6F7281]">Office supplies</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-figtree font-medium text-[#282B3A]">£124.40</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Content - iPhone Frame */}
      <IPhoneFrame>
        <StatusBar />
        
        <BackHeader title={`Money Movements ${selectedPeriod}`} />

        <div className="px-4 py-4">
          {/* Conditional Projected Link - Only for current or projected months */}
          {isCurrentOrProjected && (
            <div className="mb-6">
              <Link href={`/cash-flow/projected?period=${selectedPeriod}`} className="block">
                <div className="border border-[#DDE8FF] rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#E8F9FD] border border-[#56CCCC] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#FEEAD5] border border-[#F9AF82] rounded-full -ml-1"></div>
                      </div>
                      <span className="text-sm font-figtree font-medium text-[#282B3A]">
                        {months.find(m => m.label === selectedPeriod)?.isCurrent ? '4 upcoming items' : '4 projected items'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-figtree font-medium text-[#282B3A]">{getMoneyValue((currentData.expectedMoneyIn || 0) + (currentData.expectedMoneyOut || 0))}</span>
                      <ChevronRight className="w-6 h-6 text-[#616371]" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Full Transaction List */}
          <div className="bg-white rounded-2xl border border-[#DDE8FF] p-0 w-full">
            {/* Header Section */}
            <div className="px-4 pt-4 pb-0">
              <div className="flex flex-col items-center gap-6 w-full">
                {/* Title */}
                <div className="flex flex-row justify-between items-end w-full">
                  <h2 className="text-base font-figtree font-medium text-[#282B3A] flex-1">Money Movements</h2>
                </div>
                
                {/* KPI Summary */}
                <div className="w-full">
                  <p className="text-sm font-figtree font-normal text-[#2F3037]">
                    {selectedPeriod} 2025: {getMoneyValue(currentData.moneyIn - currentData.moneyOut)}
                  </p>
                </div>
              </div>
            </div>

            {/* Transaction List - Same logic as mobile */}
            {(() => {
              const selectedMonthData = months.find(m => m.label === selectedPeriod)
              const isHistorical = selectedMonthData?.isCurrent === false && selectedMonthData?.isFuture === false
              const isProjected = selectedMonthData?.isFuture === true
              
              if (isProjected) {
                return (
                  <div className="px-4 pb-4">
                    <div className="space-y-0">
                      <div className="flex items-center justify-between py-4 border-b border-[#E4E4E7]">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 bg-[#E8F9FD] border border-[#56CCCC] rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#56CCCC] rounded-sm"></div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-figtree font-medium text-[#282B3A]">Expected Payment</h3>
                            <p className="text-xs font-figtree font-normal text-[#6F7281]">Projected</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-figtree font-medium text-[#282B3A]">{getMoneyValue(currentData.expectedMoneyIn || 0)}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 bg-[#FEEAD5] border border-[#F9AF82] rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#F9AF82] rounded-sm"></div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-figtree font-medium text-[#282B3A]">Expected Expense</h3>
                            <p className="text-xs font-figtree font-normal text-[#6F7281]">Projected</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-figtree font-medium text-[#282B3A]">{getMoneyValue(currentData.expectedMoneyOut || 0)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              } else if (isHistorical) {
                return (
                  <div className="px-4 pb-4">
                    <div className="space-y-0">
                      <div className="flex items-center justify-between py-4 border-b border-[#E4E4E7]">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 bg-[#EEE0FF] rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#5A11B0] rounded-sm"></div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-figtree font-medium text-[#282B3A]">AMZ LTD</h3>
                            <p className="text-xs font-figtree font-normal text-[#6F7281]">Stock</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-figtree font-medium text-[#282B3A]">£1,000.40</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between py-4 border-b border-[#E4E4E7]">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 bg-[#FEEAD5] rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#A92518] rounded-sm"></div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-figtree font-medium text-[#282B3A]">Amazon</h3>
                            <p className="text-xs font-figtree font-normal text-[#6F7281]">Office supplies</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-figtree font-medium text-[#282B3A]">£124.40</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 bg-[#E8F9FD] rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#56CCCC] rounded-sm"></div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-figtree font-medium text-[#282B3A]">Netflix</h3>
                            <p className="text-xs font-figtree font-normal text-[#6F7281]">Subscription</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-figtree font-medium text-[#282B3A]">£15.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="px-4 pb-4">
                    <div className="space-y-0">
                      <div className="flex items-center justify-between py-4 border-b border-[#E4E4E7]">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 bg-[#EEE0FF] rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#5A11B0] rounded-sm"></div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-figtree font-medium text-[#282B3A]">AMZ LTD</h3>
                            <p className="text-xs font-figtree font-normal text-[#6F7281]">Stock</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-figtree font-medium text-[#282B3A]">£1,000.40</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 bg-[#FEEAD5] rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#A92518] rounded-sm"></div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h3 className="text-sm font-figtree font-medium text-[#282B3A]">Amazon</h3>
                            <p className="text-xs font-figtree font-normal text-[#6F7281]">Office supplies</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-figtree font-medium text-[#282B3A]">£124.40</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })()}
          </div>
        </div>
      </IPhoneFrame>
    </div>
  )
}

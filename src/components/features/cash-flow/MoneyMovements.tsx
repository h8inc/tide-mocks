"use client"

import React from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface MoneyMovementsProps {
  selectedPeriod: string
  months: Array<{ label: string; isCurrent: boolean; isFuture: boolean }>
}

export function MoneyMovements({ selectedPeriod, months }: MoneyMovementsProps) {
  return (
    <div className="mx-4">
      <div className="bg-white rounded-2xl border border-[#DDE8FF] p-0 w-full max-w-[347px] mx-auto">
        {/* Header Section */}
        <div className="px-4 pt-4 pb-0">
          <div className="flex flex-col items-center gap-6 w-full">
            {/* Title and Action Button */}
            <div className="flex flex-row justify-between items-end w-full">
              <h2 className="text-base font-figtree font-medium text-[#282B3A] flex-1">Money Movements</h2>
              <Link href={`/cash-flow/money-movements?period=${selectedPeriod}`} className="text-base font-figtree font-medium text-[#1929D6] hover:opacity-80 transition-opacity">
                View All
              </Link>
            </div>
            
            {/* KPI Summary */}
            <div className="w-full">
              <p className="text-sm font-figtree font-normal text-[#2F3037]">
                {selectedPeriod} 2025: £{selectedPeriod === 'Aug' ? '832.00' : selectedPeriod === 'Sep' ? '5000.00' : '5000.00'}
              </p>
            </div>
          </div>
        </div>

        {/* Summary Card - Only show for current and future months, completely hidden for historical months */}
        {(() => {
          const currentMonth = months.find(m => m.isCurrent)?.label
          const isHistorical = !months.find(m => m.label === selectedPeriod)?.isCurrent && !months.find(m => m.label === selectedPeriod)?.isFuture
          
          if (isHistorical) {
            return null // Completely hide for historical months
          }
          
          return (
            <div className="px-4 py-4">
              <Link href={`/cash-flow/projected?period=${selectedPeriod}`} className="block">
                <div className="border border-[#DDE8FF] rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#E8F9FD] border border-[#56CCCC] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#FEEAD5] border border-[#F9AF82] rounded-full -ml-1"></div>
                      </div>
                      <span className="text-sm font-figtree font-medium text-[#282B3A]">
                        {selectedPeriod === currentMonth ? '4 upcoming items' : '4 projected items'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-figtree font-medium text-[#282B3A]">£5000</span>
                      <ChevronRight className="w-6 h-6 text-[#616371]" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })()}

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
                      <span className="text-sm font-figtree font-medium text-[#282B3A]">£2,500.00</span>
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
                      <span className="text-sm font-figtree font-medium text-[#282B3A]">£1,200.00</span>
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
  )
}

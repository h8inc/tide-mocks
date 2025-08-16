"use client"

import React from "react"
import { ArrowLeft, TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProjectedPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-100 py-1 md:py-4">
      {/* Mobile Content */}
      <div className="md:hidden">
        <div>
          {/* Header with back button */}
          <div className="flex items-center gap-3 px-4 py-2 bg-white border-b border-[#DDE8FF]">
            <button 
              onClick={() => router.back()}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#282B3A]" />
            </button>
            <h1 className="text-lg font-semibold text-[#282B3A]">Projected Details</h1>
          </div>

          {/* Content */}
          <div className="px-4 py-6">
            <div className="bg-white rounded-2xl border border-[#DDE8FF] p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#282B3A]">Projected Balance</h2>
                  <p className="text-sm text-[#6F7281]">45 days ahead forecast</p>
                </div>
              </div>
              
              <div className="text-3xl font-bold text-[#282B3A] mb-2">£123.22</div>
              <p className="text-sm text-[#6F7281]">Expected on 31 Sep 2025</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#DDE8FF] p-6">
              <h3 className="text-lg font-semibold text-[#282B3A] mb-4">Projection Factors</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-[#6F7281]">Expected Income</span>
                  <span className="text-sm font-medium text-[#282B3A]">+£2,500.00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-[#6F7281]">Expected Expenses</span>
                  <span className="text-sm font-medium text-[#282B3A]">-£1,200.00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-[#282B3A]">Net Projection</span>
                  <span className="text-sm font-bold text-[#282B3A]">+£123.22</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Content - iPhone Frame */}
      <div className="hidden md:block mx-auto max-w-sm">
        <div className="relative mx-auto">
          {/* Top Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>

          {/* Main Frame */}
          <div className="relative bg-black rounded-[3rem] p-1.5 shadow-2xl">
            {/* Screen */}
            <div className="bg-background rounded-[2.5rem] overflow-hidden h-[812px]">
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
                <div className="flex items-center gap-3 px-6 py-2 bg-white border-b border-[#DDE8FF]">
                  <button 
                    onClick={() => router.back()}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5 text-[#282B3A]" />
                  </button>
                  <h1 className="text-lg font-semibold text-[#282B3A]">Projected Details</h1>
                </div>

                <div className="px-6 py-6">
                  <div className="bg-white rounded-2xl border border-[#DDE8FF] p-6 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-[#282B3A]">Projected Balance</h2>
                        <p className="text-sm text-[#6F7281]">45 days ahead forecast</p>
                      </div>
                    </div>
                    
                    <div className="text-3xl font-bold text-[#282B3A] mb-2">£123.22</div>
                    <p className="text-sm text-[#6F7281]">Expected on 31 Sep 2025</p>
                  </div>

                  <div className="bg-white rounded-2xl border border-[#DDE8FF] p-6">
                    <h3 className="text-lg font-semibold text-[#282B3A] mb-4">Projection Factors</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-[#6F7281]">Expected Income</span>
                        <span className="text-sm font-medium text-[#282B3A]">+£2,500.00</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-[#6F7281]">Expected Expenses</span>
                        <span className="text-sm font-medium text-[#282B3A]">-£1,200.00</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm font-medium text-[#282B3A]">Net Projection</span>
                        <span className="text-sm font-bold text-[#282B3A]">+£123.22</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

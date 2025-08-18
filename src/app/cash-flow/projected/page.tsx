"use client"

import React from "react"
import { BackHeader } from "@/components/features/cash-flow/BackHeader"
import { ProjectedBalanceCard } from "@/components/features/cash-flow/ProjectedBalanceCard"
import { ProjectionFactorsCard } from "@/components/features/cash-flow/ProjectionFactorsCard"
import { StatusBar } from "@/components/features/cash-flow/StatusBar"
import { IPhoneFrame } from "@/components/features/cash-flow/IPhoneFrame"

export default function ProjectedPage() {
  const projectionFactors = [
    { label: "Expected Income", value: "+£2,500.00" },
    { label: "Expected Expenses", value: "-£1,200.00" },
    { label: "Net Projection", value: "+£123.22", isTotal: true }
  ]

  // Sample data for the new ProjectedBalanceCard structure
  const projectedBalanceData = {
    currentBalance: "£5,000.00",
    projectedBalance: "+£2,000.00",
    moneyIn: {
      invoices: { amount: "£5,000.00", count: 8 }
    },
    moneyOut: {
      bills: { amount: "£5,000.00", count: 12 },
      payments: { amount: "£3,000.00", count: 5 }
    },
    confidence: "high" as const
  }

  return (
    <div className="min-h-screen bg-gray-100 py-1 md:py-4">
      {/* Mobile Content */}
      <div className="md:hidden">
        <div>
          <BackHeader title="Projected Details" />

          {/* Content */}
          <div className="px-4 py-4">
            <ProjectedBalanceCard {...projectedBalanceData} />
            
            <ProjectionFactorsCard factors={projectionFactors} />
          </div>
        </div>
      </div>

      {/* Desktop Content - iPhone Frame */}
      <IPhoneFrame>
        <StatusBar />
        
        <BackHeader title="Projected Details" />

        <div className="px-4 py-4">
          <ProjectedBalanceCard {...projectedBalanceData} />
          
          <ProjectionFactorsCard factors={projectionFactors} />
        </div>
      </IPhoneFrame>
    </div>
  )
}

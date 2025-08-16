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

  return (
    <div className="min-h-screen bg-gray-100 py-1 md:py-4">
      {/* Mobile Content */}
      <div className="md:hidden">
        <div>
          <BackHeader title="Projected Details" />

          {/* Content */}
          <div className="px-4 py-6">
            <ProjectedBalanceCard 
              amount="£123.22"
              date="31 Sep 2025"
              description="45 days ahead forecast"
            />
            
            <ProjectionFactorsCard factors={projectionFactors} />
          </div>
        </div>
      </div>

      {/* Desktop Content - iPhone Frame */}
      <IPhoneFrame>
        <StatusBar />
        
        <BackHeader title="Projected Details" />

        <div className="px-6 py-6">
          <ProjectedBalanceCard 
            amount="£123.22"
            date="31 Sep 2025"
            description="45 days ahead forecast"
          />
          
          <ProjectionFactorsCard factors={projectionFactors} />
        </div>
      </IPhoneFrame>
    </div>
  )
}

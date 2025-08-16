import React from "react"
import { TrendingUp } from "lucide-react"

interface ProjectedBalanceCardProps {
  amount: string
  date: string
  description: string
}

export function ProjectedBalanceCard({ amount, date, description }: ProjectedBalanceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#DDE8FF] p-6 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#282B3A]">Projected Balance</h2>
          <p className="text-sm text-[#6F7281]">{description}</p>
        </div>
      </div>
      
      <div className="text-3xl font-bold text-[#282B3A] mb-2">{amount}</div>
      <p className="text-sm text-[#6F7281]">Expected on {date}</p>
    </div>
  )
}

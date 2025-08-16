import React from "react"
import { LucideIcon } from "lucide-react"

interface FinancialTileProps {
  title: string
  amount: string
  date: string
  icon?: LucideIcon
  iconColor?: string
  iconBgColor?: string
}

export function FinancialTile({
  title,
  amount,
  date,
  icon: Icon,
  iconColor = "text-gray-400",
  iconBgColor = "bg-gray-100"
}: FinancialTileProps) {
  return (
    <div className="flex-shrink-0 w-40 bg-white rounded-2xl p-2 shadow-sm border border-[#DDE8FF]">
      {/* Header with title and icon */}
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-base font-medium text-[#282B3A]">{title}</h3>
        {Icon && (
          <div className={`p-1 rounded-full ${iconBgColor}`}>
            <Icon className={`w-3 h-3 ${iconColor}`} />
          </div>
        )}
      </div>

      {/* Amount */}
      <div className="mb-1">
        <span className="text-xl font-semibold text-[#282B3A]">{amount}</span>
      </div>

      {/* Date */}
      <div>
        <span className="text-xs font-medium text-[#494D5F]">{date}</span>
      </div>
    </div>
  )
}

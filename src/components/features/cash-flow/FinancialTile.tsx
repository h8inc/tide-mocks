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
    <div className="flex-shrink-0 w-48 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
      {/* Header with title and icon */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        {Icon && (
          <div className={`p-1.5 rounded-full ${iconBgColor}`}>
            <Icon className={`w-4 h-4 ${iconColor}`} />
          </div>
        )}
      </div>

      {/* Amount */}
      <div className="mb-1">
        <span className="text-2xl font-bold text-gray-900">{amount}</span>
      </div>

      {/* Date */}
      <div>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
    </div>
  )
}

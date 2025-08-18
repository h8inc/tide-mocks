import React from "react"
import { ChevronRight } from "lucide-react"

interface DataSourceItemProps {
  title: string
  count: number
  amount: string
  bgColor: string
  countLabel: string
  onClick?: () => void
}

export function DataSourceItem({
  title,
  count,
  amount,
  bgColor,
  countLabel,
  onClick
}: DataSourceItemProps) {
  return (
    <div className={`${bgColor} rounded-lg p-3 ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`} onClick={onClick}>
              <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-figtree font-medium text-[#282B3A]">{title}</span>
            <span className="text-xs font-figtree font-normal text-[#6F7281]">{count} {countLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-figtree font-medium text-[#282B3A]">{amount}</span>
            {onClick && <ChevronRight className="w-4 h-4 text-[#6F7281]" />}
          </div>
        </div>
    </div>
  )
}

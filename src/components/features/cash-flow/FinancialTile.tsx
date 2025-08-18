import React from "react"
import { LucideIcon } from "lucide-react"

interface FinancialTileProps {
  title: string
  amount: string
  date: string
  icon?: LucideIcon
  iconColor?: string
  iconBgColor?: string
  showArrow?: boolean
  onClick?: () => void
}

// Touch data properties that will be added to DOM elements

// Extend HTMLElement to include our custom touch data
declare global {
  interface HTMLElement {
    touchStartX?: number
    touchStartY?: number
    touchStartTime?: number
  }
}

export function FinancialTile({
  title,
  amount,
  date,
  icon: Icon,
  iconColor = "text-gray-400",
  iconBgColor = "bg-gray-100",
  showArrow = false,
  onClick
}: FinancialTileProps) {
  // Touch handling to prevent accidental clicks during swipes
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!onClick) return
    // Store initial touch position and time
    const touch = e.touches[0]
    const target = e.currentTarget
    target.touchStartX = touch.clientX
    target.touchStartY = touch.clientY
    target.touchStartTime = Date.now()
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!onClick) return
    // Check if this was a tap vs swipe
    const touch = e.changedTouches[0]
    const target = e.currentTarget
    const startX = target.touchStartX
    const startY = target.touchStartY
    const startTime = target.touchStartTime
    
    if (startX !== undefined && startY !== undefined && startTime !== undefined) {
      const deltaX = Math.abs(touch.clientX - startX)
      const deltaY = Math.abs(touch.clientY - startY)
      const deltaTime = Date.now() - startTime
      
      // If movement is less than 15px and time is less than 300ms, treat as tap
      if (deltaX < 15 && deltaY < 15 && deltaTime < 300) {
        onClick()
      }
    }
  }

  return (
    <div 
      className={`flex-shrink-0 w-40 bg-white rounded-2xl p-2 border border-[#DDE8FF] ${onClick ? 'cursor-pointer active:scale-95 transition-transform' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={onClick} // Keep onClick for non-touch devices and fallback
    >
      {/* Header with title and icon/arrow */}
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-base font-medium text-[#282B3A]">{title}</h3>
        {showArrow ? (
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.80674 14.8702C7.4748 14.5382 7.4748 14 7.80674 13.6681L12.8557 8.61914L0.954627 8.59834C0.662793 8.30651 0.517259 8.16098 0.354348 7.78443C0.354348 7.31499 0.838738 6.83058 1.30818 6.83058L12.8557 6.91914L7.80674 1.87018C7.4748 1.53824 7.4748 1.00004 7.80674 0.668099C8.13869 0.336155 8.67688 0.336155 9.00882 0.668099L16.1099 7.76914L9.00882 14.8702C8.67688 15.2021 8.13869 15.2021 7.80674 14.8702Z" fill="#1929D6"/>
          </svg>
        ) : Icon ? (
          <div className={`p-1 rounded-full ${iconBgColor}`}>
            <Icon className={`w-3 h-3 ${iconColor}`} />
          </div>
        ) : null}
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

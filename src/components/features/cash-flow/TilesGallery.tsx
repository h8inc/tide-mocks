"use client"

import React, { useRef, useState, useEffect } from "react"
import { FinancialTile } from "./FinancialTile"
import { HelpCircle, TrendingUp, TrendingDown, LucideIcon } from "lucide-react"

interface TileData {
  title: string
  amount: string
  date: string
  icon?: LucideIcon
  iconColor?: string
  iconBgColor?: string
}

interface TilesGalleryProps {
  tiles: TileData[]
}

export function TilesGallery({ tiles }: TilesGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Mouse event handlers for desktop drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
    e.preventDefault()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Add cursor styles based on drag state
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = isDragging ? 'grabbing' : 'grab'
    }
  }, [isDragging])

  return (
    <div>
      {/* Gallery Container - Full width, no horizontal padding */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex gap-4 min-w-max px-4 py-2">
          {tiles.map((tile, index) => (
            <FinancialTile
              key={index}
              title={tile.title}
              amount={tile.amount}
              date={
                tile.title === "Cash today"
                  ? getTodayDate()
                  : tile.title === "Projected"
                    ? getProjectedDate()
                    : tile.date
              }
              icon={tile.icon}
              iconColor={tile.iconColor}
              iconBgColor={tile.iconBgColor}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Function to format today's date
const getTodayDate = () => {
  const today = new Date()
  const day = today.getDate()
  const month = today.toLocaleDateString('en-US', { month: 'short' })
  const year = today.getFullYear()
  return `${day} ${month} ${year}`
}

// Function to get date 45 days ahead
const getProjectedDate = () => {
  const today = new Date()
  const projectedDate = new Date(today)
  projectedDate.setDate(today.getDate() + 45)

  const day = projectedDate.getDate()
  const month = projectedDate.toLocaleDateString('en-US', { month: 'short' })
  const year = projectedDate.getFullYear()
  return `${day} ${month} ${year}`
}

export const defaultTiles: TileData[] = [
  {
    title: "Cash today",
    amount: "£10,236.91",
    date: "7 Aug 2025",
    icon: HelpCircle,
    iconColor: "text-gray-400",
    iconBgColor: "bg-gray-100"
  },
  {
    title: "Projected",
    amount: "£123.22",
    date: "31 Sep 2025",
    icon: TrendingUp,
    iconColor: "text-blue-600",
    iconBgColor: "bg-blue-100"
  },
  {
    title: "Lowest",
    amount: "£123.45",
    date: "31 Sep 2025",
    icon: TrendingDown,
    iconColor: "text-red-600",
    iconBgColor: "bg-red-100"
  }
]

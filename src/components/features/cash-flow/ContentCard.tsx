"use client"

import React from "react"

export function ContentCard() {
  return (
    <div className="mx-4">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        {/* Left-aligned headline */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 text-left">
            Additional Content Section
          </h2>
        </div>

        {/* Content area */}
        <div className="space-y-4">
          <div className="text-center text-gray-500">
            <p className="text-sm">This is the new content card below the toggle card</p>
            <p className="text-xs mt-1">More content can be added here as needed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

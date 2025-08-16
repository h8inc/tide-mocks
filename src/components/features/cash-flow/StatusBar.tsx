import React from "react"

export function StatusBar() {
  return (
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
  )
}

import React from "react"
import { ArrowLeft } from "lucide-react"

export function MobileHeader() {
  return (
    <header className="flex justify-between items-center h-14 bg-background border-b border-gray-200 px-4 shadow-sm">
      {/* Left Side - Back Arrow */}
      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Center - Title */}
      <h1 className="font-semibold text-lg text-gray-900">
        Cash Flow
      </h1>

      {/* Right Side - Avatar */}
      <div className="w-10 h-10 bg-blue-600 text-white font-medium text-sm rounded-full flex items-center justify-center">
        JC
      </div>
    </header>
  )
}

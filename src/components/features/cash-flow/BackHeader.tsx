"use client"

import React from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface BackHeaderProps {
  title: string
  showAvatar?: boolean
  avatarInitials?: string
}

export function BackHeader({ title, showAvatar = false, avatarInitials }: BackHeaderProps) {
  const router = useRouter()

  return (
    <header className="flex justify-between items-center h-14 bg-background border-b border-[#DDE8FF] px-4">
      {/* Left Side - Back Arrow */}
      <button 
        onClick={() => router.back()}
        className="p-2 text-[#282B3A] hover:bg-gray-100 rounded-lg transition-colors"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Center - Title */}
      <h1 className="font-semibold text-lg text-[#282B3A]">
        {title}
      </h1>

      {/* Right Side - Avatar (optional) */}
      {showAvatar && avatarInitials && (
        <div className="w-10 h-10 bg-blue-600 text-white font-medium text-sm rounded-full flex items-center justify-center">
          {avatarInitials}
        </div>
      )}
    </header>
  )
}

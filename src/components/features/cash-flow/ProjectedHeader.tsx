"use client"

import React from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface ProjectedHeaderProps {
  title: string
}

export function ProjectedHeader({ title }: ProjectedHeaderProps) {
  const router = useRouter()

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-white border-b border-[#DDE8FF]">
      <button 
        onClick={() => router.back()}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 text-[#282B3A]" />
      </button>
      <h1 className="text-lg font-semibold text-[#282B3A]">{title}</h1>
    </div>
  )
}

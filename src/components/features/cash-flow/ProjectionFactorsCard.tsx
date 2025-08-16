import React from "react"

interface ProjectionFactor {
  label: string
  value: string
  isTotal?: boolean
}

interface ProjectionFactorsCardProps {
  factors: ProjectionFactor[]
}

export function ProjectionFactorsCard({ factors }: ProjectionFactorsCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#DDE8FF] p-6">
      <h3 className="text-lg font-semibold text-[#282B3A] mb-4">Projection Factors</h3>
      <div className="space-y-3">
        {factors.map((factor, index) => (
          <div 
            key={index}
            className={`flex justify-between items-center py-2 ${
              index < factors.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <span className={`text-sm ${factor.isTotal ? 'font-medium text-[#282B3A]' : 'text-[#6F7281]'}`}>
              {factor.label}
            </span>
            <span className={`text-sm ${factor.isTotal ? 'font-bold text-[#282B3A]' : 'font-medium text-[#282B3A]'}`}>
              {factor.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

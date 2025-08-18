import React, { useState } from "react"
import { Calculator, ChevronDown } from "lucide-react"
import { DataSourceItem } from "./DataSourceItem"

interface ProjectedBalanceCardProps {
  currentBalance: string
  projectedBalance: string
  moneyIn: {
    invoices: { amount: string; count: number }
  }
  moneyOut: {
    bills: { amount: string; count: number }
    payments: { amount: string; count: number }
  }
  confidence: "high" | "medium" | "low"
}

export function ProjectedBalanceCard({ 
  currentBalance, 
  projectedBalance, 
  moneyIn, 
  moneyOut, 
  confidence 
}: ProjectedBalanceCardProps) {
  const [showConfidenceDetails, setShowConfidenceDetails] = useState(false)

  const getConfidenceColor = (level: string) => {
    switch (level) {
      case "high": return "text-teal-600 bg-[#E8F9FD]"
      case "medium": return "text-amber-600 bg-amber-50"
      case "low": return "text-red-600 bg-red-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getConfidenceText = (level: string) => {
    switch (level) {
      case "high": return "High confidence"
      case "medium": return "Medium confidence"
      case "low": return "Limited data"
      default: return "Unknown"
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-[#DDE8FF] p-6">
      {/* Header with confidence indicator */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-[#282B3A]">Projected Balance</h2>
          
        </div>
        
        <button
          onClick={() => setShowConfidenceDetails(!showConfidenceDetails)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium ${getConfidenceColor(confidence)} flex items-center gap-1 hover:opacity-80 transition-opacity`}
          aria-label={`Forecast confidence level: ${getConfidenceText(confidence)}. Click to see details.`}
        >
          {getConfidenceText(confidence)}
          <ChevronDown className={`w-3 h-3 transition-transform ${showConfidenceDetails ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
              {/* Projected Balance Amount */}
        <div className="text-center mb-6">
          <div className="text-2xl font-semibold text-teal-600">{projectedBalance}</div>
          <span className="text-[#6F7281] text-sm">
            On {new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
              day: 'numeric', 
              month: 'short', 
              year: 'numeric' 
            })}
          </span>
        </div>
      
      {/* Simple Math Formula */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Calculator className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-[#282B3A]">Forecast calculation</span>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-[#6F7281]">Current balance</span>
            <span className="font-medium text-[#282B3A]">{currentBalance}</span>
          </div>
          <div className="flex items-center justify-between text-teal-700">
            <span>+ Money in (6 weeks)</span>
            <span className="font-medium">+{moneyIn.invoices.amount}</span>
          </div>
          <div className="flex items-center justify-between text-orange-800">
            <span>- Money out (6 weeks)</span>
            <span className="font-medium">-{moneyOut.bills.amount}</span>
          </div>
          <div className="border-t border-gray-200 pt-2 flex items-center justify-between">
            <span className="font-medium text-[#282B3A]">= Projected</span>
            <span className="font-semibold text-teal-600">{projectedBalance}</span>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-[#282B3A]">Data sources for your forecast:</h3>
        
        {/* Money In */}
        <DataSourceItem
          title="Invoices (projected)"
          count={moneyIn.invoices.count}
          amount={moneyIn.invoices.amount}
          bgColor="bg-blue-50"
          countLabel="outstanding"
          onClick={() => {/* TODO: Navigate to invoices */}}
        />

        {/* Money Out */}
        <div className="space-y-2">
          <DataSourceItem
            title="Projected bills"
            count={moneyOut.bills.count}
            amount={moneyOut.bills.amount}
            bgColor="bg-orange-50"
            countLabel="outstanding"
            onClick={() => {/* TODO: Navigate to bills */}}
          />
          
          <DataSourceItem
            title="Upcoming payments"
            count={moneyOut.payments.count}
            amount={moneyOut.payments.amount}
            bgColor="bg-orange-50"
            countLabel="scheduled"
            onClick={() => {/* TODO: Navigate to payments */}}
          />
        </div>
      </div>

      {/* Confidence Details Bottom Sheet - Mobile Only - Commented out for now */}
      {/*
      {showConfidenceDetails && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end"
          onClick={() => setShowConfidenceDetails(false)}
        >
          <div 
            className="bg-white rounded-t-3xl p-6 w-full max-h-[70vh] overflow-y-auto touch-pan-y"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#282B3A]">How we calculate confidence</h3>
              <button 
                onClick={() => setShowConfidenceDetails(false)}
                className="text-[#6F7281] hover:text-[#282B3A] p-2"
                aria-label="Close confidence details"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4 text-sm text-[#6F7281]">
              <div className="space-y-2">
                <h4 className="font-medium text-[#282B3A]">High Confidence</h4>
                <p>• 3+ months transaction history</p>
                <p>• Regular payment patterns</p>
                <p>• Complete connected account data</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-[#282B3A]">Medium Confidence</h4>
                <p>• 1-3 months history</p>
                <p>• Some irregular patterns</p>
                <p>• Partial connected data</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-[#282B3A]">Limited Data</h4>
                <p>• Less than 1 month history</p>
                <p>• Irregular/new patterns</p>
                <p>• Limited connected data</p>
              </div>
            </div>
          </div>
        </div>
      )}
      */}
    </div>
  )
}

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react"

interface CashFlowHeaderProps {
  totalIncome: number
  totalExpenses: number
  netCashFlow: number
}

export function CashFlowHeader({ totalIncome, totalExpenses, netCashFlow }: CashFlowHeaderProps) {
  const isPositive = netCashFlow >= 0
  
  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
          Cash Flow Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
          Track your income, expenses, and net cash flow
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Income Card */}
        <Card className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-green-700 dark:text-green-300">Total Income</p>
                <p className="text-2xl md:text-3xl font-bold text-green-900 dark:text-green-100">
                  ${totalIncome.toLocaleString()}
                </p>
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expenses Card */}
        <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-red-700 dark:text-red-300">Total Expenses</p>
                <p className="text-2xl md:text-3xl font-bold text-red-900 dark:text-red-100">
                  ${totalExpenses.toLocaleString()}
                </p>
              </div>
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full">
                <TrendingDown className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Net Cash Flow Card */}
        <Card className={`border-2 ${
          isPositive 
            ? 'border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800' 
            : 'border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800'
        }`}>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Net Cash Flow</p>
                <p className={`text-2xl md:text-3xl font-bold ${
                  isPositive 
                    ? 'text-green-900 dark:text-green-100' 
                    : 'text-red-900 dark:text-red-100'
                }`}>
                  ${netCashFlow.toLocaleString()}
                </p>
              </div>
              <div className={`p-2 rounded-full ${
                isPositive 
                  ? 'bg-green-100 dark:bg-green-900/30' 
                  : 'bg-red-100 dark:bg-red-900/30'
              }`}>
                <DollarSign className={`h-5 w-5 ${
                  isPositive 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`} />
              </div>
            </div>
            <Badge 
              variant={isPositive ? "default" : "destructive"}
              className="mt-2 text-xs"
            >
              {isPositive ? 'Positive' : 'Negative'} Cash Flow
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

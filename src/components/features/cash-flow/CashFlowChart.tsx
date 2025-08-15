import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart3, PieChart } from "lucide-react"

interface CashFlowChartProps {
  income: number
  expenses: number
  savings: number
}

export function CashFlowChart({ income, expenses, savings }: CashFlowChartProps) {
  const total = income + expenses + savings
  const incomePercentage = total > 0 ? (income / total) * 100 : 0
  const expensesPercentage = total > 0 ? (expenses / total) * 100 : 0
  const savingsPercentage = total > 0 ? (savings / total) * 100 : 0

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
          <BarChart3 className="h-5 w-5" />
          Cash Flow Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Income Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-green-700 dark:text-green-300">Income</span>
            <span className="text-gray-600 dark:text-gray-400">
              ${income.toLocaleString()} ({incomePercentage.toFixed(1)}%)
            </span>
          </div>
          <Progress 
            value={incomePercentage} 
            className="h-2 bg-gray-200 dark:bg-gray-700"
            style={{
              '--progress-background': 'rgb(34 197 94)',
              '--progress-foreground': 'rgb(22 163 74)'
            } as React.CSSProperties}
          />
        </div>

        {/* Expenses Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-red-700 dark:text-red-300">Expenses</span>
            <span className="text-gray-600 dark:text-gray-400">
              ${expenses.toLocaleString()} ({expensesPercentage.toFixed(1)}%)
            </span>
          </div>
          <Progress 
            value={expensesPercentage} 
            className="h-2 bg-gray-200 dark:bg-gray-700"
            style={{
              '--progress-background': 'rgb(239 68 68)',
              '--progress-foreground': 'rgb(220 38 38)'
            } as React.CSSProperties}
          />
        </div>

        {/* Savings Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-blue-700 dark:text-blue-300">Savings</span>
            <span className="text-gray-600 dark:text-gray-400">
              ${savings.toLocaleString()} ({savingsPercentage.toFixed(1)}%)
            </span>
          </div>
          <Progress 
            value={savingsPercentage} 
            className="h-2 bg-gray-200 dark:bg-gray-700"
            style={{
              '--progress-background': 'rgb(59 130 246)',
              '--progress-foreground': 'rgb(37 99 235)'
            } as React.CSSProperties}
          />
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {incomePercentage.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Income Ratio</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {expensesPercentage.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Expense Ratio</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {savingsPercentage.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Savings Ratio</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Plus, 
  Minus, 
  TrendingUp, 
  BarChart3,
  Calendar,
  Download,
  Upload
} from "lucide-react"

export function QuickActions() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
          <BarChart3 className="h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Primary Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button 
            className="h-12 bg-green-600 hover:bg-green-700 text-white"
            size="lg"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Income
          </Button>
          <Button 
            className="h-12 bg-red-600 hover:bg-red-700 text-white"
            size="lg"
          >
            <Minus className="h-4 w-4 mr-2" />
            Add Expense
          </Button>
        </div>

        {/* Secondary Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button 
            variant="outline" 
            className="h-10 flex flex-col items-center justify-center gap-1 p-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span className="text-xs">Analytics</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-10 flex flex-col items-center justify-center gap-1 p-2"
          >
            <Calendar className="h-4 w-4" />
            <span className="text-xs">Schedule</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-10 flex flex-col items-center justify-center gap-1 p-2"
          >
            <Download className="h-4 w-4" />
            <span className="text-xs">Export</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-10 flex flex-col items-center justify-center gap-1 p-2"
          >
            <Upload className="h-4 w-4" />
            <span className="text-xs">Import</span>
          </Button>
        </div>

        {/* Additional Features */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button 
              variant="ghost" 
              className="justify-start text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Set Budget
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Goals
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Reports
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

import React, { Suspense } from "react"
import { MoneyMovementsClient } from "./MoneyMovementsClient"

export default function MoneyMovementsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MoneyMovementsClient />
    </Suspense>
  )
}

"use client"

import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

interface DataPoint {
  month: string
  amount: number
}

const sampleData: DataPoint[] = [
  { month: "Jan", amount: 1200 },
  { month: "Feb", amount: 1900 },
  { month: "Mar", amount: 1500 },
  { month: "Apr", amount: 2100 },
  { month: "May", amount: 1800 },
  { month: "Jun", amount: 2400 },
]

export function D3BarChart() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    // Clear any existing content
    d3.select(svgRef.current).selectAll("*").remove()

    // Set up dimensions
    const margin = { top: 20, right: 20, bottom: 40, left: 60 }
    const width = 400 - margin.left - margin.right
    const height = 250 - margin.top - margin.bottom

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(sampleData.map(d => d.month))
      .range([0, width])
      .padding(0.2)

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(sampleData, d => d.amount) || 0])
      .range([height, 0])

    // Add bars
    svg
      .selectAll(".bar")
      .data(sampleData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.month) || 0)
      .attr("y", d => yScale(d.amount))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.amount))
      .attr("fill", "#3B82F6")
      .attr("rx", 4)
      .attr("ry", 4)

    // Add hover effects
    svg
      .selectAll(".bar")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .attr("fill", "#1D4ED8")
          .attr("stroke", "#1E40AF")
          .attr("stroke-width", 2)
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .attr("fill", "#3B82F6")
          .attr("stroke", "none")
      })

    // Add X axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("fill", "#6B7280")
      .attr("font-size", "12px")

    // Add Y axis
    svg
      .append("g")
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .attr("fill", "#6B7280")
      .attr("font-size", "12px")

    // Add value labels on bars
    svg
      .selectAll(".bar-label")
      .data(sampleData)
      .enter()
      .append("text")
      .attr("class", "bar-label")
      .attr("x", d => (xScale(d.month) || 0) + xScale.bandwidth() / 2)
      .attr("y", d => yScale(d.amount) - 8)
      .attr("text-anchor", "middle")
      .attr("fill", "#374151")
      .attr("font-size", "11px")
      .attr("font-weight", "600")
      .text(d => `£${d.amount}`)

  }, [])

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Cash Flow</h3>
      <div className="flex justify-center">
        <svg ref={svgRef} className="w-full max-w-md"></svg>
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">
        Sample D3.js bar chart - hover over bars to see effects
      </p>
    </div>
  )
}


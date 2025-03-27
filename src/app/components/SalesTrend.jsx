"use client";

import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import CustomSelect from "../utils/custom-select/CustomSelect";
import selectOptions from "../utils/selectOptions";

// Sample Sales Data
const salesData = [
  { month: "Jan", sales: 100000 },
  { month: "Feb", sales: 200000 },
  { month: "Mar", sales: 180000 },
  { month: "Apr", sales: 417754 },
  { month: "May", sales: 250000 },
  { month: "Jun", sales: 300000 },
  { month: "Jul", sales: 150000 },
  { month: "Aug", sales: 280000 },
  { month: "Sep", sales: 390000 },
  { month: "Oct", sales: 320000 },
  { month: "Nov", sales: 290000 },
  { month: "Dec", sales: 310000 },
];

export default function SalesTrend() {
  const {
    salesTrandFilterRegion,
    salesTrandFilterProducts,
    salesTrandFilterTime,
  } = selectOptions;
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Sales Trend</h3>
        <div className="flex items-center gap-2">
          <CustomSelect options={salesTrandFilterRegion} />
          <CustomSelect options={salesTrandFilterProducts} />
          <CustomSelect options={salesTrandFilterTime} />
        </div>
      </div>
      <div className="mt-8">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={salesData}
            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            {/* ✅ Show Only Horizontal Grid Lines */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            {/* ✅ X-Axis with Months at Bottom */}
            <XAxis
              dataKey="month"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              dy={10}
              axisLine={{ stroke: "#d1d5db" }}
            />

            {/* ✅ Y-Axis with 10K, 20K, 50K Formatting */}
            <YAxis
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              domain={[0, 500000]}
              ticks={[0, 100000, 200000, 300000, 400000, 500000]}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              width={60}
            />

            {/* ✅ Custom Tooltip - Shows Only on Dots */}
            <Tooltip />

            <Area
              type="linear"
              dataKey="sales"
              stroke="#4379EE"
              fillOpacity={1}
              fill="url(#colorSales)"
            />
            {/* ✅ Line with Always Visible Dots */}
            <Line
              type="linear"
              dataKey="sales"
              stroke="#4379EE"
              strokeWidth={3}
              activeDot={{ r: 8 }} // 🔹 Enlarge dot on hover
              isAnimationActive={false} // 🔹 Fix Tooltip Flickering
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

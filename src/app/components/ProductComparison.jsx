"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import CustomSelect from "../utils/custom-select/CustomSelect";
import selectOptions from "../utils/selectOptions";

const data = [
  { name: "Pet", current: 400000, previous: 300000 },
  { name: "Maid", current: 400000, previous: 300000 },
  { name: "Home", current: 450000, previous: 380000 },
  { name: "PA", current: 320000, previous: 290000 },
  { name: "Travel", current: 500000, previous: 470000 },
  { name: "P Motor", current: 500000, previous: 470000 },
  { name: "C Motor", current: 500000, previous: 470000 },
];

export default function ProductComparison() {
  const { salesTrandFilterTime } = selectOptions;
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Product Comparison</h3>
        <div className="flex items-center gap-2">
          <CustomSelect options={salesTrandFilterTime} />
        </div>
      </div>
      <p className="mt-1 text-[#6A567E] text-[15px]">
        Sales comparison between previous and current month
      </p>
      <div className="flex items-center justify-self-start space-x-4 border border-[#D9D9D9] rounded-sm px-2 py-1 my-2">
        {/* Current Month */}
        <div className="flex items-center space-x-2">
          <span className="w-[12.5px] h-[12.5px] bg-[#006BB7]"></span>
          <span className="text-[#6A567E] font-[13px]">Current Month</span>
        </div>

        {/* Previous Month */}
        <div className="flex items-center space-x-2">
          <span className="w-[12.5px] h-[12.5px] bg-[#57C5BA]"></span>
          <span className="text-[#6A567E] font-[13px]">Previous Month</span>
        </div>
      </div>

      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            barCategoryGap={30}
            margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
          >
            {/* ✅ X-Axis with Category Names */}
            <XAxis
              dataKey="name"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={{ stroke: "#d1d5db" }}
            />
            <Tooltip />

            {/* ✅ Y-Axis with 100K, 200K Formatting */}
            <YAxis
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              domain={[0, 500000]}
              ticks={[100000, 200000, 300000, 400000, 500000]}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              width={60}
            />

            {/* ✅ Bars with Rounded Edges */}
            {/* ✅ Bars with Custom Width and Rounded Edges */}
            <Bar
              dataKey="current"
              fill="#006BB7"
              radius={[6, 6, 0, 0]}
              barSize={15}
            />
            <Bar
              dataKey="previous"
              fill="#57C5BA"
              radius={[6, 6, 0, 0]}
              barSize={15}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

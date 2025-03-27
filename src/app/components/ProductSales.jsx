"use client";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Travel Insurance", value: 50000, color: "#4C83FF" },
  { name: "Pet Insurance", value: 25000, color: "#7AD3C6" },
  { name: "Home Insurance", value: 15000, color: "#F598A1" },
  { name: "Maid Insurance", value: 7000, color: "#FFB74D" },
  { name: "Motor Insurance", value: 3000, color: "#9B84D4" },
];

const COLORS = ["#2563eb", "#10b981", "#fbbf24", "#ef4444", "#8b5cf6"];

export default function ProductSales() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Product Wise Sales</h3>
      </div>
      <p className="mt-1 text-[#6A567E] text-[15px]">
        Sales between all the products
      </p>

      <div className="flex items-center mt-4">
        
          <PieChart width={280} height={280}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        

        <div className="w-[200px]">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-1">
              {/* Color Indicator & Name */}
              <div className="flex items-center space-x-1">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="ml-2 text-gray-700 text-[10px]">
                  {item.name}
                </span>
              </div>
              {/* Amount */}
              <span className="font-[11px]">
                <span className="text-gray-900">${item.value}</span>
                <span className="text-gray-700">.00</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

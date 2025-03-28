"use client";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Travel Insurance", value: 50000, color: "#4C83FF" },
  { name: "Pet Insurance", value: 25000, color: "#7AD3C6" },
  { name: "Home Insurance", value: 15000, color: "#F598A1" },
  { name: "Maid Insurance", value: 7000, color: "#FFB74D" },
  { name: "Motor Insurance", value: 3000, color: "#9B84D4" },
];

const ProductSales = () => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-bold">Product Wise Sales</h3>
    </div>
    <p className="mt-1 text-[#6A567E] text-[15px]">
      Sales between all the products
    </p>

    <div className="flex flex-col lg:flex-row items-center mt-[50px] justify-between">
      {/* Pie Chart */}
      <div className="max-w-[250px] w-full h-[250px] relative mx-auto lg:mx-0">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart width={250} height={250}>
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
        </ResponsiveContainer>
        <div className="flex flex-col items-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-[18px] font-bold text-[#222529]">1,234</span>
          <span className="text-[14px] text-[#8C97A7]">$100,000.00</span>
        </div>
      </div>
      <div className="w-full lg:w-[200px] mt-6 lg:mt-0">
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

export default ProductSales;

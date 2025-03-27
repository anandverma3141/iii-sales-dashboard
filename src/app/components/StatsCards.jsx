import Image from "next/image";
import CustomSelect1 from "../utils/custom-select/CustomSelect1";
import selectOptions from "../utils/selectOptions";

const stats = [
  { title: "Total Policies Sold", value: "40,689" },
  { title: "Top Selling Policy", value: "10,293", desc: "i-Maid" },
  { title: "Top Premium Collecting Policy", value: "$89,000", desc: "i-Maid" },
  { title: "Low Premium Collecting Policy", value: "$71,000", desc: "Travel" },
];

export default function StatsCards() {
    const {
        
        salesTrandFilterTime,
      } = selectOptions;
  return (
    <div className="relative border-t-1 border-[#6690F3]">
      <div className="absolute z-1 top-0 left-0 w-full bg-[#006BB7] h-[250px]"></div>
      <div className="container mx-auto pt-6 relative z-10">
        <div className="text-white flex justify-between items-end mt-3">
          {/* Left Side: Total Sales */}
          <div>
            <p className="text-sm uppercase">Total Sales</p>
            <h2 className="text-[48px] font-[600]">S$137000.00</h2>
          </div>

          {/* Right Side: Dropdown */}
           <CustomSelect1 options={salesTrandFilterTime} />
          {/* <button className="bg-white text-[#575757] text-[14px] px-2 py-2 rounded-xl shadow-md flex items-center">
            Current Month
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white px-4 py-6 rounded-xl shadow-md"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-gray-600 text-[16px] w-[160px] font-normal">
                  {stat.title}
                </h3>
                <Image
                  src={`/images/icon-${index + 1}.png`}
                  alt="Logo"
                  width={62}
                  height={62}
                />
              </div>
              <div className="flex items-center mt-4 mb-2 gap-2">
                <p className="text-[32px] font-bold">{stat.value}</p>
                {stat.desc && <p className="text-[16px]">{stat.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

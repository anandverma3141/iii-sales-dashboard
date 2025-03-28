import Image from "next/image";
import CustomSelect1 from "../utils/custom-select/CustomSelect1";
import selectOptions from "../utils/selectOptions";

const stats = [
    { title: "Total Policies Sold", value: "40,689" },
    { title: "Top Selling Policy", value: "10,293", desc: "i-Maid" },
    { title: "Top Premium Collecting Policy", value: "$89,000", desc: "i-Maid" },
    { title: "Low Premium Collecting Policy", value: "$71,000", desc: "Travel" },
];

const StatsCards = () => {
    const { salesTrandFilterTime } = selectOptions;
    return (
        <div className="relative border-t-1 border-[#6690F3]">
            <div className="absolute z-1 top-0 left-0 w-full bg-[#006BB7] h-[250px]"></div>
            <div className="container mx-auto pt-6 relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="text-white flex flex-col sm:flex-row justify-between items-start sm:items-end mt-3 gap-4">
                    {/* Left Side: Total Sales */}
                    <div>
                        <p className="text-sm uppercase">Total Sales</p>
                        <h2 className="text-[36px] sm:text-[48px]">$137000.00</h2>
                    </div>

                    {/* Right Side: Dropdown */}
                    <CustomSelect1 options={salesTrandFilterTime} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white px-4 py-6 rounded-xl shadow-md"
                        >
                            <div className="flex items-start justify-between">
                                <h3 className="text-gray-600 text-[14px] sm:text-[16px] w-[140px] sm:w-[160px] font-normal">
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
                                <p className="text-[24px] sm:text-[32px] font-bold">
                                    {stat.value}
                                </p>
                                {stat.desc && (
                                    <p className="text-[14px] sm:text-[16px]">{stat.desc}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsCards;

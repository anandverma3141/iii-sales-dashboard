import Image from "next/image";
import { useState, useRef } from "react";

const PolicyDetailsFilter = () => {
  const [policyType, setPolicyType] = useState("All");
  const [policyNumber, setPolicyNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [documentIssued, setDocumentIssued] = useState("");
  const dateInputRef = useRef(null);

  const handleClear = () => {
    setSearchTerm("");
    setPolicyType("All");
    setPolicyNumber("");
    setDocumentIssued("");
  };

  return (
    <div className="mt-5 flex items-end justify-between space-x-3">
      {/* Search Input */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-[#BFE9E5] rounded-sm px-2 py-1 pr-8 text-[12px] w-[325px] focus:ring focus:ring-blue-200 focus:outline-none"
        />

        <Image
          className="absolute right-2 text-gray-400"
          src="/images/search.png"
          alt="Logo"
          width={17}
          height={16}
        />
      </div>

      {/* Select Policy Type */}
      <div className="flex flex-col">
        <label className="text-[14px] text-[#556B82]">Select Policy Type</label>
        <select
          value={policyType}
          onChange={(e) => setPolicyType(e.target.value)}
          className="border  border-[#BFE9E5] rounded-sm px-2 py-1 pr-8 text-[12px] focus:ring focus:ring-blue-200 focus:outline-none"
        >
          <option value="All">All</option>
          <option value="Maid">Maid Insurance</option>
          <option value="Home">Home Insurance</option>
          <option value="Travel">Travel Insurance</option>
        </select>
      </div>

      {/* Policy Number Input */}
      <div className="flex flex-col">
        <label className="text-[14px] text-[#556B82]">Policy Number</label>
        <input
          type="text"
          placeholder="Enter Policy Number"
          value={policyNumber}
          onChange={(e) => setPolicyNumber(e.target.value)}
          className="border  border-[#BFE9E5] rounded-sm px-2 py-1 pr-8 text-[12px] focus:ring focus:ring-blue-200 focus:outline-none"
        />
      </div>

      <div className="relative flex flex-col">
        <label className="text-[14px] text-[#556B82]">Documents Issued</label>

        {/* Date Input */}
        <input
          type="date"
          ref={dateInputRef}
          value={documentIssued}
          onChange={(e) => setDocumentIssued(e.target.value)}
          className="border border-[#BFE9E5] rounded-sm px-2 py-1 pr-8 text-[12px] focus:ring focus:ring-blue-200 focus:outline-none appearance-none"
        />

        {/* Clickable Calendar Icon */}
        <Image
          className="absolute right-2 top-[26px] cursor-pointer"
          src="/images/calendar.png"
          alt="Calendar Icon"
          width={15}
          height={16}
          onClick={() => dateInputRef.current.showPicker()} // 🔹 Open Date Picker on Click
        />
      </div>

      <div className="relative flex flex-end items-end gap-2">
        {/* Search Button */}
        <button className="bg-[#EBEDF0] text-[#999999] px-2 py-1 rounded-lg text-[14px] hover:bg-gray-300 cursor-pointer">
          Search
        </button>

        {/* Clear Button */}
        <button
          onClick={handleClear}
          className="border border-[#57C5BA] text-[#57C5BA] px-2 py-1 rounded-lg text-[14px] hover:bg-[#57C5BA] hover:text-white cursor-pointer"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default PolicyDetailsFilter;

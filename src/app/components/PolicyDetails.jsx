"use client";
import Image from "next/image";
import React from "react";
import PolicyDetailsFilter from "./PolicyDetailsFilter";
import PolicyTable from "./PolicyTable";

const PolicyDetails = () => {
  return (
    <>
      <div className=" bg-white p-4 rounded-lg shadow-md">
        <div className="policy-details-header flex items-center justify-between">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Policy Details</h3>
          </div>

          <div className="flex items-center gap-5">
            <button className="curssor-pointer flex items-center px-2 py-1 bg-[#F1F1F1] text-[#6B7280] text-[14px] rounded-xl hover:bg-gray-200 gap-2">
              <Image
                src="/images/download.png"
                alt="icon"
                width={17}
                height={17}
              />
              Download
            </button>

            <button className="curssor-pointer">
              <Image
                src="/images/expend.png"
                alt="icon"
                width={17}
                height={17}
              />
            </button>
          </div>
        </div>
        <PolicyDetailsFilter />
        <PolicyTable />
      </div>
    </>
  );
};

export default PolicyDetails;

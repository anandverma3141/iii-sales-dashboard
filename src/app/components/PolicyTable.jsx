import Image from "next/image";
import React from "react";

const policies = [
  {
    policyNumber: "WRESDFGHVB45678",
    insuredName: "ABC Logistic",
    policyType: "Maid Insurance",
    status: "INFORCE",
    effectiveDate: "Jan 4, 2022",
  },
  {
    policyNumber: "WRESDFGHVB45678",
    insuredName: "ABC Logistic",
    policyType: "Home Insurance",
    status: "EXPIRING",
    effectiveDate: "Jan 4, 2022",
  },
  {
    policyNumber: "WRESDFGHVB45678",
    insuredName: "ABC Logistic",
    policyType: "Maid Insurance",
    status: "EXPIRED",
    effectiveDate: "Jan 2, 2022",
  },
];

const PolicyTable = () => {
  return (
    <div className="bg-white overflow-x-auto mt-4">
      <table className="w-full min-w-[600px] border-collapse">
        {/* Table Head */}
        <thead className="bg-[#F9FAFB] sticky top-0">
          <tr className="border-b border-[#EAECF0]">
            <th className="p-3 text-left text-[#475467] text-[12px] font-semibold">
              Policy Number
            </th>
            <th className="p-3 text-left text-[#475467] text-[12px] font-semibold">
              Insured Name
            </th>
            <th className="p-3 text-left text-[#475467] text-[12px] font-semibold">
              Policy Type
            </th>
            <th className="p-3 text-left text-[#475467] text-[12px] font-semibold">
              Status
            </th>
            <th className="p-3 text-left text-[#475467] text-[12px] font-semibold">
              Effective Date
            </th>
            <th className="p-3 text-center text-[#475467] text-[12px] font-semibold">
              View Policy
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {policies.map((policy, index) => (
            <tr
              key={index}
              className="border-b border-[#EAECF0] hover:bg-gray-50 text-[14px]"
            >
              <td className="p-3 text-[#101828] whitespace-nowrap">
                {policy.policyNumber}
              </td>
              <td className="p-3 text-[#475467]">{policy.insuredName}</td>
              <td className="p-3 text-[#475467]">{policy.policyType}</td>
              <td className="p-3 text-[#475467]">
                {policy.status === "INFORCE" && (
                  <span
                    className={`flex items-center gap-2 justify-self-start px-2 py-1 text-sm font-medium rounded-[50px] pocily-status-inforce`}
                  >
                    <Image
                      className=""
                      src="/images/icon-inforce.png"
                      alt="icon"
                      width={13}
                      height={8}
                    />{" "}
                    Inforce
                  </span>
                )}
                {policy.status === "EXPIRING" && (
                  <span
                    className={`flex items-center gap-2 justify-self-start px-2 py-1 text-sm font-medium rounded-[50px] pocily-status-expiring`}
                  >
                    <Image
                      className=""
                      src="/images/icon-expiring.png"
                      alt="icon"
                      width={13}
                      height={13}
                    />{" "}
                    Expiring soon
                  </span>
                )}
                {policy.status === "EXPIRED" && (
                  <span
                    className={`flex items-center gap-2 justify-self-start px-2 py-1 text-sm font-medium rounded-[50px] pocily-status-expired`}
                  >
                    <Image
                      className=""
                      src="/images/icon-expired.png"
                      alt="icon"
                      width={8}
                      height={8}
                    />{" "}
                    Expired
                  </span>
                )}
              </td>
              <td className="p-3 text-[#475467]">{policy.effectiveDate}</td>
              <td className="p-3 text-[#475467] text-center flex justify-center space-x-2">
                <button className="text-gray-500 hover:text-blue-500 cursor-pointer">
                  <Image
                    className=""
                    src="/images/download-icon.png"
                    alt="icon"
                    width={19}
                    height={18}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-3 p-3 space-y-2 sm:space-y-0">
        <button className="flex items-center gap-1 px-2 py-1 border border-[#D5D7DA] rounded-md text-[#414651] text-[14px] hover:bg-gray-100 cursor-pointer">
          <Image
            className=""
            src="/images/left-arrow.png"
            alt="icon"
            width={14}
            height={14}
          />{" "}
          Previous
        </button>
        <div className="flex space-x-2 text-[14px]">
          <button className="px-3 cursor-pointer py-2 rounded-md selected-pagination">
            1
          </button>
          <button className="px-3 cursor-pointer py-2 rounded-md">2</button>
          <button className="px-3 cursor-pointer py-2 rounded-md">3</button>
          <span className="px-3 py-2">...</span>
          <button className="px-3 cursor-pointer py-2 rounded-md">8</button>
          <button className="px-3 cursor-pointer py-2 rounded-md">9</button>
          <button className="px-3 cursor-pointer py-2 rounded-md">10</button>
        </div>
        <button className="flex items-center gap-1 px-2 py-1 cursor-pointer border border-[#D5D7DA] rounded-md text-[#414651] text-[14px] hover:bg-gray-100">
          Next{" "}
          <Image
            className=""
            src="/images/right-arrow.png"
            alt="icon"
            width={14}
            height={14}
          />
        </button>
      </div>
    </div>
  );
};

export default PolicyTable;

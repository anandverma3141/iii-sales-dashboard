import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Pagination from "./Paginations";

const PolicyTable = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [data, setData] = useState(null);
  const [showTableData, setShowTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    if (data) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setTotalPages(data.length / itemsPerPage); // Calculate total pages based on data length
      setShowTableData(data.slice(startIndex, endIndex));
    }
  }, [data]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setShowTableData(data.slice(startIndex, endIndex));
  }

  // Function to fetch the access token
  const fetchAccessToken = async () => {
    const username = "b2c.ps.user.uat";
    const password = "Welcome@1234";

    try {
      const response = await axios.post(
        "https://iii-sandbox-sg.insuremo.com/cas/ebao/v2/json/tickets",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-mo-client-id": "key",
            "x-mo-tenant-id": "iii",
            "x-mo-user-source-id": "platform",
          },
        }
      );

      console.log("response", response);

      const token = response.data.access_token;

      setAccessToken(token);
      localStorage.setItem("access_token", token);
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  // Function to fetch data using the access token
  const fetchDataWithToken = async () => {
    if (!accessToken) {
      console.error("No access token available");
      return;
    }

    const FromDate = "2024-09-18";
    const ToDate = "2024-09-30";

    // Validate that the date difference is <= 31 days
    const date1 = new Date(FromDate);
    const date2 = new Date(ToDate);
    const diffInTime = date2 - date1;
    const diffInDays = diffInTime / (1000 * 3600 * 24);

    console.log("diffInDays", diffInDays);

    if (diffInDays > 31) {
      console.error("Date difference should be less than or equal to 31 days.");
      return;
    }

    try {
      const response = await axios.post(
        "https://sandbox-sg-gw.insuremo.com/iii/v1/iii-bff-app/searchPolicyByDate",
        {
          FromDate,
          ToDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setData(response.data?.ResultList);
    } catch (error) {
      console.error("Error fetching data with token:", error);
    }
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      fetchDataWithToken();
    }
  }, [accessToken]);

  // Get the current date and time
  const currentDate = new Date();

  const isNearExpiry = (expiryDate) => {
    const expiry = new Date(expiryDate);
    const timeDifference = expiry - currentDate;
    const daysRemaining = timeDifference / (1000 * 3600 * 24); // convert to days

    return daysRemaining <= 7 && daysRemaining > 0; // Near expiry: within 7 days
  };

  console.log("accessToken", accessToken);
  console.log("responseresponse data", data);
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
          {showTableData.map((list, index) => (
            <tr
              key={index}
              className="border-b border-[#EAECF0] hover:bg-gray-50 text-[14px]"
            >
              <td className="p-3 text-[#101828] whitespace-nowrap">
                {list.PolicyNo}
              </td>
              <td className="p-3 text-[#475467]">{list.CustomerName}</td>
              <td className="p-3 text-[#475467]">{list.ProductName}</td>
              <td className="p-3 text-[#475467]">
                {currentDate <= new Date(list.ExpiryDate) && (
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
                {isNearExpiry(list.ExpiryDate) && (
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
                {currentDate > new Date(list.ExpiryDate) && (
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
              <td className="p-3 text-[#475467]">{list.EffectiveDate}</td>
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => handlePageChange(page)}
      />
    </div>
  );
};

export default PolicyTable;

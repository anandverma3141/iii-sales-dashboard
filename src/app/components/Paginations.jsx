import React from "react";
import Image from "next/image";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    const totalVisiblePages = 3; // Adjust the number of visible pages before showing "..."

    if (totalPages <= 5) {
      // Show all pages if total pages are 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      // Always show first page
      pages.push(renderPageButton(1));

      if (currentPage > totalVisiblePages) {
        pages.push(<span key="start-ellipsis">...</span>);
      }

      // Show pages around the current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(renderPageButton(i));
      }

      if (currentPage < totalPages - totalVisiblePages) {
        pages.push(<span key="end-ellipsis">...</span>);
      }

      // Always show the last page
      pages.push(renderPageButton(totalPages));
    }

    return pages;
  };

  const renderPageButton = (page) => (
    <button
      key={page}
      className={`px-3 py-2 rounded-md cursor-pointer ${
        page === currentPage ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
      }`}
      onClick={() => onPageChange(page)}
    >
      {page}
    </button>
  );

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-3 p-3 space-y-2 sm:space-y-0">
      <button
        className={`flex items-center gap-1 px-2 py-1 border border-[#D5D7DA] rounded-md text-[#414651] text-[14px] hover:bg-gray-100 cursor-pointer font-inter-24pt ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image src="/images/left-arrow.png" alt="icon" width={14} height={14} />
        <span className="hidden sm:inline">Previous</span>
      </button>
      <div className="flex flex-wrap justify-center space-x-2 text-[14px]">
        {renderPageNumbers()}
      </div>

      <button
        className={`flex items-center gap-1 px-2 py-1 border border-[#D5D7DA] rounded-md text-[#414651] text-[14px] hover:bg-gray-100 cursor-pointer font-inter-24pt ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="hidden sm:inline">Next</span>
        <Image
          src="/images/right-arrow.png"
          alt="icon"
          width={14}
          height={14}
        />
      </button>
    </div>
  );
};

export default Pagination;

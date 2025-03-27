"use client";
import { useState, useRef, useEffect } from "react";

export default function CustomSelect1({ options }) {
  const [selected, setSelected] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (options && options.length > 0) {
      setSelected(options[0].name);
    }
  }, [options]);
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-[148px]" ref={dropdownRef}>
      {/* Select Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white text-[#575757] text-[14px] px-3 py-2 rounded-[20px] flex items-centerr justify-between"
      >
        {selected}
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
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
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 w-full w-[128px] bg-[#FCFDFD]  shadow-lg rounded-sm mt-1 border border-[#D5D5D5] z-10">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-2 py-1 hover:bg-gray-100 cursor-pointer text-[12px] text-[#575757]"
                onClick={() => {
                  setSelected(option.name);
                  setIsOpen(false);
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

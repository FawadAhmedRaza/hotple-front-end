import React, { useState, useRef, useEffect } from "react";
import Iconify from "../ui/Iconify-icons/Iconify";

function Select({ label, options, className, selectClass, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  console.log(options)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-40 relative" ref={selectRef}>
      <input
        type="text"
        value={options?.find((option) => option?.value === value)?.label || ""}
        readOnly
        placeholder={label}
        className={` px-3 py-2 border rounded dark:bg-brown   w-full  ${className}`}
        onClick={toggleSelect}
      />
      {isOpen && (
        <ul
          id="option_div"
          style={{ scrollbarWidth: "thin" }}
          className={`flex flex-col gap-1 w-full p-2 border-[1.5px] bg-white dark:bg-brown rounded-xl absolute top-16 shadow-lg z-40 max-h-48 overflow-auto ${selectClass}`}
        >
          {options?.map((option, index) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                toggleSelect();
              }}
              className={`flex gap-2 align-center items-center h-8 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-slate cursor-pointer ${
                value === option.value
                  ? "bg-neutral-200 dark:bg-slate"
                  : index === 0 && !value
                  ? "bg-neutral-200 dark:bg-slate dark:hover:bg-slate hover:bg-neutral-200"
                  : ""
              }`}
            >
              {option.optionStartIcon && (
                <span className="mr-2">{option.optionStartIcon}</span>
              )}
              <span className="text-[13px] text-custom-black grow">
                {option.label}
              </span>
              {value === option.value && (
                <Iconify icon="ic:round-check" className="mr-1" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;

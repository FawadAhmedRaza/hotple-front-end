import React, { useState, useRef, useEffect } from "react";
import Iconify from "../ui/Iconify-icons/Iconify";
import  Span  from "../ui/Typography/span";

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
        className={` px-3 py-2 border rounded-md dark:border-neutral-800 border-gray-200 dark:bg-brownish_black  w-full outline-none focus:outline-none  ${className}`}
        onClick={toggleSelect}
      />
      {isOpen && (
        <ul
          id="option_div"
          style={{ scrollbarWidth: "thin" }}
          className={`flex flex-col gap-1 w-full p-1 border-[1.5px]  dark:border-neutral-800 border-gray-200 bg-white dark:bg-brown rounded-xl absolute top-12 shadow-lg z-40 max-h-48 overflow-auto ${selectClass}`}
        >
          {options?.map((option, index) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                toggleSelect();
              }}
              className={` flex gap-2 align-center items-center h-8 px-3 py-2 rounded-lg hover:bg-light_bg_grey dark:hover:bg-dark_bg_grey cursor-pointer truncate ${
                value === option.value
                  ? "hover:bg-light_bg_grey dark:hover:bg-dark_bg_grey"
                  : index === 0 && !value
                  ? "hover:bg-light_bg_grey dark:hover:bg-dark_bg_grey "
                  : ""
              }`}
            >
              {option.optionStartIcon && (
                <span className="mr-2">{option.optionStartIcon}</span>
              )}
              <Span className="!text-sm !font-450 grow dark:!text-dark_primary_label !text-light_primary_label">
                {option.label}
              </Span>
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

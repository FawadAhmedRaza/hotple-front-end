import React, { useState, useRef, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";

import Iconify from "../ui/Iconify-icons/Iconify";

function CustomVendorSelect({
  name,
  label,
  options,
  disabled = false,
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const { control } = useFormContext();

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
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className="w-full relative" ref={selectRef}>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </label>
          <input
            type="text"
            value={
              options.find((option) => option.value === value)?.label || ""
            }
            readOnly
            className={` px-4 py-2.5 dark:bg-brown bg-light_bg_grey  rounded-full focus:outline-none w-full placeholder:dark:text-neutral-500 ${className}`}
            onClick={toggleSelect}
          />
          {isOpen && (
            <ul
              id="option_div"
              style={{ scrollbarWidth: "thin" }}
              className="flex flex-col gap-1 w-full p-2 border-[1.5px] bg-white rounded-xl absolute top-16 shadow-lg z-40 max-h-48 overflow-auto"
            >
              {options?.map((option, index) => (
                <li
                  key={option.value}
                  onClick={() => {
                    onChange(option.value, option.label);
                    toggleSelect();
                  }}
                  className={`flex gap-2 align-center items-center h-8 px-3 py-2 rounded-lg hover:bg-neutral-100 cursor-pointer ${
                    value === option.value
                      ? "bg-neutral-200"
                      : index === 0 && !value
                      ? "bg-neutral-200 hover:bg-neutral-200"
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
      )}
    />
  );
}

export default CustomVendorSelect;

import React, { useState, useRef, useEffect, useCallback } from "react";

import { getUsers } from "@/api/user";

import { topicsOfCovers } from "@/data"; // Assuming you have this file
import { useFormContext } from "react-hook-form";

const DescriptionPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverType, setPopoverType] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const popoverRef = useRef(null);
  const textareaRef = useRef(null);
  const [users, setUsers] = useState([]);

  const {setValue} = useFormContext();

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setTextareaValue(value);
    setValue("description",value)
    if (value.includes("@")) {
      setPopoverType("users");
      setIsOpen(true);
    } else if (value.includes("#")) {
      setPopoverType("topics");
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setPopoverType("");
    }
 
  };

  const handleOptionClick = (value) => {
    const cursorPosition = textareaRef.current.selectionStart;
    const beforeCursor = textareaValue.slice(0, cursorPosition);
    const afterCursor = textareaValue.slice(cursorPosition);

    const newValue = `${beforeCursor}${value} ${afterCursor}`;
    setTextareaValue(newValue);
    setIsOpen(false);
  };

  const handlePopoverToggle = (type) => {
    setPopoverType(type);
    setIsOpen((prev) => !prev);
  };

  const popoverContent = popoverType === "users" ? users : topicsOfCovers;

  return (
    <div className="my-4 relative" ref={popoverRef}>
      <textarea
        ref={textareaRef}
        rows="5"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        value={textareaValue}
        onChange={handleTextareaChange}
      ></textarea>
      <button
        type="button"
        onClick={() => handlePopoverToggle("topics")}
        className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-xl text-sm px-2.5 py-1 me-2 m-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        #표지주제
      </button>
      <button
        type="button"
        onClick={() => handlePopoverToggle("users")}
        className="bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-xl text-sm px-2.5 py-1 me-2 m-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        @사용자
      </button>
      {isOpen && (
        <ul
          className="absolute left-0 w-full border bg-white rounded-xl shadow-lg z-10 max-h-56 overflow-auto"
          style={{
            top: textareaRef.current
              ? textareaRef.current.offsetHeight + 16
              : "100%",
          }}
        >
          {popoverContent?.map((item) => (
            <li
              key={item?.title || item?.id}
              onClick={() =>
                handleOptionClick(
                  popoverType === "users"
                    ? `${item?.username}`
                    : `${item?.title}`
                )
              }
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <span>
                {popoverType === "users" ? item?.username : item?.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DescriptionPopover;

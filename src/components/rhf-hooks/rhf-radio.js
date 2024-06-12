import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RhfRadio = ({ name, className, value, label }) => {
  const { control } = useFormContext();

  return (
    <div className="w-full">
      <div className="flex items-center">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              <input
                className={`mr-2 form-radio focus:ring-0 checked:bg-red accent-red ${className}`}
                type="radio"
                id={value}
                value={value}
                checked={field.value === value}
                onChange={() => field.onChange(value)}
              />
              <label
                htmlFor={value}
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                {label}
              </label>
            </>
          )}
        />
      </div>
    </div>
  );
};

export default RhfRadio;

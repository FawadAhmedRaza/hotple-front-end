import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFTextArea = ({ name, placeholder,className, label }) => {
  const { control } = useFormContext();
  return (
    <div className=" w-full">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {label}
            </label>
            <textarea
              rows="5"
              value={field.value}
              {...field}
              onChange={(e) => field.onChange(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder={placeholder}
            ></textarea>
            {error && <p className="text-red text-sm  px-2">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};  

export default RHFTextArea;

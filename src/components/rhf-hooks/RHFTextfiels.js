import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFTextInput = ({ name, placeholder, type, className, label }) => {
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
            <input
              autoComplete="none"
              className={` px-4 py-2.5 dark:bg-brown bg-light_bg_grey  rounded-full focus:outline-none w-full placeholder:dark:text-neutral-500 ${className}`}
              placeholder={placeholder}
              {...field}
              value={field.value}
              onChangeText={(value) => onChange(value)}
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
              type={type}
            />
            {error && <p className="text-red text-sm  px-2">{error.message}</p>}
          </>
        )}
      />  
    </div>
  );
};

export default RHFTextInput;

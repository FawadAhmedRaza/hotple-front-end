
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFTextInput = ({name,placeholder , type, className}) => {
    const { control } = useFormContext();
  return (
    <div className=" w-full">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error  } }) => (
            <>
          <input 
          className={` px-4 py-2 bg-gray-100 shadow-sm my-2 rounded-2xl focus:outline-none w-full ${className}`}
            placeholder={placeholder}
            {...field}
            value={field.value}
            onChangeText={(value) => onChange(value)}
            onChange={(e) => {field.onChange(e.target.value)}}
            type={type}
          />
          {error && <p className="text-red text-sm mt-1">{error.message}</p>}
          </>
        )}
      />
      
    </div>
  );
};

export default RHFTextInput;

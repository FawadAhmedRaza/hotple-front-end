'use client'
import { useFormContext, Controller } from 'react-hook-form';
import Upload from '../upload/upload';

export function RHFVedioUpload({ name, multiple, helperText,className, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) =>{
        return   multiple ? (
          <Upload
          className={className}
            multiple
            accept={{ 'video/*': [] }}
            files={field.value}
            error={!!error}
            helperText={
              (!!error || helperText) && (
                <p className={`px-2 text-sm ${error ? 'text-red' : 'text-gray-500'}`}>
                  {error ? error?.message : helperText}
                </p>
              )
            }
            {...other}
          />
        ) : (
          <Upload
          className={className}
          accept={{ 'video/*': []}}
            file={field.value}
            error={!!error}
            helperText={
              (!!error || helperText) && (
                <p className={`px-2 text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>
                  {error ? error?.message : helperText}
                </p>
              )
            }
            {...other}
          />
        )
      }
      
      }
    />
  );
}


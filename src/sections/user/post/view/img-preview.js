import MultiFilePreview from "@/components/upload/preview-multi-file";
import React, { useCallback } from "react";
import { useFormContext } from "react-hook-form";

const ImgPreview = () => {
  const { watch, setValue } = useFormContext();
  const files = watch("files");

  const removeFile = useCallback(
    (fileToRemove) => {
      const updatedFiles = files?.filter((file) => file !== fileToRemove);
      setValue("files", updatedFiles);
    },
    [files]
  );

  const renderMultiPreview = files && (
    <>
      <div className="my-3 flex flex-wrap justify-start overflow-y-scroll max-h-60">
        <MultiFilePreview onRemove={(file) => removeFile(file)} files={files} />
      </div>
      <div className="flex justify-end space-x-2 "></div>
    </>
  );

  return <div>{renderMultiPreview}</div>;
};

export default ImgPreview;

import MultiFilePreview from "@/components/upload/preview-multi-file";
import React from "react";
import { useFormContext } from "react-hook-form";

const ImgPreview = ({ hasFiles }) => {
  const { watch } = useFormContext();
  const files = watch("files");

  const renderMultiPreview = files && (
    <>
      <div className="my-3 flex flex-wrap justify-start overflow-y-scroll max-h-60  ">
        <MultiFilePreview files={files} />
      </div>
      <div className="flex justify-end space-x-2 ">
        
      </div>
    </>
  );

  return <div>{renderMultiPreview}</div>;
};

export default ImgPreview;

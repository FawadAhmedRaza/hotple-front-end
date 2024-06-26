import { useDropzone } from "react-dropzone";
import MultiFilePreview from "./preview-multi-file";
import RejectionFiles from "./errors-rejection-files";
import SingleFilePreview from "./preview-single-file";
import Iconify from "../ui/Iconify-icons/Iconify";

export default function Upload({
  disabled,
  multiple = false,
  error,
  helperText,
  file,
  onDelete,
  files,
  thumbnail,
  onUpload,
  onRemove,
  onRemoveAll,
  className,
  ...other
}) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple,
    disabled,
    ...other,
  });
  console.log(file)

  const hasFile = !!file && !multiple;
  const hasFiles = !!files && multiple && !!files.length;
  const hasError = isDragReject || !!error;

  console.log({hasFile,hasFiles,hasError})
  const renderPlaceholder = (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="text-center space-y-1">
        <h6 className="text-lg">파일 삭제 또는 선택</h6>
        <p className="text-sm text-gray-500">
          여기에 파일을 놓거나 클릭하세요.
          <span className="mx-1 text-blue-600 underline">검색</span>
          당신의 기계를 통해
        </p>
      </div>
    </div>
  );

  const renderSinglePreview = (
    <SingleFilePreview
      imgUrl={typeof file === "string" ? file : file?.preview}
    />
  );

  const removeSinglePreview = hasFile && onDelete && (
    <button
      type="button"
      className="absolute top-4 right-4 z-10 text-white bg-gray-800 bg-opacity-70 hover:bg-opacity-50 p-1 rounded-full"
      onClick={onDelete}
    >
      <Iconify icon="mingcute:close-line" width={18} />
    </button>
  );

  const renderMultiPreview = hasFiles && (
    <>
      <div className="my-3 flex flex-wrap justify-start overflow-y-scroll max-h-60  ">
        <MultiFilePreview
          files={files}
          thumbnail={thumbnail}
          onRemove={onRemove}
        />
      </div>
      <div className="flex justify-end space-x-2 ">
        {onRemoveAll && (
          <button
            type="button"
            className="px-3 py-1 border rounded text-gray-700 border-gray-300"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        )}
      </div>
    </>
  );

  return (
    <div className={`relative mb-2  w-full  ${className}  `}>
      <div
        {...getRootProps()}
        className={`p-10  flex justify-center items-center    cursor-pointer overflow-hidden relative dark:bg-brown bg-gray-100 border border-dashed transition-opacity rounded-lg ${
          isDragActive ? "opacity-70" : ""
        } ${disabled ? "opacity-50 pointer-events-none" : ""} ${
          hasError ? "text-red-600 border-red-600 bg-red-50" : ""
        } ${hasFile ? "py-24" : ""} ${className}`}
      >
        <input {...getInputProps()} />
        {hasFile ? renderSinglePreview : renderPlaceholder}
      </div>
      {helperText && <p className="text-sm text-gray-500 mt-2">{helperText}</p>}
      <RejectionFiles fileRejections={fileRejections} />
      {renderMultiPreview}
    </div>
  );
}


import { fData } from '@/utils/format-number';
import { fileData } from '../file-thumbnail';

export default function RejectionFiles({ fileRejections }) {
  if (!fileRejections.length) {
    return null;
  }

  return (
    <div className="py-2 px-4 mt-3 text-left border border-dashed border-red-500 bg-red-100">
      {fileRejections.map(({ file, errors }) => {
        const { path, size } = fileData(file);

        return (
          <div key={path} className="my-2">
            <p className="text-sm font-semibold truncate">
              {path} - {size ? fData(size) : ''}
            </p>

            {errors.map((error) => (
              <span key={error.code} className="text-xs block">
                - {error.message}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}


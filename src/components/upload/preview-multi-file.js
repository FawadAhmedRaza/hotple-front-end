
import { m, AnimatePresence } from 'framer-motion';


// import { varFade } from '../animate';
import FileThumbnail, { fileData } from '../file-thumbnail';
import Iconify from '../ui/Iconify-icons/Iconify';
import { fData } from '@/utils/format-number';

export default function MultiFilePreview({ thumbnail, files, onRemove, sx }) {
  console.log("thumbnail,file",thumbnail,files)
  return (
    <AnimatePresence initial={false}>
      {files?.map((file) => {
        const { key, name = '', size = 0 } = fileData(file);
        const isNotFormatFile = typeof file === 'string';

        if (thumbnail) {
          return (
            <m.div
              key={key}
              // {...varFade().inUp}
              className="relative inline-flex flex-wrap items-center justify-center  m-1 w-20 h-20 rounded overflow-hidden border border-gray-300"
              style={sx}
            >
              <FileThumbnail
                tooltip
                imageView
                file={file}
                className="absolute"
                imgClassName="absolute"
              />

              {onRemove && (
                <button
                  type="button"
                  className="absolute top-1 right-1 p-1 text-white bg-gray-300 bg-opacity-50 hover:bg-opacity-75 rounded"
                  onClick={() => onRemove(file)}
                >
                  <Iconify icon="mingcute:close-line" width={14} />
                </button>
              )}
            </m.div>
          );
        }

        return (
          <m.div
            key={key}
            // {...varFade().inUp}
            className="flex items-center my-2 py-2 px-3 rounded border border-gray-300"
            style={sx}
          >
            <FileThumbnail file={file} />
            <div className="ml-2">
              <p className="text-sm font-medium">{isNotFormatFile ? file : name}</p>
              {!isNotFormatFile && <span className="text-xs text-gray-500">{fData(size)}</span>}
            </div>
            {onRemove && (
              <button
                type="button"
                className="ml-auto p-1"
                onClick={() => onRemove(file)}
              >
                <Iconify icon="mingcute:close-line" width={16} />
              </button>
            )}
          </m.div>
        );
      })}
    </AnimatePresence>
  );
}


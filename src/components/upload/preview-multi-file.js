
import { m, AnimatePresence } from 'framer-motion';


// import { varFade } from '../animate';
import FileThumbnail, { fileData } from '../file-thumbnail';
import Iconify from '../ui/Iconify-icons/Iconify';
import { fData } from '@/utils/format-number';

export default function MultiFilePreview({ thumbnail, files, onRemove, sx }) {
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
              className="relative inline-flex flex-wrap items-center justify-center rounded overflow-hidden"
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
                  className="absolute top-0 right-1 p-1 text-white bg-gray-300 bg-opacity-50 hover:bg-opacity-75 rounded"
                  onClick={() => onRemove(file)}  
                >
                  <Iconify icon="mingcute:close-line" className="w-4 h-4" />
                </button>
              )}
            </m.div>
          );
        }

        return (
          <m.div
            key={key}
            className="flex relative items-center py-2 my-1 mx-1 rounded border border-gray-300 h-[150px] overflow-hidden max-h-[150px]"
            style={sx}
          >
            <FileThumbnail file={file} />
            {/* <div className="ml-2">
              <p className="text-sm font-medium">{isNotFormatFile ? file : name}</p>
              {!isNotFormatFile && <span className="text-xs text-gray-500">{fData(size)}</span>}
            </div> */}
            {onRemove && (
              <button
                type="button"
                className="ml-auto p-1 absolute -top-1 -right-1"
                onClick={() => onRemove(file)}
              >
                <Iconify icon="mingcute:close-line" className="w-4 h-4" />
              </button>
            )}
          </m.div>
        );
      })}
    </AnimatePresence>
  );
}


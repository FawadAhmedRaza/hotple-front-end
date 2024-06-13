
import { useEffect, useState } from 'react';

import DownloadButton from './download-button';
import { fileData, fileThumb, fileFormat } from './utils';
import Image from 'next/image';

export default function FileThumbnail({ file, tooltip, imageView, onDownload, sx, imgSx }) {
  const { name = '', path = '', preview = '' } = fileData(file);
  const format = fileFormat(path || preview);
  const [showTooltip, setShowTooltip] = useState(false);

  const renderContent = (
    <Image
      src={preview}
      height={50}
      width={50}
      alt='image'
      className="w-full h-full object-cover"
      style={{ ...imgSx }}
    />
  )

  return (
    <>
      {tooltip ? (
        <Tooltip className="flex items-center justify-center" tooltip={name} show={showTooltip}>
          {renderContent}
          {onDownload && <DownloadButton onDownload={onDownload} />}
        </Tooltip>
      ) : (
        <div className="flex items-center justify-center">
          {renderContent}
          {onDownload && <DownloadButton onDownload={onDownload} />}
        </div>
      )}
    </>
  );
}



const Tooltip = ({ children, className, tooltip, show }) => {
  return (
    <div className="group relative">
      {children}
      {show && (
        <span className={`absolute -top-7 scale-0 group-hover:scale-100 rounded-md border dark:border-neutral-800 dark:bg-dark_bg_grey bg-dark_primary_label px-2 py-1.5 text-xs dark:text-dark_tertiary_label text-light_primary_label ${className}`}>
          {tooltip}
        </span>
      )}
    </div>
  );
};


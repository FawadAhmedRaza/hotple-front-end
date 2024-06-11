import Iconify from "../ui/Iconify-icons/Iconify";



export default function DownloadButton({ onDownload }) {
  return (
    <button
      onClick={onDownload}
      className="absolute top-0 right-0 w-full h-full p-0 z-9 opacity-0 hover:opacity-100 bg-gray-800 text-white flex items-center justify-center"
      style={{
        borderRadius: 'unset',
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <Iconify icon="eva:arrow-circle-down-fill" width={24} />
    </button>
  );
}


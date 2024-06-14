import Image from "next/image";
export default function SingleFilePreview({ imgUrl}) {
  
    <div className="absolute top-0 left-0 w-full h-full p-1">
      <Image
        alt="file preview"
        height={20}
        width={20}
        src={imgUrl}
        className="w-full h-full rounded"
      />
    </div>
}
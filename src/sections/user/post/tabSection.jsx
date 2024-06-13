import { RHFVedioUpload } from "@/components/rhf-hooks/rhf-vedioUploader";
import Tabs from "./tabs";
import { RHFUpload } from "@/components/rhf-hooks/RHFUpload";
import { useCallback } from "react";
import H3 from "@/components/ui/Typography/h3";
import H4 from "@/components/ui/Typography/h4";
import Paragraph from "@/components/ui/Typography/paragraph";
import H6 from "@/components/ui/Typography/h6";
import Div from "@/components/ui/div";


export default function TabSection({ setValue, watch }) {
  const VedioUploadeer = ({ setValue, watch }) => {
    const values = watch();
    const handleDrop = useCallback(
      (acceptedFiles) => {
        const files = values.files || [];

        const newFiles = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        setValue("files", [...files, ...newFiles], { shouldValidate: true });
      },
      [setValue, values.files]
    );

        const opreation = [
            { title: " 비디오 크기", descreption: "지원 시간은 60분입니다. 최대 20GB 비디오 크기 " },
            { title: " 비디오 형식", descreption: "지원 시간은 60분입니다. 최대 20GB 비디오 크기" },
            { title: " 비디오 해상도", descreption: "지원 시간은 60분입니다. 최대 20GB 비디오 크기" }
        ]
        return (
            <div className="flex shadow-lg items-center justify-center flex-col dark:bg-brown rounded-lg bg-white px-2 py-2 my-2 mx-2 w-full   ">
                <Div className=" bg-light_blue w-full h-10 mb-2 rounded-md">

                </Div>
                <RHFVedioUpload
                    className='min-h-72 '
                    thumbnail
                    name='files'
                    maxSize={3145728}
                    onDrop={handleDrop}
                    onUpload={() => console.info('ON UPLOAD')} />
                <div className=" py-4 grid grid-cols-3">
                    {opreation?.map((item, ind) => (
                        <div className="flex justify-center items-center flex-col  border-2  dark:border-brown border-light_bg_grey py-4 px-2 mx-1 rounded-lg ">
                            <H6 className="text-center !font-semibold">
                                {item?.title}
                            </H6>
                            <Paragraph className="text-center !text-xs">
                                {item?.descreption}
                            </Paragraph>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    const ImageUploadeer = ({ setValue, watch }) => {
        const values = watch();
        const handleDrop = useCallback(
            (acceptedFiles) => {
                const files = values.files || [];

        const newFiles = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );

                setValue('files', [...files, ...newFiles], { shouldValidate: true });
            },
            [setValue, values.files]
        );
        const opreation = [
            { title: " 이미지 크기", descreption: "지원 시간은 60분입니다. 최대 20GB 비디오 크기 " },
            { title: " 이미지 형식", descreption: "지원 시간은 60분입니다. 최대 20GB 비디오 크기 " },
            { title: " 이미지 해상도", descreption: "지원 시간은 60분입니다. 최대 20GB 비디오 크기 " }
        ]

        return (
            <div className="flex shadow-lg items-center justify-center flex-col dark:bg-brown rounded-lg bg-white px-2 py-2 my-2 mx-2 w-full  ">
                <Div className=" bg-light_blue w-full h-10 mb-2 rounded-md">

                </Div>
                <RHFUpload
                    className='min-h-72 '
                    thumbnail
                    multiple
                    name="files"
                    maxSize={3145728}
                    onDrop={handleDrop}
                    onUpload={() => console.info('ON UPLOAD')} />
                <div className=" py-4 grid grid-cols-3">
                    {opreation?.map((item, ind) => (
                        <div className="flex justify-center items-center flex-col border-2  dark:border-brown border-light_bg_grey  py-4 px-2 mx-1 rounded-lg ">
                            <H6 className="text-center !font-semibold">
                                {item?.title}
                            </H6>
                            <Paragraph className="text-center !text-xs">
                                {item?.descreption}
                            </Paragraph>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

  const tabs = [
    {
      label: "동영상 업로드",
      content: <VedioUploadeer setValue={setValue} watch={watch} />,
    },
    {
      label: "사진 게시",
      content: <ImageUploadeer setValue={setValue} watch={watch} />,
    },
  ];

    return (
        <div className=" flex items-center justify-center h-full ">
            <main className="w-full h-full">
                <Tabs tabs={tabs} />
            </main>
        </div>
    );
}

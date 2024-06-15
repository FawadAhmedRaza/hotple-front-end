"use client";

import React, { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import RHFFormProvider from "@/components/rhf-hooks/Form";
import RHFTextInput from "@/components/rhf-hooks/RHFTextfiels";
import RHFSelect from "@/components/rhf-hooks/rhf-select";
import { RHFUpload } from "@/components/rhf-hooks/RHFUpload";
import { createEvent } from "@/api/event";
import RHFTextArea from "@/components/rhf-hooks/rhf-textarea";
import SolidButton from "@/components/ui/Buttons/solid-button";
import { getAllPlaces } from "@/api/place";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

const EventCreateView = () => {
  const [places, setPlaces] = useState([]);

  const router = useRouter()

  const fetchPlaces = async () => {
    try {
      const response = await getAllPlaces();
      setPlaces(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  const defaultValues = {
    image: null,
    description: "",
    title: "",
  };

  const NewEventSchema = Yup.object().shape({
    placeId: Yup.string().required("이벤트 장소를 선택해 주세요"),
    description: Yup.string(),
    title: Yup.string().required("제목은 필수 항목입니다."),
    date: Yup.date().required("이벤트 날짜 선택"),
    time: Yup.string().required("이벤트 시간 선택"),
    category: Yup.string().required("이벤트 카테고리 입력"),
    image: Yup.mixed(),
  });

  const methods = useForm({
    resolver: yupResolver(NewEventSchema),
    defaultValues: defaultValues,
  });
  const { reset, watch, setValue, handleSubmit } = methods;

  const values = watch();

  const onsubmit = handleSubmit(async (data) => {
    console.log(data);
    const values = {
      description: data?.description,
      title: data?.title,
      placeId: data.placeId,
      location: places.find((place) => place.id === data.placeId)?.name,
      date: format(data?.date, "yyyy-MM-dd"),
      time: data?.time,
      category: data?.category,
    };
    console.log(values);
    try {
      const formData = new FormData();
      for (const key in values) {
        if (values[key] !== null && values[key] !== undefined) {
          formData.append(key, values[key]);
        }
      }
      formData.append("image",data.originalImage)

      const response = await createEvent(formData);
      console.log("response at submit upload", response);
      if (response.status === 201) {
        router.push("/events")
        reset();
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log("err", err);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      console.log("acceptedFiles", acceptedFiles);
      const newFile = {
        ...acceptedFiles[0],
        preview: URL.createObjectURL(acceptedFiles[0]),
      };
      setValue("image", newFile, { shouldValidate: true });
      setValue("originalImage", acceptedFiles[0], { shouldValidate: true });
    },
    [setValue, values.image]
  );

  return (
    <div className="flex justify-center items-center w-full h-full px-2">
      <div className=" dark:bg-brownish_black  h-full rounded-lg w-full">
        <RHFFormProvider
          methods={methods}
          className="gap-3"
          onSubmit={onsubmit}
        >
          <div className="flex flex-col gap-3">
            <RHFUpload
              className="min-h-72 "
              name="image"
              maxSize={3145728}
              onDrop={handleDrop}
              onUpload={() => console.info("ON UPLOAD")}
            />
            <RHFTextInput
              label="제목"
              name="title"
              placeholder="제목을 입력하세요"
            />
            <RHFTextArea
              label="설명"
              name={"description"}
              placeholder="설명 입력"
            />

            <RHFSelect
              options={places?.map((x) => ({
                label: x?.name + ", " + x?.city + ", " + x?.country,
                value: x?.id,
              }))}
              label={"위치"}
              name="placeId"
              placeholder="위치 선택"
              className="text-sm top-12"
            />
            <RHFTextInput label="범주" name="category" placeholder="범주" />
            <RHFTextInput
              label="행사 날"
              name="date"
              type="date"
              placeholder="행사 날"
            />
            <RHFTextInput
              label="이벤트 시간"
              name="time"
              type="time"
              placeholder="이벤트 시간"
            />
            <SolidButton type="submit" className={"w-40"}>
              이벤트 만들기
            </SolidButton>
          </div>
        </RHFFormProvider>
      </div>
    </div>
  );
};

export default EventCreateView;

"use client";
import RHFTextInput from "@/components/rhf-hooks/RHFTextfiels";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import Select from "react-select";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getUsers } from "@/api/user";
import { RHFUpload } from "@/components/rhf-hooks/RHFUpload";
import RHFFormProvider from "@/components/rhf-hooks/Form";
import { createPlan, planShare } from "@/api/plan";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/auth/useAuthContext";
import SolidButton from "@/components/ui/Buttons/solid-button";

const TripPlanForm = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuthContext();
  const schema = yup.object().shape({
    name: yup.string().required("이름은 null일 수 없습니다"),
    startDate: yup.date().required("시작 날짜는 필수 항목입니다."),
    endDate: yup.date().required("종료일은 필수 항목입니다."),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit, control, setValue, watch, reset } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const values = {
        name: data?.name,
        startDate: new Date(data?.startDate).toISOString(),
        endDate: new Date(data.endDate).toISOString(),
        userId: user?.userId,
      };
      const formData = new FormData();
      for (const key in values) {
        if (values[key] !== null && values[key] !== undefined) {
          formData.append(key, values[key]);
        }
      }
      formData.append("coverImage", data.originalImage);

      const response = await createPlan(formData);
      if (response.status == 201) {
        for (let i of data?.tripmates) {

          if (i) {
            await planShare({
              userId: i.value,
              planId: response?.data?.id,
            });
          }
        }
        reset();
        router.push("/plans");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleDrop = useCallback(
    (acceptedFiles) => {
      console.log("acceptedFiles", acceptedFiles);
      const newFile = {
        ...acceptedFiles[0],
        preview: URL.createObjectURL(acceptedFiles[0]),
      };
      setValue("coverImage", newFile, { shouldValidate: true });
      setValue("originalImage", acceptedFiles[0], { shouldValidate: true });
    },
    [setValue, values.coverImage]
  );

  if (loading) return;
  return (
    <div className="w-full flex flex-col items-center mt-2 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">새 계획 만들기</h2>
      <RHFFormProvider methods={methods} onSubmit={onSubmit} className="w-3/5">
        <div className="mb-4">
          <RHFUpload
            className="min-h-50 "
            name="coverImage"
            maxSize={3145728}
            onDrop={handleDrop}
            onUpload={() => console.info("ON UPLOAD")}
          />
        </div>
        <div className="mb-4">
          <RHFTextInput
            label="계획 이름"
            className="w-full p-2 border rounded-lg"
            name="name"
            placeholder="예를 들어 파리, 하와이, 일본"
          />
        </div>
        <div className="mb-4">
          <RHFTextInput
            label="시작일"
            type="date"
            name="startDate"
            placeholder="시작일"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <RHFTextInput
            label="종료일"
            type="date"
            name="endDate"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="tripmates">
            여행 동료 초대
          </label>
          <Controller
            control={control}
            name="tripmates"
            render={({ field, fieldState: { error } }) => (
              <Select
                id="tripmates"
                isMulti
                options={users?.map((user) => ({
                  value: user?.id,
                  label: user?.username,
                }))}
                onChange={field.onChange}
                className="w-full"
              />
            )}
          />
        </div>
        <SolidButton
          type="submit"
          className="w-full !rounded-lg"
        >
          계획 만들기
        </SolidButton>
      </RHFFormProvider>
    </div>
  );
};

export default TripPlanForm;

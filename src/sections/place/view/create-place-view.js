import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import RHFFormProvider from "@/components/rhf-hooks/Form";
import RHFTextInput from "@/components/rhf-hooks/RHFTextfiels";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextArea from "@/components/rhf-hooks/rhf-textarea";

import SolidButton from "@/components/ui/Buttons/solid-button";
//api function
import { createPlace } from "@/api/place";
import RHFSelect from "@/components/rhf-hooks/rhf-select";
import { placesTypes } from "@/data";

const CreatePlaceView = () => {
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("이름은 null일 수 없습니다"),
    email: yup.string().optional().nullable(),
    phoneNumber: yup.string().optional().nullable(),
    website: yup.string().optional().nullable(),
    description: yup.string().optional().nullable(),
    address: yup.string().required("주소가 필요합니다"),
    city: yup.string().required("도시는 필수입니다"),
    state: yup.string().required("상태는 필수입니다"),
    country: yup.string().required("국가는 필수입니다"),
    postalCode: yup.string().required("우편번호가 필요합니다"),
    longitude: yup.number().required("경도는 필수 항목입니다"),
    latitude: yup.number().required("위도는 필수 항목입니다"),
    type: yup.string().required("유형은 null일 수 없습니다"),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log("data", data);
    setLoading(true);
    try {
      await createPlace(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <RHFFormProvider methods={methods} onSubmit={onSubmit}>
      <div className="px-2 py-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4">
          <RHFTextInput name="name" placeholder="이름" label="이름" />
          <RHFTextInput name="email" placeholder="이메일" label="이메일" />
          <RHFTextInput name="phoneNumber" placeholder="전화 번호" label="전화 번호" />
          <RHFTextInput name="address" placeholder="주소" label="주소" />
          <RHFTextInput name="city" placeholder="도시" label="도시" />
          <RHFTextInput name="state" placeholder="상태" label="상태" />
          <RHFTextInput name="country" placeholder="국가" label="국가" />
          <RHFTextInput name="postalCode" placeholder="우편 번호" label="우편 번호" />
          <RHFTextInput name="longitude" placeholder="황경" label="황경" />
          <RHFTextInput name="latitude" placeholder="위도" label="위도" />
          <RHFSelect options={placesTypes} name="type" placeholder="유형" label="유형" />
          <RHFTextInput name="website" placeholder="웹사이트" label="웹사이트" />
          <RHFTextArea name="description" placeholder="설명" label="설명" />
        </div>
        <div className="flex justify-end items-end my-4">
          <SolidButton type="submit" loading={loading}>창조하다</SolidButton>
        </div>
      </div>
    </RHFFormProvider>
  );
};

export default CreatePlaceView;

"use client";

import React, { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import RHFFormProvider from "@/components/rhf-hooks/Form";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { createNewPost, uploadMedia } from "@/api/post";
import TabSection from "./tabSection";
import ReleaseSection from "./view/release-sec";

const PostCreateView = () => {
  const { user } = useAuthContext();
  const [hasChange, setHasChanged] = useState(false);

  const defaultValues = {
    files: [],
    description: "",
    title: "",
  }

  const NewProductSchema = Yup.object().shape({
    files: Yup.array().min(1, "Please upload your content"),
    description: Yup.string().required("Description is required"),
    title: Yup.string().required("Title is required"),
    tags:Yup.array(),
    locationTag:Yup.string(),
    // place: Yup.string().required("Place cannot be null"),
  });

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues:defaultValues,
  });
  const { reset, watch, setValue, handleSubmit } = methods;

  const files = watch("files");
  const data = watch()
 
  useEffect(() => {
    if (files.length === 0) {
      setHasChanged(false);
    } else {
      setHasChanged(true);
    }
  }, [files]);
  const onsubmit = handleSubmit(async (data) => {
    console.log("data", data);
    const {userId}=user
    const flowObject = {
      userId:userId,
      description: data?.description,
      title: data?.title,
      tags:["a","b","c"],
      locationTag:data.locationTag,
      };
    try {
      const response = await createNewPost(flowObject);
      console.log("response at submit upload", response);
      if (response.status === 201) {
        const {id} = response?.data;
        const formData = new FormData();
        if (data.files && data.files.length > 0) {
          for (let i = 0; i < data.files.length; i++) {
            const formData = new FormData();
            formData.append('flowId', id);
            formData.append('file', data.files[i]);
            formData.append('mediaType', data.files[i].type);
            // Example function to handle the formData submission for each file
            const fileResponse = await uploadMedia(formData);
            console.log(`response for file ${i} at submit upload`, fileResponse);

            if (fileResponse.status !== 201) {
              console.log(`Error response for file ${i}:`, fileResponse.message);
              break; // Stop processing if any file upload fails
            }
          }
        console.log("formData",formData)
        reset();
        setHasChanged(false); // Reset hasChange after successful submission
      } else {
        console.log(data.message);
      }
    }
  }catch (err) {
      console.log("err", err);
    }
  });

  return (
    <div className="flex justify-center items-center w-full h-full px-2">
      <div className=" dark:bg-brownish_black  bg-sky-100 h-full rounded-lg w-full">
        <RHFFormProvider methods={methods} onSubmit={onsubmit}>
          {!hasChange && <TabSection setValue={setValue} watch={watch} />}
          {hasChange && <ReleaseSection />}
        </RHFFormProvider>
      </div>
    </div>
  );
};

export default PostCreateView;

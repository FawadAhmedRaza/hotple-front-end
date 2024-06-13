"use client";

import React, { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import RHFFormProvider from "@/components/rhf-hooks/Form";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { createNewPost } from "@/api/post";
import TabSection from "./tabSection";
import ReleaseSection from "./view/release-sec";

const PostCreateView = () => {
  const { user } = useAuthContext();
  const [hasChange, setHasChanged] = useState(false);

  const NewProductSchema = Yup.object().shape({
    files: Yup.array().min(1, "Please upload your content"),
    description: Yup.string().required("Description is required"),
    title: Yup.string().required("Title is required"),
    place: Yup.string().required("Place cannot be null"),
  });

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
  });
  const { reset, watch, setValue, handleSubmit } = methods;

  const files = watch("files");

  useEffect(() => {
    if (files.length === 0) {
      setHasChanged(false);
    } else {
      setHasChanged(true);
    }
  }, [files]);

  const onsubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    data.files.forEach((file) => formData.append("contentUrl", file));
    formData.append("description", data.description);
    formData.append("title", data.title);
    formData.append("place", data.place);
    formData.append("locationTag", "sad");
    formData.append("tags", JSON.stringify(["1", "2", "3"]));
    formData.append("userId", user?.userId);
    try {
      const response = await createNewPost(formData);
      console.log("response at submit upload", response);
      if (response.status === 201) {
        reset();
        setHasChanged(false); // Reset hasChange after successful submission
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log("err", err);
    }
  });

  return (
    <div className="flex justify-center items-center">
      <div className="dark:bg-brownish_black bg-white rounded-lg w-full">
        <RHFFormProvider methods={methods} onSubmit={onsubmit}>
          {!hasChange && <TabSection setValue={setValue} watch={watch} />}
          {hasChange && <ReleaseSection />}
        </RHFFormProvider>
      </div>
    </div>
  );
};

export default PostCreateView;

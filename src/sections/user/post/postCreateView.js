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
    files: Yup.array().min(1, "please Upload your containt"),
    description: Yup.string().required("Description is required"),
    title: Yup.string().required("title is required"),
  });

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
  });
  const { reset, watch, setValue, handleSubmit } = methods;

  useEffect(() => {
    if (watch("files")) {
      setHasChanged(true);
    }
  }, [watch("files")]);

  const onsubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    // Append files to the FormData object
    formData.append("contentUrl", data?.files);
    formData.append("description", data?.description);
    formData.append("contentType", data?.files?.type);
    formData.append("locationTag", "sad");
    formData.append("tags", JSON.stringify(["1", "2", "3"]));
    formData.append("userId", user?.userId);
    try {
      const response = await createNewPost(formData);
     
      if (response.status === 201) {
        reset();
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log("err", err);
    }
  });
  return (
    <div className=" flex justify-center items-center">
      <div className="p-4 dark:bg-brownish_black bg-white rounded-lg w-full">
        <RHFFormProvider methods={methods} onSubmit={onsubmit}>
          {!hasChange && <TabSection setValue={setValue} watch={watch} />}
          {hasChange && <ReleaseSection />}
        </RHFFormProvider>
      </div>
    </div>
  );
};
export default PostCreateView;

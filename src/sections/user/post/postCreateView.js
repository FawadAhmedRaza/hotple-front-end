'use client'
import { RHFUpload } from '@/components/rhf-hooks/RHFUpload';
import H1 from '@/components/ui/Typography/h1'
import React, { useCallback, useEffect } from 'react'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import RHFFormProvider from '@/components/rhf-hooks/Form';
import SolidButton from '@/components/ui/Buttons/solid-button';
import RHFTextInput from '@/components/rhf-hooks/RHFTextfiels';
import { useAuthContext } from '@/context/auth/useAuthContext';
import { createNewPost } from '@/api/post';
import RHFTextArea from '@/components/rhf-hooks/rhf-textarea';

const PostCreateView = () => {
  const {user} = useAuthContext();

  const NewProductSchema = Yup.object().shape({
    files: Yup.mixed().required( 'please Upload your containt'),
    description: Yup.string().required( 'Description is required'),
    title: Yup.string().required( 'title is required'),
  });

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
  });
  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();
  console.log("files",values)
  const handleDropSingleFile = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (newFile) {
        setValue('files', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );
  const handleRemoveFile = useCallback(
    (inputFile) => {
      const filtered = values.files && values.files?.filter((file) => file !== inputFile);
      setValue('files', filtered);
    },
    [setValue, values.files]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue('files', []);
  }, [setValue]);


  const onsubmit=handleSubmit(async(data)=>{
    
    const formData = new FormData();
    // Append files to the FormData object
    formData.append('contentUrl', data?.files);
    formData.append('description', data?.description);
    formData.append('contentType', data?.files?.type);
    formData.append('locationTag', "sad");
    formData.append('tags', JSON.stringify(["1", "2", "3"]));
    formData.append('userId', user?.userId);
   try{
    const response = await createNewPost(formData);
    console.log("response at sumbit upload",response)
    if (response.status === 201) {
      reset();
    } else {
      console.log(data.message);
    }
   }
   catch(err){
    console.log("err",err)
   }
  })
  return (
    <div className=' flex justify-center items-center '>
      <div className='p-4 dark:bg-brownish_black bg-white shadow-lg rounded-lg w-full md:max-w-[600px] '>
        <RHFFormProvider methods={methods} onSubmit={onsubmit}>
        <RHFUpload
        
        name="files"
        maxSize={3145728}
        onDrop={handleDropSingleFile}
        onUpload={() => console.info('ON UPLOAD')}
      />
          <div className='grid grid-cols-1 gap-4'>
          <div className=''>   
       <RHFTextInput
           name="title"
           placeholder="제목을 입력하세요. 좋아요가 더 많을 수도 있어요"
           className="rounded-lg"
           type="text"
           label="제목"
         />
       </div>
       <div className=''>
       <RHFTextArea
           name="description"
           placeholder="설명"
           className="rounded-lg"
           type="text"
           label="설명"
         />
       </div>
          </div>
         
          <SolidButton type="submit" className='w-full bg-red font-bold my-2' >
          업로드
            </SolidButton>
        </RHFFormProvider>
      </div>
    </div>
  )
}
export default PostCreateView;
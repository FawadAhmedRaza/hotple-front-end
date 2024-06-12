import React from "react";

import H5 from "@/components/ui/Typography/h5";
import RHFTextInput from "@/components/rhf-hooks/RHFTextfiels";
import RhfRadio from "@/components/rhf-hooks/rhf-radio";

const PublishingSection = () => {
  return (
    <div className="my-4">
      <H5>출판 설정</H5>

      <div className="grid grid-cols-8 mt-4">
        <label class="col-span-1 md:mt-4 block text-sm dark:text-white">
          위치 추가
        </label>
        <div className="col-span-4">
          <RHFTextInput
            name=""
            placeholder="위치를 선택하세요"
            className="py-1 text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-10 mt-2">
        <label class="col-span-2 md:mt-4 block text-sm dark:text-white">
          권한 설정
        </label>
        <div className="col-span-8 mt-4 flex">
          <RhfRadio
            name=""
            className="py-1 text-sm"
            label="공개적으로 표시(모든 사람에게 표시)"
          />
          <RhfRadio
            name=""
            className="py-1 text-sm"
            label="친밀한(직접 확인하세요)"
          />
        </div>
      </div>

      <div className="grid grid-cols-10 mt-2">
        <label class="col-span-2 md:mt-4 block text-sm dark:text-white">
          문제 발생 시간
        </label>
        <div className="col-span-8 mt-4 flex">
          <RhfRadio name="" className="py-1 text-sm" label="보도 자료" />
          <RhfRadio name="" className="py-1 text-sm" label="적시 출시" />
        </div>
      </div>

      <div className="flex gap-x-2 mt-6">
        <button
          type="button"
          className="px-4 py-2 text-center text-sm rounded-lg bg-red text-white"
        >
          풀어 주다
        </button>
        <button
          type="button"
          className="px-4 py-2 text-center text-sm rounded-lg bg-transparent text-gray-500 border border-gray-300"
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default PublishingSection;

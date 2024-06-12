import SolidButton from "@/components/ui/Buttons/solid-button";
import React from "react";

const AddChapters = () => {
  return (
    <div className="grid grid-cols-8 gap-x-2 gap-y-2">
      <div className="col-span-4 px-2 py-2 bg-gray-100 rounded-lg dark:bg-brown">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm">챕터를 추가하여 비디오를 강조하세요</span>
          </div>
          <div>
            <button
              type="button"
              className="px-1 py-1 text-center text-sm rounded-lg bg-red text-white"
            >
              장 추가
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-4 px-2 py-2 bg-gray-100 rounded-lg dark:bg-brown">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm">영상에 사람과 위치를 표시하세요</span>
          </div>
          <div>
            <button
              type="button"
              className="px-1 py-1 text-center text-sm rounded-lg bg-red text-white"
            >
              태그 추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChapters;

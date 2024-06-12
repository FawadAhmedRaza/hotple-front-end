"use client";

import BreadCrumbs from "@/components/ui/breadcrumbs";
import CreatePlaceView from "./view/create-place-view";

const CreatePlace = () => {
  return (
    <div className="px-4">
      <BreadCrumbs heading="장소 만들기" />
      <CreatePlaceView />
    </div>
  );
};

export default CreatePlace;

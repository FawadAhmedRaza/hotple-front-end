import BreadCrumbs from "@/components/ui/breadcrumbs";
import React from "react";
import TitleDescSection from "./title-desc-sec";
import { useFormContext } from "react-hook-form";
import AddChapters from "./add-chapters";
import PublishingSection from "./publishing-sec";
import ImgPreview from "./img-preview";

const ReleaseSection = () => {

    const {watch} = useFormContext()
  

  return (
    <div className="mx-8">
      <BreadCrumbs heading="출시 비디오" />

      <div className="grid md:grid-cols-12 gap-x-6 px-2">
        <div className="col-span-10">
          <ImgPreview />
        </div>
        <div className="col-span-10">
          <TitleDescSection />
        </div>
        <div className="col-span-10">
          <AddChapters />
        </div>
        <div className="col-span-10">
          <PublishingSection />
        </div>
      </div>
    </div>
  );
};

export default ReleaseSection;

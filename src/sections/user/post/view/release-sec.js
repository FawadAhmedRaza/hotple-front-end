import BreadCrumbs from "@/components/ui/breadcrumbs";
import React from "react";
import TitleDescSection from "./title-desc-sec";
import AddChapters from "./add-chapters";
import PublishingSection from "./publishing-sec";
import ImgPreview from "./img-preview";

const ReleaseSection = () => {

  return (
    <div className="md:mx-8">
      <BreadCrumbs heading="출시 비디오" />

      <div className="grid md:grid-cols-12 grid-cols-1 gap-x-6 px-2">
        <div className="md:col-span-10">
          <ImgPreview />
        </div>
        <div className="md:col-span-10">
          <TitleDescSection />
        </div>
        <div className="md:col-span-10">
          <AddChapters />
        </div>
        <div className="md:col-span-10">
          <PublishingSection />
        </div>
      </div>
    </div>
  );
};

export default ReleaseSection;

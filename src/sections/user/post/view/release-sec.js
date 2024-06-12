import BreadCrumbs from "@/components/ui/breadcrumbs";
import React from "react";
import TitleDescSection from "./title-desc-sec";
import RHFFormProvider from "@/components/rhf-hooks/Form";
import { useForm } from "react-hook-form";
import AddChapters from "./add-chapters";
import PublishingSection from "./publishing-sec";

const ReleaseSection = () => {

    const methods = useForm()

  return (
    <RHFFormProvider methods={methods}>
      <div className="mx-8">
        <BreadCrumbs heading="출시 비디오" />

        <div className="grid md:grid-cols-12 gap-x-6 px-2">
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
    </RHFFormProvider>
  );
};

export default ReleaseSection;

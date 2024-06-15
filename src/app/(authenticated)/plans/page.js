"use client";
import React, { useEffect, useState } from "react";
import SolidButton from "@/components/ui/Buttons/solid-button";
import PersonAvator from "@/components/avatars/person-avatar";
import { getAllPlans, getAllSharedPlans } from "@/api/plan";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/auth/useAuthContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Div from "@/components/ui/div";
import H1 from "@/components/ui/Typography/h1";
import Paragraph from "@/components/ui/Typography/paragraph";
import H4 from "@/components/ui/Typography/h4";



const MyPlans = () => {
  const [plans, setPlans] = useState([]);
  const [sharedPlans, setSharedPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuthContext();
  const fetch = async () => {
    setLoading(true);
    try {
      const response = await getAllPlans();
      const sharedPlanResponse = await getAllSharedPlans(user.userId);
      console.log(response);
      setPlans(response.data);
      setSharedPlans(sharedPlanResponse.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Div className="flex flex-col bg-white overflow-hidden">
      <div className="flex justify-between pt-4">
        <H1 className="">내 일정 계획</H1>
        <SolidButton className={'!py-2'} onClick={() => router.push("/plans/new")}>
          + 새로운 계획
        </SolidButton>
      </div>
      <div className=" mt-4 sm:mt-6 ">
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            200: 1,
            380: 2,
            700: 3,
            1440: 4,
          }}>
          <Masonry gutter="25px">
            {plans?.map((plan) => (
              <div className=" w-full max-h-full">
                {/* // image  */}
                <div className="relative w-full max-h-72 rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 ease-in-out"></div>
                  <img
                    className="rounded-lg !w-full"
                    src={plan?.coverImage}
                    alt={plan?.name}
                  />
                </div>
                <div className="p-2">
                  <H4 className="mb-2 dark:!text-dark_secondary_label">
                    {plan?.name}
                  </H4>
                  <div className="flex gap-3 items-center flex-wrap">
                    <div class="flex -space-x-1 rtl:space-x-reverse">
                      <PersonAvator
                        url={plan?.user?.profilePicture}
                        alt={plan?.user?.username}
                        height={30}
                        width={30}
                      />
                      {plan?.planSharedWith?.map((sharedUser) => (
                        <PersonAvator
                          url={sharedUser?.user?.profilePicture}
                          alt={sharedUser?.user?.username}
                          height={30}
                          width={30}
                        />
                      ))}
                    </div>
                    {plan.startDate && plan.endDate && (
                      <Paragraph className=" dark:!text-dark_secondary_label dark:hover:!text-dark_primary_label font-semibold">
                        {format(new Date(plan.startDate), "dd MMMM")} -{" "}
                        {format(new Date(plan.endDate), "dd MMMM")}
                      </Paragraph>
                    )}
                    <Paragraph className=" dark:!text-dark_secondary_label dark:hover:!text-dark_primary_label font-semibold">0 Places</Paragraph>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry >

      </div>
      {sharedPlans.length > 0 && (
        <>
          <div className="flex justify-between px-4 pt-4">
            <H1 className="">공유 계획</H1>
          </div>
          <div className=" mt-4 sm:mt-6 ">
            <ResponsiveMasonry
              columnsCountBreakPoints={{
                200: 1,
                380: 2,
                700: 3,
                1440: 4,
              }}>
              <Masonry gutter="25px">
                {sharedPlans?.map(({ plan }) => (
                  <div className=" w-full max-h-full">
                    {/* Image  */}
                    <div className="relative w-full max-h-72 rounded-2xl overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 ease-in-out"></div>
                      <img
                        className="rounded-lg !w-full"
                        src={plan?.coverImage}
                        alt={plan?.name}
                      />
                    </div>
                    <div className="p-2">
                      <p className="mb-3 text-md font-bold text-black dark:text-gray-400">
                        {plan?.name}
                      </p>
                      <div className="flex gap-3 items-center flex-wrap">
                        <div class="flex -space-x-1 rtl:space-x-reverse">
                          <PersonAvator
                            url={plan?.user?.profilePicture}
                            alt={plan?.user?.username}
                            height={30}
                            width={30}
                          />
                          {plan?.planSharedWith?.map((sharedUser) => (
                            <PersonAvator
                              url={sharedUser?.user?.profilePicture}
                              alt={sharedUser?.user?.username}
                              height={30}
                              width={30}
                            />
                          ))}
                        </div>
                        {plan.startDate && plan.endDate && (
                          <Paragraph className=" dark:!text-dark_secondary_label dark:hover:!text-dark_primary_label font-semibold">
                            {format(new Date(plan.startDate), "dd MMMM")} -{" "}
                            {format(new Date(plan.endDate), "dd MMMM")}
                          </Paragraph>
                        )}
                        <Paragraph className=" dark:!text-dark_secondary_label dark:hover:!text-dark_primary_label font-semibold">
                          0 Places
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </>
      )}
    </Div>
  );
};

export default MyPlans;

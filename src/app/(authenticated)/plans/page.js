"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SolidButton from "@/components/ui/Buttons/solid-button";
import PersonAvator from "@/components/avatars/person-avatar";
import { getAllPlans, getAllSharedPlans } from "@/api/plan";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/auth/useAuthContext";

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
    <div className="flex flex-col bg-white overflow-hidden">
      <div className="flex justify-between px-4 pt-4">
        <h2 className="text-4xl font-bold text-gray-900">내 일정 계획</h2>
        <SolidButton className="w-50" onClick={() => router.push("/plans/new")}>
          + 새로운 계획
        </SolidButton>
      </div>
      <div className="mt-10 flex gap-2 flex-wrap">
        {plans?.map((plan) => (
          <div className="w-[330px] bg-white   dark:bg-gray-800 ">
            <Image
              className="rounded-lg !w-full"
              src={plan?.coverImage}
              alt=""
              height={200}
              width={100}
            />
            <div className="p-2">
              <p className="mb-3 text-md font-bold text-black dark:text-gray-400">
                {plan?.name}
              </p>
              <div className="flex gap-5 items-center flex-wrap">
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
                  <p className="text-gray-500 text-md font-semibold">
                    {format(new Date(plan.startDate), "dd MMMM")} -{" "}
                    {format(new Date(plan.endDate), "dd MMMM")}
                  </p>
                )}
                <p className="text-gray-500 text-md  font-semibold">0 Places</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {sharedPlans.length > 0 && (
        <>
          <div className="flex justify-between px-4 pt-4">
            <h2 className="text-4xl font-bold text-gray-900">공유 계획</h2>
          </div>
          <div className="mt-10 flex gap-2 flex-wrap">
            {sharedPlans?.map(({ plan }) => (
              <div className="w-[330px] bg-white   dark:bg-gray-800 ">
                <Image
                  className="rounded-lg !w-full"
                  src={plan?.coverImage}
                  alt=""
                  height={200}
                  width={100}
                />
                <div className="p-2">
                  <p className="mb-3 text-md font-bold text-black dark:text-gray-400">
                    {plan?.name}
                  </p>
                  <div className="flex gap-5 items-center flex-wrap">
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
                      <p className="text-gray-500 text-md font-semibold">
                        {format(new Date(plan.startDate), "dd MMMM")} -{" "}
                        {format(new Date(plan.endDate), "dd MMMM")}
                      </p>
                    )}
                    <p className="text-gray-500 text-md  font-semibold">
                      0 Places
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyPlans;

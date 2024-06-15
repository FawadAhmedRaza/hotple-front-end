"use client";
import React, { useState } from "react";
import IconButton from "@/components/ui/Buttons/icon-button";
import SolidButton from "@/components/ui/Buttons/solid-button";
import Iconify from "@/components/ui/Iconify-icons/Iconify";
import H6 from "@/components/ui/Typography/h6";
import Div from "@/components/ui/div";
import DropdownMenu from "@/components/dropdown-menu";
import Link from "next/link";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("发现");
  // Data

  const placeId = "6669a66011cf926abd76c945"
  const tabs = [
    {
      id: '1',
      title: '발견하다',
      icon: 'solar:home-smile-linear',
      link: '',
    },
    {
      id: '2',
      title: '풀어 주다',
      icon: 'mynaui:plus-square',
      link: '',
    },
    {
      id: '3',
      title: '통지하다',
      icon: 'ci:bell',
      link: '/user/post/new',
    },
    {
      id: '4',
      title: '장소',
      icon: 'ci:bell',
      link: `/place/${placeId}`,
    },
    {
      id: "5",
      title: "장소",
      icon: "f7:placemark",
      link: "/place/new",
    },
    {
      id: "6",
      title: "이벤트",
      icon: "healthicons:i-schedule-school-date-time",
      link: "/events",
    },
    {
      id: "7",
      title: "내 계획",
      icon: "mdi:invoice-schedule",
      link: "/plans",
    },
  ];

  const loginData = [
    {
      id: '1',
      title: '귀하를 더 잘 이해할 수 있는 고품질 콘텐츠를 찾아보세요.',
      icon: 'iconamoon:like-light',
    },
    {
      id: '2',
      title: '식재 및 제초에 관한 최신 정보를 검색해 보세요.',
      icon: 'ph:plant-light',
    },
    {
      id: '3',
      title: '즐겨찾기 및 좋아요 표시한 메모 보기',
      icon: 'hugeicons:star',
    },
    {
      id: '4',
      title: '다른 사람들과 더 잘 소통하고 소통하세요.',
      icon: 'basil:comment-outline',
    },
  ];

  ///----- Functions ------------- ///

  return (
    <Div className=' fixed hidden lg:flex flex-col justify-between w-270wd xl:!px-4 pb-4 pt-24 -mt-1  h-screen z-[35] '>
      <div className="flex flex-col gap-2 w-full">
        {/* Tabs div  */}
        <div className="flex flex-col gap-2 w-full">
          {tabs?.map((tab, index) => (
            <Link href={tab?.link} >
            <IconButton key={index} icon={tab?.icon} iconClass={' !w-22wd '} className={` w-full ${tab.title == activeTab ? 'dark:bg-dark_bg_grey bg-light_bg_grey' : ''}`} onClick={() => setActiveTab(tab.title)}>{tab?.title}</IconButton>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 ">
          <SolidButton className={'w-full'}>로그인</SolidButton>
          <div className="flex flex-col gap-1 border dark:text-dark_primary_label dark:border-neutral-800 border-neutral-200 rounded-2xl px-4 py-2.5 ">
            <H6 className={'mb-1 dark:!text-dark_secondary_label !text-light_secondary_label'}>지금 로그인하십시오</H6>
            {loginData?.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <Iconify
                  icon={item.icon}
                  className={
                    "!w-4 !h-4 dark:text-dark_tertiary_label text-neutral-500  "
                  }
                />
                <H6
                  className={
                    "dark:!text-dark_tertiary_label !text-neutral-500 "
                  }
                >
                  {item.title}
                </H6>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-0">
        <DropdownMenu>
          <IconButton icon={'fluent:navigation-24-filled'} className={'w-full'}>더 </IconButton>
        </DropdownMenu>
      </div>
    </Div>
  );
};

export default SideBar;

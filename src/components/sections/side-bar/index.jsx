'use client'
import IconButton from '@/components/ui/Buttons/icon-button'
import SolidButton from '@/components/ui/Buttons/solid-button'
import Iconify from '@/components/ui/Iconify-icons/Iconify'
import H6 from '@/components/ui/Typography/h6'
import Div from '@/components/ui/div'
import React, { useState } from 'react'


const SideBar = () => {
  4
  const [activeTab, setActiveTab] = useState('发现')

  
  // Data 

  const tabs = [
    {
      id: '1',
      title: '发现',
      icon: 'solar:home-smile-linear',
      link: 'Notify',
    },
    {
      id: '2',
      title: '发布',
      icon: 'mynaui:plus-square',
      link: 'Notify',
    },
    {
      id: '3',
      title: '通知',
      icon: 'ci:bell',
      link: '',
    },
  ]
  
  const loginData = [
    {
      id: '1',
      title: '刷到更懂你的优质内容',
      icon: 'iconamoon:like-light',
    },
    {
      id: '2',
      title: '搜索最新种草、拔草信息',
      icon: 'ph:plant-light',
    },
    {
      id: '3',
      title: '查看收藏、点赞的笔记',
      icon: 'hugeicons:star',
    },
    {
      id: '4',
      title: '与他人更好地互动、交流',
      icon: 'basil:comment-outline',
    },
  ]
  ///----- Functions ------------- ///


  return (
    <Div className=' fixed hidden lg:flex flex-col justify-between w-270wd xl:!px-4 py-6  h-[92%] '>
      <div className="flex flex-col gap-2">
        {/* Tabs div  */}
        <div className="flex flex-col gap-2 ">
          {tabs?.map((tab, index) => (
            <IconButton icon={tab?.icon} iconClass={' !w-22wd '} className={` ${tab.title == activeTab ? 'dark:bg-dark_bg_grey bg-light_bg_grey' : ''}`} onClick={() => setActiveTab(tab.title)}>{tab?.title}</IconButton>
          ))}
        </div>
        <div className="flex flex-col gap-3 ">
          <SolidButton className={'w-full'}>Login</SolidButton>
          <div className="flex flex-col gap-1 border dark:text-dark_primary_label border-neutral-200 rounded-2xl px-4 py-2.5 ">
            <H6 className={'mb-1'}>马上登录即可</H6>
            {loginData?.map((item, index) => (
              <div className='flex gap-2 items-center'>
                <Iconify icon={item.icon} className={'!w-4 !h-4 dark:text-dark_primary_label text-neutral-500  '} />
                <H6 className={'dark:!text-dark_primary_label !text-neutral-500 '}>{item.title}</H6>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-0">
        <IconButton  icon={'fluent:navigation-24-filled'} className={'w-full'}>更多 </IconButton>
      </div>
    </Div>
  )
}

export default SideBar
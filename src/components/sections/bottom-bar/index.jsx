'use client'
import React, { useState } from 'react'
import Div from '@/components/ui/div'
import H5 from '@/components/ui/Typography/h5'
import Iconify from '@/components/ui/Iconify-icons/Iconify'

const BottomBar = () => {
    // States 
    const [activeTab, setActiveTab] = useState('发现')

    // Tab Data 
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
        {
            id: '3',
            title: '我',
            icon: 'radix-icons:person',
            link: '',
        },
    ]
    return (
        <Div className='fixed bottom-0 flex justify-around  sm:justify-between lg:hidden w-full !py-4 border'>
            {tabs?.map((tab, index) => (
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab(tab?.title)}>
                    <Iconify icon={tab?.icon} className={` !text-light_tertiary_label ${activeTab == tab?.title ? '  !text-light_primary_label ' : ''}`} />
                    <H5 className={`!hidden sm:!block !font-medium !text-light_tertiary_label ${activeTab == tab?.title ? '  !text-light_primary_label ' : ''}`}>{tab?.title}</H5>
                </div>
            ))}
        </Div>
    )
}

export default BottomBar
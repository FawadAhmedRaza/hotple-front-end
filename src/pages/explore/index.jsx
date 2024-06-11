'use client'
import React, { useState } from 'react'
import Div from '@/components/ui/div'
import Img from '@/app/assets/images/card_img.webp'
import Button from '@/components/ui/Buttons/button'
import ExploreCards from '@/components/sections/explore-cards'


const Explore = () => {

    const [activeCat, setActiveCat] = useState('推荐')

    // Raw Data 
    const cardData = [
        {
            id: '1',
            title: '这和养孩子有什么区别 ',
            img: Img,
            userImg: Img,
            userName: '卓越',
            likes: '100',
        },
        {
            id: '1',
            title: '这和养孩子有什么区别 ',
            img: Img,
            userImg: Img,
            userName: '卓越',
            likes: '100',
        },
        {
            id: '1',
            title: '这和养孩子有什么区别 ',
            img: Img,
            userImg: Img,
            userName: '卓越',
            likes: '100',
        },
        {
            id: '1',
            title: '这和养孩子有什么区别 ',
            img: Img,
            userImg: Img,
            userName: '卓越',
            likes: '100',
        },
        {
            id: '1',
            title: '这和养孩子有什么区别 ',
            img: Img,
            userImg: Img,
            userName: '卓越',
            likes: '100',
        },
        {
            id: '1',
            title: '这和养孩子有什么区别 ',
            img: Img,
            userImg: Img,
            userName: '卓越',
            likes: '100',
        },
    ]

    const categoryTabs = [
        {
            id: '',
            label: '推荐',
            link: '',
        },
        {
            id: '',
            label: '教育',
            link: '',
        },
        {
            id: '',
            label: ' 穿搭',
            link: '',
        },
        {
            id: '',
            label: ' 美食',
            link: '',
        },
        {
            id: '',
            label: ' 美食',
            link: '',
        },
        {
            id: '',
            label: ' 彩妆',
            link: '',
        },
        {
            id: '',
            label: ' 影视',
            link: '',
        },
    ]

    return (

        <Div className=' w-full flex flex-col -mt-2 '>

            <div className=" fixed top-[60px] sm:top-16 lg:top-[70px] flex gap-2 items-center w-full h-20 dark:bg-custom_black  bg-dark_primary_label z-30 pt-1 -ml-4 sm:ml-0 overflow-x-auto px-4 sm:px-0">
                {
                    categoryTabs.map((cat) => (
                        <Button className={` !text-nowrap ${activeCat === cat?.label ? ' dark:!bg-dark_bg_grey !bg-light_bg_grey ' : ''}`} onClick={() => setActiveCat(cat?.label)}>{cat.label}</Button>
                    ))
                }
            </div>

            <ExploreCards cardData={cardData} />

        </Div>
    )
}

export default Explore
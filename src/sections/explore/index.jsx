'use client'
import React, { useState } from 'react'
import Div from '@/components/ui/div'
import Button from '@/components/ui/Buttons/button'
import ExploreCards from '@/sections/explore-cards'


const Explore = () => {

    const [activeCat, setActiveCat] = useState('추천')

    // Raw Data 
    
    const flowCardData = [
        {
            id: '1',
            title: '이것과 아이를 키우는 것의 차이점은 무엇입니까',
            img: '/assets/images/card_img.webp',
            userImg: '/assets/images/card_img.webp',
            userName: '탁월',
            likes: '100',
        },
        {
            id: '2',
            title: '이것과 아이를 키우는 것의 차이점은 무엇입니까',
            video: '/vedio.mp4',
            userImg: '/assets/images/card_img.webp',
            userName: '탁월',
            likes: '100',
        },
        {
            id: '3',
            title: '이것과 아이를 키우는 것의 차이점은 무엇입니까',
            img: '/assets/images/card_img.webp',
            userImg: '/assets/images/card_img.webp',
            userName: '탁월',
            likes: '100',
        },
        {
            id: '4',
            title: '이것과 아이를 키우는 것의 차이점은 무엇입니까',
            video: '/vedio.mp4',
            userImg: '/assets/images/card_img.webp',
            userName: '탁월',
            likes: '100',
        },
        {
            id: '5',
            title: '이것과 아이를 키우는 것의 차이점은 무엇입니까',
            img: '/assets/images/card_img.webp',
            userImg: '/assets/images/card_img.webp',
            userName: '탁월',
            likes: '100',
        },
        {
            id: '6',
            title: '이것과 아이를 키우는 것의 차이점은 무엇입니까',
            video: '/vedio.mp4',
            userImg: '/assets/images/card_img.webp',
            userName: '탁월',
            likes: '100',
        },
    ]

    const categoryTabs = [
        {
            id: '1',
            label: '추천',
            link: '',
        },
        {
            id: '2',
            label: '교육',
            link: '',
        },
        {
            id: '3',
            label: '패션',
            link: '',
        },
        {
            id: '4',
            label: '음식',
            link: '',
        },
        {
            id: '5',
            label: '음식',
            link: '',
        },
        {
            id: '6',
            label: '화장품',
            link: '',
        },
        {
            id: '7',
            label: '영화',
            link: '',
        },
    ]

    return (

        <Div className='w-full flex flex-col -mt-2 lg:!px-0 lg:!pr-8'>

            <div className="hide-scrollbar fixed top-[60px] sm:top-16 lg:top-[70px] flex gap-2 items-center w-full h-20 dark:bg-custom_black bg-dark_primary_label z-30 pt-1 -ml-4 sm:ml-0 overflow-x-auto px-4 sm:px-0">
                {
                    categoryTabs.map((cat, ind) => (
                        <Button key={ind} className={`!text-nowrap ${activeCat === cat?.label ? 'dark:!bg-dark_bg_grey !bg-light_bg_grey' : ''}`} onClick={() => setActiveCat(cat?.label)}>{cat?.label}</Button>
                    ))
                }

            </div>

            <ExploreCards flowData={flowCardData} />

        </Div>
    )
}

export default Explore

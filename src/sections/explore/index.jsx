'use client'
import React, { useEffect, useState } from 'react'
import Div from '@/components/ui/div'
import Button from '@/components/ui/Buttons/button'
import ExploreCards from '@/sections/explore-cards'
import { getFlows } from '@/api/flows'
import FlowSkeleton from '@/components/Skeleton/FlowSkeleton'

const Explore = () => {
    const [activeCat, setActiveCat] = useState('추천')
    const [flows, setFlows] = useState([])
    const [loading, setLoading] = useState(true);


    // Raw Data 
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

    // Fetch Flow Data From API  
    const fetchFlows = async () => {
        try {
            const response = await getFlows()
            setFlows(response)
        } catch (error) {
            console.log(error.message, 'network error 404')
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFlows()
    }, []);


    return (

        <Div className='w-full flex flex-col -mt-2 lg:!px-0 lg:!pr-8'>

            <div className="hide-scrollbar fixed top-[60px] sm:top-16 lg:top-[70px] flex gap-2 items-center w-full h-20 dark:bg-custom_black bg-dark_primary_label z-30 pt-1 -ml-4 sm:ml-0 overflow-x-auto px-4 sm:px-0">
                {
                    categoryTabs.map((cat, ind) => (
                        <Button key={ind} className={`!text-nowrap ${activeCat === cat?.label ? 'dark:!bg-dark_bg_grey !bg-light_bg_grey' : ''}`} onClick={() => setActiveCat(cat?.label)}>{cat?.label}</Button>
                    ))
                }

            </div>


            {loading ? <FlowSkeleton flows={flows} /> : <ExploreCards flows={flows} />}

        </Div>
    )
}

export default Explore

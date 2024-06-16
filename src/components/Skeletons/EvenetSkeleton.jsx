import React from 'react'

const EvenetSkeleton = () => {
    return (
        <div className='px-3 md:px-0'>
            <div className='h-10 w-52 bg-zinc-200 animate-pulse '></div>
            <div className='md:flex gap-4 justify-between mt-2  rounded-md '>
                <div className=' flex gap-5 '>
                    <div className='h-10 w-52 bg-zinc-200 animate-pulse rounded-md'></div>
                    <div className='h-10 w-52 bg-zinc-200 animate-pulse rounded-md'></div>
                </div>
                <div className=' h-10 w-32  rounded-xl md:mt-0 mt-5 bg-zinc-200 animate-pulse  me-3 ' ></div>
            </div>
            <div className=' h-7 w-28 rounded-md md:mt-4 mt-10 bg-zinc-200 animate-pulse'></div>

            <div className='  md:flex  flex-wrap gap-5 mt-5 md:p-0 p-5 '>
                {
                    Array.from(new Array(4)).map((_, index) => (
                        <div className='w-full md:w-[45%]' key={index}>
                            <div className=' flex gap-3'>
                                <div className=' h-60 w-52 rounded-md bg-zinc-200 animate-pulse'></div>
                                <div className='w-full '>
                                    <div className=' h-8 w-full mt-2 rounded-md bg-zinc-200 animate-pulse  '></div>
                                    <div className=' h-8 w-full mt-2 rounded-md bg-zinc-200 animate-pulse  '></div>
                                    <div className=' h-8 w-full mt-2 rounded-md bg-zinc-200 animate-pulse  '></div>
                                    <div className=' h-5 w-full mt-5 rounded-md bg-zinc-200 animate-pulse  '></div>
                                    <div className=' h-5 w-full mt-2 rounded-md bg-zinc-200 animate-pulse  '></div>
                                    <div className=' h-5 w-full mt-2 rounded-md bg-zinc-200 animate-pulse  '></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default EvenetSkeleton
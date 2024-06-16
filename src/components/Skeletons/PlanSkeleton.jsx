import React from 'react'

const PlanSkeleton = () => {
    return (
        <div>
            <div className='flex gap-4 justify-between mt-2 px-2'>

                <div className='h-12 w-52 bg-zinc-200 animate-pulse'></div>
                <div className=' h-12 w-32 rounded-full bg-zinc-200 animate-pulse me-2 '></div>

            </div>
            <div className=' flex  flex-wrap  gap-2 md:gap-5 pt-10'>
                {
                    Array.from(new Array(8)).map((_, index) => (
                        <div key={index} className='flex flex-col overflow-hidden  w-full sm:w-80  rounded-lg'>
                            <div className="w-full sm:w-60 md:w-80  h-56 bg-zinc-200 animate-pulse rounded-2xl"></div>

                            <div className='h-6 bg-zinc-200 animate-pulse rounded-md mt-2'></div>

                            <div className='flex gap-4 items-center mt-2'>

                                <div className='h-10 rounded-full w-10 bg-zinc-200 animate-pulse'></div>
                                <div className='h-6 w-full bg-zinc-200 animate-pulse rounded-md mt-2'></div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PlanSkeleton




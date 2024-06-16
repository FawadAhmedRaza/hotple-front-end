import React from 'react';

const FlowSkeleton = ({ flows }) => {
    return (
        <div className=' flex  flex-wrap  gap-2 md:gap-5 pt-20'>
            {
                Array.from(new Array(12)).map((_, index) => (
                    <div key={index} className='flex flex-col overflow-hidden  w-full sm:w-56  rounded-lg'>
                        {/* Image Placeholder */}
                        <div className="w-full sm:w-60 md:w-56 h-64 bg-zinc-200 animate-pulse rounded-2xl"></div>

                        {/* Title Placeholder */}
                        <div className='h-6 bg-zinc-200 animate-pulse rounded-md mt-2'></div>

                        {/* User Avatar and Likes Placeholder */}
                        <div className='flex justify-between items-center mt-2'>
                            <div className='flex items-center gap-2'>
                                <div className='h-6 w-6 bg-zinc-200 animate-pulse rounded-full'></div>
                                <div className='h-6 w-10 bg-zinc-200 animate-pulse rounded-md'></div>
                            </div>
                            <div className='h-6 w-16 bg-zinc-200 animate-pulse rounded-md'></div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default FlowSkeleton;
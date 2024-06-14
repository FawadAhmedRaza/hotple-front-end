import React from 'react'
import Flow from '@/components/flow'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ExploreCards = ({ flows }) => {

    return (
        <div className='pt-14'>
            {/* <div className=" relative my-0 mx-auto grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full h-full  pt-14"> */}
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    200: 1,
                    380: 2,
                    560: 3,
                    900: 3,
                    1124: 4,
                    1440: 5,
                }}>
                <Masonry gutter="25px">
                    {
                        flows?.map((flow, index) => (
                            <Flow key={index} flow={flow} />
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry >
        </div>
        // </div>
    )

}

export default ExploreCards
import React from 'react'
import Flow from '@/components/flow'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ExploreCards = ({ flows }) => {

    return (
        <div className='pt-14'>
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
    )

}

export default ExploreCards
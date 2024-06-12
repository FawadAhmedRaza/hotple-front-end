import React from 'react'
import Flow from '@/components/flow'

const ExploreCards = ({ flowData }) => {

    return (
        <div className="grid gap-3 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full h-full  pt-14">
            {
                flowData?.map((flowCard, index) => (
                    <Flow key={index} flowCard={flowCard} />
                ))
            }
            
        </div>
    )

}

export default ExploreCards
// pt-36 pb-14 lg:pt-20 
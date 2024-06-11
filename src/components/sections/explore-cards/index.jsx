import React from 'react'
import Card from '@/components/card'


const ExploreCards = ({ cardData }) => {

    return (
        <div className="grid gap-3 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full h-full pt-36 pb-14 lg:pt-20  ">
            {
                cardData?.map((card, index) => (
                    <Card data={card} />
                ))
            }
            
        </div>
    )

}

export default ExploreCards
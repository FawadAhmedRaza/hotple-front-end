import CustomeCarousel from '@/components/caresoul'

import React from 'react'

const PlaceDetails = ({place}) => {
    console.log("res data in placeDetails",place)
  return (
<div className='w-full flex justify-center items-center'>
    <div className='h-full w-full border-2  '>
       <CustomeCarousel data={place?.images}/>
    </div>
</div>
  )
}

export default PlaceDetails;
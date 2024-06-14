import CustomeCarousel from '@/components/caresoul'
import FlowbiteCaresoul  from '@/components/flowBiteCaresoul'
import RatingComponent from '@/components/ratting'
import Iconify from '@/components/ui/Iconify-icons/Iconify'
import AnchotTag from '@/components/ui/Typography/anchor-tag'
import H3 from '@/components/ui/Typography/h3'
import H5 from '@/components/ui/Typography/h5'

import H6 from '@/components/ui/Typography/h6'



import React from 'react'
import ReviewsByUser from './reviewsByUser'

const PlaceDetails = ({place}) => {
  const ratings = [
    { rating: 5, count: 28 },
    { rating: 4, count: 8 },
    { rating: 3, count: 8 },
    { rating: 2, count: 4 },
    { rating: 1, count: 0 }
  ];
    console.log("res data in placeDetails",place)
  return (
<div className='w-full flex justify-center items-center flex-col'>
    <div className='h-full w-full'>
       <CustomeCarousel data={place?.images}/>
       <div className='w-full flex justify-center items-start flex-col'>
        <div className='w-full flex flex-row justify-between items-center '>
          <div className=''>
            <H3>
          {place?.name}
            </H3>
          </div>
          <div className='flex flex-row items-center !py-2'>
          <Iconify icon={'fluent:call-20-regular'} className={'hover:text-light_primary_label text-light_secondary_label !w-6 !h-6 mx-1 '}  />
          <Iconify icon={'system-uicons:location'} className={'hover:text-light_primary_label text-light_secondary_label !w-6 !h-6 mx-1 '}  />
          <Iconify icon={'zondicons:directions'} className={'hover:text-light_primary_label text-light_secondary_label !w-6 !h-6 mx-1 '}  />

          </div>
        </div>
        <div className='w-full flex flex-row justify-start items-center  my-2'> 
          <Iconify icon={'emojione:star'} className={' text-yellow-400 !w-4 !h-4 mx-1 '}  />
          <H5>
            {place?.placeReviews[0]?.rating}
            <span>
            (2)

            </span>
          </H5>
        </div>
        <div className='flex flex-row justify-start items-center my-2'>
        <Iconify icon={'fluent:location-48-regular'} className={'hover:text-light_primary_label text-light_secondary_label  !w-4 !h-4 mx-1 '}  />
          <H5>
            {place?.address}
         
          </H5>
        </div>
        <div className='flex flex-row justify-start items-center my-2'>
        <Iconify icon={'carbon:phone'} className={'hover:text-light_primary_label text-light_secondary_label  !w-4 !h-4 mx-1 '}  />
          <H5>
            {place?.phoneNumber}
          </H5>
        </div>
        <div className='flex flex-row justify-start items-center my-[2px]'>
          {
            place?.tags.map((item,ind)=>(
              <AnchotTag className=" text-blue-900 font-semibold">
              {`#${item?.tag?.name}`}
            </AnchotTag>
            ))
          }
        </div>
        <div className=' h-full w-full px-4 rounded-lg my-2'>
            <FlowbiteCaresoul data={place}/>
        </div>
        <div className=' h-full w-full px-4 rounded-lg my-3'>
        <RatingComponent ratings={place?.placeReviews} />
        </div>
        <div className=' h-full w-full px-4 rounded-lg my-3'>
        <ReviewsByUser place={place} />
        </div>
        
       </div>
    </div>
 
</div>
  )
}

export default PlaceDetails;
import React, { useEffect, useState } from 'react'
import { MapView } from '../place'
import PlanSection from './planSection'
import { getPlanById, planShare } from '@/api/plan'

const PlaneSetionView = ({id}) => {
  

  return (
    <div className='flex justify-start items-start flex-row'>
        
    <div className=' w-full md:w-1/2 px-2'>
    <PlanSection id={id} />
      
    </div>
    <div className='hidden md:block w-full md:w-1/2 '>
      <MapView/>
    </div>
    </div>
  )
}

export default PlaneSetionView
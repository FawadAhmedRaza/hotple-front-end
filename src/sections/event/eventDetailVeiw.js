'use client'
import { getEventById } from '@/api/event'
import React, { useEffect, useState } from 'react'
import { MapView } from '../place'
import DetailView from './DetailView'

const EventDetailVeiw = ({id}) => {
    console.log("id in event detail view",id)
    const [event,setEvent]=useState()

const fetchEventById=async()=>{
    try{
     
        const res = await getEventById(id);
        setEvent(res[0])
      
    }
    catch(err){
        console.log(err);
    }
}

useEffect(()=>{
    fetchEventById();
},[])
    
  return (
<div className='flex justify-start items-start flex-row'>
    <div className=' w-full md:w-1/2 px-2'>
      <DetailView event={event} />
    </div>
    <div className='hidden md:block w-full md:w-1/2 '>
      <MapView/>
    </div>
    </div>
  )
}

export default EventDetailVeiw
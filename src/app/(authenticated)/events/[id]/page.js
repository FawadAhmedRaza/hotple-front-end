'use client'
import EventDetailVeiw from '@/sections/event/eventDetailVeiw';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
const {id} = useParams();

  return (
    <EventDetailVeiw id={id}/>
  )
}

export default page
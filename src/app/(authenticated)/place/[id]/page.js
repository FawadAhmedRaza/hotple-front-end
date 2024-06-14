'use client'
import PlaceDetailView from '@/sections/place/view/place-deatil-view'
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
  const {id} = useParams()
  console.log("id",id)
  return (
    <div><PlaceDetailView id={id}/></div>
  )
}

export default Page;
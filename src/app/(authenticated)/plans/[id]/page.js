'use client'
import PlaneSetionView from '@/sections/plan/planeSetionView'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const { id } = useParams()
    console.log("id", id)
    return (
        <PlaneSetionView id={id}/>
    )
}

export default page
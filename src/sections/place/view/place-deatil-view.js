'use client'
import React, { useEffect,useState} from 'react'
import PlaceDetails from '../place-details';
import MapView from '../mapView';
import { getplaceById } from '@/api/place';

const PlaceDetailView = ({id}) => {

    const [place,setPlace]=useState(null)
    const fetchAllPlaces = async()=>{
        console.log("id in fetch places",id);
        try{
            if(id){
                console.log("id found")
                const res = await getplaceById(id);
                setPlace(res)
                console.log(res);
            }
        }
        catch(err){
            console.log(err);
        } 
    }

    useEffect(()=>{
        fetchAllPlaces()
    },[])

  return (
    <div className='flex justify-start items-start flex-row'>
    <div className=' w-full md:w-1/2 px-2'>
      <PlaceDetails place={place}/>
    </div>
    <div className='hidden md:block w-full md:w-1/2 '>
      <MapView/>
    </div>
    </div>
  )
}

export default PlaceDetailView;
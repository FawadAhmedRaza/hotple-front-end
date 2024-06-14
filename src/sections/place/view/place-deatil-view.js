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
    <div className='flex justify-between items-center flex-row'>
    <div className='w-2/4'>
      <PlaceDetails place={place}/>
    </div>
    <div className='sm:hidden md:hidden lg:block w-2/4 '>
      <MapView/>
    </div>
    </div>
  )
}

export default PlaceDetailView;
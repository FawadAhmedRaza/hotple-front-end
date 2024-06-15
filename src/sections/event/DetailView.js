import Iconify from '@/components/ui/Iconify-icons/Iconify';
import H6 from '@/components/ui/Typography/h6';
import { getDaysDifference } from '@/utils/format-time';
import React from 'react'

const DetailView = ({event}) => {
    console.log("event",event)
    function formatDate(dateString) {
        const date = new Date(dateString);
    
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1; // getUTCMonth returns 0-based month
     
        return `Month: ${year}/${month}`;
      }

      function getEventStatus(eventDateString) {
        const eventDate = new Date(eventDateString);
        const currentDate = new Date();
      
        // Calculate the difference in time
        const timeDifference = eventDate - currentDate;
      
        // Calculate the difference in days
        const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      
        // Check if the event date has passed
        if (dayDifference < 0) {
          return "ended";
        }
      
        // Return the number of days left
        return `${dayDifference} days left`;
      }
      const formattedDate = formatDate(event?.date);
      const status = getEventStatus(event?.date);
  return (
    <div className='flex justify-start items-center flex-col'>
        {!event?<p>...Loding</p>:
        <>
           <img src={event?.filePath} className=' h-96 w-full'/>
           <div className='flex justify-center items-start w-full my-2 flex-col'>
               <div className='flex flex-row items-center justify-start my-2'>
               <Iconify icon={"fxemoji:bookmark"} className=' !w-4 !h-4 mt-1 '/>
               <p className='text-red font-bold text-xl'>{formattedDate}</p>
               </div>
               <div>
               <h2 className='dark:dark_primary_label text-2xl '>{event?.title}</h2>
               </div>
               <div className='flex flex-row items-center justify-start my-2'>
               <Iconify icon={"fluent-emoji-high-contrast:spiral-calendar"} className='mr-2 '/>
               <p className='dark:dark_primary_label text-base font-bold '>{status}</p>
               </div>
               <div className='flex flex-row items-center justify-start my-3'>
               <p className='dark:dark_primary_label text-gray-400  text-lg '>{event?.description}</p>
               </div>
               <div className='flex flex-col items-start justify-center '>
               <p className='dark:dark_primary_label text-gray-400  text-lg py-2  '>Time | {event?.time}</p>
               <p className='dark:dark_primary_label text-gray-400  text-lg py-2 '>Venue | {event?.location}</p>
               <p className='dark:dark_primary_label text-gray-400  text-lg py-2 '>Email | {event?.place?.email}</p>
               </div>
           </div>
           </>
        }
    </div>
  )
}

export default DetailView
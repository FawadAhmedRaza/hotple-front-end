import Iconify from '@/components/ui/Iconify-icons/Iconify';
import H6 from '@/components/ui/Typography/h6';
import React from 'react'

const DetailView = ({event}) => {
    console.log("event",event)
    function formatDate(dateString) {
        const date = new Date(dateString);
      
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1; // getUTCMonth returns 0-based month
      
        // Format the month as needed
        const formattedMonth = Math.ceil(month / 2);
      
        return `Month: ${year}/${formattedMonth}`;
      }
      
      const formattedDate = formatDate(event?.date);
    console.log("formattedDate",formattedDate)
  return (
    <div className='flex justify-start items-center flex-col'>
        {!event?<p>...Loding</p>:
        <>
           <img src={event?.filePath} className=' h-96 w-full'/>
           <div className='flex justify-center items-start w-full my-2 flex-col'>
               <div className='flex flex-row items-center justify-start'>
               <Iconify icon={"fxemoji:bookmark"} className=' !w-4 !h-4 mt-1 '/>
               <p className='text-red font-bold text-3xl'>{formattedDate}</p>
               </div>
               <div>
   
               <h2 className='dark:dark_primary_label '>{event?.title}</h2>
               </div>
   
           </div>
           </>
        }
     
    </div>
  )
}

export default DetailView

import React from 'react'
import { Accordion } from "flowbite-react";
import PostAvatar from '@/components/avatars/post-avatar';
import Paragraph from '@/components/ui/Typography/paragraph';

const ReviewsByUser = ({ place }) => {
    return (
        <Accordion collapseAll>
            <Accordion.Panel>
                <Accordion.Title>최상의</Accordion.Title>
                <Accordion.Content>
                    {
                        [1,2].map((item,ind)=>(
                            <>
                            <div className='flex justify-between items-center'>
                            <div className='flex justify-start items-center'>
                                <PostAvatar img="/assets/images/person.jpeg" />
                                <Paragraph className="px-2">Josh mark</Paragraph>
                            </div>
                            <div className='flex justify-end items-center'>
                                <Paragraph>2024.04.12</Paragraph>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className="flex mr-3 justify-center items-center">
    
                                {[...Array(5)].map((star, index) => (
                                    <span key={index} className={index < Math.floor(5) ? 'text-yellow-400 text-2xl' : 'text-gray-300 text-2xl'}>★</span>
                                ))}
                                <Paragraph className='text-yellow-400 font-semibold mt-1 ml-1'>
                                    5.0
                                </Paragraph>
                            </div>
    
                        </div>
                        <div className="grid grid-cols-3 h-full mx-4">
                            
                                    {place?.images?.map((item, ind) => (
                                        <div key={ind} className="col-span-1 h-full w-full rounded-lg">
                                            <img src={item?.url} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                             
    
                        </div>
                        <div className="flex my-3 justify-start items-center">
    
                        {place?.placeReviews.map((review, ind) => (
                                <div className='flex flex-col'>
                                       <Paragraph className=' font-medium text-gray-600'>
                                    {review?.review}
                                  
                                </Paragraph>
                                </div>
    
                            ))}
                        </div>
                        </>
                        ))
                    }
                  
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}

export default ReviewsByUser


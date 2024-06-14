import React, { useState, useRef, useEffect } from 'react'
import PostAvatar from '@/components/avatars/post-avatar';
import H6 from '../../Typography/h6';
import SolidButton from '../../Buttons/solid-button';
import Input from '../../input';
import Span from '../../Typography/span';
import H4 from '../../Typography/h4';
import Paragraph from '../../Typography/paragraph';
import AnchotTag from '../../Typography/anchor-tag';
import Iconify from '../../Iconify-icons/Iconify';
import ImageSlider from '@/components/image-slider';
import BgIcon from '../../Iconify-icons/bg-icon';


const FlowModalMobile = ({ flowData, setIsFlowModalOpen }) => {

    return (
        <div className=' relative flex lg:hidden flex-col lg:flex-row  items-center w-screen h-screen'>
            {/* header  */}
            <div className={`absolute top-0  right-0 w-full flex gap-1 sm:gap-3 h-16 justify-between items-center dark:bg-brownish_black bg-white border px-5  dark:border-neutral-800 border-gray-200 z-50`}>
                <BgIcon icon={'charm:cross'} onClick={() => setIsFlowModalOpen(false)} className={'!w-10 !h-10 -ml-4  sm:-ml-2'} IconclassName={'!w-7 h-7 '} />
                <div className="flex items-center gap-3 grow">
                    <PostAvatar img={flowData?.user?.profilePicture} className={' !w-8 !h-8 sm:!w-10 sm:!h-10 object-fill'} />
                    <H6 className={'dark:text-dark_primary_label !truncate '}>{flowData?.user?.username}</H6>
                </div>
                <SolidButton className={'!py-1.5 !px-3 sm:px-4 !text-nowrap '}>집중하다</SolidButton>
            </div>

            <div className="hide-scrollbar py-16 overflow-auto w-full ">
                {/* Images and Video */}
                <div className=' w-full  '>
                    {flowData?.media[0]?.mediaType !== 'video/mp4' ? (
                        <ImageSlider slides={flowData?.media} />
                    ) : (
                        <video controls className=' h-80 sm:h-400ph md:h-550ph xl:h-680ph w-full bg-black'>
                            <source src={flowData?.media[0]?.filePath} />
                        </video>
                    )}
                </div>

                {/* Content */}
                <div className=" flex flex-col divide-y dark:divide-neutral-800 divide-gray-200 ">

                    {/* Description, Tags, and Comments */}
                    <div className="hide-scrollbar w-full flex flex-col  items-center grow px-3 sm:px-5 py-5 divide-y dark:divide-neutral-800 divide-gray-200 overflow-auto ">
                        <div className="w-full h-full flex flex-col gap-2 pr-3">
                            <H4 className={'!font-extrabold'}>{flowData?.title}</H4>
                            <div className="flex flex-col gap-1">
                                <Paragraph className={'!font-550 dark:!text-dark_primary_label !text-light_secondary_label'}>{flowData?.description}</Paragraph>
                                <div className="flex flex-wrap gap-2">
                                    {flowData?.tags?.map((tag) => (
                                        <AnchotTag key={tag} className={'hover:!no-underline -mb-2'}>#{tag}</AnchotTag>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                                <Span className='!text-sm dark:!text-dark_tertiary_label'>{flowData?.post_date}</Span>
                                <Span className='!text-sm dark:!text-dark_tertiary_label'>{flowData?.locationTag}</Span>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="flex flex-col px-3 sm:px-5 py-3 md:py-5">
                        <Span className='!text-sm dark:!text-dark_secondary_label'>총 댓글 ${flowData?.comments}개</Span>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
            {/* footer  */}
            <div className="absolute bottom-0 right-0 w-full h-16 flex justify-between items-center gap-2 sm:gap-5 border-t dark:border-neutral-800 border-gray-200 dark:text-neutral-800 dark:bg-brownish_black bg-white px-3 sm:px-5 z-50">
                <div className="flex items-center w-full">
                    <Input type='text' placeholder='커밋 추가' icon="solar:user-circle-linear" className='!py-1.5 !text-sm grow' />
                </div>
                <div className="flex items-center gap-1 sm:gap-3">
                    <span className='flex items-center gap-1 cursor-pointer'>
                        <Iconify icon={'ph:heart'} />
                        <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs hidden sm:block'}>{flowData?.likes}+</Span>
                    </span>
                    <span className='flex items-center justify-center gap-1 cursor-pointer'>
                        <Iconify icon={'hugeicons:star'} />
                        <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs hidden sm:block'}>{flowData?.stars}+</Span>
                    </span>
                    <span className='flex items-center gap-1 cursor-pointer'>
                        <Iconify icon={'iconamoon:comment'} />
                        <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs hidden sm:block'}>{flowData?.stars}</Span>
                    </span>
                    <span className='flex items-center gap-2 cursor-pointer'>
                        <Iconify icon={'solar:upload-square-broken'} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FlowModalMobile
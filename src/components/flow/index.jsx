'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import H6 from '../ui/Typography/h6'
import Span from '../ui/Typography/span'
import PostAvatar from '../avatars/post-avatar'
import Iconify from '../ui/Iconify-icons/Iconify'
import FlowVideoTumbnail from '../ui/flow-video-thumbnail'
import FlowModal from '@/sections/modals/flow-modal'
import { getFlowLikes } from '@/api/getFlowLikes'
import { postFlowLikes } from '@/api/postFlowLikes'
import { useAuthContext } from '@/context/auth/useAuthContext';

const Flow = ({ flow }) => {
    const [imageHeight, setImageHeight] = useState('')
    const [imageWidth, setImageWidth] = useState('')
    const [isFlowModalOpen, setIsFlowModalOpen] = useState(false)
    const [modalData, setModalData] = useState({})
    const imgRef = useRef(null)

    const [postLikes, setPostLikes] = useState([]);
    const [likeClick, setLikeClick] = useState(false)
    const { user } = useAuthContext();

    const handleHover = () => {
        if (imgRef.current) {
            setImageHeight(imgRef.current.offsetHeight)
            setImageWidth(imgRef.current.offsetWidth)
        }
    }

    const handleModalOpen = (data) => {
        setIsFlowModalOpen(true)
        setModalData(data)
    }

    const fetchFlowLikes = async (id) => {
        try {
            let allLikes = await getFlowLikes(id)
            setPostLikes(allLikes)
            const userLike = allLikes?.find((like) => like?.userId === user?.userId)
            if (userLike) {
                setLikeClick(true)
            }
        } catch (error) {
            console.log(error, 'fetchFlowLikes');
        }
    }

    const handleLike = async () => {
        if (!likeClick) {
            try {
                await postFlowLikes(flow?.id, {
                    userId: user?.userId,
                    contentType: "Flow"
                });
                setLikeClick(true);
                setPostLikes((prevLikes) => [...prevLikes, { userId: user?.userId }]);
            } catch (error) {
                console.log(error, 'handleLike');
            }
        }
    }

    const updateLikes = (newLikes) => {
        setPostLikes(newLikes);
        const userLike = newLikes?.find((like) => like?.userId === user?.userId);
        setLikeClick(!!userLike);
    };

    useEffect(() => {
        fetchFlowLikes(flow?.id)
    }, [flow?.id]);

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-2 '>
                <div className='relative group cursor-pointer w-full px-auto ' onMouseEnter={handleHover} onClick={() => handleModalOpen(flow)}>
                    {flow?.media[0]?.mediaType !== 'video/mp4' ? (
                        <div className="relative max-w-72 mx-auto ">
                            <img src={flow?.media[0]?.filePath} alt={flow?.title} className=" max-h-72 w-full h-full rounded-2xl object-cover transition-opacity duration-300 mx-auto" />
                            <div className="absolute h-full inset-0 bg-black bg-opacity-15 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}></div>
                        </div>
                    ) : (
                        <FlowVideoTumbnail videoSrc={flow?.media[0]?.filePath} />
                    )}
                </div>

                <div className="flex flex-col gap-1.5 px-2.5 cursor-pointer w-full">
                    <div className="max-w-full w-full">
                        <H6 className={'truncate !font-medium'}>{flow?.title}</H6>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <PostAvatar src={flow?.user?.profilePicture} />
                            <Span id={flow?.user?.id} className={' dark:!text-dark_secondary_label dark:hover:!text-dark_primary_label !truncate'}>{flow?.user?.username}</Span>
                        </div> 
                        <div className=" group flex items-center gap-1 cursor-pointer" onClick={handleLike}>
                            {likeClick ? (
                                <Iconify icon={'mdi:heart'} className={'!w-4 !text-red'} />
                            ) : (
                                <Iconify icon={'mdi:heart-outline'} className={'!w-4 group-hover:!text-light_primary_label dark:!text-dark_secondary_label !text-light_secondary_label'} />
                            )}
                            <Span className={" dark:!text-dark_secondary_label group-hover:!text-light_primary_label !text-light_secondary_label"}>{postLikes?.length}</Span>
                        </div>
                    </div>
                </div>
            </div >

            <FlowModal isFlowModalOpen={isFlowModalOpen} setIsFlowModalOpen={setIsFlowModalOpen} flowData={modalData} updateLikes={updateLikes} />
        </>
    )
}

export default Flow

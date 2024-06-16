import React, { useState, useRef, useEffect } from 'react';

import PostAvatar from '@/components/avatars/post-avatar';
import H6 from '@/components/ui/Typography/h6';
import SolidButton from '@/components/ui/Buttons/solid-button';
import Input from '@/components/ui/input';
import Span from '@/components/ui/Typography/span';
import H4 from '@/components/ui/Typography/h4';
import Paragraph from '@/components/ui/Typography/paragraph';
import AnchotTag from '@/components/ui/Typography/anchor-tag';
import Iconify from '@/components/ui/Iconify-icons/Iconify';
import ImageSlider from '@/components/image-slider';

import { postFlowComments } from '@/api/postFlowComments';
import { getFlowComments } from '@/api/getFlowComments';
import { postFlowLikes } from '@/api/postFlowLikes';
import { getFlowLikes } from '@/api/getFlowLikes';
import { useAuthContext } from '@/context/auth/useAuthContext';
import { fDate } from '@/utils/format-time';


const FlowModalDesktop = ({ flowData }) => {
    // States
    const [hasScrolled, setHasScrolled] = useState(false);
    // for Comments
    const [postComment, setPostComment] = useState('');
    const [comments, setComments] = useState([]);
    // for likes
    const [postLikes, setPostLikes] = useState([]);
    const [likeClick, setLikeClick] = useState(false)
    const { user } = useAuthContext();
    const scrollRef = useRef(null);

    // Functions
    const handleScroll = () => {
        if (scrollRef.current) {
            setHasScrolled(scrollRef.current.scrollTop > 0);
        }
    };

    // Comments Get and Post 
    const fetchUserComments = async (id) => {
        try {
            const flowComments = await getFlowComments(id);
            setComments(flowComments);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCommit = async (e) => {
        setPostComment('');
        e.preventDefault();
        try {
            await postFlowComments(flowData?.id, {
                userId: user?.userId,
                content: postComment
            });
            await fetchUserComments(flowData?.id);
        } catch (err) {
            console.log(err);
        }
    };

    // like Post and Get
    const fetchFlowLikes = async (id) => {
        try {
            const allLikes = await getFlowLikes(id);
            setPostLikes(allLikes)
            const userLike = allLikes?.find((like) => like?.userId === user?.userId)
            if (userLike) {
                setLikeClick(true)
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleLike = async () => {

        if (!likeClick) {
            try {
                await postFlowLikes(flowData?.id, {
                    userId: user?.userId,
                    contentType: 'Flow',
                });
                setLikeClick(true)
                setPostLikes((prevLikes) => [...prevLikes, { userId: user?.userId }]);
                fetchFlowLikes(flowData?.id)
            } catch (err) {
                console.log(err);
            }
        }
    };

    // useEffects
    useEffect(() => {
        const scrollDiv = scrollRef.current;
        if (scrollDiv) {
            scrollDiv.addEventListener('scroll', handleScroll);
            return () => {
                scrollDiv.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    useEffect(() => {
        fetchUserComments(flowData?.id);
        fetchFlowLikes(flowData?.id);
    }, [flowData?.id]);

    return (
        <div className='hidden lg:flex flex-col lg:flex-row justify-between items-center'>

            {/* Images and Video */}
            <div className='w-full lg:w-460wd'>
                {flowData?.media[0]?.mediaType !== 'video/mp4' ? (
                    <ImageSlider slides={flowData?.media} />
                ) : (
                    <video controls className='rounded-l-2xl h-560ph xl:h-600ph 2xl:h-[700px] w-full -mt-2 bg-black'>
                        <source src={flowData?.media[0]?.filePath} type="video/mp4" />
                    </video>
                )}
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-start divide-y dark:divide-neutral-800 divide-gray-200 w-full lg:w-460wd h-550ph xl:h-600ph 2xl:h-680ph overflow-auto ">
                {/* Header */}
                <div className={`absolute top-0 right-0 w-full flex h-16 xl:h-20 justify-between items-center dark:bg-brownish_black bg-white px-5 ${hasScrolled ? 'border-b dark:border-neutral-800 border-gray-200' : ''}`}>
                    <div className="flex items-center gap-3">
                        <PostAvatar src={flowData?.user?.profilePicture} className={'!w-10 !h-10 object-fill'} />
                        <H6 className={'dark:text-dark_primary_label'}>{flowData?.user?.username}</H6>
                    </div>
                    <SolidButton className={'!py-1.5'}>집중하다</SolidButton>
                </div>

                {/* Description, Tags, and Comments */}
                <div className="hide-scrollbar flex flex-col pt-12 xl:pt-16  divide-y dark:divide-neutral-800 divide-gray-200 overflow-auto">
                    <div ref={scrollRef} className="w-full flex flex-col items-center grow px-5 py-5 divide-y dark:divide-neutral-800 divide-gray-200">
                        <div className="w-full h-full flex flex-col gap-2">
                            <H4 className={'!font-bold'}>{flowData?.title}</H4>
                            <div className="flex flex-col gap-1">
                                <Paragraph className={'!font-550 dark:!text-dark_primary_label !text-light_secondary_label'}>{flowData?.description}</Paragraph>
                                <div className="flex flex-wrap gap-2">
                                    {flowData?.tags?.map((tag) => (
                                        <AnchotTag key={tag} className={'hover:!no-underline -mb-2'}>#{tag}</AnchotTag>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                                <Span className='!text-sm dark:!text-dark_tertiary_label'>{flowData?.post_date || '2024 05'}</Span>
                                <Span className='!text-sm dark:!text-dark_tertiary_label'>{flowData?.locationTag}</Span>
                            </div>
                        </div>
                    </div>

                    {/* comment Section */}
                    <div className="flex flex-col px-3 sm:px-5 pt-3 md:pt-5 h-full ">
                        <Span className='!text-sm dark:!text-dark_tertiary_label'>총 댓글 {flowData?.comments} 개</Span>
                        {/* All comments */}
                        <div className=" flex flex-col gap-5 my-5  pb-20 ">
                            {
                                comments?.map((comment) => (
                                    <div key={comment?.id} className="w-full"> 
                                        {/* user details and comment  */}
                                        <div className="flex  gap-5">
                                            <PostAvatar src={null} className='border !w-9 !h-9 cursor-pointer' />
                                            <div className='flex flex-col  gap-0.5 justify-between'>
                                                <Span className={'!text-sm  -mt-1 dark:!text-dark_tertiary_label !text-light_tertiary_label hover:!text-light_primary_label cursor-pointer !font-450'}>{comment?.user?.username}</Span>
                                                <Span className={'!text-sm dark:!text-dark_primary_label !text-light_primary_label'}>{comment?.content}</Span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {/* date and location  */}
                                            <div className="flex gap-2 mt-2 ml-14">
                                                <Span className={'!text-sm dark:!text-dark_tertiary_label !text-light_tertiary_label'}>{fDate(comment?.createdAt)} &nbsp; Guangdong</Span>
                                            </div>
                                            {/* like and comment icons  */}
                                            <div className="flex items-center gap-5 ml-14 mt-2">
                                                <span className=' group flex items-center gap-1 cursor-pointer'>
                                                    <Iconify icon={'mdi:heart-outline'} className={'!w-4 !h-4  dark:!text-dark_secondary_label dark:group-hover:!text-dark_primary_label !text-light_secondary_label group-hover:!text-light_primary_label'} />
                                                    <Span className={'!text-13fs dark:group-hover:!text-dark_primary_label dark:!text-dark_secondary_label  !font-medium'}>thumbs up</Span>
                                                </span>

                                                <span className=' group flex items-center gap-1 cursor-pointer'>
                                                    <Iconify icon={'iconamoon:comment'} className={'!w-4 !h-4  !text-light_secondary_label group-hover:!text-light_primary_label  dark:!text-dark_secondary_label dark:group-hover:!text-dark_primary_label'} />
                                                    <Span className={'!text-13fs dark:group-hover:!text-dark_primary_label dark:!text-dark_secondary_label !font-medium'}>0</Span> 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* footer Section */}
                <div className="absolute bottom-0 right-0 w-full h-16 xl:h-70ph flex justify-between items-center gap-5 dark:bg-brownish_black bg-white px-5">
                    <form onSubmit={handleCommit} className="flex items-center gap-3 w-full">
                        <Input type='text' placeholder='커밋 추가' icon="solar:user-circle-linear" className='!py-1.5 !text-sm w-full' value={postComment} onChange={(e) => setPostComment(e.target.value)} />
                    </form>
                    <div className="flex items-center gap-3">
                        <span className='flex items-center gap-1 cursor-pointer' onClick={handleLike}>
                            {
                                likeClick ? (
                                    <Iconify icon={'mdi:heart'} className={'!text-red'} />

                                ) : (
                                    <Iconify icon={'ph:heart'} />
                                )
                            }
                            <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs'}>{postLikes?.length}</Span>
                        </span>
                        <span className='flex items-center justify-center gap-1 cursor-pointer'>
                            <Iconify icon={'hugeicons:star'} />
                            <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs'}>10+</Span>
                        </span>
                        <span className='flex items-center gap-1 cursor-pointer'>
                            <Iconify icon={'iconamoon:comment'} />
                            <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs'}>{comments?.length}</Span>
                        </span>
                        <span className='flex items-center gap-2 cursor-pointer'>
                            <Iconify icon={'solar:upload-square-broken'} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlowModalDesktop;

import React, { useState, useEffect } from 'react';
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
import { postFlowComments } from '@/api/postFlowComments';
import { useAuthContext } from '@/context/auth/useAuthContext';
import { getFlowComments } from '@/api/getFlowComments';
import { postFlowLikes } from '@/api/postFlowLikes';
import { getFlowLikes } from '@/api/getFlowLikes';
import { fDate } from '@/utils/format-time';
import BgIcon from '../../Iconify-icons/bg-icon';


const FlowModalMobile = ({ flowData, setIsFlowModalOpen }) => {
    // States
    const [hasScrolled, setHasScrolled] = useState(false);
    // for Comments
    const [postComment, setPostComment] = useState('');
    const [comments, setComments] = useState([]);
    // for likes
    const [postLikes, setPostLikes] = useState([]);
    const [likeClick, setLikeClick] = useState(false)
    const { user } = useAuthContext();


    // Functions
    const fetchUserComments = async (id) => {
        try {
            const flowComments = await getFlowComments(id);
            setComments(flowComments);
        } catch (err) {
            console.log(err);
        }
    };
    const handleCommit = async (e) => {
        e.preventDefault();
        try {
            await postFlowComments(flowData?.id, {
                userId: user?.userId,
                content: postComment,
            });
            setPostComment('');
            await fetchUserComments(flowData?.id);
        } catch (err) {
            console.log(err);
        }
    };

    // like Post and Get
    // like Post and Get
    const fetchFlowLikes = async (id) => {
        try {
            const allLikes = await getFlowLikes(id);
            const userLike = allLikes.find((like) => like.userId === user.userId)
            setPostLikes(allLikes)
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

    // useEffect

    useEffect(() => {
        fetchUserComments(flowData?.id);
        fetchFlowLikes(flowData?.id);
    }, [flowData?.id]);

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
                        {/* All comments */}
                        <div className=" flex flex-col gap-5 my-5  pb-0 ">
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

            </div>
            {/* footer  */}
            <div className="absolute bottom-0 right-0 w-full h-16 flex justify-between items-center gap-2 sm:gap-5 border-t dark:border-neutral-800 border-gray-200 dark:text-neutral-800 dark:bg-brownish_black bg-white px-3 sm:px-5 z-50">
                <form onSubmit={handleCommit} className="flex items-center w-full">
                    <Input type='text' placeholder='커밋 추가' icon="solar:user-circle-linear" className='!py-1.5 !text-sm w-full' value={postComment} onChange={(e) => setPostComment(e.target.value)} />
                </form>
                <div className="flex items-center gap-1 sm:gap-3">
                    <span className='flex items-center gap-1 cursor-pointer' onClick={handleLike}>
                        {
                            likeClick ? (
                                <Iconify icon={'mdi:heart'} className={'!text-red'} />

                            ) : (
                                <Iconify icon={'ph:heart'} />
                            )
                        }
                        <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs hidden sm:block'}>{postLikes?.length}</Span>
                    </span>
                    <span className='flex items-center justify-center gap-1 cursor-pointer'>
                        <Iconify icon={'hugeicons:star'} />
                        <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs hidden sm:block'}>10+</Span>
                    </span>
                    <span className='flex items-center gap-1 cursor-pointer'>
                        <Iconify icon={'iconamoon:comment'} />
                        <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs hidden sm:block'}>{comments?.length}</Span>
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
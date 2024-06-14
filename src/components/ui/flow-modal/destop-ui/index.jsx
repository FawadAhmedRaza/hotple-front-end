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


const FlowModalDesktop = ({ flowData }) => {
    // States
    const [hasScrolled, setHasScrolled] = useState(false);
    const scrollRef = useRef(null);

    // functions 
    const handleScroll = () => {
        if (scrollRef.current) {
            setHasScrolled(scrollRef.current.scrollTop > 0);
        }
    };

    // useEffect
    useEffect(() => {
        const scrollDiv = scrollRef.current;
        if (scrollDiv) {
            scrollDiv.addEventListener('scroll', handleScroll);
            return () => {
                scrollDiv.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <div className=' hidden lg:flex flex-col lg:flex-row justify-between items-center'>

            {/* Images and Video */}
            <div className=' w-full lg:w-[550px]'>
                { flowData?.media[0]?.mediaType !== 'video/mp4' ? (
                        <ImageSlider slides={flowData?.media} />
                ) : (
                    <video controls className='rounded-l-2xl h-560ph xl:h-680ph w-full -mt-2 bg-black'>
                        <source src={flowData?.media[0]?.filePath}  type="video/mp4" />
                    </video>
                )}
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-start divide-y dark:divide-neutral-800 divide-gray-200  w-full lg:w-460wd h-550ph xl:h-670ph overflow-auto ">
                {/* Header */}
                <div className={`absolute top-0 right-0 w-full flex h-16 xl:h-20 justify-between items-center dark:bg-brownish_black bg-white px-5 ${hasScrolled ? 'border-b dark:border-neutral-800 border-gray-200' : ''}  `}>
                    <div className="flex items-center gap-3">
                        <PostAvatar img={flowData?.user?.profilePicture} className={'!w-10 !h-10 object-fill'} />
                        <H6 className={'dark:text-dark_primary_label '}>{flowData?.user?.username}</H6>
                    </div>
                    <SolidButton className={'!py-1.5'}>집중하다</SolidButton>
                </div>
                <div className="hide-scrollbar flex flex-col py-12 xl:py-16  divide-y dark:divide-neutral-800 divide-gray-200  overflow-auto">
                    {/* Description, Tags, and Comments */}
                    <div ref={scrollRef} className="w-full flex flex-col  items-center grow px-5 py-5 divide-y dark:divide-neutral-800 divide-gray-200 ">
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
                        <div>

                        </div>
                    </div>

                    {/* comment Section  */}
                    <div className="flex flex-col px-3 sm:px-5 py-3 md:py-5 h-full">
                        <Span className='!text-sm dark:!text-dark_secondary_label'>총 댓글 ${flowData?.comments} 개</Span>
                        {/* All comments  */}
                        <div className="">

                        </div>
                    </div>
                </div>
                {/* footer Section */}
                <div className="absolute bottom-0 right-0 w-full h-16 xl:h-70ph flex justify-between items-center gap-5 dark:bg-brownish_black bg-white px-5">
                    <div className="flex items-center gap-3">
                        <Input type='text' placeholder='커밋 추가' icon="solar:user-circle-linear" className='!py-1.5 !text-sm' />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className='flex items-center gap-1 cursor-pointer'>
                            <Iconify icon={'ph:heart'} />
                            <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs'}>{flowData?.likes}+</Span>
                        </span>
                        <span className='flex items-center justify-center gap-1 cursor-pointer'>
                            <Iconify icon={'hugeicons:star'} />
                            <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs'}>{flowData?.stars}+</Span>
                        </span>
                        <span className='flex items-center gap-1 cursor-pointer'>
                            <Iconify icon={'iconamoon:comment'} />
                            <Span className={'dark:!text-dark_primary_label !text-light_primary_label !font-semibold !text-15fs'}>{flowData?.stars}</Span>
                        </span>
                        <span className='flex items-center gap-2 cursor-pointer'>
                            <Iconify icon={'solar:upload-square-broken'} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowModalDesktop
import React from 'react'
import Modal from '@/components/ui/modal'
import BgIcon from '@/components/ui/Iconify-icons/bg-icon';
import Paragraph from '@/components/ui/Typography/paragraph';
import Span from '@/components/ui/Typography/span';


const KeyboardShortcutModal = ({ isOpen, setIsOpen }) => {

    //functions
    const shortCuts = [
        { id: "1", label: '上一张图片', icon: "octicon:arrow-left-24", },
        { id: "2", label: '下一张图片', icon: "octicon:arrow-right-24", },
        { id: "3", label: '关闭笔记', text: "Esc", },
        { id: "4", label: '暂停 / 播放（视频）', text: "Space", },
    ]
    
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        
        <Modal isOpen={isOpen} onClose={closeModal} title="键盘快捷键" className={'sm:!max-w-md'}>
            <div className='flex justify-between items-center  flex-col w-full divide-y dark:divide-neutral-800 divide-gray-200  '>
                {
                    shortCuts?.map((item,ind) => (
                        <div key={ind} className="flex justify-between items-center w-full py-2 ">
                            <Paragraph className={'dark:!text-dark_primary_label'}>{item?.label}</Paragraph>
                            {item?.icon ? (
                                <BgIcon icon={item?.icon} className={' !w-6 !h-6 dark:!bg-dark_primary_label !bg-custom_black !rounded-md  '} IconclassName={'dark:!text-light_primary_label !text-dark_primary_label dark:group-hover:!text-light_primary_label   group-hover:!text-dark_primary_label !w-4 !h-4 '} />
                            ) : (
                                <div className=' flex justify-center items-center w-10 h-6 rounded-md dark:bg-dark_primary_label bg-custom_black'>
                                    <Span className={' !font-medium !text-dark_primary_label dark:!text-light_primary_label'}>
                                        {item?.text}
                                    </Span>
                                </div>
                            )
                            }
                        </div>
                    ))
                }
                <div className="flex justify-between items-center w-full py-2">
                    <Paragraph className={'dark:!text-dark_primary_label grow'}>添加到收藏夹</Paragraph>
                    <div className=" flex items-center justify-center gap-2 ">
                        <div className=' flex gap-2  justify-center  items-center w-8 h-6 rounded-md border dark:bg-dark_primary_label bg-custom_black'>
                            <Span className={' !font-medium dark:!text-light_primary_label !text-dark_primary_label'}>
                                Ctrl
                            </Span>  
                        </div> 
                        <span className='dark:text-dark_primary_label text-light_primary_label '> +</span>
                        <div className=' flex gap-2  justify-center  items-center w-6 h-6 rounded-md border dark:bg-dark_primary_label bg-custom_black'>
                            <Span className={' !font-medium !text-dark_primary_label dark:!text-light_primary_label'}>
                                D
                            </Span>  
                        </div>
                    </div>
                         
                </div>
            </div>
        </Modal>
    )
}

export default KeyboardShortcutModal
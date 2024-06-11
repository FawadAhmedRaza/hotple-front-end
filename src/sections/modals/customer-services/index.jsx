import React from 'react'
import Modal from '@/components/ui/modal'
import BgIcon from '@/components/ui/Iconify-icons/bg-icon';
import Paragraph from '@/components/ui/Typography/paragraph';
import Span from '@/components/ui/Typography/span';
import TextArea from '@/components/ui/text-area';
import Input from '@/components/ui/input';
import SolidButton from '@/components/ui/Buttons/solid-button';


const CustomerServiceModal = ({ isCustomerServiesModalOpen, setIsCustomerServiesModalOpen }) => {

    //functions

    const closeModal = () => {
        setIsCustomerServiesModalOpen(false);
    };
    return (
        <Modal isOpen={isCustomerServiesModalOpen} onClose={closeModal} title="帮助与客服" className={'sm:!max-w-md'}>
            <div className='flex justify-between items-center gap-5 flex-col w-full  '>
                {/* Message  */}
                <div className=" flex flex-col gap-2 w-full">
                    <div className="w-full flex justify-between items-center ">
                        <Paragraph className={'dark:!text-dark_tertiary_label'}>问题和意见 <span className='!text-red'>*</span></Paragraph>
                        <Paragraph className={'dark:!text-dark_tertiary_label'}>0/100 </Paragraph>
                    </div>
                    <TextArea row={4} placeholder={'填写你的功能建议，感谢你的支持～'} />
                </div>

                {/* Image Uploder  */}
                <div className=" flex flex-col gap-2 w-full">
                    <div className="w-full flex justify-between items-center ">
                        <Paragraph className={'dark:!text-dark_tertiary_label'}>图片 <span className='!text-red'>*</span></Paragraph>
                        <Paragraph className={'dark:!text-dark_tertiary_label'}>0/9</Paragraph>
                    </div>
                </div>

                {/* Phone Number */}
                <div className=" flex flex-col gap-2 w-full">
                    <Paragraph className={'dark:!text-dark_tertiary_label'}>联系方式 </Paragraph>
                    <Input type={'phone'} placeholder="请输入手机号便于联系" />
                    <div className="w-full flex justify-center my-2">
                        <SolidButton className={'!py-2'}>提交</SolidButton>
                    </div>

                </div>
            </div>
        </Modal>
    )
}

export default CustomerServiceModal
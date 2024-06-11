'use client'
import React, { useState } from 'react'
import Div from '@/components/ui/div'
import Logo from '@/components/logo'
import Link from 'next/link'
import Button from '@/components/ui/Buttons/button'
import SearchInput from '@/components/search-input'
import BgIcon from '@/components/ui/Iconify-icons/bg-icon'
import HoverDropdownButton from '@/components/ui/Buttons/button-with-dropdown'


const Header = () => {

    const [activeSearchBar, ssetActiveSearchBar] = useState(false)

    // Data 

    const creativeButtonDropdownData = [
        {
            id: '1',
            label: '创作服务',
            icon: 'majesticons:arrow-right-line',
            link:"",
        },
        {
            id: '1',
            label: '直播管理',
            icon: 'majesticons:arrow-right-line',
            link:"",

        },
        {
            id: '1',
            label: '电脑直播助手',
            icon: 'majesticons:arrow-right-line',
            link:"",

        },
    ]

    const businessButtonDropdownData = [
        {
            id: '1',
            label: '专业号',
            icon: 'majesticons:arrow-right-line',
            link:"",

        },
        {
            id: '2',
            label: '推广合作',
            icon: 'majesticons:arrow-right-line',
            link:"",

        },
        {
            id: '3',
            label: ' 蒲公英',
            icon: 'majesticons:arrow-right-line',
            link:"",
        },
        {
            id: '4',
            label: ' 商家入驻',
            icon: 'majesticons:arrow-right-line',
            link:'',
        },
        {
            id: '5',
            label: ' MCN入驻',
            icon: 'majesticons:arrow-right-line',
            link:'',
        },
    ]

    return (
        <Div className={'fixed top-0 flex justify-between items-center gap-2 sm:gap-0 w-full z-50'}>
            {/* logo  */}
            <Link href={'/'}>
                <Logo className={` ${activeSearchBar ? 'hidden' : ' block'}`} />
            </Link>

            {/* SerachBar  */}
            <div className={` w-full lg:w-[500px] -ml-2 sm:ml-0 lg:ml-16 sm:px-20 lg:px-0  ${activeSearchBar ? 'flex sm:hidden' : 'hidden sm:flex '}`}>
                <SearchInput />
            </div>

            {/* Buttons  */}
            <div className="hidden lg:flex ">
                <HoverDropdownButton options={creativeButtonDropdownData}>创作中心</HoverDropdownButton>
                <HoverDropdownButton options={businessButtonDropdownData} dropdownClasses={' !-ml-20'}>业务合作</HoverDropdownButton>
            </div>

            {/* NavBar Icon  */}

            <div className=" flex lg:hidden gap-2 ">
                {!activeSearchBar && <BgIcon icon={'lucide:search'} className={'flex sm:hidden'} onClick={() => ssetActiveSearchBar(!activeSearchBar)} />}
                {
                    activeSearchBar ? (
                        <Button className={' !text-nowrap'} onClick={() => ssetActiveSearchBar(!activeSearchBar)} >取消</Button>
                    ) : (
                        <BgIcon icon={'fluent:navigation-24-filled'} />
                    )
                }
            </div>

        </Div>
    )
}

export default Header

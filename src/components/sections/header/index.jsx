'use client'
import React, { useState } from 'react'
import Div from '@/components/ui/div'
import SolidButton from '@/components/ui/Buttons/solid-button'
import Logo from '@/components/logo'
import Link from 'next/link'
import Button from '@/components/ui/Buttons/button'
import SearchInput from '@/components/search-input'
import Iconify from '@/components/ui/Iconify-icons/Iconify'
import BgIcon from '@/components/ui/Iconify-icons/bg-icon'


const Header = () => {
    const [activeSearchBar, ssetActiveSearchBar] = useState(false)

    return (
        <Div className={' fixed flex justify-between items-center w-full gap-2 sm:gap-0  dark:bg-light_primary_label bg-dark_primary_label'}>
            {/* logo  */}
            <Link href={'/'}>
                <Logo className={` ${activeSearchBar ? 'hidden' : ' block'}`} />
            </Link>

            {/* SerachBar  */}
            <div className={` w-full lg:w-[500px] -ml-2 sm:ml-0 lg:ml-16 sm:px-20 lg:px-0  ${activeSearchBar ? 'flex' : 'hidden sm:flex '}`}>
                <SearchInput />
            </div>

            {/* Buttons  */}
            <div className="hidden lg:block">
                <Button>创作中心</Button>
                <Button>业务合作</Button>
            </div>

            {/* NavBar Icon  */}

            <div className=" flex lg:hidden gap-2 ">
                {!activeSearchBar && <BgIcon icon={'lucide:search'} className={'flex sm:hidden'} onClick={() => ssetActiveSearchBar(!activeSearchBar)} />}
                {
                    activeSearchBar ? (
                        <Button className={' !text-nowrap'}  onClick={() => ssetActiveSearchBar(!activeSearchBar)} >取消</Button>
                    ) : (
                        <BgIcon icon={'fluent:navigation-24-filled'} />
                    )
                }
            </div>
        </Div>
    )
}

export default Header
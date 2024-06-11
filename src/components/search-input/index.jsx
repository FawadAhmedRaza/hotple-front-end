'use client'

import React, { useRef, useState } from 'react'
import Iconify from '../ui/Iconify-icons/Iconify'

const SearchInput = () => {
    // states and Variables
    const [search, setSearch] = useState('')

    // /function 
    const handleSearch = (value) => {
        setSearch(value)
    }
    return (
        <div className=' flex justify-between dark:bg-dark_bg_grey bg-light_bg_grey rounded-full px-3.5 py-2 w-full '>
            <input type="text" placeholder='登录以探索更多' value={search} className=' grow outline-none text-base leading-5 bg-transparent' onChange={(e) => handleSearch(e.target.value)} />
            <div className='flex gap-4 items-center'>
                {
                    search.length > 0 ? (
                    <Iconify icon={'charm:cross'} className={'hover:text-light_primary_label text-light_secondary_label !w-6 '} onClick={()=>setSearch('')} />
                    ) :
                        null
                }
                <Iconify icon={'lucide:search'} className={'hover:text-light_primary_label text-light_secondary_label !w-18wd '} />
            </div>
        </div>
    )
}

export default SearchInput
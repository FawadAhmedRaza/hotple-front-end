import React, { Children } from 'react'
import Header from '@/sections/header'
import SideBar from '@/sections/side-bar'
import BottomBar from '@/sections/bottom-bar'
import Content from '../content'


const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className=' min-h-full flex flex-col-reverse lg:flex-row'>
                <SideBar />
                <Content>{children}</Content> 
                <BottomBar />
            </div>
        </>
    )
}

export default MainLayout
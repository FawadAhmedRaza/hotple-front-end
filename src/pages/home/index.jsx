import React from 'react'
import SideBar from '@/components/sections/side-bar'
import BottomBar from '@/components/sections/bottom-bar'
import Card from '@/components/card'
import Img from '@/app/assets/images/img.webp'

const Home = () => {
  
  return (

    <div className='flex gap-3 flex-col-reverse lg:flex-row w-full h-screen border border-yellow-300 pt-16'>

      <SideBar />

      {/* // Card sections */}
      <section>
        <Card img={Img} userImg={Img} userName={'瘦弱小鱼'} title={'瘦弱小鱼😅'} />
      </section>

      {/* bottom bar  */}
      <BottomBar />

    </div>
  )
}

export default Home


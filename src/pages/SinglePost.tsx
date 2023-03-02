import Nav from '@/components/Nav'
import PostBody from '@/components/singlepost/PostBody'
import Sidebar from '@/components/userdashboard/Sidebar'
import SidebarWithouUser from '@/components/Sidebar'
import React, { useState } from 'react'

export default function SinglePost() {
    const [user, setUser] = useState(true);
    return (
        <div className=' min-w-fit  sm:w-full h-max'>
            <Nav />
            <div className='   w-full h-max  flex  p-10 bg-brandv4  gap-6'>
                <div className=' sm:block hidden w-1/3'>
                    {user ? <Sidebar /> : <SidebarWithouUser />}


                </div>


                <PostBody />
            </div>

        </div>
    )
}

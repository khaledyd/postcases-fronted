import Nav from '@/components/Nav'
import PostBody from '@/components/singlepost/PostBody'
import Sidebar from '@/components/userdashboard/Sidebar'
import React from 'react'

export default function SinglePost() {
    return (
        <div className=' min-w-fit  sm:w-full h-max'>
            <Nav />
            <div className='  w-full h-max   p-10 bg-brandv4'>

                <PostBody />
            </div>

        </div>
    )
}

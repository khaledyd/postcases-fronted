import React from 'react'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
export default function hi() {
    return (
        <div className=' w-full  h-max    shadow-sm border-b border-x-gray-500 p-5 flex justify-between'>
            <Image
                src="/logo.svg"
                alt="postcases-logo"
                width={140}
                height={100}
                style={{
                    border: "none",

                }}
            />
            <div className=' md:flex  justify-between gap-3  hidden'>
                <button className=' w-max bg-brand-primary px-5 py-2 font-roboto  text-xl rounded text-brand-secondary'>Publish</button>
                <button className=' text-brand-base font-roboto text-lg'>Log In</button>
                <NotificationsNoneOutlinedIcon sx={{
                    alignSelf: 'center',
                    fontSize: "30px"

                }} />


            </div>
            <div className=' md:hidden block sm:block '>
                <MenuIcon sx={{
                    color: "#6C5CE6",
                    fontSize: "30px"


                }} />
            </div>


        </div>
    )
}

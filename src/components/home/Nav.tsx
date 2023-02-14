import React from 'react'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
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
            <MenuIcon sx={{
                color: "#6C5CE6",
                fontSize: "30px"

            }} />
        </div>
    )
}

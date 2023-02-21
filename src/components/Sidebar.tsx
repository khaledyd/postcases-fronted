import React from 'react'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Image from 'next/image';
export default function Sidebar() {
    return (
        <div className=' sm:hidden md:block lg:block xl:block hidden   w-max h-max  bg-white '>
            <div className=' w-full h-max flex flex-col justify-center border border-brand-primary border-opacity-30 '>
                <div className=' flex border-b-2 border-brand-base/10 p-3 '>
                    <LibraryBooksOutlinedIcon sx={{
                        color: "#6C5CE6"
                    }} />
                    <p className=' ml-2 font-roboto  text-brand-base'>Library</p>

                </div>
                <div className=' flex border-b-2 border-brand-base/20 p-3 '>
                    <LibraryBooksOutlinedIcon sx={{
                        color: "#6C5CE6"
                    }} />
                    <p className=' ml-2 font-roboto  text-brand-base'>Lists</p>

                </div>
                <div className=' flex border-b-2 border-brand-base/10 p-3 '>
                    <PersonOutlineOutlinedIcon sx={{
                        color: "#6C5CE6"
                    }} />
                    <p className=' ml-2 font-roboto  text-brand-base'>Account</p>

                </div>
                <div className=' flex border-b-2 border-brand-base/10 p-3 '>
                    <SettingsOutlinedIcon sx={{
                        color: "#6C5CE6"
                    }} />
                    <p className=' ml-2 font-roboto  text-brand-base '>Settings</p>

                </div>

            </div>

            <div className=' w-full h-max flex flex-col justify-center border border-brand-primary mt-6 border-opacity-30 '>
                <div className=' flex border-b-2 border-brand-base/10 p-3 bg-brand-primary  justify-center '>

                    <p className='  font-roboto   text-brand-secondary'>Trending</p>




                </div>
                <div className=' flex border-b-2 border-brand-base/20 p-3 '>

                    <i className="devicon-react-original  text-xl text-brand-base"></i>

                    <p className=' ml-2 font-roboto '>React</p>

                </div>
                <div className=' flex border-b-2 border-brand-base/10 p-3 '>


                    <i className="devicon-vuejs-plain-wordmark colored text-2xl"></i>


                    <p className=' ml-2 font-roboto  text-brand-base'>Vue js</p>

                </div>
                <div className=' flex border-b-2 border-brand-base/10 p-3  '>

                    <i className="devicon-nextjs-original colored text-2xl "></i>

                    <p className=' ml-2 font-roboto  text-brand-base '>Nextjs</p>

                </div>

            </div>

        </div>
    )
}

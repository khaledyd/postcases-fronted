import React from 'react'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Link from 'next/link';
import Sidebar from "../components/userdashboard/Sidebar"
export default function Nav() {

    const [showNav, setShowNav] = useState(false);
    const [user, setUser] = useState(true);

    return (
        <div className=' w-full  h-max    shadow-sm border-b border-x-gray-500 p-5 flex justify-between relative'>


            {showNav &&

                <div className="absolute z-10  w-full h-max flex-col justify-between  md:hidden     bg-brand-secondary   drop-shadow-md left-0 top-0">
                    {user ?


                        <>
                            <div className=' flex gap-3  justify-end p-5'>
                                <NotificationsNoneOutlinedIcon sx={{
                                    alignSelf: 'center',
                                    fontSize: "30px",


                                }} />
                                <CloseIcon onClick={() => setShowNav(false)} sx={{
                                    fontSize: "30px",
                                    cursor: "pointer",
                                    color:"#6C5CE6"
                                }} />
                            </div>
                            <Sidebar />


                        </>
                        :
                        <>
                            <div className=' flex justify-between w-full p-3'>
                                <Image
                                    src="/logo.svg"
                                    alt="postcases-logo"
                                    width={140}
                                    height={100}
                                    style={{
                                        border: "none",

                                    }}
                                />
                                <div className=' flex gap-3'>
                                    <NotificationsNoneOutlinedIcon sx={{
                                        alignSelf: 'center',
                                        fontSize: "30px",


                                    }} />
                                    <CloseIcon onClick={() => setShowNav(false)} sx={{
                                        fontSize: "30px",
                                        cursor: "pointer"
                                    }} />
                                </div>



                            </div>

                            <div className=' md:flex  justify-between  gap-7 hidden'>
                                <button className=' w-max bg-brand-primary px-5 py-2 font-roboto  text-xl rounded text-brand-secondary'>Publish</button>
                                <button className=' text-brand-base font-roboto text-lg px-5 py-2 bg-brandv3 rounded-sm '>Log In</button>
                                <NotificationsNoneOutlinedIcon sx={{
                                    alignSelf: 'center',
                                    fontSize: "30px"

                                }} />


                            </div>
                            <div className=' md:hidden block sm:block '>

                                <div className=' w-full h-max flex flex-col justify-center'>
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
                                    <div className=' flex border-b-2 border-brand-base/10 p-3 gap-4 '>
                                        <Link href="/Signin"><button className=' text-brand-base font-roboto text-lg px-5 py-2  bg-brand-secondary rounded-sm '>Log In</button></Link>

                                        <button className=' w-max bg-brand-primary px-5 py-2 font-roboto  text-xl rounded text-brand-secondary'>Publish</button>

                                    </div>

                                </div>
                            </div>
                        </>
                    }
                </div>
            }


            <div className=' w-full  h-max     flex justify-between '>
                <Image
                    src="/logo.svg"
                    alt="postcases-logo"
                    width={140}
                    height={100}
                    style={{
                        border: "none",

                    }}
                />
                <div className=' md:flex  justify-between  gap-7 hidden'>
                    <button className=' w-maxs bg-brand-primary px-5 py-2 font-roboto  text-xl rounded text-brand-secondary'>Publish</button>
                    <Link href="/Signin">
                        <button className=' text-brand-base font-roboto text-lg px-5 py-2 bg-brandv3 rounded-sm '>Log In</button>
                    </Link>



                    <NotificationsNoneOutlinedIcon sx={{
                        alignSelf: 'center',
                        fontSize: "30px",


                    }} />


                </div>
                <div className=' md:hidden  sm:block  gap-4 flex'>
                    <NotificationsNoneOutlinedIcon sx={{
                        alignSelf: 'center',
                        fontSize: "30px",


                    }} />
                    <MenuIcon onClick={() => setShowNav(!showNav)} sx={{
                        color: "#6C5CE6",
                        fontSize: "35px",
                        cursor: "pointer"


                    }} />
                </div>

            </div>






        </div>
    )
}




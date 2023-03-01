/* eslint-disable @next/next/no-img-element */
import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Imbue } from '@next/font/google';
import Image from 'next/image';

export default function NewCard() {
    return (
        <div className='w-full h-max  bg-brandv3 flex flex-col p-5  rounded-md border  border-brand-base border-opacity-10   '>
            <div className='w-full bg-brandv4 self-center h-max  flex  drop-shadow-sm border-branv2 border  border-opacity-20 rounded'>
                <div className='w-full md:full lg:11/12 bg-brandv4  h-max p-3 flex flex-col'>
                    <h1 className=' text-2xl font-bold text-branv2 font-roboto'>Lorem ipsum dolor sit amet, consect</h1>
                    <div className=' w-full h-max =2 bg-brandv4 flex gap-2 mt-3'>

                        <p className=' font-poppins px-3 py-1 border border-brand-base  text-xs text-brand-base border-opacity-20'>React</p>
                        <p className='     w-2 h-2 rounded-full  self-center bg-brand-primary'></p>
                        <p className=' font-poppins font-light text-xs self-center   text-brand-base/50'>3 days ago</p>
                    </div>
                    <p className='   text-brand-base/70    font-openSans  font-light    text-sm   mt-5  leading-6  w-full'>consectetur adipiscing elit. Integer at laoreet turpis. Etiam nec risus consecteturadipiscing elit. Integerat laoreet turpis.Etiam nec risus vitae est tristiquevitaeest tristique
                        consectetur adipiscing elit. Integer at laoreet turpis. Etiam nec risus consecteturadipiscing
                        elit. Integerat laoreet turpis.Etiam necst tristique
                        consectetur adipiscing elit. Integer at laoreet turpis.
                        u</p>
                    <div className='  self-end flex justify-center  mt-8 flex-col'>

                        <div className=' flex justify-start '>

                            <p className='  text-md mb-1'>by jonh doe</p>


                        </div>
                        <div className=' self-center flex gap-1'>
                            <p className=' text-xs self-center p-1  border-2 border-branv2  font-thin border-opacity-50 '>Followers</p>
                            <p className=' text-xs self-center'>300</p>
                            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/15435631/pexels-photo-15435631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" sx={{

                                width: "25px",
                                height: "25px"
                            }} />
                        </div>
                    </div>
                </div>
                <div className=' sm:hidden hidden md:hidden lg:block w-3/12   p-3   h-max'>
                    <img src="https://images.pexels.com/photos/13722001/pexels-photo-13722001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='w-full h-ful rounded-md' />
                </div>

            </div>
            <div className='mt-5 flex  justify-center items-center  p-2  gap-7'>
                <div className=' flex gap-4 '>
                    <div className=''>
                        <ThumbUpOutlinedIcon sx={{
                            color: "#532757",
                            backgroundColor: "#FFFFFF",
                            fontSize: "50px",
                            padding: "10px 10px",
                            borderRadius: "50%",
                            border: "1px groove ",
                            borderColor: " #f2f2f2",
                        }} />
            
                    </div>
                    <div className=''>
                        <ModeCommentOutlinedIcon sx={{
                            color: "#532757",
                            backgroundColor: "#FFFFFF",
                            fontSize: "50px",
                            padding: "10px 10px",
                            borderRadius: "50%",
                            border: "1px groove ",
                            borderColor: " #f2f2f2",
                        }} />

                    </div>
                    <div className=''>
                        <ShareOutlinedIcon sx={{
                            color: "#532757",
                            backgroundColor: "#FFFFFF",
                            fontSize: "50px",
                            padding: "10px 10px",
                            borderRadius: "50%",
                            border: "1px groove  ",
                            borderOpacity:"10%",
                            borderColor: " #f2f2f2",
                        }} />

                    </div>
                </div>
                <div className=' flex gap-3'>
                    <button className=' px-3 py-1 bg-brand-primary  text-brand-secondary rounded  '>Read</button>
                    <button className=' px-3 py-1 bg-brand-primary  text-brand-secondary  rounded'>Save</button>
                </div>
            </div>
        </div>
    )
}
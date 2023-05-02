import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Notes from './Notes';

export default function PostBody() {
    return (
        <div className=' w-full h-max     '>
            <div className=' w-full h-1/2 bg-slate-800 flex'>
                <img src='https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    alt="Example Image"
                    className=" sm:w-1/2 w-full  sm:h-auto" />
                <div className='w-full flex-col sm:flex  gap-3 p-10  hidden' >
                    <p className='  text-base w-max px-5 py-1 rounded bg-brand-secondary  text-brand-base/70'>React</p>

                    <p className=' text-base w-max px-5 py-1 rounded bg-brand-secondary  text-brand-base/70'>UseReducer</p>

                </div>


            </div>




            <div className=' w-full flex   items-center  justify-between  mt-5 gap-3'>
                <div className=' sm:hidden flex  gap-3' >
                    <p className='  text-base w-max px-3 py-1 rounded  bg-brand-base  text-brand-secondary/80'>React</p>
                    <p className=' text-base w-max px-3 py-1 rounded  bg-brand-base  text-brand-secondary/80'>UseReducer</p>
                </div>
                <div className=' flex flex-col items-center justify-end  gap-1 '>
                    <p>Jon doe</p>
                    <p className=' text-xs'>12/03/2023</p>
                </div>
            </div>
            <div className=' w-full '>
                <h1 className=' text-3xl text-brand-base/80  font-roboto mt-3'>Lorem ipsum dolor </h1>
                <p className=' text-base font-poppins font-light leading-8 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus egestas massa, et interdum velit blandit a. Integer
                    non fermentum lacus. Integer ut est nulla. Morbi convallis nisi nec
                    sollicitudin tincidunt. Praesent at erat nec mauris commodo pulvinar
                    non non libero. Proin nibh odio, aliquet ut tellus at, consectetur
                    convallis sem. Integer maximus euismod magna eleifend consectetur.

                    Vivamus vel risus sodales, lobortis velit a, feugiat arcu. Fusce enim diam,
                    maximus ut ultricies ac, pellentesque in elit. Phasellus sodales mollis libero.
                    Etiam pretium metus at eros lobortis gravida.Nulla et sodales justo, nec dapibus
                    libero. Aliquam nisl sem, luctus nec scelerisque id, iaculis aliquam quam.
                    Duis mattis porttitor euismod. Ut ac massa eget eros viverra imperdiet vel eget augue.
                    Vestibulum mollis aliquet quam scelerisque auctor. In venenatis iaculis magna.
                    Curabitur accumsan ex at ligula accumsan, nec finibus felis volutpat. Aliquam
                    nisl tortor, interdum vitae ipsum eget, posuere condimentum purus.
                    Pellentesque rutrum vehicula dolor quis ornare. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Donec nec neque lacinia, lacinia elit a,
                    porttitor eros. Nulla eu mollis metus. Vestibulum ante ipsum primis in faucibus

                    orci luctus et ultrices posuere cubilia curae; Praesent nec mattis nibh, ac interdum ex.
                    Etiam laoreet venenatis felis a egestas.





                </p>

            </div>
            <div className=' w-full mt-6 '>
                <div className=' w-full flex j  gap-7  border-t border-branv2 border-opacity-10 pt-4 '>
                    <div className=' flex gap-2'>
                        <ThumbUpIcon />
                        <p>100</p>
                    </div>
                    <div className=' flex  w-max'>
                        <p>10 comments</p>
                    </div>
                    <div className=' flex gap-2'>
                        <ShareIcon />

                        <p>share</p>
                    </div>
                    <div className=' flex gap-2'>
                        <BookmarkIcon />

                        <p>Save</p>
                    </div>

                </div>
                <div className=''></div>

            </div>
            <div className=' w-full flex gap-4 mt-10'>
                <input className=' w-full  px-5  border  border-branv2 border-opacity-50 rounded-lg  h-14' />
                <button className=' w-1/3 py-2   px-5  bg-brand-primary text-brand-secondary rounded'>Comment</button>
            </div>

            <div className=' mt-7 w-full border-t  pt-7'>
                <div className=' w-max flex gap-10 items-center'>
                    <p className=' text-xl'>Notes
                        <ArrowDropDownIcon sx={{
                            fontSize: "50px"
                        }} /></p>
                    <button className=' rounded-md w-max px-5 py-3 bg-brand-primary text-brand-secondary'>Add Notes</button>
                </div>
                <Notes />
             

            </div>


        </div>
    )
}




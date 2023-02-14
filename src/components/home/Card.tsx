import { Avatar } from '@mui/material'
import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
export default function Card() {
    return (
        <div className=' w-11/12 h-max  self-center mt-10  '>
            <div className=' w-full h-max  flex flex-col  bg-brand-secondary border border-brand-primary  p-5 rounded-tl-md rounded-tr-md'>
                <h1 className=' text-brand-primary font-roboto   font-bold text-2xl '>Lorem ipsum</h1>
                <p className=' text-base   font-openSans leading-6 mt-3'>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elitInteger
                    at laoreet turpis Etiam nec
                    risus vitae est tristique
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing
                    consectetur adipiscing elitInteger
                    at laoreet turpis Etiam nec
                    risus vitae est tristique
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing </p>
            </div>
            <div className=' w-full h-max  bg-brand-base  p-5 flex justify-between  border-b border-white '>
                <div className=' text-brand-secondary flex  flex-col'>
                    <h3 className=' font-roboto text-lg'>views</h3>
                    <p className=' font-poppins text-sm  font-light self-center  mt-3  '>10,00</p>
                </div>
                <div className=' text-brand-secondary flex  flex-col'>
                    <h3 className=' font-roboto text-lg'>Comments</h3>
                    <p className=' font-poppins text-sm  font-light self-center mt-3   '>10 comments</p>
                </div>
                <div className=' text-brand-secondary flex  flex-col'>
                    <h3 className=' font-roboto text-xl'><BookmarkIcon sx={{
                        fontSize: "25px"
                    }} /></h3>
                    <p className=' font-poppins text-sm  font-light self-center mt-3  '>save</p>
                </div>
            </div>
            <div className=' w-full h-max  bg-brand-base  p-5 flex justify-between  border-b  border-brand-primary   rounded-b-md'>
                <div className=' text-brand-secondary flex  flex-col'>
                    <h3 className=' font-roboto  font-bold text-2xl'>React</h3>
                    <p className=' font-poppins text-sm  font-light self-center  mt-2  '>usecases of useReducer </p>
                    <p className=' font-poppins text-sm  font-light   mt-2  '>10,00</p>
                </div>

                <div className=' text-brand-secondary flex  flex-col'>
                    <h3 className=' font-roboto text-base italic  '>By khalid Dahir</h3>
                    <p className=' font-poppins text-sm  font-light self-center mt-3  '>

                        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                    </p>
                </div>
            </div>
        </div>
    )
}

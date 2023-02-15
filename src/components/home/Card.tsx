import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Avatar } from '@mui/material';
export default function Card() {
    return (
        <div className=' w-11/12   md:flex justify-between   bg mt-5  self-center shadow border  border-brand-base/20 sm:hidden hidden '>
            <div className=' w-1/2 flex   h-full bg-white  flex-col border-r  p-5  border '>
                <h1 className='  text-2xl   text-brand-primary font-roboto  font-bold'>Lorem ipsum dolor sit amet</h1>
                <p className=' mt-3 font-poppins text-base text-brand-base leading-7   '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at laoreet turpis. Etiam nec risus vitae est
                    tristique hendrerit id sed nibh. Nam ut lorem non metus dignissim accumsan.</p>
                <div className=' w-full h-max bg-brand-base flex justify-between p-5 mt-10'>
                    <div className=' text-brand-secondary flex  flex-col'>
                        <h3 className=' font-roboto text-lg'>views</h3>
                        <p className=' font-poppins  text-xs  font-light self-center  mt-3  '>10,00</p>
                    </div>
                    <div className=' text-brand-secondary flex  flex-col'>
                        <h3 className=' font-roboto text-lg'>Comments</h3>
                        <p className=' font-poppins  text-xs  font-light self-center mt-3   '>10 comments</p>
                    </div>
                    <div className=' text-brand-secondary flex  flex-col'>
                        <h3 className=' font-roboto text-xl'><BookmarkIcon sx={{
                            fontSize: "25px"
                        }} /></h3>
                        <p className=' font-poppins text-sm  font-light self-center mt-3  '>save</p>
                    </div>
                </div>

            </div>
            <div className=' w-4/12   bg-cover bg-center bg-brand-base bg-[url("https://images.pexels.com/photos/13722001/pexels-photo-13722001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] '></div>
            <div className=' w-2/12 bg-brand-base   border-brand-secondary flex flex-col '>
                <div className=' p-5 border border-b-brand-secondary justify-center flex-col flex'>
                    <h1 className=' self-center  text-2xl   text-brand-secondary font-roboto  font-bold'>React</h1>
                    <p className=' self-center pt-2 text-xs text-brand-secondary  '>Lorem ipsum </p>
                </div>
                <p className=' self-center  mt-10 text-xs text-brand-secondary  '>by khalid dahir </p>
                <p className=' self-center pt-2 text-xs text-brand-secondary  '>10/02/2023  </p>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/15435631/pexels-photo-15435631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" sx={{
                    alignSelf: "center",
                    marginTop: "20px",
                    width: "60px",
                    height: "60px"
                }} />
            </div>

        </div>
    )
}

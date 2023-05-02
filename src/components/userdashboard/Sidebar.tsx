import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ListIcon from '@mui/icons-material/List';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import UpdateIcon from '@mui/icons-material/Update';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
export default function Sidebar() {
    return (
        <div className='w-full  h-screen  bg-brandv3   flex-col   gap-6  border border-branv2 border-opacity-20  sticky top-0  flex rounded-md'>
            <div className=' w-full h-max flex flex-col gap-4  items-start border-b border-branv2  p-5 border-opacity-20'>
                {/* <div className=' flex gap-3   items-center justify-center'>
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div> */}
                <div className=' flex gap-3   items-center justify-center'>
                    <SettingsIcon />
                    <p>Settings</p>
                </div>
                <div className=' flex gap-3   items-center justify-center'>
                    <LocalLibraryIcon />
                    <p>Library</p>
                </div>
                <div className=' flex gap-3   items-center justify-center'>
                    <FavoriteBorderIcon />
                    <p>favorites</p>
                </div>
                <div className=' flex gap-3   items-center justify-center'>
                    <ListIcon />
                    <p>Lists</p>
                </div>
                <div className=' flex gap-2  items-center justify-center'>

                    <p>Followings</p>
                    <p className=' rounded-full w-1 h-1 bg-branv1'></p>
                    <p className=' text-xs font-thin'>100</p>
                </div>
                <div className=' flex gap-2  items-center justify-center'>

                    <p>Followers</p>
                    <p className=' rounded-full w-1 h-1 bg-branv1'></p>
                    <p className=' text-xs font-thin'>100</p>
                </div>

            </div>
            {/* gap*/}
            <div className=' w-full h-max flex flex-col gap-4  items-start border-b border-branv2  p-5 border-opacity-20'>
                <div className=' flex gap-3   items-center justify-center'>
                    <LocalActivityIcon />
                    <p>Activites</p>
                </div>
                <div className=' flex gap-3   items-center justify-center'>
                    <UpdateIcon />
                    <p>Updates</p>
                </div>


            </div>
            {/* gap*/}
            <div className=' w-full h-max flex flex-col gap-4  items-start border-b border-branv2  p-5 border-opacity-20'>
                <div className=' flex gap-3   items-center justify-center'>
                    <RemoveRedEyeIcon />
                    <p>Views</p>
                    <p className=' text-xs font-poppins'>10,00</p>
                </div>
                <div className=' flex gap-2   items-center justify-center'>
                    <TrendingUpIcon />
                    <p>Reach</p>
                    <p>10%</p>
                    <ArrowDropUpIcon />

                </div>


            </div>
        </div>
    )
}

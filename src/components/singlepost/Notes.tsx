import React from 'react'

export default function Notes() {
    return (
        <div className=' flex flex-col mt-6'>
            <p className=' p-4  bg-brand-base font-poppins   font-light rounded-md text-sm leading-7 text-brandv4'>
                Pellentesque rutrum vehicula dolor quis ornare. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Donec nec neque lacinia, lacinia elit a,
                porttitor eros. Nulla eu mollis metus. Vestibulum ante ipsum primis in faucibus

                orci luctus et ultrices posuere cubilia curae; Praesent nec mattis nibh, ac interdum ex.
                Etiam laoreet venenatis felis a egestas.
            </p>
            <div className='flex justify-end '>
                <p className='  mt-3'> 3 days ago</p>
                <p className='  mt-3 ml-2 mr-5 text-base'>.</p>
                <p className='  mt-3'>Jon doe</p>
            </div>


        </div>
    )
}

import React from 'react'

function DataCard() {
    return (
        // This component uses @tailwindcss/line-clamp

        <div className='mx-8 my-12 overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
            <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1461.1047056793159!2d-85.7436595!3d42.9106243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819b05cdbb3415b%3A0x294fde5b39e82952!2s2976%20Ivanrest%20Ave%20SW%2C%20Wyoming%2C%20MI%2049418!5e0!3m2!1sen!2sus!4v1672887686435!5m2!1sen!2sus'
                title='location'
                width='100%'
                height='250px'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'>
            </iframe>
            {/* <img
                alt='Office'
                src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                className='h-56 w-full object-cover'
            /> */}

            <div className='bg-white p-4 sm:p-6'>


                {/* <h3 className='mt-0.5 text-lg text-gray-900'>
                    Where to find us
                </h3> */}

                <p className='mt-2 text-md leading-relaxed text-gray-500 line-clamp-3'>
                We're located just south of 28th St on the corner of Ivanrest and 30th.
                There's plenty of parking along the side and rear of the building.
                Come on in through the doors facing 30th Street.
                </p>
            </div>
        </div>
    )
}

export default DataCard
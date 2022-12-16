import React from 'react'

function Home() {
    return (
        <div className='w-full h-screen'>

            {/* container */}
            <div className='mx-auto px-8 flex flex-col py-8 items-center h-full'>
                <div className='max-w-[668px]'>
                {/* <p className='text-[#5A707A] text-2xl md:text-5xl font-thin'>We are</p> */}
                <div>
                <h1 className='text-[#D55A1E] text-4xl sm:text-5xl md:text-8xl font-bold text-center'>Canvas Church</h1>
                <div className='flex justify-center md:justify-end'>
                    <h2 className='text-[#4DB1CC] text-2xl sm:text-3xl md:text-4xl text-center md:text-right'>A Place For Every</h2>
                    <h2 className='text-[#D55A1E] text-2xl sm:text-3xl md:text-4xl text-center md:text-right'>&nbsp;One</h2>
                </div>
                </div>
                <p className='text-[#181d20] my-8 text-justify'>
                    Community means making space for everyone. Community means making space for everyone.
                    Community means making space for everyone. Community means making space for everyone.
                    Community means making space for everyone. Community means making space for everyone.
                    Community means making space for everyone. Community means making space for everyone.
                    Community means making space for everyone. Community means making space for everyone.
                    Community means making space for everyone. Community means making space for everyone.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Home
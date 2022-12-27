import React from 'react'
import Park from '../assets/park-beth-macdonald.jpg'

function Home() {
    return (
        <>
            <div>
                <div className="relative overflow-hidden bg-no-repeat bg-cover"
                    style={{backgroundPosition: '50%', backgroundImage: `url(${Park})`, height: '500px'}}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{'background-color': 'rgba(0, 0, 0, 0.75)'}}>
                        <div className="flex justify-center items-center h-full">
                            <div className="text-center text-white px-6 md:px-12">
                                <h1 className='text-[#4DB1CC] text-4xl sm:text-5xl md:text-8xl font-bold text-center'>Canvas Church</h1>
                                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"><span>a place for every<span className='text-[#4DB1CC]'>one</span></span></h1>
                                <a className="inline-block px-7 py-3 mr-1.5 border-2 border-none bg-[#D55A1E] bg-opacity-75
                                    font-medium text-sm leading-snug uppercase rounded-full shadow-md
                                    hover:bg-opacity-100 focus:outline-none focus:ring-0
                                    transition duration-150 ease-in-out"
                                    href="/" role="button"
                                    >Live Stream</a>
                                <a className="inline-block px-7 py-3 border-2 border-transparent bg-transparent
                                    text-white font-medium text-sm leading-snug uppercase rounded-full
                                    focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:border-white"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    href="/sundays" role="button"
                                    >Sundays</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-screen'>
                {/* container */}
                <div className='mx-auto px-8 flex flex-col py-8 items-center h-full'>
                    <div className='max-w-[668px]'>
                        <div>
                            {/* <h1 className='text-[#D55A1E] text-4xl sm:text-5xl md:text-8xl font-bold text-center'>Canvas Church</h1> */}
                            <div className='flex justify-center'>
                                <h2 className='text-[#4DB1CC] text-2xl sm:text-3xl md:text-4xl text-center md:text-right'>A Place For Every</h2>
                                <h2 className='text-[#D55A1E] text-2xl sm:text-3xl md:text-4xl text-center md:text-right'>one</h2>
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
        </>
    )
}

export default Home
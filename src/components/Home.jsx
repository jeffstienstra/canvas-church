import React from 'react'
// import Park from '../assets/park-beth-macdonald.jpg'

function Home() {
    return (
        <div className='mb-12'>
            <div>
                <div className='bg-flaking-paint z-0 h-[500px] relative overflow-hidden bg-no-repeat bg-cover bg-center'>
                    <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black bg-opacity-75'>
                        <div className='flex justify-center items-center h-full'>
                            <div className='text-center text-white px-6 md:px-12'>
                                <h1 className='text-[#D55A1E] text-5xl sm:text-6xl md:text-8xl font-bold text-center'
                                >Canvas <span className='text-[#4DB1CC] text-5xl sm:text-6xl md:text-8xl font-bold text-center'>church</span></h1>
                                <h1 className='text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12'>a place for everyone</h1>
                                <div className='sm:flex justify-center items-start flex-wrap'>
                                    <div>
                                        <a className='h-[40px] px-7 py-3 mr-1.5 border-transparent border-none bg-[#D55A1E] bg-opacity-75
                                            font-medium text-sm leading-snug uppercase rounded-full shadow-md
                                            hover:bg-opacity-100 focus:border-white focus:ring-0
                                            transition duration-150 ease-in-out'
                                            href='https://www.facebook.com/canvaschurchgr.org' target='_blank' rel='noreferrer' role='button'
                                            >Live Stream</a>
                                        <p className='text-s text-[#5A707A] mt-3 leading-4'>*Sundays @10am <br /> on Facebook</p>
                                    </div>
                                    <div className='mt-4 sm:mt-0'>
                                        <a
                                        className='h-[40px] px-5 py-3 mr-1.5 border-transparent border-2 bg-transparent
                                                font-medium text-sm leading-snug uppercase rounded-full shadow-md
                                                hover:bg-opacity-100 hover:border-[#4DB1CC] focus:border-white focus:ring-0
                                                transition duration-150 ease-in-out'

                                                // className='inline-block px-7 h-[40px] py-5 sm:py-0 sm:mt-[-30px] border-2 border-transparent bg-transparent
                                                // text-white font-medium text-sm leading-snug uppercase rounded-full
                                                // focus:border-white transition duration-150 ease-in-out hover:border-white'

                                            href='/sundays' role='button'
                                            >What Are Sundays Like?
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* content container */}
            <div className='mx-auto px-8 flex flex-col py-8 items-center'>
                <div className='max-w-[668px]'>
                    <div>
                        {/* <h1 className='text-[#D55A1E] text-4xl sm:text-5xl md:text-8xl font-bold text-center'>Canvas Church</h1> */}
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='text-[#4DB1CC] text-2xl sm:text-3xl md:text-5xl text-center md:text-right'>
                                Why
                                <span className='italic'><strong> Canvas </strong></span>
                                Church?</h2>

                        </div>
                    </div>
                    <p className='text-[#181d20] mt-8 text-justify'>
                        The word 'canvas' can bring many different things to mind:
                    </p>
                        <ul className='list-inside list-disc pl-4'>
                            <li className='mt-2 indent-[-20px]'>
                                A canvas for painting: either blank with infinite possibilities or a completed masterpiece with a unique beauty
                                that cannot be replicated.
                            </li>
                            <li className='mt-2 indent-[-20px]'>
                                A canvas tent: either a dwelling for rest and shelter, or a large covering for gathering and celebration.
                            </li>
                            <li className='mt-2 indent-[-20px]'>
                                To canvas a neighborhood: engaging a community with purpose.
                            </li>
                        </ul>
                    <p className='text-[#181d20] my-4 text-justify'>
                        These ideas of what a canvas can be reminds us not only of what we want our community to
                        be but also of who we already are.
                    </p>
                    <p className='text-[#181d20] my-4 text-justify'>
                        Canvas Church wants to be a place where the complete beauty of each person is recognized and celebrated while looking forward
                        to the ways that God will bring us together to create infinitely new and beautiful things as a community.
                    </p>
                    <p className='text-[#181d20] my-4 text-justify'>
                        We want to be a place where anyone can come and find shelter, refuge, and rest from the pain and brokenness of the world
                        while also being a place where we can celebrate the ways in which God’s faithfulness has brought healing, joy, and energy.
                    </p>
                    <p className='text-[#181d20] my-4 text-justify'>
                        We want to be present in our community, connected with our neighbors, and helping to meet the needs of those around us. Not
                        with some ulterior motive, but out of the desire to love others simply because they are.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
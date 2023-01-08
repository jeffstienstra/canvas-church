import React from 'react'
import DataCard from './DataCard'
import PhotoCard from './PhotoCard'

function Home() {
    return (
        <div className='
            bg-gradient-to-b from-[#7f9dab] to-[#6b8592] pb-16'>
            <div>
                <div className='h-screen z-0
                    bg-flaking-paint bg-no-repeat bg-cover bg-center'>
                    <div className='w-full h-full
                        bg-fixed bg-black bg-opacity-75'>
                        <div className='flex justify-center items-center h-full'>
                            <div className='text-center text-white'>
                                <h1 className='text-[#D55A1E] text-6xl sm:text-6xl md:text-8xl font-bold text-center'
                                >canvas <span className='text-[#4DB1CC] text-6xl sm:text-6xl md:text-8xl font-bold text-center'>church</span></h1>
                                <h1 className='text-3xl md:text-6xl font-bold tracking-tight'>a community for all</h1>
                                <div className='m-8'>
                                    <h1 className='text-white text-xl sm:text-4xl md:text-4xl font-bold text-center'>sundays @10</h1>
                                </div>
                                <div className='flex flex-col justify-center items-center flex-wrap'>
                                    <div className='m-4'>
                                        <a className='px-5 py-3
                                            border-transparent border-none bg-[#D55A1E]
                                            font-medium text-sm leading-snug uppercase rounded-full shadow-md
                                            hover:bg-opacity-100 focus:border-white focus:ring-0
                                            transition duration-150 ease-in-out'
                                            href='https://www.facebook.com/canvaschurchgr.org' target='_blank' rel='noreferrer' role='button'
                                            >Live Stream</a>
                                    </div>
                                    <div className='m-4 mt-6'>
                                        <a className='px-5 py-3
                                            bg-transparent border-transparent border-2 hover:border-white
                                            font-medium text-sm leading-snug uppercase rounded-full shadow-md
                                            hover:bg-opacity-100 focus:border-white focus:ring-0
                                            transition duration-150 ease-in-out'
                                            href='/sundays' role='button'
                                            >what are sunday like?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-16 mx-8 md:m-16'>
                <DataCard/>
            </div>

            <div className='mt-16 mx-8 md:m-16'>
                    <PhotoCard
                        image='bg-flaking-paint'
                        title="why the name Canvas church?"
                        marginTop='mt-4'
                        paddingY='py-8'
                        subtitle={
                            <div className='my-4 px-4 sm:px-8 sm:text-xl'>
                                <p className='mt-4'>
                        The word 'canvas' can bring many different things to mind:
                    </p>
                        <ul className='list-inside list-disc pl-2'>
                            <li className='mt-2 indent-[-10px]'>
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
                        <p className='my-4 text-justify'>
                        These ideas of what a canvas can be reminds us not only of what we want our community to
                        be but also of who we already are.
                    </p>
                    <p className='my-4 text-justify'>
                        Canvas Church wants to be a place where the complete beauty of each person is recognized and celebrated while looking forward
                        to the ways that God will bring us together to create infinitely new and beautiful things as a community.
                    </p>
                    <p className='my-4 text-justify'>
                        We want to be a place where anyone can come and find shelter, refuge, and rest from the pain and brokenness of the world
                        while also being a place where we can celebrate the ways in which God’s faithfulness has brought healing, joy, and energy.
                    </p>
                    <p className='my-4 text-justify'>
                        We want to be present in our community, connected with our neighbors, and helping to meet the needs of those around us. Not
                        with some ulterior motive, but out of the desire to love others simply because they are.
                    </p>
                    </div>}/>
            </div>
        </div>
    )
}

export default Home
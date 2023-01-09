import React from 'react'
import PhotoCard from './PhotoCard'

function Sundays() {
    return (
        <div className='bg-wood-floor-blue bg-center'>

            {/* container */}
            <div className='mt-12 md:mt-16 mx-auto px-8 flex flex-col py-8 items-center h-full
                bg-cyan-500 bg-opacity-20'>
                    {/* bg-gradient-to-b from-[#7f9dab] to-[#6b8592] */}
                <div className='max-w-[668px]'>
                    <PhotoCard image='bg-flaking-paint2'
                        title="What Are Sundays Like?"
                        marginTop='mt-4'
                        paddingY='py-8'
                        subtitle={
                            <div className='my-4 px-4 sm:px-8 sm:text-xl'>
                                <p>
                                    Our Sunday gatherings feel a lot like an informal family gathering. Our service starts at 10am but most people don't
                                    start arriving until about 5 mins before and keep coming in through the first part of worship. We know
                                    how hard it can be to get out the door so we'll see you when you get here.
                                </p>
                                <br />
                                <p>
                                    Right now we do not have nursery or Sunday school so bring stuff for your kids
                                    to do. We believe kids play a vibrant and important role in our worship and our church community and we know they can't
                                    always be quiet and sit still.
                                </p>
                            </div>}/>
                    <div className='mt-8'>
                        <PhotoCard
                            image='bg-flaking-paint'
                            title="What Happens During The Service?"
                            marginTop='mt-4'
                            paddingY='py-8'
                            subtitle={
                                <div className='my-4 px-4 sm:px-8 sm:text-xl'>
                                    <p>
                                        We will sing a few songs in the beginning, followed by a prayer and welcome. We shout out a few quick announcements and then
                                        take a break we call half time! It's an extended time of greeting each other, grabbing a coffee refill and cookie.
                                    </p>
                                    <br />
                                    <p>
                                        After that is the teaching time where we dig into God's word together. We wrap it up with another song and a blessing. The whole
                                        thing takes about an hour. We are really good at sticking to that time, especially with our kids sitting in worship with us.
                                    </p>
                                </div>}/>
                    </div>
                    <div className='mt-8 mb-20'>
                        <PhotoCard
                            image='bg-flaking-paint3'
                            title="Come As You Are"
                            marginTop='mt-4'
                            paddingY='py-8'
                            subtitle={
                                <div className='my-4 px-4 sm:px-8 sm:text-xl'>
                                    <p>
                                        God meets us where we're at so we like to keep it real at Canvas Church too. Come whether you know what you believe or
                                        aren't sure, whether you feel like you have it all together or your life is falling apart.
                                    </p>
                                    <br />
                                    <p>
                                        And wear what makes you comfortable — jeans and tee, shirt and tie, jammies, shorts in summer, whatever!
                                    </p>
                                    <br />
                                    <p>
                                        If it's hard for you to believe in church anymore, it's okay…come because you believe in God. Hope to see you
                                        soon…we will save a seat for you!
                                    </p>
                                </div>}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sundays
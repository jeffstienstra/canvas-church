import React from 'react'
import PhotoCard from './PhotoCard'

function Sundays() {
    return (
        <div className='w-full h-screen'>

            {/* container */}
            <div className='mx-auto px-8 flex flex-col py-8 items-center h-full'>
                <div className='max-w-[668px]'>
                    <PhotoCard image='bg-flaking-paint2'
                        title="What Are Sundays Like?"
                        subtitle='TL;DR laid-back & low-key'
                        marginTop='mt-0'
                        paddingY='py-10'/>
                    <div className='text-[#181d20] text-justify'>
                        <p className='my-4'>
                            Our Sunday gatherings feel a lot like an informal family gathering. Our service starts at 10am but most people don't
                            start arriving until about 5 mins before and keep coming in through the first part of worship. We don't care, we know
                            how hard it can be to get out the door.
                        </p>
                        <p className='my-8'>
                            Right now we do not have nursery or Sunday school so bring stuff for your kids
                            to do. We believe kids play a vibrant and important role in our worship and our church community and we know they can't
                            always be quiet and sit still.
                        </p>
                    </div>
                    <div className='mt-16'>
                        <PhotoCard
                            image='bg-flaking-paint'
                            title="What Happens During The Service?"
                            marginTop='mt-0'
                            paddingY='py-2'/>
                    </div>
                    <div className='text-[#181d20] text-justify'>
                        <p className='my-4'>
                            We will sing a few songs in the beginning, followed by a prayer and welcome. We shout out a few quick announcements and then
                            take a break we call half time! It’s an extended time of greeting each other, grabbing a coffee refill and cookie.
                        </p>
                        <p className='my-8'>
                            After that is the teaching time where we dig into God’s word together. We wrap it up with another song and a blessing. The whole
                            thing takes about an hour. We are really good at sticking to that time, especially with our kids sitting in worship with us.
                        </p>
                        <p className='my-8'>
                            Hope to see you soon…we will save a seat for you!
                        </p>
                    </div>
                    <div className='mt-16'>
                        <PhotoCard
                            image='bg-flaking-paint3'
                            title="Come As You Are"
                            subtitle=""
                            marginTop='mt-0'
                            paddingY='py-2'/>
                    </div>
                    <div className='text-[#181d20] text-justify'>
                        <p className='my-4'>
                            God meets us where we're at so we like to keep it real at Canvas Church too. Come whether you know what you believe or
                            aren't sure, whether you feel like you have it all together or your life is falling apart.
                        </p>
                        <p className='my-8'>
                            And wear what makes you comfortable — jeans and tee, shirt and tie, jammies, shorts in summer, whatever!
                        </p>
                        <p className='pb-20'>
                            If it's hard for you to believe in church anymore, it's okay…come because you believe in God.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sundays
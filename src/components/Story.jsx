import React from 'react'
import PhotoCard from './PhotoCard'

function Story() {
    return (
        <div className='bg-wood-floor-blue'>

            {/* container */}
            <div className='mt-8 sm:mt-16 mx-auto px-8 flex flex-col py-8 pb-20 items-center
                bg-white bg-opacity-30'>
                <div className='max-w-[668px] mb-6'>
                    <PhotoCard image=''
                        title="Our Story"
                        marginTop='mt-8'
                        paddingY='py-12'
                        subtitle={
                            <div className='my-4 px-12 sm:px-8 sm:my-12 sm:text-xl'>
                                <p>
                                    We started out in 2019 as a church plant - part of a larger church. As we grew and learned from our community how to
                                    live out the grace of God, we grew into a different understanding than our parent church and classis.
                                </p>
                                <br />
                                <p>
                                    Although we separated from them, we still embrace a Reformed understanding of the gospel, and are still reforming.
                                </p>
                                <br />
                                <p>
                                    We are committed to building a faith community where everyone is not only welcomed but celebrated as an integral
                                    part of our church.
                                </p>
                                <br />
                                <p>
                                    God has been ridiculously, over-the-top faithful to us! We continued to meet as a church and began the process of what we
                                    called “wandering in the desert”. We were nomads meeting when and where we could but with passion and excitement for what God
                                    had in store for us.
                                </p>
                                <br />
                                <p>
                                    We put together a new leadership team and emerged as Canvas Church in October 2022. We are a fully affirming
                                    church with a deep love for our community. We are indeed a community for all.
                                </p>
                                <br />
                                <p>
                                    We found a space to call our own in December of 2022, just in time to kick off the new year together as
                                    a faith community. Come on over and check it out at
                                    <a className='cursor-pointer text-[#D55A1E]'
                                        href="https://www.google.com/maps/place/2976+Ivanrest+Ave+SW,+Wyoming,+MI+49418/@42.9106243,-85.7436595,18.68z/data=!4m5!3m4!1s0x8819b05cdbb3415b:0x294fde5b39e82952!8m2!3d42.9106414!4d-85.7431625"
                                        target='_blank' rel='noreferrer' role='button'
                                    > 2976 Ivanrest Ave SW in Wyoming, MI</a>  Sundays at 10am!
                                </p>
                                <br />
                                <p>
                                    God is still writing our story and we would love for you to be a part of it!
                                </p>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Story
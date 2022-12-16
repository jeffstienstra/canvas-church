import React from 'react'

const About = () => {
    return (
        <div className='w-full h-[20%] text'>

            {/* title section */}
            <div className='mx-auto px-8 flex flex-col py-8 items-center h-full'>
                <div>
                    <h1 className='text-[#D55A1E] text-4xl sm:text-5xl md:text-8xl font-bold text-center'>About Us</h1>
                    <div className='flex justify-center'>
                        <h2 className='text-[#4DB1CC] text-center text-2xl sm:text-3xl md:text-4xl'>There is no 'we' without</h2>
                        <h2 className='text-[#D55A1E] text-center text-2xl sm:text-3xl md:text-4xl'><strong>&nbsp;you</strong></h2>
                        <h2 className='text-[#4DB1CC] text-center text-2xl sm:text-3xl md:text-4xl'>&nbsp;and me.</h2>

                    </div>
                </div>
                <div className='text-[#181d20] my-8 text-justify'>
                    <p>
                        We are all about community at Canvas Church.
                    </p>
                    <p>
                        Coming together from wherever you are, wherever you're from and being with whoever you're with.
                    </p>
                </div>
            </div>

            {/* Our Story */}
            <div className='flex flex-col justify-content items-center w-full h-full mx-12 max-w-[1000px]'>
                <div>
                    <p>Welcome to Canvas Church! We’re so glad you’re here. Let us introduce ourselves a bit.</p>
                    <br />
                    <p>We started out in 2019 as a church plant, part of a larger church. As we grew, and learned
                        from our community how to live out the grace of God, we grew into a different understanding
                        than our parent church and classis. Although we separated from them, we still embrace a Reformed
                        understanding of the gospel, and are still reforming.We are committed to building a faith community
                        where everyone is not only welcomed but celebrated as an integral part of our church.</p>
                    <br />
                    <p>God has been ridiculously, over-the-top faithful to us! We continue to meet as a church and
                        began the process of what we called “wandering in the desert”. We were nomads meeting when
                        and where we could but with passion and excitement for what God had in store for us. We put
                        together a new leadership team and emerged as Canvas Church in October 2022. We are a fully
                        affirming church with a deep love for our community. We are indeed a community for all.</p>
                    <br />
                    <p>We are still looking for a more permanent home in the Grandville and/or surrounding area. Currently
                        you can find us at Love Your Neighbor in Hudsonville. God is still writing our story and we would love
                        for you to be a part of it!</p>
                </div>
            </div>
        </div>
    )
}

export default About
import React from 'react'
import PhotoCard from './PhotoCard'

function Values() {
    return (
        <div className='bg-wood-floor-blue min-h-screen'>
            <div className='min-h-screen flex flex-col items-center py-20 md:py-28 px-8 bg-white bg-opacity-30'>
                <div className='max-w-[668px]'>
                    <PhotoCard image=''
                        title="Core Values"
                        marginTop='mt-8'
                        paddingY='py-8'
                        subtitle={
                            <div className='my-4 px-4 sm:px-8 sm:text-xl text-center'>
                                <p className='text-3xl text-canvas-blue'>Humble Curiosity</p>
                                    <p>We believe in a God who is beyond our comprehension and yet invites us to know and learn more about him. God
                                        reveals parts of himself to us in many different ways: through the Holy Spirit, his word, his creation, and
                                        through each other as image bearers. The limits of our human understanding naturally create flaws in our knowledge,
                                        our teaching, and our theology. As such, we do not pretend to have all the answers. So we approach God and each other
                                        in both humility and curiosity so that we may continue to grow in knowledge of God and his works.
                                    </p>
                                    <br />
                                <p className='text-3xl text-canvas-blue'>Courageous Grace</p>
                                    <p>The scriptures begin with the creation of the world and of community and then quickly transitions to the breaking of
                                        community between God and each other. We believe that the restoration of community, in all its forms, is at the
                                        center of God’s heart and the callings he gives each and every one of us.
                                    </p>
                                    <br />
                                    <p>Because of our tendency to fracture community with each other, both intentionally and unintentionally, it takes a lot
                                        of courage to live in community. The main mender of community is grace and Church should be a place where grace abounds.
                                    </p>
                                    <br />
                                    <p>Grace is not earned, it is given. We must always be willing to extend grace to everyone just like God did and continues
                                        to do for us through His Son.
                                    </p>
                                    <br />
                                    <p>However, it is much harder to receive grace than it is to give. And often, the hardest person to receive grace from is
                                        yourself. Through our pursuit of restoring community, we continually seek the courage to give and receive grace.
                                    </p>
                                    <br />
                                <p className='text-3xl text-canvas-blue'>Persistent Hope</p>
                                    <p>We believe that the Kingdom of Heaven is already here but not yet fully. We are invited to participate in the work of
                                        the Kingdom alongside and through the Holy Spirit.
                                    </p>
                                    <br />
                                    <p>Hope is not passive but must be actively lived into. We call participants in the Olympics – Olympic Hopefuls. As such,
                                        they do not passively sit around waiting for the event to see if they win. They spend countless hours practicing in
                                        pursuit of that hope.
                                    </p>
                                    <br />
                                    <p>We live into the persistent hope of the Kingdom of Heaven that is already here but not yet. We strive to live our lives
                                        every day as if the Kingdom is already here in its fulfillment.
                                    </p>
                                    <br />
                                <p className='text-3xl text-canvas-blue'>Rich Diversity</p>
                                    <p>The scriptures proclaim that “the Earth is the Lord’s and everything in it.” This means that everything - every rock, plant,
                                        creature, and every person - is made by and belongs to God. Everything has the signature of the creator imbued upon it and
                                        no work of man, no matter how hard we try, can remove or even hide it.
                                    </p>
                                    <br />
                                    <p>We have the wonderful privilege of discovering and learning about all the unique ways in which God has left his image on
                                        the world, including in each other. Every person (yes, every person’s orientation, culture, ability level, & story) was
                                        designed for a purpose for the glory of God and the advancement of his Kingdom. The celebration of this diversity of
                                        purpose and gifts is the highest level of worship.
                                    </p>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Values
import React from 'react'

function VideoFrame() {
    return (
        <div className="flex flex-col justify-center aspect-[16/9]
            px-2 sm:px-4 lg:mx-16 xl:mx-40 xxl:mx-80 rounded-lg bg-[#0e0f10]">
            <iframe
                className='pt-2 sm:pt-4'
                width="100%"
                height="100%"
                title='liveStream'
                src={`https://www.facebook.com/watch/?v=1517070942110701`}
                allowFullScreen={true}
            />
            <p className='p-1 text-canvas-blue text-center text-sm font-medium'>
                *Available Sundays @10am*
            </p>
        </div>
    )
}

export default VideoFrame
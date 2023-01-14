import React from 'react';

function LiveStream() {
    return (
        <div className='bg-wood-floor-blue min-h-screen bg-white bg-opacity-30'>
            <div className='min-h-screen py-24 sm:py-24 px-4 sm:px-8 bg-white bg-opacity-30'>
                <div className="flex flex-col justify-center aspect-[16/9] rounded-lg bg-[#0e0f10] px-2 sm:px-4">
                    <iframe
                        className='pt-2 sm:pt-4'
                        width="100%"
                        height="100%"
                        title='liveStream'
                        src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcanvaschurchgr.org%2Fvideos%2FVideoID%2F`}
                        allowFullScreen={true}
                    ></iframe>
                    <p className='p-1 text-canvas-blue text-center text-sm font-medium'>*Available Sundays @10am*</p>
                </div>
            </div>
        </div>
    );
}

export default LiveStream;

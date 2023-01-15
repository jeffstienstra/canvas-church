import React from 'react';
import FacebookEmbed from './FacebookEmbed'

function LiveStream() {
    return (
        <div className='bg-wood-floor-blue min-h-screen bg-white bg-opacity-30'>
            <div className='min-h-screen py-24 sm:py-24 px-4 sm:px-8 bg-white bg-opacity-30'>
                <FacebookEmbed />
            </div>
        </div>
    );
}

export default LiveStream;

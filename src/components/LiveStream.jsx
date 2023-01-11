import React from 'react';

function LiveStream() {
    return (
        <div>
            <iframe
                title='liveStream'
                src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcanvaschurchgr.org%2Fvideos%2FVideoID%2F`}
                width="500"
                height="280"
                frameborder="0"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
}

export default LiveStream;

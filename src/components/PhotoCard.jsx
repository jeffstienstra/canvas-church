import React, {useEffect, useState} from 'react'

function PhotoCard({image, title, subtitle, marginTop, paddingY, extraClasses}) {
    const [containerClasses, setContainerClasses] = useState('bg-flaking-paint2 mt-10 relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat cursor-default');
    const [divClasses, setDivClasses] = useState('relative bg-black bg-opacity-60 px-3 py-20 text-white text-center');

useEffect(() => {
    setContainerClasses(`${image} ${marginTop} relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat cursor-default`)
    setDivClasses(`relative bg-black bg-opacity-60 px-3 ${paddingY} text-white text-center`)
}, [])

    return (
        <div className={containerClasses}>
            <div className={divClasses}>
                <h3 className='font-bold text-2xl md:text-5xl cursor-default'>{title}</h3>
                <p className='text-md mt-4'>{subtitle}</p>
            </div>
        </div>
    )
}

export default PhotoCard
import React, {useEffect, useState} from 'react'

function PhotoCard({image, title, subtitle, marginTop, paddingY, extraClasses}) {
    const [parentClasses, setParentClasses] = useState('bg-flaking-paint2 mt-10 relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat cursor-default');
    const [containerClasses, setContainerClasses] = useState('relative bg-black bg-opacity-60 px-3 py-20 text-white text-center');

useEffect(() => {
    setParentClasses(`${image} ${marginTop} relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat cursor-default`)
    setContainerClasses(`relative bg-black bg-opacity-70 px-3 ${paddingY} text-white text-center`)
}, [])

    return (
        <div className={parentClasses}>
            <div className={containerClasses}>
                <h3 className='font-bold text-2xl md:text-5xl cursor-default'>{title}</h3>
                {subtitle}
            </div>
        </div>
    )
}

export default PhotoCard
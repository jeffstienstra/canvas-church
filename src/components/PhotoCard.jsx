import React, {useEffect, useState} from 'react'

function PhotoCard({image, title, subtitle, marginTop, paddingY}) {
    const [anchorClasses, setAnchorClasses] = useState('bg-flaking-paint2 mt-10 relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat cursor-default');
    const [divClasses, setDivClasses] = useState('relative bg-black bg-opacity-40 px-3 py-20 text-white text-center');

    // create new image classNames in tailwind.config.js file under 'backgroundImage'
    // const anchorClasses = `bg-${image} mt-${marginTop} relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat cursor-default`
    // const divClasses = `relative bg-black bg-opacity-40 px-3 py-${paddingY} text-white text-center`

useEffect(() => {
    setAnchorClasses(`${image} ${marginTop} relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat cursor-default`)
    setDivClasses(`relative bg-black bg-opacity-40 px-3 ${paddingY} text-white text-center`)
}, [])

    return (
        <div
            className={anchorClasses}
            >
            <div className={divClasses}>
                <h3 className='font-bold text-2xl md:text-5xl cursor-default'>{title}</h3>
                <p className='text-sm'>{subtitle}</p>
            </div>
        </div>
    )
}

export default PhotoCard
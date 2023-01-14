import React, {useEffect, useState} from 'react'

function PhotoCard({image, title, subtitle, marginTop, paddingY}) {
    const [parentClasses, setParentClasses] = useState('');
    const [containerClasses, setContainerClasses] = useState('');

useEffect(() => {
    setParentClasses(`${image} ${marginTop} relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat shadow-lg cursor-default`)
    setContainerClasses(`relative bg-black bg-opacity-80 px-3 ${paddingY} text-white text-center`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

    return (
        <div className={parentClasses}>
            <div className={containerClasses}>
                <h3 className='font-bold text-4xl sm:text-5xl cursor-default'>{title}</h3>
                {subtitle}
            </div>
        </div>
    )
}

export default PhotoCard
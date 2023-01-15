import React from 'react'

function Anchor({title, href, target}) {
    return (
        <a
            href={href}
            target={target}
            rel='noreferrer'
            role='button'
            className='w-[90%] sm:w-fit mb-2 text-lg font-medium rounded-md
            text-gray-500 hover:text-gray-900
            focus:outline-none focus:ring-2 focus:ring-canvas-blue focus:ring-offset-2'>
            {title}
        </a>
    )
}

export default Anchor
import React from 'react'
import Logo from '../assets/canvas-church-logo-transparent.svg'

const NavBar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#181d20] text-gray-300' >
            <div>
                <img src={Logo} alt="Canvas Church Logo" className='h-[60px]' />
            </div>
        </div>
    )
}

export default NavBar
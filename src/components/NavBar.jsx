import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/canvas-church-logo-transparent.svg'

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);
    const handleClick = () => setShowNav(!showNav);
    return (
        <header className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#181d20] text-gray-300' >
            <div className='flex w-[128px] mx-4'>
                <a href="/" >
                    <img src={Logo} alt="Canvas Church Logo"
                        className='w-[116px] hover:w-[128px] hover:mx-[-3px] duration-200'
                    />
                </a>
            </div>
            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!showNav ? <FaBars /> : <FaTimes  />}
            </div>

            {/* mobile menu */}
            <ul className={!showNav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#181d20] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* social icons */}
            <div className='hidden'>
            </div>
        </header>
    )
}

export default NavBar
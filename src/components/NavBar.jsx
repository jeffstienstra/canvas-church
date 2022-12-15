import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {FaFacebook, FaEnvelope} from 'react-icons/fa'
import Logo from '../assets/canvas-church-logo-transparent.svg'

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);
    const handleClick = () => setShowNav(!showNav);
    return (
        <header className='fixed w-full h-[80px] flex justify-between items-center px-2 bg-[#181d20] text-gray-300' >
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
                <li>Media</li>
                <li>Community</li>
                <li>Contact</li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden flex p-3 z-10 cursor-pointer text-2xl'>
                {!showNav ? <FaBars /> : <FaTimes  />}
            </div>

            {/* mobile menu */}
            <ul className={!showNav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#181d20] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Media</li>
                <li className='py-6 text-4xl'>Community</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* social icons */}
            <div className='flex fixed flex-col bottom-[0] left-0'>
                <ul>
                    <li className='w-[144px] h-[50px] flex justify-between items-center px-3 bg-white rounded-tr ml-[-86px] hover:ml-[0px] hover:rounded-r duration-200'>
                        <a className='flex justify-between items-center w-full text-[#4267B2]'
                        href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            FaceBook <FaFacebook className='text-[rgb(66,102,178)] text-4xl hover:text-[rgb(66,102,178,0.75)]'/>
                        </a>
                    </li>
                    <li className='hidden sm:flex w-[144px] h-[50px] justify-between items-center px-3 bg-white rounded-br ml-[-86px] hover:ml-[0px] hover:rounded-r duration-200'>
                        <a className='flex justify-between items-center w-full text-[rgb(213,90,30)]'
                        href="/contact">
                            Contact <FaEnvelope className='text-[#D55A1E] text-4xl hover:text-[rgb(213,90,30,0.75)]'/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar
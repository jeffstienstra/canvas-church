import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {FaTimes, FaHandPaper, FaEnvelope, FaVideo, FaLaugh, FaPaperPlane, FaHandshake, FaNewspaper, FaBookMedical, FaBook, FaChevronDown, FaBars, FaEnvelopeOpen} from 'react-icons/fa'
import {HiChatBubbleBottomCenterText, HiChatBubbleLeftRight} from 'react-icons/hi2'
import {BsCalendar2EventFill} from 'react-icons/bs'
import {ImBooks, ImAddressBook} from 'react-icons/im'
import Logo from '../assets/canvas-church-logo-transparent.svg'
import {about, callsToAction} from './MenuItems'
import Anchor from './Anchor'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const transition = {
    as: Fragment,
    enter: 'duration-200 ease-out',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'duration-100 ease-in',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95'
};

export default function Example() {
    return (
        <Popover className='fixed z-40 top-0 w-screen bg-white'>
            <div className='mx-auto px-4 sm:px-6'>
                <div className='flex items-center justify-between border-b-2
                    border-gray-100 py-3 md:space-x-10'>
                    <div className='flex justify-between sm:w-0 sm:flex-1'>
                        <a href='/'>
                        <span className='sr-only'>Canvas Church</span>
                        <img
                            className='h-12 outline-none
                                sm:hover:h-[56px] sm:hover:m-[-4px] duration-200'
                            src={Logo}
                            alt='Canvas Church Logo'
                        />
                        </a>
                    </div>
                    <div className='-my-2 -mr-2'>
                        <Popover.Button className='inline-flex items-center justify-center rounded-md
                            bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500
                            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-canvas-blue'>
                        <span className='sr-only'>Open menu</span>
                        <FaBars className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                    </div>
                </div>
            </div>

            <Transition {...transition}>

                <Popover.Panel focus className='popover-panel absolute inset-x-0 top-0 origin-top-right transform p-2 transition'>
                    <div className='sm:mx-4 divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='flex flex-col justify-center p-5'>
                            <div className='flex items-center justify-between'>
                                <div className='rounded-md focus:outline-none focus:ring-2 focus:ring-canvas-blue focus:ring-offset-2'>
                                    <a href='/'>
                                        <span className='sr-only'>Canvas Church</span>
                                        <img
                                            className='h-8 w-auto'
                                            src={Logo}
                                            alt='Your Company'
                                        />
                                    </a>
                                </div>
                                <div className='-mr-2'>
                                    <Popover.Button className='inline-flex items-center justify-center rounded-md
                                        bg-white p-2 text-canvas-gray hover:bg-gray-100 hover:text-gray-500
                                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-canvas-blue'>
                                        <span className='sr-only'>Close menu</span>
                                        <FaTimes className='h-6 w-6' aria-hidden='true' />
                                    </Popover.Button>
                                </div>
                            </div>

                            {/* About mobile fly-out menu option*/}
                            <Popover className='flex flex-col items-center mb-2 popover text-center'>
                                {({ open }) => (
                                    <>
                                        <Anchor title='Home' href='/'/>
                                        <Anchor title='Newsletter' href='https://mailchi.mp/8cf7731c9397/canvas-church-news-for-all-9530605?e=c43785b8a1' target='_blank'/>
                                        <Anchor title='Live Stream' href='https://www.facebook.com/canvaschurchgr.org' target='_blank'/>
                                        <Anchor title='What Are Sundays Like?' href='/sundays'/>

                                        <Popover.Button
                                            className={classNames(
                                            open ? 'text-gray-900' : 'text-canvas-gray',
                                            'w-[90%] sm:w-fit group inline-flex justify-center rounded-md bg-white text-lg',
                                            'font-medium hover:text-gray-900 focus:outline-none focus:ring-2',
                                            'focus:ring-canvas-blue focus:ring-offset-2'
                                            )}
                                        >
                                            <div className='flex font-medium items-center'>
                                                <span>About</span>
                                                <FaChevronDown
                                                    className={classNames(
                                                        open ? 'text-canvas-gray' : 'text-gray-400',
                                                        'ml-2 mt-0.5 h-5 w-5 group-hover:text-gray-500'
                                                    )}
                                                    aria-hidden='true' />
                                            </div>
                                        </Popover.Button>

                                        <Transition {...transition}>

                                            <Popover.Panel className='relative z-10 max-w-md min-w-[325px] mt-4'>
                                                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                                    <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                                        {about.map((item) => (
                                                            <a key={item.name} href={item.href}
                                                                className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                                                            >
                                                            <item.icon className='h-6 w-6 flex-shrink-0 text-canvas-blue' aria-hidden='true' />
                                                            <div className='ml-4'>
                                                                <p className='text-lg font-medium text-gray-900'>{item.name}</p>
                                                                <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                                                            </div>
                                                            </a>
                                                        ))}
                                                    </div>

                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                            {/* <Popover className='flex flex-col justify-center items-center mb-2 popover'>
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-canvas-blue focus:ring-offset-2'
                                            )}
                                        >
                                            <div className='flex'>
                                                <span>Media</span>
                                                <FaChevronDown
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'ml-2 mt-0.5 h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden='true'
                                            />
                                            </div>
                                        </Popover.Button>

                                        <Transition {...transition}>

                                            <Popover.Panel className='relative z-10 max-w-md min-w-[325px] mt-4'>
                                                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                                    <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                                        {media.map((item) => (
                                                            <a key={item.name} href={item.href}
                                                                className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                                                            >
                                                            <item.icon className='h-6 w-6 flex-shrink-0 text-canvas-blue' aria-hidden='true' />
                                                            <div className='ml-4'>
                                                                <p className='text-base font-medium text-gray-900'>{item.name}</p>
                                                                <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                                                            </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                    <div className='space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                                                        {callsToAction.map((item) => (
                                                            <div key={item.name} className='flow-root'>
                                                            <a
                                                                href={item.href}
                                                                className='-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100'
                                                            >
                                                                <item.icon className='h-6 w-6 flex-shrink-0 text-gray-400' aria-hidden='true' />
                                                                <span className='ml-3'>{item.name}</span>
                                                            </a>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                            <Popover className='flex flex-col justify-center items-center mb-2 popover'>
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-canvas-blue focus:ring-offset-2'
                                            )}
                                        >
                                            <div className='flex'>
                                                <span>Community</span>
                                                <FaChevronDown
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'ml-2 mt-0.5 h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden='true'
                                            />
                                            </div>
                                        </Popover.Button>

                                        <Transition {...transition}>

                                            <Popover.Panel className='relative z-10 max-w-md min-w-[325px] mt-4'>
                                                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                                    <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                                        {community.map((item) => (
                                                            <a key={item.name} href={item.href}
                                                                className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                                                            >
                                                            <item.icon className='h-6 w-6 flex-shrink-0 text-canvas-blue' aria-hidden='true' />
                                                            <div className='ml-4'>
                                                                <p className='text-base font-medium text-gray-900'>{item.name}</p>
                                                                <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                                                            </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                    <div className='space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                                                        {callsToAction.map((item) => (
                                                            <div key={item.name} className='flow-root'>
                                                            <a
                                                                href={item.href}
                                                                className='-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100'
                                                            >
                                                                <item.icon className='h-6 w-6 flex-shrink-0 text-gray-400' aria-hidden='true' />
                                                                <span className='ml-3'>{item.name}</span>
                                                            </a>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover> */}
                            <div className='bg-gray-50 flex items-center justify-center -m-5 mt-5 rounded-lg'>
                                <div className='my-2'>
                                    {callsToAction.map((item) => (
                                        <div key={item.name} className='flow-root'>
                                            <a href={item.href}
                                                target={item.target}
                                                rel={item.rel}
                                                role={item.role}
                                                className='flex items-center p-4 m-1 rounded-md
                                                    text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                                            >
                                                <item.icon className='h-6 w-6 flex-shrink-0 text-gray-400' aria-hidden='true' />
                                                <span className='ml-3'>{item.name}</span>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
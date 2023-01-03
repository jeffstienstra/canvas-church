import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {FaTimes, FaEnvelope, FaBookOpen, FaLaugh, FaHandshake, FaNewspaper, FaBookMedical, FaBook, FaAddressBook, FaChevronDown, FaBars} from 'react-icons/fa'
import {HiChatBubbleBottomCenterText, HiChatBubbleLeftRight} from 'react-icons/hi2'
import {BsCalendar2EventFill} from 'react-icons/bs'
import {ImBooks, ImAddressBook} from 'react-icons/im'
import Logo from '../assets/canvas-church-logo-transparent.svg'

const about = [
    {
        name: 'Our Story',
        description: 'Stories Matter',
        href: '/story',
        icon: FaBook,
    },
    {
        name: 'Our Team',
        description: 'Friendly Faces',
        href: '/about',
        icon: ImAddressBook,
    },
    {
        name: 'What We Believe',
        description: 'Theology Guides Actions',
        href: '/believe',
        icon: FaBookMedical,
    },
    ]

const media = [
    {
        name: 'Sermons',
        description: 'Relax and listen to Sundays gone by',
        href: '/media',
        icon: HiChatBubbleBottomCenterText,
    },
    {
        name: 'Newsletters',
        description: 'Catch up on the latest community news',
        href: 'media',
        icon: FaNewspaper,
    },
    {
        name: 'Resources',
        description: 'Help is out there',
        href: 'media',
        icon: ImBooks,
    },
]

const community = [
    {
        name: 'Kids',
        description: 'Fer da kids!',
        href: '/community',
        icon: FaLaugh,
    },
    {
        name: 'Small Groups',
        description: 'Get together in a low stress, low key, lo-fi kinda way',
        href: '/community',
        icon: HiChatBubbleLeftRight,
    },
    {
        name: 'Events',
        description: 'Go do the things',
        href: '/community',
        icon: BsCalendar2EventFill,
    },
    {
        name: 'Partnerships',
        description: 'Better together',
        href: '/community',
        icon: FaHandshake,
    },
]
const callsToAction = [
{ name: 'Questions? Send us a note!', href: '/contact', icon: FaEnvelope },
// { name: 'Suggestions? Click here!', href: '/contact', icon: FaEnvelope },
// { name: 'Want to get involved? Click here!', href: '/contact', icon: FaEnvelope },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Popover className='z-40 relative bg-white'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6'>
                <div className='flex items-center justify-between border-b-2
                    border-gray-100 py-3 md:space-x-10'>
                    <div className='flex justify-start sm:w-0 sm:flex-1'>
                        <a href='/'>
                        <span className='sr-only'>Canvas Church</span>
                        <img
                            className='h-8 sm:h-12 outline-none
                                sm:hover:h-[56px] sm:hover:m-[-4px] duration-200'
                            src={Logo}
                            alt='Canvas Church Logo'
                        />
                        </a>
                    </div>
                    <div className='-my-2 -mr-2 md:hidden'>
                        <Popover.Button className='inline-flex items-center justify-center rounded-md
                            bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500
                            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4DB1CC]'>
                        <span className='sr-only'>Open menu</span>
                        <FaBars className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                    </div>
                    <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
                        {/* normal menu links */}
                        <a href='/' className='text-base font-medium text-gray-500 hover:text-gray-900'>
                        Home
                        </a>
                        <a href='/sundays' className='text-base font-medium text-gray-500 hover:text-gray-900'>
                        Sundays
                        </a>

                        {/* fly-out menu links */}
                        <Popover className='relative'>
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                        open ? 'text-gray-900' : 'text-gray-500',
                                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4DB1CC] focus:ring-offset-2'
                                        )}
                                        >
                                        <span>About</span>
                                        <FaChevronDown
                                        className={classNames(
                                            open ? 'text-gray-600' : 'text-gray-400',
                                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                                        )}
                                        aria-hidden='true'
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter='transition ease-out duration-200'
                                        enterFrom='opacity-0 translate-y-1'
                                        enterTo='opacity-100 translate-y-0'
                                        leave='transition ease-in duration-150'
                                        leaveFrom='opacity-100 translate-y-0'
                                        leaveTo='opacity-0 translate-y-1'
                                    >
                                        <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 md:left-1/2 lg:ml-0 md:-translate-x-1/2'>
                                            <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                                <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                                {about.map((item) => (
                                                    <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                                                    >
                                                    <item.icon className='h-6 w-6 mt-3 flex-shrink-0 text-[#4DB1CC]' aria-hidden='true' />
                                                    <div className='ml-4'>
                                                        <p className='text-base font-medium text-gray-900'>{item.name}</p>
                                                        <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                                                    </div>
                                                    </a>
                                                ))}
                                                </div>
                                                <div className='space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                                                    <div key={callsToAction[0].name} className='flow-root'>
                                                    <a
                                                        href={callsToAction[0].href}
                                                        className='-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100'
                                                    >
                                                        <FaEnvelope className='h-6 w-6 flex-shrink-0 text-gray-400' aria-hidden='true' />
                                                        <span className='ml-3'>{callsToAction[0].name}</span>
                                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        <Popover className='relative'>
                        {({ open }) => (
                            <>
                            <Popover.Button
                                className={classNames(
                                open ? 'text-gray-900' : 'text-gray-500',
                                'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4DB1CC] focus:ring-offset-2'
                                )}
                            >
                                <span>Media</span>
                                <FaChevronDown
                                className={classNames(
                                    open ? 'text-gray-600' : 'text-gray-400',
                                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                                )}
                                aria-hidden='true'
                                />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0 translate-y-1'
                                enterTo='opacity-100 translate-y-0'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100 translate-y-0'
                                leaveTo='opacity-0 translate-y-1'
                            >
                                <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 md:left-1/2 lg:ml-0 md:-translate-x-1/2'>
                                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                    <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                    {media.map((item) => (
                                        <a
                                        key={item.name}
                                        href={item.href}
                                        className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                                        >
                                        <item.icon className='h-6 w-6 mt-3 flex-shrink-0 text-[#4DB1CC]' aria-hidden='true' />
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
                        <Popover className='relative'>
                            {({ open }) => (
                                <>
                                <Popover.Button
                                    className={classNames(
                                    open ? 'text-gray-900' : 'text-gray-500',
                                    'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4DB1CC] focus:ring-offset-2'
                                    )}
                                >
                                    <span>Community</span>
                                    <FaChevronDown
                                    className={classNames(
                                        open ? 'text-gray-600' : 'text-gray-400',
                                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                                    )}
                                    aria-hidden='true'
                                    />
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter='transition ease-out duration-200'
                                    enterFrom='opacity-0 translate-y-1'
                                    enterTo='opacity-100 translate-y-0'
                                    leave='transition ease-in duration-150'
                                    leaveFrom='opacity-100 translate-y-0'
                                    leaveTo='opacity-0 translate-y-1'
                                >
                                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 md:left-1/2 lg:ml-0 md:-translate-x-1/2'>
                                    <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                        {community.map((item) => (
                                            <a
                                            key={item.name}
                                            href={item.href}
                                            className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                                            >
                                            <item.icon className='h-6 w-6 mt-3 flex-shrink-0 text-[#4DB1CC]' aria-hidden='true' />
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
                    </Popover.Group>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter='duration-200 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
                >
                <Popover.Panel focus className='popover-panel absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'>
                    <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='px-5 pt-5 pb-6'>
                            <div className='flex items-center justify-between'>
                                <div>
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
                                    <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4DB1CC]'>
                                        <span className='sr-only'>Close menu</span>
                                        <FaTimes className='h-6 w-6' aria-hidden='true' />
                                    </Popover.Button>
                                </div>
                            </div>

                            {/* About mobile fly-out menu option*/}
                            <Popover className='flex flex-col justify-center items-center mb-2 popover'>
                                {({ open }) => (
                                    <>
                                        <a href='/' className='text-base font-medium text-gray-500 hover:text-gray-900'>
                                            Home
                                        </a>
                                        <a href='/sundays' className='text-base mb-2 font-medium text-gray-500 hover:text-gray-900'>
                                            Sundays
                                        </a>
                                        <Popover.Button
                                            className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group inline-flex items-center rounded-md bg-white text-base',
                                            'font-medium hover:text-gray-900 focus:outline-none focus:ring-2',
                                            'focus:ring-[#4DB1CC] focus:ring-offset-2'
                                            )}
                                        >
                                            <div className='flex'>
                                                <span>About</span>
                                                <FaChevronDown
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'ml-2 mt-0.5 h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden='true'
                                            />
                                            </div>
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter='transition ease-out duration-200'
                                            enterFrom='opacity-0 translate-y-1'
                                            enterTo='opacity-100 translate-y-0'
                                            leave='transition ease-in duration-150'
                                            leaveFrom='opacity-100 translate-y-0'
                                            leaveTo='opacity-0 translate-y-1'
                                        >
                                            <Popover.Panel className='relative z-10 max-w-md min-w-[325px] mt-4'>
                                                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                                    <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                                        {about.map((item) => (
                                                            <a key={item.name} href={item.href}
                                                                className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                                                            >
                                                            <item.icon className='h-6 w-6 mt-3 flex-shrink-0 text-[#4DB1CC]' aria-hidden='true' />
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
                                            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4DB1CC] focus:ring-offset-2'
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

                                        <Transition
                                            as={Fragment}
                                            enter='transition ease-out duration-200'
                                            enterFrom='opacity-0 translate-y-1'
                                            enterTo='opacity-100 translate-y-0'
                                            leave='transition ease-in duration-150'
                                            leaveFrom='opacity-100 translate-y-0'
                                            leaveTo='opacity-0 translate-y-1'
                                        >
                                            <Popover.Panel className='relative z-10 max-w-md min-w-[325px] mt-4'>
                                                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                                    <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                                        {media.map((item) => (
                                                            <a key={item.name} href={item.href}
                                                                className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                                                            >
                                                            <item.icon className='h-6 w-6 mt-3 flex-shrink-0 text-[#4DB1CC]' aria-hidden='true' />
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
                                            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4DB1CC] focus:ring-offset-2'
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

                                        <Transition
                                            as={Fragment}
                                            enter='transition ease-out duration-200'
                                            enterFrom='opacity-0 translate-y-1'
                                            enterTo='opacity-100 translate-y-0'
                                            leave='transition ease-in duration-150'
                                            leaveFrom='opacity-100 translate-y-0'
                                            leaveTo='opacity-0 translate-y-1'
                                        >
                                            <Popover.Panel className='relative z-10 max-w-md min-w-[325px] mt-4'>
                                                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                                    <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                                        {community.map((item) => (
                                                            <a key={item.name} href={item.href}
                                                                className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                                                            >
                                                            <item.icon className='h-6 w-6 mt-3 flex-shrink-0 text-[#4DB1CC]' aria-hidden='true' />
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

                            {/* mobile menu options w/o descriptions */}
                            {/*
                            <div className='mt-6'>
                                <nav className='grid gap-y-8'>
                                    {about.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                                            >
                                                <item.icon className='h-6 w-6 flex-shrink-0 text-[#4DB1CC]' aria-hidden='true' />
                                                <span className='ml-3 text-base font-medium text-gray-900'>{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div> */}
                            </div>
                            {/* <div className='space-y-6 py-6 px-5'>
                            <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                                <a href='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
                                    Pricing
                                </a>

                                <a href='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
                                    Docs
                                </a>
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className='text-base font-medium text-gray-900 hover:text-gray-700'
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div>
                                <a
                                    href='#'
                                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-[#4DB1CC] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#D55A1E]'
                                >
                                    Sign up
                                </a>
                                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                                    Existing customer?{' '}
                                    <a href='#' className='text-[rgb(77,177,204)] hover:text-[#D55A1E]'>
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
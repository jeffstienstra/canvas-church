import {FaPeopleCarry, FaTimes, FaHandHoldingHeart, FaPaperPlane, FaEnvelope, FaBookOpen, FaLaugh, FaHandshake, FaNewspaper, FaBookMedical, FaBook, FaAddressBook, FaChevronDown, FaBars} from 'react-icons/fa'
import {HiChatBubbleBottomCenterText, HiChatBubbleLeftRight} from 'react-icons/hi2'
import {BsCalendar2EventFill} from 'react-icons/bs'
import {ImBooks, ImAddressBook} from 'react-icons/im'

const about =
    [
        {
            name: 'Our Story',
            // description: 'Stories Matter',
            href: '/story',
            icon: FaBook,
        },
        {
            name: 'Core Values',
            // description: 'Stories Matter',
            href: '/values',
            icon: FaHandHoldingHeart,
        },
        // {
        //     name: 'Team',
        //     // description: 'Stories Matter',
        //     href: '/team',
        //     icon: FaPeopleCarry,
        // }
    ]

const callsToAction = [
    {
        name: 'Sign up for our newsletter',
        href: 'https://canvaschurchgr.us14.list-manage.com/subscribe?u=c49d47dd6ee3ce6d1017f7b21&id=35ad903272',
        icon: FaNewspaper,
        target: '_blank',
        rel: 'noreferrer',
        role: 'button' },
    { name: 'Questions? Send us a note!', href: '/contact', icon: FaPaperPlane },
// { name: 'Get involved!', href: '/contact', icon: FaHandshake },
]

const community = [
    {
        name: 'Kids',
        // description: 'Fer da kids!',
        href: '/community',
        icon: FaLaugh,
    },
    {
        name: 'Small Groups',
        // description: 'low stress get togethers',
        href: '/community',
        icon: HiChatBubbleLeftRight,
    },
    {
        name: 'Events',
        // description: 'Go do the things',
        href: '/community',
        icon: BsCalendar2EventFill,
    },
    {
        name: 'Partnerships',
        // description: 'Better together',
        href: '/community',
        icon: FaHandshake,
    },
]

const media = [
    {
        name: 'Sermons',
        // description: 'Relax and listen to Sundays gone by',
        href: '/media',
        icon: HiChatBubbleBottomCenterText,
    },
    {
        name: 'Newsletters',
        // description: 'Catch up on the latest community news',
        href: 'media',
        icon: FaNewspaper,
    },
    {
        name: 'Resources',
        // description: 'Help is out there',
        href: 'media',
        icon: ImBooks,
    },
]



export {about, callsToAction, community, media}
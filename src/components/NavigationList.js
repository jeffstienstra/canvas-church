import {FaTimes, FaEnvelope, FaBookOpen, FaLaugh, FaHandshake, FaNewspaper, FaBookMedical, FaBook, FaAddressBook, FaChevronDown, FaBars} from 'react-icons/fa'
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
                    name: 'Our Team',
                    // description: 'Friendly Faces',
                    href: '/about',
                    icon: ImAddressBook,
                },
                {
                    name: 'What We Believe',
                    // description: 'Theology Guides Actions',
                    href: '/believe',
                    icon: FaBookMedical,
                },
            ]

function NavigationList () {
    return (
        about
    )
}

export default NavigationList;
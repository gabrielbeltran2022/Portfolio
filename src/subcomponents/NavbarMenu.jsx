import Banner from "../components/Banner"
import AboutMe from "../components/Aboutme"
import Other from "../components/Other"
import Contact from "../components/Contact"


const NavBarMenu = [
    {
        id:1,
        title: 'Home',
        icon: <i className="fa-solid fa-house"></i>,
        link:   '/'
    },
    {
        id:2,
        title: 'About',
        icon: <i className="fa-solid fa-address-card"></i>,
        link: '/about'

    },
    {
        id:3,
        title: 'Info',
        icon: <i className="fa-solid fa-user-graduate"></i>,
        link: '/Info'

    },
    {
        id: 4,
        title: 'Others',
        icon: <i className="fa-solid fa-users"></i>,
        link: 'others'
    },
    {
        id: 5,
        title: 'Contacts',
        icon: <i className="fa-solid fa-phone-volume"></i>,
        link: '/contact'
    }  
]

export default NavBarMenu
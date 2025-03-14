import {faBars, faXmark, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import NavMenu from './NavMenu.jsx'

const NavbarMobile = () => {
    
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className='mobile-container'>
                 <div className='mobile-icon'>
                    <i className={isActive ? "fa-solid fa-xmark":"fa-solid fa-bars"  } onClick={() =>  setIsActive(!isActive)}></i>
                 </div>
                 {isActive ?  <NavMenu/> : null} 
            </div>
         
        </>
  )
}

export default NavbarMobile

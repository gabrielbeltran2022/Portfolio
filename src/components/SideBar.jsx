import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useGSAP } from '@gsap/react';



const SideBar = () => {
  let logoImage = useRef();
  let facebook = useRef();
  let linkend = useRef();
  let email = useRef();
  

    useGSAP(()=>{
        gsap.from(logoImage.current,{
            x:-100,
            opacity:0,
            duration:1,
            delay: 1.5,
            stagger: 0.5
        })
       
        gsap.from(facebook.current,{
            y:100,
            opacity:0,
            duration:1,
            delay: .9,
            stagger: 0.5
        })
        gsap.from(linkend.current,{
            y:100,
            opacity:0,
            duration:1,
            delay: 1.5,
            stagger: 1
        })
        gsap.from(email.current,{
            y:100,
            opacity:0,
            duration:1,
            delay: 2,
            stagger: 2
        })
    })


  return (
    <>
        <div className="sidebar">
           
                <div className='sidebar-element'>
                        <img
                        alt="my logo"
                        src={logo}
                        className="image"
                        ref={logoImage}
                    />
                </div>
          
                <div className='sidebaricon'>
                    
                    <div 
                    
                    className='facebook-div'>
                         <FontAwesomeIcon 
                         
                          icon={faFacebook} className='facebook' ref={facebook}/>
                       
                    </div>
                    <div 
                    
                    className='linked-div'>
                    <FontAwesomeIcon 
               
                    icon={faLinkedin} className='linked' ref={linkend}   />
                    </div>
                    <div 
                 
                    className='email-div'>
                    <FontAwesomeIcon 
                   
                       icon={faEnvelope} className='email'ref={email} />
                    </div>
                </div>
           
           
        </div>
    </>
  )
}

export default SideBar

import '../styles/banner.css'
import gsap from 'gsap';
import picture from '../assets/gab.png'
import GabrielResume from '../assets/GabrielResume.pdf'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Banner = (props) => {
    let fullName = useRef();    
    let fullName2 = useRef();
    let downloadCv = useRef();
    let profile = useRef()
  
    let hello = useRef();
    let message = useRef()

    useGSAP(()=>{
        gsap.from(hello.current,{
            x: -100,
            opacity:0,
            duration:1,
            delay: 1,
            stagger: 0.5
        }),
        gsap.from(fullName.current,{
            x: -100,
            opacity:0,
            duration:1,
            delay: 1.5,
            stagger: 0.5
        }),
        gsap.from(fullName2.current,{
            x: 100,
            opacity:0,
            duration: 2,
            delay: 2,
            stagger: 0.5
        }),
        gsap.from(message.current,{
            x: -100,
            opacity:0,
            duration: 1,
            delay: 2,
            stagger: 0.5
        }),
     
        gsap.from(downloadCv.current,{
            x: 100,
            opacity:0,
            duration:2,
            delay: 1.5,
            stagger: 0.5
        }),
        gsap.from(profile.current,{
            y: 100,
            opacity:0,
            duration: 1,
            delay: 2.5,
            stagger: 0.5
        })
       
        
    })


  return (
    <>
        <div  className="banner">
            <div className='banner-name'>
                <div>
                    <h2 ref={hello}>Hello, My Name </h2>
                    <h2 className='myName' ref={fullName}>{props.name}</h2>
                    <h4 ref={fullName2}>{props.position}</h4>
                    <div className='banner-message' ref={message}>
                    <p>{props.message}</p>
                    </div>
                    <button ref={downloadCv} className='CV'>
                        <a href={GabrielResume} download='resume'>Download C.V.</a>
                    </button>
                    
                </div>
                
              
            </div>
            <div className='banner-image'>
                <img
                alt="no Profile"
                src={picture}
                ref={profile}
                />
            </div>
            
        </div>
    </>
  )
}

export default Banner


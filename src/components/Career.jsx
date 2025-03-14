import '../styles/career.css'
import { useEffect, useRef,useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



const Carreer = () => {
    let career = useRef();


    useGSAP(() =>{
        gsap.from(career.current,{
            y: -40,
            opacity:0,
            duration: 1,
            delay: .3,
            stagger: 0.5,
            
            scrollTrigger: {
            
                start: "top 80%",
                end: "bottom 5%",
                toggleActions: 'restart complete none reset'
            }
        })
   },[])



  return (
    <>
        <div className="carreer-container">
            <div className='career-content' ref={career}>
                <div className='carreer-left'> 
                    <div className='career-left-content'>
                        <div className='career-left-date'>
                            <div className='briefcase'>
                                <i className="briefcase fa-solid fa-briefcase"></i>
                            </div>
                            <div className='calendar'>
                                 <i className="fa-regular fa-calendar"></i>
                                 <p>2022 - 2025</p> 
                            </div>
                            
                         </div>
                    </div>
                    <div className='career-left-details'>
                            <span></span>
                            <div className='career-track'>
                                <h6>Web Developer</h6>
                                <div>
                                    <p>
                                    A career as a web developer involves creating, maintaining, and optimizing websites and web applications, offering opportunities to innovate and grow in the ever-evolving tech industry.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='carreer-left'> 
                    <div className='career-left-content'>
                        <div className='career-left-date'>
                            <div className='briefcase'>
                                <i className="briefcase fa-solid fa-briefcase"></i>
                            </div>
                            <div className='calendar'>
                                 <i className="fa-regular fa-calendar"></i>
                                 <p>2020</p> 
                            </div>
                            
                         </div>
                    </div>
                    <div className='career-left-details'>
                            <span></span>
                            <div className='career-track'>
                                <h6>Information Technology</h6>
                                <div>
                                    <p>
                                    An I.T. staff member manages and supports an organization's technology systems, ensuring smooth operations, network security, and efficient problem resolution.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='carreer-left'> 
                    <div className='career-left-content'>
                        <div className='career-left-date'>
                            <div className='briefcase'>
                                <i className="briefcase fa-solid fa-briefcase"></i>
                            </div>
                            <div className='calendar'>
                                 <i className="fa-regular fa-calendar"></i>
                                 <p>2017 - 2020</p> 
                            </div>
                            
                         </div>
                    </div>
                    <div className='career-left-details'>
                            <span></span>
                            <div className='career-track'>
                                <h6>CCTV Technichian</h6>
                                <div>
                                    <p>
                                    A CCTV technician installs, maintains, and troubleshoots surveillance systems to ensure reliable security monitoring and footage recording.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
        </div> 
    </>
  )
}

export default Carreer

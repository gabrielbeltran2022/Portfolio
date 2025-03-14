import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



const Education = () => {

    let education = useRef();


    useGSAP(() =>{
        gsap.from(education.current,{
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
            <div className="carreer-container" ref={education}>
                <div className='career-content'>
                    <div className='carreer-left'> 
                        <div className='career-left-content'>
                            <div className='career-left-date'>
                                <div className='briefcase'>
                                     <i className="fa-solid fa-graduation-cap"></i>
                                </div>
                                <div className='calendar'>
                                     <i className="fa-regular fa-calendar"></i>
                                     <p>2022</p> 
                                </div>
                                
                             </div>
                        </div>
                        <div className='career-left-details'>
                                <span></span>
                                <div className='career-track'>
                                    <h6>Zuitt Coding BootCamp</h6>
                                    <div>
                                        <p>
                                        I'm starting my journey to become a web developer by attending a Zuitt Coding Bootcamp to gain hands-on coding skills and industry-relevant knowledge.
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='carreer-left'> 
                        <div className='career-left-content'>
                            <div className='career-left-date'>
                                <div className='briefcase'>
                                <i className="fa-solid fa-graduation-cap"></i>
                                </div>
                                <div className='calendar'>
                                     <i className="fa-regular fa-calendar"></i>
                                     <p>2014 - 2016</p> 
                                </div>
                                
                             </div>
                        </div>
                        <div className='career-left-details'>
                                <span></span>
                                <div className='career-track'>
                                    <h6>Computer Engineering</h6>
                                    <div>
                                        <p>
                                        I graduated with a degree in Computer Engineering, equipped with a strong foundation in hardware, software, and system development.
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='carreer-left'> 
                        <div className='career-left-content'>
                            <div className='career-left-date'>
                                <div className='briefcase'>
                                     <i className="fa-solid fa-graduation-cap"></i>
                                </div>
                                <div className='calendar'>
                                     <i className="fa-regular fa-calendar"></i>
                                     <p>2012 - 2014</p> 
                                </div>
                                
                             </div>
                        </div>
                        <div className='career-left-details'>
                                <span></span>
                                <div className='career-track'>
                                    <h6>Computer Technichian</h6>
                                    <div>
                                        <p>
                                        I graduated as a Computer Technician, skilled in installing, maintaining, and troubleshooting computer systems and networks.
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

export default Education

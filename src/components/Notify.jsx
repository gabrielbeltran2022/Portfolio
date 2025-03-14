import '../styles/contact.css'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';




const Notify = () => {
  
    let notification = useRef();

    useGSAP(() =>{
     
        gsap.to(notification.current,{
            y: -20,
            opacity:1,
            duration:1,
            delay: 1.6,
            stagger: 0.5,
            start: "top 85%",
            end: "bottom 5%",
            toggleActions: 'restart complete none reset'
              
       
        
        })
    },[])
  
    return (
    <>
         <div id='notif' className='submit-notification' ref={notification}>
                      <i className="fa-solid fa-check"></i>
                      <div className='submit-text'>
                      <h6>Thank You!</h6>
                      <p>Your details has been successfully submitted.</p>
                      </div>
        </div>         
    </>
  )
}

export default Notify

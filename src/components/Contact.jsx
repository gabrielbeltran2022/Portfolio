import '../styles/contact.css'
import Notify from './Notify'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Data from "../subcomponents/myData.jsx"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Contact = () => {

    const [detail,setDetails] = useState({fullName: "", contact: "" ,email:"",comment:""})
    const [data, setData] = useState([])
    const [showNotify,setShowNotif] = useState(false)
    const [notif,setNotif] = useState('')

    const handleSubmit  = (e) => {
        e.preventDefault()
        setData([...data,detail])
        setDetails({fullName: "", contact: "" ,email:"",comment:""})

        setShowNotif(true)

       setTimeout(() =>{
        setShowNotif(false)
       },2000)
        
      
        
        console.log(showNotify)
       
    }



    let facebook = useRef();
    let linkend = useRef();
    let email = useRef();
    let contactSection = useRef();
    let locationMe = useRef()
    let contactMe = useRef()
    let emailMessage = useRef()
    let formSection = useRef()
  
 


useGSAP(()=>{
 
    gsap.from(contactSection.current,{
        y: -40,
        opacity:0,
        duration:1,
        delay: .9,
        stagger: 0.5,
        scrollTrigger: {
            trigger: contactSection.current,
            start: "top 85%",
            end: "bottom 5%",
            toggleActions: 'restart complete none reverse'
          
    }
       
    })

    gsap.from(facebook.current,{
        y:100,
        opacity:0,
        duration:1,
        delay: .4,
        stagger: 0.5,
        scrollTrigger: {
            trigger: facebook.current,
            start: "top 90%",
            end: "bottom 5%",
        
            toggleActions: 'restart complete none reverse'
          
    }
    })
    gsap.from(linkend.current,{
        y:100,
        opacity:0,
        duration:1,
        delay: .7,
        stagger: 1,
        scrollTrigger: {
            trigger: linkend.current,
            start: "top 90%",
            end: "bottom 5%",
           
            toggleActions: 'restart complete none reverse'
          
    }
    })
    gsap.from(email.current,{
        y:100,
        opacity:0,
        duration:1,
        delay: .8,
        stagger: 2,
        scrollTrigger: {
            trigger: email.current,
            start: "top 90%",
            end: "bottom 5%",
           
            toggleActions: 'restart complete none reverse'
          
    }
    })
    gsap.from(emailMessage.current,{
        x: -100,
        opacity:0,
        duration:1,
        delay: 1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: emailMessage.current,
            start: "top 85%",
            end: "bottom 5%",
           
            toggleActions: 'restart complete none reverse'
          
    }
    })
    gsap.from(contactMe.current,{
        x: -100,
        opacity:0,
        duration:1,
        delay: 1.3,
        stagger: 0.5,   scrollTrigger: {
            trigger: contactMe.current,
            start: "top 85%",
            end: "bottom 5%",
          
            toggleActions: 'restart complete none reverse'
          
    }
    })
    gsap.from(locationMe.current,{
        x: -100,
        opacity:0,
        duration:1,
        delay: 1.6,
        stagger: 0.5,   scrollTrigger: {
            trigger: locationMe.current,
            start: "top 85%",
            end: "bottom 5%",
           
            toggleActions: 'restart complete none reverse'
          
    }
    })
    gsap.from(formSection.current,{
        x: -150,
        opacity:0,
        duration:1,
        delay: 1.6,
        stagger: 0.5,
        scrollTrigger: {
            trigger: formSection.current,
            start: "top 90%",
            end: "bottom 5%",
            
            toggleActions: 'restart complete none reset'
          
    }
    })


  
    
},[])

  return (
    <>
        <div className='contact-container' >
       
            <div className='container-content' ref={contactSection}>
              <h1>Contact Me!</h1>
              <div className='contact-details'>
                      <div className='contact-section'>
                        {
                        Data.map(({id,address,contact,email}) => (
                        
                        <div className='contact-me' key={id}>
                            <div className='contact-location' ref={locationMe}>
                                <i className="location fa-solid fa-location-dot"></i>
                                <h6 className="" >
                                    {address}
                                </h6>
                             </div>   
                             <div className='contact-number' ref={contactMe}>
                                <i className="phone fa-solid fa-phone"></i>
                                <h5 className="" >
                                    {contact}
                                </h5>
                             </div>  
                             <div className='contact-mail' ref={emailMessage}>
                             <i className="mail fa-solid fa-envelope"></i>
                                <h5 className="" >
                                    {email}
                                </h5>
                             </div> 
                             
                        </div>
                        
                           ))
                        }
                        <div>
                        <div className='sidebaricon'>
             
                        <div  className='facebook-div'>
                            <a href='https://www.facebook.com/Loui.beltran' target='_blank'> 
                            <FontAwesomeIcon  icon={faFacebook} className='facebook' ref={facebook} />
                            </a>
                          
                            
                        </div>
                        <div className='linked-div'>
                            <a href='https://www.linkedin.com/in/gabriellouisebeltran/' target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} className='linked' ref={linkend}   />
                            </a>
                            
                        </div>
                        <div className='email-div'>
                            <a href='https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRzzvkPZzpWbGbKbfpWwgzlrblzscjNtVNKrSPtdCSSjFVPpKhmFdbCJztKjpBbvWVB' target='_blank'>
                            <FontAwesomeIcon icon={faEnvelope} className='email'ref={email} /></a>
                        </div>
                    </div>
                        </div>
                        </div>
                      
                        <form onSubmit={handleSubmit}> 
                        <div className='contact-email' ref={formSection}>
                            <div className='input-1'>
                                <input type='text' required='required' value={detail.fullName} onChange={(e) => setDetails({...detail,fullName: e.target.value})}/>
                                <span>Full Name:</span>
                        </div>
                        <div className='input-2'>
                                <input type='text' required='required' value={detail.email} onChange={(e) => setDetails({...detail,email: e.target.value})}/>
                                <span>Email Address</span>
                        </div>
                        <div className='input-3'>
                                <input type='number' inputMode='numeric' required='required' value={detail.contact}  onChange={(e) => setDetails({...detail,contact: e.target.value})}/>
                                <span>Mobile Number</span>
                        </div>
                        <div className='input-4'>
                                <textarea required='required' value={detail.comment} onChange={(e) => setDetails({...detail,comment: e.target.value})}></textarea>
                                <span>message</span>
                        </div>
                        <div className='input-5'>
                               <button className='contact-btn'>Submit</button>
                        </div>
                        </div>
                        </form>
                      </div>
                     
                 
          
            </div>

                 
                 {
                    
                    showNotify  && < Notify/>  
                
                 }
        </div>
    </>
  )
}

export default Contact

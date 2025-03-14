import NavBarMenu from "../subcomponents/NavbarMenu"
import '../styles/navbar.css'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState,useRef } from "react"
import { icon } from "@fortawesome/fontawesome-svg-core"
import { Link } from "react-router-dom";



const Sidenavbar = () => {
    let navigator = useRef()
    
    const [effect,setEffect] = useState()
    const [activeLink,setActiveLink] = useState("Home")
    const [isScrolled,setIsScrolled] = useState(false)
   
    const scrollSection = (title) =>{
        const element = document.getElementById(title);
        if(element){
            const marginTop = 0
            const scrollY = element.getBoundingClientRect().top + window.scrollY - marginTop
            window.scrollTo({top: scrollY,behavior: "smooth"});

        }
    }
   
 

    useGSAP(()=>{
        gsap.from(navigator.current,{
            x:-100,
            opacity:0,
            duration:.4,
            delay: .2,
            scrollTrigger: {
                trigger: '.app',
                start: "top %",
                end: 'bottom 50',
                
                toggleActions: 'restart complete none reverse'
            },
            stagger: 0.5})
    })    


  return (
    <>
        <div ref={navigator}  className="side-navigator">
           
            <ul>
                {
                    NavBarMenu.map(({id,icon,title}) => (
                      
                        <li key={id} data-tooltip={title} >
                             <Link  className="activeMobile" onClick={() => scrollSection(title)} >{icon}</Link>
                            
                        </li>
                     
                        
                    ))
                }
                     
           </ul>
                    
        </div>
        
    </>
  )
}

export default Sidenavbar
   
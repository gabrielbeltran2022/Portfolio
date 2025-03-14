import '../styles/navbar.css'
import NavBarMenu from "../subcomponents/NavbarMenu"
import { Link } from "react-router-dom";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef,useState } from "react"




const NavMenu = () => {

    let submenu = useRef()

    useGSAP(()=>{
    
        gsap.from(submenu.current,{
            y:-25,
            opacity:0,
            duration: .3,
            delay: .4,
           
            stagger: 0.5})

    })    


    const scrollSection = (title) =>{
         const element = document.getElementById(title);
        if(element){
            const marginTop = 0
            const scrollY = element.getBoundingClientRect().top + window.scrollY - marginTop
            window.scrollTo({top: scrollY,behavior: "smooth"});

        }
    }

    
  return (
    <>
            <div  className="subMenu" ref={submenu}>
           <div className='subMenu-item'>    
           <ul>
                {
                    NavBarMenu.map(({id,icon,title}) => (
                      
                        <li key={id} >
                             <Link  className="subMenlink" onClick={() => scrollSection(title)} >{icon}</Link>
                            
                        </li>
                     
                        
                    ))
                }
                     
           </ul>
                    
           </div>
       
         
       </div>
    </>
  )
}

export default NavMenu

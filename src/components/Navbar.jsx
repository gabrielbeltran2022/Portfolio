import NavBarMenu from "../subcomponents/NavbarMenu"
import '../styles/navbar.css'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef,useState } from "react"
import { Link } from "react-router-dom";


const Navbar = () => {
    let navigator = useRef()
 
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
            y:-100,
            opacity:0,
            duration:1,
            delay: 2,
           
            stagger: 0.5})

    })    



  return (
    <>
        <div ref={navigator} className="navigator">
         

          
            <ul  className="nav-list">
                {
                 
                    NavBarMenu.map(({id,title}) => (
                        <div className="navbar" key={id}>

                        
                        <li   onClick={() => scrollSection(title)}>
                            
                               <Link to='/' className="active" >{title}</Link>
                          
                        </li>
                        </div>
                    ))
                }
           </ul>
          
        </div>
    </>
  )
}

export default Navbar
   
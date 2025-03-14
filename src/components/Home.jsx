import '../styles/home.css'
import { useRef,useState,useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Navbar from './Navbar.jsx'
import SideBar from './SideBar.jsx'
import Banner from './Banner.jsx'
import About from './Aboutme.jsx'
import Other from './Other.jsx'
import Contact from './Contact.jsx'
import Details from './Details.jsx'
import myData from '../subcomponents/myData.jsx'
import subIcon from '../subcomponents/Icons.jsx'
import myDetails from '../subcomponents/myDetails.jsx'
import UserList from './UserList.jsx'
import Hobbies from './Hobbies.jsx'
import Sidenavbar from './Sidenavbar..jsx'
import NavbarMobile from './NavbarMobile.jsx'







const Home = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [navbarActive,setNavarActive] = useState(false)


    const handleClick = () =>{
        setNavarActive(!navbarActive)
        console.log(navbarActive)
    }

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Add event listener on mount
      window.addEventListener("resize", handleResize);
  
      // Cleanup listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);






    const [{id,name,address,contact,email,position,message,job}] = myData


    return (
        <>
        <div className='app-container'>
               {windowWidth < 970 ?(
                 <div className='mobile-Navbar' onClick={handleClick}>
                 <NavbarMobile />
       
                  </div>
                  
               )
               : 
                ( <div>
                    <div className='side-navbar'>
                        <Sidenavbar/>
                    </div>
                    <div className='app-navbar'>
                        <Navbar/>
                    </div>
                </div>
                )
               }
                   
             
            
          
               <div className='app'>
              
              
                <div id='Home' className='app-middle'>
                
                        <Banner name={name} position={position} message={message}  job={job} />
                </div>
                </div>
                    <div id='About' className='app-about' >
                                <About />
                    </div>
                    <div id='Info' className='app-other' >
                            <Details  item={myDetails} />
                            
                       
                    </div>
                     <div id='Others' className='app-hobbies' >
                            <Other />
                
                    </div> 
                      {windowWidth < 970 ?(
                  <div>
                  <div className='extra-div'>

                   </div>
                    <div id='Contacts' className='app-contact'>
                       <Contact icons={subIcon.icons}/> 
                   </div>
                     <div className='extra-div-2'>

                   </div>
                </div> 
               )
               : 
                (  <div id='Contacts' className='app-contact'>
                       <Contact icons={subIcon.icons}/> 
                   </div>
                )
               }
                  
        </div>
         


                {/* <div>
      <h1>User List</h1>
      <UserList users={userData} />
    </div> */}
             
        </>
      )
}

export default Home

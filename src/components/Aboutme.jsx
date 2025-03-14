import '../styles/aboutme.css'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import { useRef,useState } from 'react'
import { faL } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const Aboutme = (props) => {

   

    const [showDetail,setDetails] = useState(false)
    const [showDetailsSchool,setShowDetailsSchool] = useState(false)
    const [showIT,setIT] = useState(false)
    const [showTech,setTech] = useState(false)

    let aboutMe = useRef()
    let midTree = useRef()

    let rightTree1 = useRef()
    let rightTree = useRef()

    let rightTree2 = useRef()
    let rightTree3 = useRef()
    let rightTree4 = useRef()
    let rightTree5 = useRef()
    let rightTree6 = useRef()
    let rightTree7 = useRef()

    
    let leftTree = useRef()
    let leftTree1= useRef()
    
    let leftTree2 = useRef()
    let leftTree3 = useRef()

    let leftTree4 = useRef()
    let leftTree5 = useRef()

    let leftTree6 = useRef()
    let leftTree7 = useRef()
    
    
    useGSAP(() => {
     
     
      
        gsap.from(aboutMe.current,{
            y: -40,
            opacity:0,
            duration: 1,
            delay: .3,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.about-header',
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: 'restart complete none reverse'
            }
            
        })
        gsap.from(midTree.current,{
            y: -30,
            opacity:0,
            duration: .5,
            delay:  .4,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
                toggleActions: 'restart complete none reverse'
            }
        })

        gsap.from(rightTree1.current,{
            x: -4,
            opacity:0,
            duration: .5,
            delay:  .5,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
           
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(rightTree.current,{
            x: -4,
            opacity:0,
            duration: 1,
            delay:  .6,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
             
                toggleActions: 'restart complete none reverse'
            }
        })

        gsap.from(rightTree2.current,{
            x: -4,
            opacity:0,
            duration: 1,
            delay:  1,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
          
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(rightTree3.current,{
            x: -4,
            opacity:0,
            duration: 1,
            delay:  1.1,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
          
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(rightTree4.current,{
            x: -4,
            opacity:0,
            duration: 1,
            delay:  1.4,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
            
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(rightTree5.current,{
            x: -4,
            opacity:0,
            duration: 1,
            delay:  1.5,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
           
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(rightTree6.current,{
            x: -4,
            opacity:0,
            duration: 1,
            delay:  1.8,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
            
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(rightTree7.current,{
            x: -4,
            opacity:0,
            duration: 1,
            delay:  1.9,
            stagger: 1, scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
            
                toggleActions: 'restart complete none reverse'
            }
        })


        gsap.from(leftTree.current,{
            x: 1,
            opacity:0,
            duration: 1,
            delay:  .7,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
           
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(leftTree1.current,{
            x: 1,
            opacity:0,
            duration: 1,
            delay:  .9,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
              
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(leftTree2.current,{
            x: 1,
            opacity:0,
            duration: 1,
            delay:  1.2,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
             
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(leftTree3.current,{
            x: 1,
            opacity:0,
            duration: 1,
            delay:  1.3,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
          
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(leftTree4.current,{
            x: 1,
            opacity:0,
            duration: 1,
            delay:  1.6,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
         
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(leftTree5.current,{
            x: 1,
            opacity:0,
            duration: 1,
            delay:  1.7,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
        
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(leftTree6.current,{
            x: 1,
            opacity:0,
            duration: 1,
            delay:  2,
            stagger: 1, scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
   
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(leftTree7.current,{
            x: 1,
            opacity:0,
            duration: 1,
            delay:  2.1,
            stagger: 1,
            scrollTrigger: {
                trigger: '.tree',
                start: "top 100%",
                end: "bottom 60%",
                marker: true,
                toggleActions: 'restart complete none reverse'
            }
        })
        
    },[])

   function handleMouse(e){
    console.log(e.target)
    setDetails(true)
    document.getElementById('webdev-1').style.visibility = 'visible'
    document.getElementById('span-style').style.visibility = 'visible'
   
    
   }
   function handleMouseLeave(e){
    console.log(e.target)
    setDetails(false)
       document.getElementById('webdev-1').style.visibility = 'hidden'
       document.getElementById('span-style').style.visibility = 'hidden'
   }

   function showSchool(){
    setShowDetailsSchool(true)
     document.getElementById('span-style-1').style.visibility = 'visible'
    document.getElementById('webdev-2').style.visibility = 'visible'
   }

   function hideSchool(){
    setShowDetailsSchool(false)
     document.getElementById('span-style-1').style.visibility = 'hidden'
    document.getElementById('webdev-2').style.visibility = 'hidden'
   }


   function showITDetails(){
    setIT(true)
     document.getElementById('span-style-2').style.visibility = 'visible'
    document.getElementById('webdev-3').style.visibility = 'visible'
   }

   function hideITDetails(){
    setIT(false)
     document.getElementById('span-style-2').style.visibility = 'hidden'
    document.getElementById('webdev-3').style.visibility = 'hidden'
   }

   function showTechDetails(){
    setTech(true)
     document.getElementById('span-style-3').style.visibility = 'visible'
    document.getElementById('webdev-4').style.visibility = 'visible'
   }

   function hideTechDetails(){
    setTech(false)
     document.getElementById('span-style-3').style.visibility = 'hidden'
    document.getElementById('webdev-4').style.visibility = 'hidden'
   }


    return (
    <>
        <div className='about-me'>
            <div className='about-me-content'>
                
                <div className='about-me-title'>
                    <div className='about-header'>
                        <h1 ref={aboutMe}>About</h1>
                    </div>
                    <div className='about-details'>
                     
                        <div className='left-tree'>
                            <div className='brances-left'>
                                <div className='branches-left-1'>
                               
                                  <p ref={leftTree1} onMouseEnter={handleMouse} onMouseLeave={handleMouseLeave}>Xceler8 Technologies, Inc.</p>
                                    
                                  <span className='left-branch-span' ref={leftTree}></span>
                                </div>
                                <div className='branches-left-2'>
                                  <p ref={leftTree3} onMouseEnter={showSchool} onMouseLeave={hideSchool}>Zuitt Coding Bootcamp</p>
                                  <span className='left-branch-span' ref={leftTree2}></span>
                                </div>
                                <div className='branches-left-3'>
                                {/* <span id='span-style-2' className='span-style-css-1'></span>
                                <p id='webdev-3' className='webdev-10'>Infomation Technology</p> */}
                                  <p ref={leftTree5} onMouseEnter={showITDetails} onMouseLeave={hideITDetails}>Business Trends Philippines</p>
                                  <span className='left-branch-span' ref={leftTree4}></span>
                                </div>
                                <div className='branches-left-4'>
                                {/* <span id='span-style-3' className='span-style-css-2'></span>
                                <p id='webdev-4' className='webdev-11'>CCTV Technichian</p> */}
                                  <p ref={leftTree7} onMouseEnter={showTechDetails} onMouseLeave={hideTechDetails}>Migthy Lynx Solution, Inc</p>
                                  <span className='left-branch-span' ref={leftTree6}></span>
                                </div>
                            </div>
                        </div>
                        <div className='mid-tree'>
                            <div className='tree' ref={midTree}></div>
                        </div>
                        <div className='rigth-tree'>
                            
                            <div className='brances-right'>
                                
                                <div className='branches-right-1'>
                                  <p ref={rightTree}>2025</p>
                                  <span className='left-branch-span' ref={rightTree1}></span>
                                </div>
                                <div className='branches-right-2'>
                                  <p ref={rightTree3}>2022</p>
                                  <span className='left-branch-span' ref={rightTree2}></span>
                                </div>
                                <div className='branches-right-3'>
                                  <p ref={rightTree5}>2020</p>
                                  <span className='left-branch-span' ref={rightTree4}></span>
                                </div>
                                <div className='branches-right-4'>
                                  <p ref={rightTree7}>2017</p>
                                  <span className='left-branch-span' ref={rightTree6}></span>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Aboutme

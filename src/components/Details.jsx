import '../styles/details.css'
import Career from './Career'
import Education from './Education'
import Languange from './Languange';
import Hobbies from './Hobbies';
import { Link } from "react-router-dom";
import { useEffect, useRef,useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



const Details = ({item}) => {
    
    const [selectedItem, setSelectedItem] = useState(<Career/>);
    let btnDetails = useRef();
    let detailsContent = useRef();
    let mainContainer = useRef();

   useGSAP(() =>{
        gsap.from(btnDetails.current,{
            x: -45,
            opacity:0,
            duration: 1,
            delay: .2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.details-left-container',
                start: "top 80%",
                end: "bottom 5%",
               
                toggleActions: 'restart complete none reset'
            }
        })

        gsap.from(detailsContent.current,{
            x: 30,
            opacity:0,
            duration: 1,
            delay: .2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.details-left-container',
                start: "top 80%",
                end: "bottom 5%",
               
                toggleActions: 'restart complete none reset'
            }
        })
        gsap.from(mainContainer.current,{
            y: 50,
            opacity:0,
            duration: 1,
            delay: .5,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.details-left-container',
                start: "top 80%",
                end: "bottom 5%",
               
                toggleActions: 'restart complete none reverse'
            }
        })
   },[])


    const handleUserClick = (item) => {
     
     if(item.Id == 1){
        setSelectedItem(<Career/>)
     }else if(item.Id ==2){
        setSelectedItem(<Education/>)
     }else {
        setSelectedItem(<Languange/>)
     }
      
    };

    
    



    return (
    <>
        <div className='details-container'>
            <div className='details-left-container' ref={mainContainer}>
             <div className='details-left-list' ref={btnDetails}>
                <ul>
                    <li>
                                        {item.map((item) => (
                                <button
                                    key={item.Id}
                                    onClick={() => handleUserClick(item)}
                                    
                                >
                                    {item.title}
                                    
                                </button>
                                ))}
                                </li>
                   
                </ul>
             </div>
             <div className='details-right-container' >
                        <div ref={detailsContent}>
                        {selectedItem}
                        </div>
                        
            </div>
            </div>
           
        </div>
    </>
  )
}

export default Details

import '../styles/other.css'
import coding from '../assets/coding.png' 
import designing from '../assets/design.png'
import gym from '../assets/gym.png'  
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Other = () => {

    let others = useRef();
    let codingDiv = useRef();
    let designDiv = useRef();
    let workOutDiv = useRef()

    useGSAP(() =>{
        gsap.from(others.current,{
            y: -40,
            opacity:0,
            duration: .6,
            delay: .2,
            stagger: 0.5,
            scrollTrigger:{
                trigger: others.current,
                start: "top 85%",
                end: "bottom 5%",
          
                toggleActions: 'restart complete none reverse'
            }
        })

        gsap.from(codingDiv.current,{
            x: -40,
            opacity:0,
            duration: .9,
            delay: .4,
            stagger: 0.5,
            scrollTrigger:{
                trigger: codingDiv.current,
                start: "top 85%",
                end: "bottom 5%",
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(designDiv.current,{
            x: -70,
            opacity:0,
            duration: 1,
            delay: .5,
            stagger: 0.5,
            scrollTrigger:{
                trigger: designDiv.current,
                start: "top 85%",
                end: "bottom 5%",
            
                toggleActions: 'restart complete none reverse'
            }
        })
        gsap.from(workOutDiv.current,{
            x: -100,
            opacity:0,
            duration: 1.1,
            delay: .6,
            stagger: 0.5,
            scrollTrigger:{
                trigger: workOutDiv.current,
                start: "top 85%",
                end: "bottom 5%",
             
              
                toggleActions: 'restart complete none reverse'
            }
        })
    },[])

  return (
    <>
      
            <div className='other-content'>
                 <div className='other-title'>
                    <div className='other-header'>
                        <h1 className='others-name' ref={others}>Others</h1>
                    </div>
                    <div className='other-details'>
                        <div className='card-cotainer'>
                            <div  ref={codingDiv} className='card-2'>
                                <Card className='card-content-1'>
                                    <Card.Img variant="top" src={coding} className='card-image-1'/>
                                    <Card.Body className='card-body-1'>
                                    <Card.Title>Coding</Card.Title>
                                     </Card.Body>
                                </Card>
                            </div>
                            <div  ref={designDiv} className='card-2'>
                                <Card className='card-content-2'>
                                    <Card.Img variant="top" src={designing} className='card-image-2'/>
                                    <Card.Body className='card-body-2'>
                                    <Card.Title>Designing</Card.Title>
                                     </Card.Body>
                                </Card>
                            </div>
                            <div ref={workOutDiv} className='card-2'>
                                <Card className='card-content-2'>
                                    <Card.Img variant="top" src={gym} className='card-image-2'/>
                                    <Card.Body className='card-body-2'>
                                    <Card.Title>Work Out</Card.Title>
                                     </Card.Body>
                                </Card>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div> 
            
   
    
    </>
  )
}

export default Other

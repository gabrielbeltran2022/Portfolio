import '../styles/hobbies.css'
import react from '../assets/react-coding.png'
import Card from 'react-bootstrap/Card';

const Hobbies = () =>{
    return(
        <>
            <div className='hobbies-container'>
                    <div className='hobbies-header'>
                        <h1>Others</h1>
                    </div>
                    <div className='hobbies-section'>
                          <div className="hobbies-card">
                             <div class='hobbies-picture'>
                                <Card className='hobbies-content-1'>
                                    <Card.Img variant="top" src={react} />
                                    
                                </Card>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}


export default Hobbies
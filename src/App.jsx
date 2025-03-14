import Carreer from './components/Career'
import Education from './components/Education'
import About from './components/Aboutme';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Other from './components/Other';



function App() {

   



    return (
        <>
            <Router>
                     <Routes>
                         <Route path="/" element={<Home />} />
                  </Routes>
             </Router>
        </>        
        
  )
}

export default App

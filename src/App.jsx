import './App.css'
import Home from './components/Home'
import Location from './components/Location'
import Instructions from './components/InstructiontoRoutes'
import MyMap from './components/MyMap'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './components/Geocodes'



function App() {
  
  const navigation = useNavigate()

  return (

    
      <div>

        <Navbar   >

          <div style={{display:'flex', alignItems:'center', marginLeft:'-300px', marginTop:'-50px'}}>
            <img onDoubleClick={() => navigation('/')} alt='' src='src/assets/Medstat.png'  width="100px" />
            <h1>MedStart</h1>
          </div>

        </Navbar>

        
        
        
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/location' element={<Location />} />
          <Route path='/instructions' element={<Instructions />} />
          <Route path='/map' element={<MyMap />} />
        </Routes>
       
      </div>
      
  )
}

export default App

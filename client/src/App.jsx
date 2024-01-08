
//Hooks 
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

//imports generales 
import './App.css';
import axios from 'axios';

//importamos views 
import Landing from './Views/Landing Page/Landing';
import Home from './Views/Home page/Home';
import Detail from './Views/Detail page/Detail';
import Form from './Views/Form page/Form';

//importamos componentes
import Nav from './Components/Nav/Nav';
// axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.baseURL = 'pi-countries-back-production-e95c.up.railway.app/'
function App() {
  const [count, setCount] = useState(0)
  //instanciamos useLocation
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname!=="/" && <Nav></Nav>}
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/newActiviy' element={<Form/>}/>

      </Routes>
      

    </div>
  )
}

export default App

import { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Details from './Details'
function App() {

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path= '/signup' element= {<Signup />} ></Route>
      <Route path= '/login' element= {<Login />} ></Route>
      <Route path= '/details' element= {<Details />} ></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
